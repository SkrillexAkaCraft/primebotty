uniform sampler2D texture1;
uniform sampler2D texture2;
uniform float value;
uniform float alpha;

void main()
{
  vec4 texel0 = texture2D(texture1, gl_TexCoord[0].xy);
  
  gl_TexCoord[1].xy = (gl_TexCoord[1].xy);
  gl_TexCoord[1].x -= value;
  
  vec4 texel1 = texture2D(texture2, gl_TexCoord[1].xy );
  texel1.a *= 0.7;
  
  vec4 scaledColor = texel0 * vec4( 0.3, 0.59, 0.11, 0 );
  float luminance = scaledColor.r + scaledColor.g + scaledColor.b;
  vec4 texelbw = vec4(luminance, luminance, luminance, texel0.a);
  
  gl_FragColor = mix(texelbw, texel1, texel0.a * texel1.a);
}