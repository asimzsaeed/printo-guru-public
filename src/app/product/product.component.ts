import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
let paperSize  = require('../app.constants.json').paper_size;
let paperTypes = require('../app.constants.json').paper_types;
let printedSides  = require('../app.constants.json').printed_sides;
let serviceType = require('../app.constants.json').service_type;
let products  = require('../app.constants.json').products;
let finishTypes = require('../app.constants.json').finish_types;

let currencyToUsed = require('../app.constants.json').currency;

declare var jQuery:any;

import { Store } from '@ngrx/store';
import { JOB_ADD } from '../store/job/job.actions';
import { IAppState } from '../store';


@Component({
    selector: 'app-product',
    templateUrl: 'product.component.html',
    styleUrls: ['product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy{
    id: string;
    private sub: any;
    product:any;
    job:any;
    available_size:any;
    printed_sides:any;
    service_type:any;
    finish_types:any;
    paper_types:any;
    pricing:any;
    currency:any;
    own_design:any;
    uploadArtwork:boolean;

    @ViewChild('productcontainer') creativebanner: ElementRef;
    constructor(private route: ActivatedRoute, public store: Store<IAppState>) {
        this.uploadArtwork = false;
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.id = params['id'];
            this.product = products.find(product => product.id == this.id);
            this.available_size = paperSize.find(p_size => p_size.type === this.product.type).sizes;

            //paper type for the product
            this.paper_types = paperTypes.map(x => {
                if(this.product.configuration.paper_types.indexOf(x.id) !== -1)
                    return x;
            });

            //printed side for the product
            this.printed_sides = printedSides.map(x => {
                if(this.product.configuration.printed_sides.indexOf(x.id) !== -1)
                    return x;
            });

            //finished types
            this.finish_types = finishTypes.map(x => {
                if(this.product.configuration.finish_types.indexOf(x.id) !== -1)
                    return x;
            });

            this.service_type = serviceType;
            this.pricing = this.product.configuration.pricing;
            this.currency = currencyToUsed;
            this.own_design = true;

            this.job = {};
            this.job.type = this.product.type;
            this.job.size = this.product.size;
            this.job.paper_type = this.paper_types[0];
            this.job.printed_side = this.printed_sides[0];
            this.job.service_type = this.service_type[0];
            this.job.finish_type = this.finish_types[0];
            this.job.pricing = this.pricing.find(p => p.default);
            this.job.own_design = this.own_design;
            this.job.design_price = this.product.configuration.design.price;
            this.job.addOnsPrice = 0;

        });

       /* jQuery("#gallery_01").owlCarousel({
            autoPlay: false,
            slideSpeed: 2000,
            items: 4,
            pagination: true,
            navigation: false,
            itemsDesktop: [1199, 4],
            itemsDesktopSmall: [979, 3],
            itemsTablet: [768, 2],
            itemsMobile: [480, 3]
        });*/

        jQuery("#zoom_03").elevateZoom({
            constrainType: "height",
            zoomType: "lens",
            containLensZoom: true,
            gallery: 'gallery_01',
            cursor: 'pointer',
            galleryActiveClass: "active"
        });

        //pass the images to Fancybox
        jQuery("#zoom_03").bind("click", function(e) {
            var ez = jQuery('#zoom_03').data('elevateZoom');
            jQuery.fancybox(ez.getGalleryList());
            return false;
        });
    }

    toCheckout(): void {
        this.store.dispatch({
            type: JOB_ADD,
            payload: this.prepareJobData()
        })
    }

    addToBasket(): void {
        this.uploadArtwork = true;
    }

    private prepareJobData = () => {
       return  {
            type: this.job.type,
            size: this.job.size,
            paper_type: this.job.paper_type.id,
            printed_side: this.job.printed_side.id,
            service_type: this.job.service_type.id,
            finish_type: this.job.finish_type.id,
            pricing: this.job.pricing.pricing,
            own_design: this.job.own_design,
            design_price: this.job.design_price,
            addOnsPrice : this.job.addOnsPrice
        }
    };

    public setJobType = (jobType) => {
        if (this.job.type === jobType) return;
        this.job.type = jobType;

        //reset available size for the product
        let availableSize;
        availableSize = paperSize.find(p_size => p_size.type === jobType);
        this.available_size = availableSize && availableSize.sizes;
        this.getJobAddOnPrice();
    };

    public setJobSize = (jobSize) => {
        if (this.job.size === jobSize) return;
        this.job.size = jobSize;
        this.getJobAddOnPrice();
    };

    public setJobPaperType = (jobPaperType) => {
        if (this.job.paper_type === jobPaperType) return;
        this.job.paper_type = jobPaperType;
        this.getJobAddOnPrice();
    };

    public setJobPrintedSide = (jobPrintedSide ) => {
        if (this.job.printed_side === jobPrintedSide) return;
        this.job.printed_side = jobPrintedSide;
        this.getJobAddOnPrice();
    };

    public setJobServiceType = (jobServiceType) => {
        if (this.job.service_type === jobServiceType) return;
        this.job.service_type = jobServiceType;
        this.getJobAddOnPrice();
    };

    public setJobFinishType = (jobFinishType) => {
        if (this.job.finish_type === jobFinishType) return;
        this.job.finish_type = jobFinishType;
        this.getJobAddOnPrice();
    };

    public setJobDesign = (jobDesign) => {
        if (this.job.own_design === jobDesign) return;
        this.job.own_design = jobDesign;
        this.getJobAddOnPrice();
    };

    public setJobQuantity = (jobQuantity) => {
        if (this.job.pricing === jobQuantity) return;
        this.job.pricing = jobQuantity;
        this.getJobAddOnPrice();
    };

    public getJobPaperType = (jobPaperType) => {
        return paperTypes.find(x=> x.id === jobPaperType.id).name
    };
    
    public getJobFinishType = (jobFinishType) => {
        return finishTypes.find(x=> x.id === jobFinishType.id).name
    };
    public getJobDesign = (jobDesign) => {
       return (jobDesign ? "Provided" : "Design Required");
    };
    public getJobTotalCost = () => {
        return this.job.pricing.price  +  this.job.addOnsPrice;
    };

    public getJobAddOnsPriceByQuanity = (add_on) => {
       return  this.calculateJobAddOnsPrice(add_on)
    };

    public calculateJobAddOnsPrice = (add_on) => {
        let addOnsPrice = [];

        //JobDesign  addOn
        if(!this.job.own_design) {
            addOnsPrice.push(add_on.artwork_cost)
        }
        //JobPaperType addOn
        if(this.job.paper_type) {
            addOnsPrice.push(add_on[this.job.paper_type.id])
        }
        //JobPrintedSide  addOn
        if(this.job.printed_side) {
            addOnsPrice.push(add_on[this.job.printed_side.id])
        }
        //JobServiceType  addOn
        if(this.job.service_type) {
            addOnsPrice.push(add_on[this.job.service_type.id])
        }
        //JobFinishType  addOn
        if(this.job.finish_type) {
            addOnsPrice.push(add_on[this.job.finish_type.id])
        }
        return addOnsPrice.reduce((sum, current) => (sum + current), 0);
    };

    public getJobAddOnPrice = () => {
        this.job.addOnsPrice =  this.calculateJobAddOnsPrice(this.job.pricing.add_on);
    };

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
