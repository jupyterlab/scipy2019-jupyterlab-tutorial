## Attached markdown document to a console. 


Right-click somewhere on this document and click `"Create console for editor"`.
You will be prompted to select a kernel (new or existing). 

Now that this is done, the current or _fenced block_,  _selection_ or _line_ will be sent to the console and executed when you press `Shift Enter`.

# Iris dataset

Let's learn some Pandas. First import `pandas`, it is common to alias to the shorter name `pd`. 

```
import pandas as pd
```

Pandas provides some nice utilities function to load csv datasets:

```
df = pd.read_csv('../data/iris.csv')
```

enable inline plotting with `%matplotlib` magic function:

```
%matplotlib inline
```

```
df.plot.scatter('sepal_width', 'sepal_length')
```

# Categorical

Here we are going to make use of an **IPython** extension – not a jupyter extension – which attempt to reload code from your libraries when they are modified. It is important to work with code in libraries and classic python files to be able to _reuse_ and _publish_ them.


Execute the followign block of code once:

```
%load_ext autoreload
%autoreload 1
%aimport lib
```

Now let's try to plot the same graph but with each dot colors depending on the species. 

```
df = pd.read_csv('../data/iris.csv')
lib.categorify(df, 'species')
df.plot.scatter('sepal_width', 'sepal_length', c='species', colormap='viridis')
```

As you can see there is a bug in out file `lib.py`, open the file and try to correct the bug.

Re-run the above code snippet; the `lib.categorify` function now works; you did not have to restart your kernel.