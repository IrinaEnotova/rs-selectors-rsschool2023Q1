import { ILevel, TypeOfLevel } from '../../types/types';

const dataLevels: ILevel[] = [
  {
    mainTitle: 'Select the cat',
    type: TypeOfLevel.TypeSelector,
    helpTitle: 'Select elements by their type',
    helpSyntax: 'A',
    helpInfo:
      'Selects all elements of type <strong>A</strong>.\n Type refers to the type of tag, so <tag>div</tag>, <tag>p</tag> and <tag>ul</tag> are all different element types.\n\nEXAMPLES:\n<strong>div</strong> selects all <tag>div</tag> elements.\n<strong>p</strong> selects all <tag>p</tag> elements.',
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
      'Selects all elements of type <strong>A</strong>.\n Type refers to the type of tag, so <tag>div</tag>, <tag>p</tag> and <tag>ul</tag> are all different element types.\n\n EXAMPLES:\n<strong>div</strong> selects all <tag>div</tag> elements.\n<strong>p</strong> selects all <tag>p</tag> elements.',
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
    helpInfo:
      'Selects the element with a specific <strong>id</strong>.\n You can also combine the ID selector with the type selector.\n\n EXAMPLES:\n<strong>#cool</strong> selects any element with <strong>id="cool"</strong>\n<strong>ul#long</strong> selects <tag>ul id="long"</tag>',
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
      'Selects all <strong>B</strong> inside of <strong>A</strong>.\n <strong>B</strong> is called a descendant because it is inside of another element.\n\n EXAMPLES:\n<strong>p&nbsp;&nbsp;strong</strong> selects all <tag>strong</tag> elements that are inside of any <tag>p</tag>\n<strong>#fancy&nbsp;&nbsp;span</strong> selects any <tag>span</tag> elements that are inside of the element with <strong>id="fancy"</strong>',
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
      'The class selector selects all elements with that class attribute.\n Elements can only have one ID, but many classes.\n\n EXAMPLES:\n<strong>.neato</strong> selects all elements with <strong>class="neato"</strong>',
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
      'Thanks to Shatner technology, this selects all <strong>A</strong> and <strong>B</strong> elements.\n You can combine any selectors this way, and you can specify more than two.\n\n EXAMPLES:\n<strong>p, .fun</strong> selects all <tag>p</tag> elements as well as all elements with <strong>class="fun"</strong>\n<strong>a, p, div</strong> selects all <tag>a</tag>, <tag>p</tag> and <tag>div</tag> elements',
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
    helpInfo:
      'You can select all elements with the universal selector!\n\n EXAMPLES:\n<strong>p *</strong> selects any element inside all <tag>p</tag> elements.',
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
      'You can select elements that are direct children of other elements.\n A child element is any element that is nested directly in another element.\n <br><br>Elements that are nested deeper than that are called descendant elements.\n\n EXAMPLES:\n<strong>A > B</strong> selects all <strong>B</strong> that are a direct children <strong>A</strong>',
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
    helpInfo:
      "Selects elements that don't have any other elements inside of them.\n\n EXAMPLES:\n<strong>div:empty</strong> selects all empty <tag>div</tag> elements.",
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
      'You can select the first child element.\n A child element is any element that is directly nested in another element.\n You can combine this pseudo-selector with other selectors.\n\n EXAMPLES:\n<strong>:first-child</strong> selects all first child elements.\n<strong>p:first-child</strong> selects all first child <tag>p</tag> elements.',
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
