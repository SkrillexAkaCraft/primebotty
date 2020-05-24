uniform sampler2D texture1;
uniform sampler2D texture2;
uniform float value;
uniform float alpha;

void main()
{
  vec4 texel0 = texture2D(texture1, gl_TexCoord[0].xy);
  
  gl_TexCoord[1].xy = (gl_TexCoord[1].xy) / 4;
  gl_TexCoord[1].y += value;
  
  vec4 texel1 = texture2D(texture2, gl_TexCoord[1].xy );
  
  
  gl_FragColor = mix(texel0, texel1, texel0.a * alpha);
}