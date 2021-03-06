<xsl:stylesheet version="1.0"
     xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

   <xsl:template match="/">

               <ul class="submenu">
                   <xsl:for-each select="submenu/categoria">
                    <li>
                        <xsl:attribute name="value"><xsl:value-of select="icono"/></xsl:attribute>
                        <xsl:value-of select="titulo"/>
                    </li>
                   </xsl:for-each>
                </ul>

   </xsl:template>
</xsl:stylesheet>

