# Scipy 2019 JupyterLab tutorial

This repository contain material and instructions to follow the JupyterLab tutorial during Scipy 2019.

During the tutorial, feel free to get on the [Gitter `jupyterlab/jupyterlab` channel](https://gitter.im/jupyterlab/jupyterlab) for help and updates.

<!--
If you'd like to use JupyterLab without installing anything, you can go to the [JupyterLab demo Binder](https://mybinder.org/v2/gh/jupyterlab/jupyterlab-demo/c9df996a3bd27d9715de6da51b3c52d35def90f9?urlpath=lab/). You can then open a terminal and clone this repo with:
```
git clone https://github.com/jupyterlab/scipy2019-jupyterlab-tutorial.git
```
-->

# Installation

**IMPORTANT:** We will be using JupyterLab 1.0, which we plan to release by the end of June 2019. Please follow the installation instructions below *after* July 1, 2019.

Please read the following section and install the required software ahead of
time. We may ask you to update versions of the software more closely to the
tutorial date.

Please do not rely on cloud hosting to follow this tutorial, as the network
connection may be unreliable. If possible, come to the tutorial with a computer
where you have administrative privileges.

For this tutorial, we are standardizing on a conda-based python distribution
(miniconda or Anaconda). We may not be able to help with installation issues if
you are using a different python distribution.

## Software installation

1. Install either the full [anaconda
   distribution](https://www.anaconda.com/download/) (very large, includes lots
   of conda packages by default) or
   [miniconda](https://conda.io/miniconda.html) (much smaller, with only
   essential packages by default, but any conda package can be installed).

2. To get the tutorial materials, clone this repository. **Please plan to update the materials shortly before the tutorial.**

    ```
    git clone https://github.com/jupyterlab/scipy2019-jupyterlab-tutorial.git
    ```

    To update the materials:
    ```
    cd scipy2019-jupyterlab-tutorial
    git pull
    ```

    Feel free to open an issue or send a pull request to update these materials if things are unclear.

3. Set up a new environment. **Please do this after July 1, 2019**

    Create a new conda environment for this tutorial:

    ```
    conda create -n jlabtutorial -c conda-forge --override-channels --yes python=3.7 pip cookiecutter notebook pandas=0.24 nodejs jupyterlab ipywidgets matplotlib tornado=5
    ```

    (You could instead create the environment from the supplied environment file with `conda env create -f scipy2019-jupyterlab-tutorial/environment.yml`)

    Activate the conda environment:

    ```
    conda activate jlabtutorial
    ```

    Install extra JupyterLab extensions:

    ```
    jupyter labextension install @jupyter-widgets/jupyterlab-manager @jupyterlab/geojson-extension @jupyterlab/toc
    ```

If you open multiple terminal windows make sure to activate the environment in each of them. Your terminal prompt should be preceded by the name of the current environment, for example:
```
(jlabtutorial) ~/scipy2019-jupyterlab-tutorial $
```


## Starting JupyterLab

Enter the following command in a new terminal window to start JupyterLab.

```
$ jupyter lab
```

## Removing environment

You can delete the environment by using the following in a terminal prompt.

```
conda env remove --name jlabtutorial --yes
```

This will **not** delete any data, but only the conda environement named `jlabtutorial` .

# Optional packages

We are demonstrating a few packages not installed in the above lists. These are
optional, and not required for the exercises in this tutorial.

To install these, first activate the tutorial environment:

```
conda activate jlabtutorial
```

Then install the python packages:
```
conda install -c conda-forge --override-channels bqplot ipyleaflet ipympl ipyvolume pythreejs
pip install sidecar
```

and install the JupyterLab extensions:
```
jupyter labextension install bqplot jupyter-leaflet ipyvolume jupyter-threejs @jupyter-widgets/jupyterlab-sidecar jupyterlab-drawio
```

# Troubleshooting

If you experience an out-of-memory error, you can increase the memory available:
```
NODE_OPTIONS=--max_old_space_size=4096 jupyter lab build
```
or
```
NODE_OPTIONS=--max_old_space_size=4096 jupyter labextension install ...
```
This increases the available memory for the build process to 4Gb.
