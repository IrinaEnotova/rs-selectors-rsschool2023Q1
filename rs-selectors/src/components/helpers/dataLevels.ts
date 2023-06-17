import { ILevel, TypeOfLevel } from '../../types/types';

const dataLevels: ILevel[] = [
  {
    mainTitle: 'Select the plates',
    type: TypeOfLevel.TypeSelector,
    helpTitle: 'Select elements by their type',
    helpSyntax: 'A',
    helpInfo:
      'Selects all elements of type <strong>A</strong>. Type refers to the type of tag, so <tag>div</tag>, <tag>p</tag> and <tag>ul</tag> are all different element types.',
    helpExamples: [
      '<strong>div</strong> selects all <tag>div</tag> elements.',
      '<strong>p</strong> selects all <tag>p</tag> elements.',
    ],
    selector: 'plate',
    markup: `
    <plate/>
    <plate/>
    `,
    isCompleted: 0,
  },
  {
    mainTitle: 'Select the bento boxes',
    type: TypeOfLevel.TypeSelector,
    helpTitle: 'Select elements by their type',
    helpSyntax: 'A',
    helpInfo:
      'Selects all elements of type <strong>A</strong>. Type refers to the type of tag, so <tag>div</tag>, <tag>p</tag> and <tag>ul</tag> are all different element types.',
    helpExamples: [
      '<strong>div</strong> selects all <tag>div</tag> elements.',
      '<strong>p</strong> selects all <tag>p</tag> elements.',
    ],
    selector: 'bento',
    markup: `
    <bento/>
    <plate/>
    <bento/>
    `,
    isCompleted: 0,
  },
  {
    mainTitle: 'Select the fancy plate',
    type: TypeOfLevel.IdSelector,
    helpTitle: 'Select elements with an ID',
    helpSyntax: '#id',
    helpInfo:
      'Selects the element with a specific <strong>id</strong>. You can also combine the ID selector with the type selector.',
    helpExamples: [
      '<strong>#cool</strong> selects any element with <strong>id="cool"</strong>',
      '<strong>ul#long</strong> selects <tag>ul id="long"</tag>',
    ],
    selector: '#fancy',
    markup: `
    <plate id="fancy"/>
    <plate/>
    <bento/>
    `,
    isCompleted: 0,
  },
  {
    mainTitle: 'Select the apple on the plate',
    type: TypeOfLevel.DescendantSelector,
    helpTitle: 'Select an element inside another element',
    helpSyntax: 'A&nbsp;&nbsp;B',
    helpInfo:
      'Selects all <strong>B</strong> inside of <strong>A</strong>. <strong>B</strong> is called a descendant because it is inside of another element.',
    helpExamples: [
      '<strong>p&nbsp;&nbsp;strong</strong> selects all <tag>strong</tag> elements that are inside of any <tag>p</tag>',
      '<strong>#fancy&nbsp;&nbsp;span</strong> selects any <tag>span</tag> elements that are inside of the element with <strong>id="fancy"</strong>',
    ],
    selector: 'plate apple',
    markup: `
    <bento/>
    <plate>
      <apple/>
    </plate>
    <apple/>
    `,
    isCompleted: 0,
  },
  {
    mainTitle: 'Select the small apples',
    type: TypeOfLevel.ClassSelector,
    helpTitle: 'Select elements by their class',
    helpSyntax: '.classname',
    helpInfo:
      'The class selector selects all elements with that class attribute. Elements can only have one ID, but many classes.',
    helpExamples: ['<strong>.neato</strong> selects all elements with <strong>class="neato"</strong>'],
    selector: '.small',
    markup: `
    <apple/>
    <apple class="small"/>
    <plate>
      <apple class="small"/>
    </plate>
    <plate/>
    `,
    isCompleted: 0,
  },
  {
    mainTitle: 'Select all the plates and bentos',
    type: TypeOfLevel.CommaCombinator,
    helpTitle: 'Combine, selectors, with... commas!',
    helpSyntax: 'A, B',
    helpInfo:
      'Thanks to Shatner technology, this selects all <strong>A</strong> and <strong>B</strong> elements. You can combine any selectors this way, and you can specify more than two.',
    helpExamples: [
      '<strong>p, .fun</strong> selects all <tag>p</tag> elements as well as all elements with <strong>class="fun"</strong>',
      '<strong>a, p, div</strong> selects all <tag>a</tag>, <tag>p</tag> and <tag>div</tag> elements',
    ],
    selector: 'plate,bento',
    markup: `
    <pickle class="small"/>
    <pickle/>
    <plate>
      <pickle/>
    </plate>
    <bento>
      <pickle/>
    </bento>
    <plate>
      <pickle/>
    </plate>
    <pickle/>
    <pickle class="small"/>
    `,
    isCompleted: 0,
  },
  {
    mainTitle: 'Select all the things!',
    type: TypeOfLevel.UniversalSelector,
    helpTitle: 'You can select everything!',
    helpSyntax: '*',
    helpInfo: 'You can select all elements with the universal selector!',
    helpExamples: ['<strong>p *</strong> selects any element inside all <tag>p</tag> elements.'],
    selector: '*',
    markup: `
    <apple/>
    <plate>
      <orange class="small" />
    </plate>
    <bento/>
    <bento>
      <orange/>
    </bento>
    <plate id="fancy"/>
    `,
    isCompleted: 0,
  },
  {
    mainTitle: 'Select the apple directly on a plate',
    type: TypeOfLevel.ChildSelector,
    helpTitle: 'Select direct children of an element',
    helpSyntax: 'A > B',
    helpInfo:
      'You can select elements that are direct children of other elements. A child element is any element that is nested directly in another element. <br><br>Elements that are nested deeper than that are called descendant elements.',
    helpExamples: [
      '<strong>A > B</strong> selects all <strong>B</strong> that are a direct children <strong>A</strong>',
    ],
    selector: 'plate > apple',
    markup: `
    <plate>
      <bento>
        <apple/>
      </bento>
    </plate>
    <plate>
      <apple/>
    </plate>
    <plate/>
    <apple/>
    <apple class="small"/>
    `,
    isCompleted: 0,
  },
  {
    mainTitle: 'Select the empty bentos',
    type: TypeOfLevel.EmptySelector,
    helpTitle: "Select elements that don't have children",
    helpSyntax: ':empty',
    helpInfo: "Selects elements that don't have any other elements inside of them.",
    helpExamples: ['<strong>div:empty</strong> selects all empty <tag>div</tag> elements.'],
    selector: 'bento:empty',
    markup: `
    <bento/>
    <bento>
      <pickle class="small"/>
    </bento>
    <plate/>
    <bento/>
    `,
    isCompleted: 0,
  },
  {
    mainTitle: 'Select the top orange',
    type: TypeOfLevel.FirstChild,
    helpTitle: 'Select a first child element inside of another element',
    helpSyntax: ':first-child',
    helpInfo:
      'You can select the first child element. A child element is any element that is directly nested in another element. You can combine this pseudo-selector with other selectors.',
    helpExamples: [
      '<strong>:first-child</strong> selects all first child elements.',
      '<strong>p:first-child</strong> selects all first child <tag>p</tag> elements.',
      '<strong>div p:first-child</strong> selects all first child <tag>p</tag> elements that are in a <tag>div</tag>.',
    ],
    selector: 'plate :first-child',
    markup: `
    <bento/>
    <plate />
    <plate>
      <orange />
      <orange />
      <orange />
    </plate>
    <pickle class="small" />
    `,
    isCompleted: 0,
  },
];

export default dataLevels;
