import { StoreModule, combineReducers } from '@ngrx/store';

import { feedReducer, IFeed } from './feed/feed.reducer';
import { profileReducer, IProfile } from './profile/profile.reducer';
import { jobReducer, IJob } from './job/job.reducer';

import { EffectsModule } from '@ngrx/effects';
import { ProfileEffects } from './profile/profile.effects';
import { FeedEffects } from './feed/feed.effects';
import { JobEffects } from './job/job.effects';

export interface IAppState {
  feed: Array<IFeed>;
  profile: IProfile;
  job: IJob;
}

const combined = combineReducers({
  feed: feedReducer,
  profile: profileReducer,
  job: jobReducer
});

export const store = StoreModule.provideStore(combined);

export const effects = [
  EffectsModule.run(ProfileEffects),
  EffectsModule.run(FeedEffects),
  EffectsModule.run(JobEffects)
];
