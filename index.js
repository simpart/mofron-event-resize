/**
 * @file mofron-event-resize/index.js
 * @author simpart
 */
const mf = require('mofron');
/**
 * @class mofron.event.Resize
 * @brief resize event class for component
 */
mf.event.Resize = class extends mf.Event {
    
    constructor (po) {
        try {
            super();
            this.name('Resize');
            this.prmMap('handler');
            this.prmOpt(po);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * add resize event to target component.
     */
    contents (tgt_dom) {
        try {
            let rsiz = this;
            const rsiz_obs = new ResizeObserver(
                (ent) => {
                    try {
                        if (true === rsiz.isInit()) {
                            return;
                        }
                        for (let eidx in ent) {
                            if (tgt_dom.attr("id") === ent[eidx].target.getAttribute('id')) {
                                rsiz.execHandler();
                            }
                        }
                    } catch (e) {
                        console.error(e.stack);
                        throw e;
                    }
                }
            );

            rsiz_obs.observe(tgt_dom.getRawDom());
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    isInit () {
        try {
            if (undefined === this.m_init_flg) {
                this.m_init_flg = false;
                return true;
            }
            return this.m_init_flg;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mf.event.Resize;
/* end of file */
