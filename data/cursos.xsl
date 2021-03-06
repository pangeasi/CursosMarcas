<xsl:stylesheet version="1.0"
     xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

   <xsl:template match="/">
        <ul class="curso">
            <xsl:for-each select="cursos/curso">
                <li>
                    <xsl:attribute name="style" >
                        background-image: url(../<xsl:value-of select="img"/>);
                        background-repeat: no-repeat;
                        background-position: center;
                        background-size: cover;
                    </xsl:attribute>
                    <xsl:attribute name="value">
                        <xsl:value-of select="categoria"/>
                    </xsl:attribute>
                        <h3 class="title"><xsl:value-of select="titulo"/></h3>
                        <h4 class="precio"><xsl:value-of select="precio"/> €</h4>  
                </li>
            </xsl:for-each>
        </ul>
   </xsl:template>
</xsl:stylesheet>
