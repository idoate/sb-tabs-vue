import TabComponent from './TabComponent.vue';

export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Tarefa/Tab',
    component: TabComponent,
};

//👇 We create a “template” of how args map to rendering
const Template = (args, { argTypes }) => ({
    components: { TabComponent },
    props: Object.keys(argTypes),
    template: '<TabComponent v-bind="$props" />',
});

//👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = {
    tabName: 'Tab1',
    tabText: 'texto do tab 1'
};
export const Second = Template.bind({});
Second.args = {
    tabName: 'Tab2',
    tabText: 'texto do tab 2'
};