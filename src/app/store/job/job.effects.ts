/**
 * Created by asimz on 07/01/2017.
 */
import { Effect, Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

import {JOB_ADD, JOB_ADD_FAIL, JOB_ADD_SUCCESS} from './job.actions';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class JobEffects {

    @Effect()
    addProduct$ = this.actions$
        .ofType(JOB_ADD)
        .switchMap((action: Action) => {

            return this.http.post('/api/job', action.payload)
                .catch(() => Observable.of(({ type: JOB_ADD_FAIL })))
                .map((response: Response) => response.json())
                .map((response) => ({type: JOB_ADD_SUCCESS, payload: response}));

        });
    constructor(private actions$: Actions, private http: Http) {}
}
