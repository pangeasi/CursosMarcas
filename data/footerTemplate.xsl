<xsl:stylesheet version="1.0"
     xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

   <xsl:template match="/">

               <ul class="footerList">
                   <xsl:for-each select="rrss/item">
                    <li>
                        <xsl:attribute name="value"><xsl:value-of select="icono"/></xsl:attribute>
                        <a>
                        <xsl:attribute name="href"><xsl:value-of select="link"/></xsl:attribute>

                            <xsl:value-of select="titulo"/>
                        </a>
                        

                    </li>
                   </xsl:for-each>
                </ul>
               
                <div class="vl"></div>
            
                <ul>
                    <li><a href="http://danilab.es">¿Quienes somos?</a></li>
                    <li><a href="http://danilab.es">Soporte</a></li>
                    <li><a href="http://danilab.es">Blog</a></li>
                    <li>Empleo</li>
                    <li>Convierte en instructor</li>
                </ul>

   </xsl:template>
</xsl:stylesheet>

