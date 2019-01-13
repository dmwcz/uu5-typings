# TypeScript typings for uu5 library
Tired of all the guessing how is the method called exactly? Tired of the auto-completed brackets for callback props? Here is the first aid for these problems. TypeScript typings for [uu5 library (g04)](https://docs.unicorn.com/uaf/uuapp/uu5) continuously updated.

# Installation
Unfortunately in current version there are more than one step to get it up and running. After installing the uu5 library through npm, you have to alter the installed package.

    npm install uu5g04

The installed package has following structure

    node_module
    +-- uu5g04
    |   +-- dist
    |   +-- dist-esm
    |   |   +-- index.js
    |   +-- dist-node
    |   +-- tools
    |   +-- LICENSE
    |   +-- package.json
    |   +-- README.md

1. Put `index.d.ts` from the repository into root folder of `uu5g04` package.
2. Remove file `uu5g04/dist-esm/index.js`. _It interferes with WebStorm / JetBrains IDE auto-complete index._

Remove `@types/create-react-class` if you have it installed. In WebStorm it may interfere with suggestions for `createReactClass`.

# Usage

Just by using the typings you have auto-complete for JSX together with supported props for used component. When using `createReactClass` you can also inject type of object you are working with through JS Doc annotations. 

    /**
     * @var UU5.Typings.BaseElementary
     * @instance
     */
    const MyComponent = createReactClass({
    
      mixins: [UU5.Common.BaseMixin, UU5.Common.ElementaryMixin],
    
      /**
       *
       * @param {UU5.Bricks.Modal} modal
       */
      _registerModal(modal) {
        // this. -> auto-complete for Base & Elementary mixin
        // modal. -> auto-complete for Modal methods
      },
    
      render() {
        return (
          <UU5.Common.Div>
            <UU5.Bricks.Modal ref_={this._registerModal} />
          </UU5.Common.Div>
        )
      }
    
    });

# Known Issues

* So far missing support for anything else but Components in `Common` module. `Environment` module is also missing.
* First version of typings focuses on Component and methods auto-complete. Currently missing types for methods and parameters will be filled in in future versions.
* So far only few combinations of Mixins are created for auto-complete. Unfortunately WebStorm (IntelliJ) does not resolve correctly interfaces and classes that extends another classes and it won't provide auto-complete for objects that are being extended. Therefor the typings file contains big chunks of duplicated code (mixin methods) so WebStorm correctly suggests methods for mixin combinations. The number of mixin combination is BIG and so far there are only few combinations available (based on mixins used in uu5 components). Even though definition of Components contains used mixins, due to the `extends` _bug_ auto-complete provides only methods defined directly in component definition. Other methods are _known_ and will be eventually suggested but it may suggest methods from whole library instead of just inherited ones. 
* Another issue caused by `createReactClass` and WebStorm is the moment you define `propTypes` you lose all the `props` suggestions from mixins. As long as the component does not define `propTypes`, the `this.props.` suggests all the props from used mixins (based on annotation).
* Similar situation is for state. As long as component does not implement `getInitialState`, WebStorm suggests state according to mixins (based on annotation).
* So far tested only in WebStorm, other IDEs to be tested. 

# Notes

The typings file is generated and its structure may change in future versions. Source data for the typings are in separate (not yet public) repository. 