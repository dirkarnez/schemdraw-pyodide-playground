[schemdraw-pyodide-playground](https://dirkarnez.github.io/schemdraw-pyodide-playground/)
=========================================================================================
### TODOs
- [ ] https://pyodide.org/en/stable/development/building-packages.html

### Prebuilts
- [prof-sky/simplipfy at 34a17db4c9077b47145fe1d1cf9f86165c6bd418](https://github.com/prof-sky/simplipfy/tree/34a17db4c9077b47145fe1d1cf9f86165c6bd418) 


```
%pip install schemdraw

import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt

import schemdraw
import schemdraw.elements as elm
with schemdraw.Drawing(file='schematic.svg') as d:
    elm.Resistor().label('100KΩ')
    elm.Capacitor().down().label('0.1μF', loc='bottom')
    elm.Line().left()
    elm.Ground()
    elm.SourceV().up().label('10V')


https://www.zeusnotebook.com/

https://github.com/joyceerhl/vscode-pyolite/tree/e889713825efb4204d833e5b28aaca845ad6bcbe
https://github.com/longern/FlareAgent/blob/fcf938771809c8a09f1d1d59bd44d0b4391d4962/src/python/worker.ts#L8
https://github.com/seahyinghang8/zeus-notebook
https://graasp.org/
https://github.com/Hickinvest/composer-quant-tools
https://github.com/mikeckennedy/talk-python-transcripts
https://github.com/veit/jupyter-tutorial
https://github.com/StructuredLabs/preswald
https://github.com/awesome-panel/examples
https://github.com/awesome-panel
https://github.com/awesome-panel/panel-chemistry
https://github.com/veit/jupyter-tutorial
```
