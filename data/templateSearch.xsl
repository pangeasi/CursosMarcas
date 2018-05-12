<xsl:stylesheet version="1.0"
     xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

   <xsl:template match="/">
        <ul id="list">
            <xsl:for-each select="cursos/curso">
                <li>
                    <xsl:attribute name="style" >
                        background-image: url(<xsl:value-of select="img"/>);
                        background-repeat: no-repeat;
                        background-position: center;
                        background-size: cover;
                    </xsl:attribute>
                    <h3 class="title"><xsl:value-of select="titulo"/></h3>
                </li>
            </xsl:for-each>
        </ul>
   </xsl:template>

</xsl:stylesheet>