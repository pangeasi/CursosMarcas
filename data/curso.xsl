<xsl:stylesheet version="1.0"
     xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

   <xsl:template match="/">
        <ul>
            <xsl:for-each select="cursos/curso">
                <li class="cursoli">

                    <xsl:attribute name="value">
                        <xsl:value-of select="categoria"/>
                    </xsl:attribute>

                        <h1 class="reg titulo"><xsl:value-of select="titulo"/></h1>
                        <div class="secondBlock">
                            <h3 class="reg"><xsl:value-of select="descripcion"/></h3>
                            <h3 class="reg">Impartido por <xsl:value-of select="profesor"/></h3>
                            <h3 class="reg"><xsl:value-of select="horas"/> horas</h3>
                            <h3 class="reg precio"><xsl:value-of select="precio"/> €</h3> 
                        </div>


                        <div class="reg imageCurso">
                            <xsl:attribute name="style">
                                background-image: url(../<xsl:value-of select="img"/>);
                                background-repeat: no-repeat;
                                background-position: center;
                                background-size: cover;
                            </xsl:attribute>
                        </div>
                </li>
            </xsl:for-each>
        </ul>
   </xsl:template>
</xsl:stylesheet>
