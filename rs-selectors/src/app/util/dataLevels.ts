import { ILevel, TypeOfLevel } from '../../types/types';

const dataLevels: ILevel[] = [
  {
    mainTitle: 'Select the cat',
    type: TypeOfLevel.TypeSelector,
    helpTitle: 'Select elements by their type',
    helpSyntax: 'A',
    helpInfo:
      'Selects all elements of type "cat".\n Type refers to the type of tag, so "div", "p" and "ul" are all different element types.',
    selector: 'cat',
    markup: `<div class="shelter">
    <humster/>
    <cat/>
    <dog/>
</div>
    `,
    isCompleted: 0,
  },
  {
    mainTitle: 'Select the dogs',
    type: TypeOfLevel.TypeSelector,
    helpTitle: 'Select elements by their type',
    helpSyntax: 'A',
    helpInfo:
      'Selects all elements of type "dog".\n Type refers to the type of tag, so "div", "p" and "ul" are all different element types.',
    selector: 'dog',
    markup: `<div class="shelter">
    <dog/>
    <cat/>
    <dog/>
</div>
    `,
    isCompleted: 0,
  },
  {
    mainTitle: 'Select the cat with bowl',
    type: TypeOfLevel.IdSelector,
    helpTitle: 'Select elements with an ID',
    helpSyntax: '#bowl',
    helpInfo: 'Selects the element with a specific id.\n You can also combine the ID selector with the type selector.',
    selector: '#bowl',
    markup: `<div class="shelter">
    <cat id="bowl"/>
    <cat/>
    <dog/>
</div>
    `,
    isCompleted: 0,
  },
  {
    mainTitle: 'Select the cat on the pillow',
    type: TypeOfLevel.DescendantSelector,
    helpTitle: 'Select an element inside another element',
    helpSyntax: 'A&nbsp;&nbsp;B',
    helpInfo:
      'Selects all "cat" inside of "pillow".\n "cat" is called a descendant because it is inside of another element "pillow".',
    selector: 'pillow cat',
    markup: `<div class="shelter">
    <pillow>
        <dog/>
    </pillow>
    <cat/>
    <pillow>
        <cat/>
    </pillow>
</div>
    `,
    isCompleted: 0,
  },
  {
    mainTitle: 'Select the small dogs',
    type: TypeOfLevel.ClassSelector,
    helpTitle: 'Select elements by their class',
    helpSyntax: '.classname',
    helpInfo:
      'The class selector selects all elements with that class attribute.\n Elements can only have one ID, but many classes.',
    selector: '.small',
    markup: `<div class="shelter">
    <cat/>
    <dog class="small"/>
    <dog/>
    <dog class="small"/>
</div>
    `,
    isCompleted: 0,
  },
  {
    mainTitle: 'Select all the dogs and cats',
    type: TypeOfLevel.CommaCombinator,
    helpTitle: 'Combine, selectors, with... commas!',
    helpSyntax: 'A, B',
    helpInfo:
      'Thanks to Shatner technology, this selects all "dog" and "cat" elements.\n You can combine any selectors this way, and you can specify more than two.',
    selector: 'dog,cat',
    markup: `<div class="shelter">
    <humster/>
    <dog/>
    <cat/>
    <humster/>
</div>
    `,
    isCompleted: 0,
  },
  {
    mainTitle: 'Select all the pets!',
    type: TypeOfLevel.UniversalSelector,
    helpTitle: 'You can select everything!',
    helpSyntax: '*',
    helpInfo: 'You can select all elements with the universal selector!',
    selector: '*',
    markup: `<div class="shelter">
    <cat id="bowl"/>
    <cat/>
    <dog class="small"/>
    <dog/>
    <humster/>
</div>
    `,
    isCompleted: 0,
  },
  {
    mainTitle: 'Select the dog directly on a pillow',
    type: TypeOfLevel.ChildSelector,
    helpTitle: 'Select direct children of an element',
    helpSyntax: 'A > B',
    helpInfo:
      'You can select elements that are direct children of other elements.\n A child element is any element that is nested directly in another element.\n Elements that are nested deeper than that are called descendant elements.',
    selector: 'pillow>dog',
    markup: `<div class="shelter">
    <dog class="small"/>
    <dog id="bowl"/>
    <dog/>
    <pillow>
        <dog/>
    </pillow>
</div>
    `,
    isCompleted: 0,
  },
  {
    mainTitle: 'Select the empty pillows',
    type: TypeOfLevel.EmptySelector,
    helpTitle: "Select elements that don't have children",
    helpSyntax: ':empty',
    helpInfo: "Selects elements that don't have any other elements inside of them.",
    selector: 'pillow:empty',
    markup: `<div class="shelter">
    <pillow>
        <cat/>
    </pillow>
    <pillow/>
    <pillow>
        <dog/>
    </pillow>
    <pillow/>
</div>
    `,
    isCompleted: 0,
  },
  {
    mainTitle: 'Select the first (from the left) humster',
    type: TypeOfLevel.FirstChild,
    helpTitle: 'Select a first child element inside of another element',
    helpSyntax: ':first-child',
    helpInfo:
      'You can select the first child element.\n A child element is any element that is directly nested in another element.\n You can combine this pseudo-selector with other selectors.',
    selector: '.shelter:first-child',
    markup: `<div class="shelter">
    <humster/>
    <humster/>
    <humster/>
</div>
    `,
    isCompleted: 0,
  },
];

export default dataLevels;
