/**
 * Created by asimz on 07/01/2017.
 */
import { Action, ActionReducer } from '@ngrx/store';
import { JOB_ADD_SUCCESS} from './job.actions';

export interface IJob {
    id: string;
    type: string;
    size: string;
    paper_type: string;
    printed_side: string;
    service_type: string;
    finish_type: string;
    pricing: string;
    own_design: boolean;
    design_price: number;
    addOnsPrice : number;
    status:string;
    createdBy:string;
    createdDate:string;
}

export const jobReducer: ActionReducer<IJob> = (state: IJob, action: Action): IJob => {
    switch (action.type) {

        case JOB_ADD_SUCCESS:
            return Object.assign({}, action.payload);

        default:
            return state;
    }
};
