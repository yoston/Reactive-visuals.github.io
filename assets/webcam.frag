precision mediump float;

// lets grab texcoords just for fun
varying vec2 vTexCoord;

// our texture coming from p5
uniform sampler2D tex0;
uniform float low;
uniform float time;
//uniform float mid;

#define pi 3.14159265359

float def(vec2 uv, float f){
    vec2 p = vec2(0.5) - uv;
    
    float rad = length(p)*1.0;
    
    float ang = atan(p.x, p.y);
    
    float e = sin(rad*pi*2.0+time+sin(ang*10.0)*0.5 + sin(rad*pi*10.0 )) *5.0;
    e = abs(e);
    e = sin(e + 20.0*ang + f);
    return e;
}

void main() {

  vec2 uv = -1.0 + 2.0 * vTexCoord;
  // the texture is loaded upside down and backwards by default so lets flip it
  //uv = 1.0 - uv;
  vec2 uv2 = uv;

  float e = def(uv, 0.0);

  float r = e+1.0;
  float g = e*1.0*cos(time*2.0)*0.7;
  float b = e*sin(time*3.0)*0.5;

  float inCircle = 1.0 - step((low * 5.0) + 0.4, length(uv));

  uv.y += sin(uv.x + time) * inCircle;
  uv.x = mod(uv.x, 0.01);

  float col = mod(uv.y, 0.1);
    
  col += (abs(uv.y * 0.5) - 0.75)/low*0.75*sin(time*uv2.x*(0.05 - (low*0.1))) * inCircle * (sin(time * 20.0));
    
  col += (mod(uv.y, 0.4))/low*0.75*sin(time*uv2.x*(0.05-(low*0.1)));
    
  

  // to pixelate an image we need to alter our uvs so that instead of being a smooth gradient it steps from one color to the next
  // in order to do this we will use the floor function
  // floor will round a float down to the nearest int, so 4.98 would become 4.0, and -37.2 would become -37.0
  // first the uv's are multipled times a tiles variable
  float tiles = low;
  //float tiles = 100.0;
  uv = uv * tiles;

  // second the uvs are rounded down to the nearest int
  uv = floor(uv);

  // lastly we divide by tiles again so that uvs is between 0.0 - 1.0
  uv = uv / tiles;

  // often times in glsl you will see programmers combining many operation onto one line.
  // the previous three steps could have also been written as uv = floor( uv * tiles ) / tiles

  // get the webcam as a vec4 using texture2D and plug in our distored uv's
  vec4 tex = texture2D(tex0, uv);

  // output the texture
  //gl_FragColor = tex * vec4(r, g, b, 0.5);
  gl_FragColor = vec4((col* - low) + 1.0, (col* - low) + 0.5, col - low, 1.0);

  // if you'd like a debug view of what the uv's look like try running this line
  // gl_FragColor = vec4(uv.x, uv.y, 0.0, 1.0);
}

