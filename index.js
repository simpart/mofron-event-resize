/**
 * @file mofron-event-resize/index.js
 * @author simpart
 */

/**
 * @class mofron.event.Resize
 * @brief resize event class for component
 */
mofron.event.Resize = class extends mofron.Event {
    
    constructor (po, p2) {
        try {
            super();
            this.name('Resize');
            this.prmOpt(po, p2);
            this.m_init_flg = true;
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
                                rsiz.handler()[0](rsiz.handler()[1]);
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
            if (true === this.m_init_flg) {
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
module.exports = mofron.event.Resize;
/* end of file */
