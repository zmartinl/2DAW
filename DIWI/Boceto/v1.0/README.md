# EXPLICACION DE LA VERSION 1

# Enunciado. Haz que el 1 div este position absolute y el 2 div este fixed posicionado encima del 1 div.

Con el primer div que es position absolute esta respecto al body ya que no tiene un padre con posicion relative.

Con el segundo div que es position fixed esta respecto al body al igual que el primer div.

Diferencias: 
    - Absolute si tiene un padre relative se posiciona respecto a su padre y su hueco que queda no se ocupa.
    - Fixed siempre es respecto al body da igual si tiene un padre relative.

Las 2 posiciones son iguales si no tiene el div del position absolute un padre relative las 2 se posicionan segun el body.