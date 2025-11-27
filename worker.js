importScripts("https://cdn.jsdelivr.net/pyodide/v0.24.1/full/pyodide.js");


const getPyodidePromise = (() => {
   let pyodide;
   
   return stdout => new Promise(res => {
      if (!!pyodide) {
         console.log("already");
         res(pyodide);
       } else {
         loadPyodide({
           fullStdLib: true,
           stdout: stdout
         })
         .then(_pyodide => {
           console.log(`just now ${!!pyodide ? "overriding..." : "new"}`);
           pyodide = _pyodide;
         })
         .then(() => pyodide.loadPackage("scipy"))
         .then(() => pyodide.loadPackage("sympy"))
         .then(() => pyodide.loadPackage("micropip"))
         .then(() => pyodide.loadPackage("matplotlib"))
         .then(() => pyodide.pyimport("micropip"))
         .then(micropip => { 
            console.log("micropip is ready");
            return micropip.install("schemdraw")
         })
         .then(() => res(pyodide));
       }
   })
})();
   

onmessage = function(e) {
  const data = e.data[0];
  if (!data) {
    postMessage('Please input');
  } else {
     getPyodidePromise(msg => postMessage(msg))
     .then(pyodide => {
        pyodide.runPython(data);
      })
  }
}
