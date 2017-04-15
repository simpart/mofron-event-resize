/**
 * @file mofron-event-resize/index.js
 * @author simpart
 */

/**
 * @class mofron.event.Resize
 * @brief resize event class for component
 */
mofron.event.Resize = class extends mofron.Event {
    
    constructor (fnc, prm) {
        try {
            super();
            this.name('Resize');
            
            if ('object' === fnc) {
                this.prmOpt(fnc);
            } else {
                this.handler(fnc, prm);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * add resize event to target component.
     */
    eventConts (tgt_dom) {
        try {
            var evt_func = this.handler();
            tgt_dom.getRawDom().addEventListener(
                'resize',
                () => {
                    try {
                        if (null != evt_func[0]) {
                            evt_func[0](evt_func[1]);
                        }
                    } catch (e) {
                        console.error(e.stack);
                        throw e;
                    }
                },
                false
            );
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.event.Resize;
