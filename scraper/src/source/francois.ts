import { HTMLSource } from '../types/source'

export default class Francois extends HTMLSource {
    public url = 'https://www.francois-et-francois-immobilier.com/achat'
    public resultSelector = '#biens-ls > .row.panel.panel-default'

    public resultAttributes = [
        { type: 'name', selector: '.panel-body h2' },
        { type: 'description', selector: '.panel-body .text-justify' },
        { type: 'size', selector: '.panel-body .text-justify' },
        { type: 'link', selector: 'a' },
        { type: 'price', selector: '.panel-body .text-right' },
        { type: 'photo', selector: '.bien-pic' }
    ]
}
