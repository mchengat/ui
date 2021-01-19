import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({
  pipelineService: service('pipeline'),
  buildsLink: computed('pipelineService.buildsLink', function getBuildLink() {
    return this.get('pipelineService.buildsLink');
  }),
  classNames: ['row']
});
