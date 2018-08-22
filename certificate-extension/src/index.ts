import { IRenderMime } from '@jupyterlab/rendermime-interfaces';


import { JSONObject } from '@phosphor/coreutils';


import { Widget } from '@phosphor/widgets';

import '../style/index.css';

/**
 * The default mime type for the extension.
 */
const MIME_TYPE = 'application/vnd.jupyterlab.certificate';

/**
 * The class name added to the extension.
 */
const CLASS_NAME = 'mimerenderer-certificate';

/**
 * A widget for rendering certificate.
 */
export class OutputWidget extends Widget implements IRenderMime.IRenderer {
  /**
   * Construct a new output widget.
   */
  constructor(options: IRenderMime.IRendererOptions) {
    super();
    this._mimeType = options.mimeType;
    this.addClass(CLASS_NAME);
  }

  /**
   * Render certificate into this widget's node.
   */
  renderModel(model: IRenderMime.IMimeModel): Promise<void> {
    
    let data = model.data[this._mimeType] as JSONObject;
    // this.node.textContent = JSON.stringify(data);
    let given = data['given'];
    let event = data['event'];

    this.node.innerHTML = `
<div class="certificate">
  <div class="paper">
    <div class="title">Certificate</div>
    <div class="text">${given}</div>
    <div class="text">For mastery of JupyterLab</div>
    <div class="text">${event}</div>
  </div>
  <div class="medal"></div>
  <div class="ribbon ribbon1"></div>
  <div class="ribbon ribbon2"></div>
</div>
`
    return Promise.resolve();
  }

  private _mimeType: string;
}

/**
 * A mime renderer factory for certificate data.
 */
export const rendererFactory: IRenderMime.IRendererFactory = {
  safe: true,
  mimeTypes: [MIME_TYPE],
  createRenderer: options => new OutputWidget(options)
};

/**
 * Extension definition.
 */
const extension: IRenderMime.IExtension = {
  id: 'certificate-extension:plugin',
  rendererFactory,
  rank: 0,
  dataType: 'json',
  fileTypes: [
    {
      name: 'certificate',
      mimeTypes: [MIME_TYPE],
      extensions: ['.cert']
    }
  ],
  documentWidgetFactoryOptions: {
    name: 'Certificate',
    primaryFileType: 'certificate',
    fileTypes: ['certificate'],
    defaultFor: ['certificate']
  }
};

export default extension;
