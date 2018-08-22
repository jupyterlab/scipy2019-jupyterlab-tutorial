# certificate-extension

A JupyterLab extension for rendering certificate files.

## Prerequisites

* JupyterLab

## Installation

```bash
jupyter labextension install certificate-extension
```

## Development

For a development install (requires npm version 4 or later), do the following in the repository directory:

```bash
npm install
jupyter labextension link .
```

To rebuild the package and the JupyterLab app:

```bash
npm run build
jupyter lab build
```

## Example file. 

The extension renders a `.cert` file that has the following JSON format:
```
{
  "given": "My Name",
  "event": "Event"
}
```
