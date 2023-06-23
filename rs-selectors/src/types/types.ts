export enum TypeOfLevel {
  TypeSelector = 'Type Selector',
  IdSelector = 'ID Selector',
  DescendantSelector = 'Descendant Selector',
  ClassSelector = 'Class Selector',
  CommaCombinator = 'Comma Combinator',
  UniversalSelector = 'UniversalSelector',
  ChildSelector = 'Child Selector',
  EmptySelector = 'Empty Selector',
  FirstChild = 'First Child Pseudo-selector',
}

export enum StateOfLevel {
  NotCompleted = 0,
  Completed = 1,
}

export interface ILevel {
  mainTitle: string;
  type: TypeOfLevel;
  helpTitle: string;
  helpSyntax: string;
  helpInfo: string;
  helpExamples: string[];
  selector: string;
  markup: string;
  isCompleted: StateOfLevel;
}

export interface IElCreationParams {
  tag: string;
  classNames: string[];
  textContent?: string;
  callback?: ((event: Event) => void) | null;
}

export interface IParamsInput {
  classNames: string[];
  textContent?: string;
  callback?: ((event: Event) => void) | null;
}

export interface ILevelParams {
  name: string;
  callback?: ((event: Event) => void) | null;
}

export interface ISidebarLevel {
  name: string;
  callback: () => void;
}
