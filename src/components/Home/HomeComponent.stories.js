

import HomeComponent from './HomeComponent.vue';
import TabComponent from '../Tab/TabComponent.vue';

//👇 Imports a specific story from ListItem stories
// import { Unchecked } from './TabComponent.stories';

export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Tarefa/Home',
    component: HomeComponent,
};

const HomeTemplate = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { HomeComponent, TabComponent },
    setup() {
        return { args };
    },
    template: `
    <HomeComponent v-bind="$props">
          <div v-for="tab in tabs" :key="tab.index">
              <TabComponent :key = "tab.index"
                            :tab-name = "tab.name"
                            :tab-text = "tab.text" />
          </div>
    </HomeComponent>
  `,
});

export const Empty = HomeTemplate.bind({});
Empty.args = {
    tabs: [],
};

export const AllItems = HomeTemplate.bind({});
AllItems.args = {
    tabs: [
        {
            name: 'tab 1',
            text: 'Texto do primeiro tab',
            index: 0
        },
        {
            name: 'tab 2',
            text: 'Texto do segundo tab',
            index: 1,
        },
        {
            name: 'tab 3',
            text: 'Texto do terceiro tab',
            index: 2,
        },
        {
            name: 'tab 4',
            text: 'Texto do quarto tab',
            index: 3
        }
    ]
}
