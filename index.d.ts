// THIS FILE IS GENERATED
// Strcuture of the file is to be changed in future versions!
/**
 * @version 0.1.0
 * @author Milan Martinek, 6-138-1
 * @licence MIT
 * @augments uu5g04 1.16.0
 */

import React = require("react");

interface WithContext {
    context?: object
}

// region SpecificTypes
type LsiValue = string | object;

type Elevation = -1 | 1 | 2 | 3 | 4 | 5

type ColumnSpan = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

type ResponsiveObject = {
    xs?: ColumnSpan,
    s?: ColumnSpan,
    m?: ColumnSpan,
    l?: ColumnSpan,
    xl?: ColumnSpan
}

type ResponsiveSettings = ResponsiveObject | string;

type Uu5Content = boolean | string | number | React.ReactNode | {
    tag: (() => React.ReactNode) | string,
    props: object
} | {
    tag: (() => React.ReactNode) | string,
    propsArray: Array<object>
}

interface DtoIn {
    data?: object,
    done: (data: object) => void,
    fail: (data: object) => void
}

declare enum LoadingFeedback {
    "loading", "error", "ready"
}

declare enum IdentityFeedback {
    "authenticated", "notAuthenticated", "pending"
}

declare enum NestingLevels {
    'spa', 'page', 'container', 'bigBoxCollection', 'bigBox', 'boxCollection', 'box', 'smallBoxCollection', 'smallBox', 'inline'
}

declare enum ScreenSizes {
    "xs", "s", "m", "l", "xl"
}

declare enum FormInputSizes {
    "s", "m", "l", "xl"
}

declare enum FormInputFeedback {
    'initial', 'success', 'warning', 'error', 'loading'
}

declare enum BgStyle {
    'filled', 'outline', 'transparent', 'underline'
}

interface FormInputFeedbackObject {
    feedback: FormInputFeedback,
    message: LsiValue,
    value: any
}

interface FormInputFeedbackOptionalObject {
    feedback?: FormInputFeedback,
    message?: LsiValue,
    value?: any
}

declare enum SwipeDirection {
    'up', 'right', 'down', 'left', 'upRight', 'downRight', 'upLeft', 'downLeft'
}

declare enum ColorSchemas {
    'primary',
    'success', 'info', 'warning', 'danger', 'yellow', 'yellow-rich', 'orange', 'orange-rich',
    'pink', 'pink-rich', 'red', 'red-rich', 'purple', 'purple-rich', 'cyan', 'cyan-rich',
    'blue', 'blue-rich', 'green', 'green-rich', 'brown', 'brown-rich', 'amber', 'amber-rich',
    'deep-orange', 'deep-orange-rich', 'deep-purple', 'deep-purple-rich', 'indigo', 'indigo-rich',
    'teal', 'teal-rich', 'light-green', 'light-green-rich', 'light-blue', 'light-blue-rich',
    'lime', 'lime-rich', 'blue-grey', 'blue-grey-rich', 'grey', 'grey-rich', 'black', 'white'
}

interface TextInputOpts {
    value: any,
    event: Event,
    component: Mixins.TextInput.Mixin
}

// endregion


declare namespace UU5 {
    namespace Common {
        // region NSCommon


        interface Div extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Mixin {
        }

        class Div extends React.Component<Common__Div.Props, Common__Div.State> {
        }


        interface Error extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Mixin {
        }

        class Error extends React.Component<Common__Error.Props, Common__Error.State> {
            lsi(): any;
        }


        interface Help extends CombinedMixins.BaseContentElementaryPureRender.Mixin {
        }

        class Help extends React.Component<Common__Help.Props, Common__Help.State> {
        }


        interface NotFoundTag extends CombinedMixins.BaseElementaryPureRender.Mixin {
        }

        class NotFoundTag extends React.Component<Common__NotFoundTag.Props, Common__NotFoundTag.State> {
        }


        interface Outline extends CombinedMixins.BaseElementaryPureRender.Mixin {
        }

        class Outline extends React.Component<Common__Outline.Props, Common__Outline.State> {
            isOutline(): any;
        }


        interface Router extends CombinedMixins.BaseCcrWriterElementaryPureRender.Mixin {
        }

        class Router extends React.Component<Common__Router.Props, Common__Router.State> {
            setRoute(newRoute: any, ...args: any): any;

            allowPageLeave(): any;

            preventPageLeave(getPageLeaveModalPropsFn: any): any;

            scrollToFragment(): any;

            lsi(): any;
        }


        interface TagPlaceholder extends CombinedMixins.BaseElementary.Mixin {
        }

        class TagPlaceholder extends React.Component<Common__TagPlaceholder.Props, Common__TagPlaceholder.State> {
        }


        interface TextCorrector extends CombinedMixins.BaseContent.Mixin {
        }

        class TextCorrector extends React.Component<Common__TextCorrector.Props, Common__TextCorrector.State> {
        }


// endregion
    }

    namespace Bricks {
        // region NSBricks


        interface Abbr extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Mixin {
        }

        class Abbr extends React.Component<Bricks__Abbr.Props, Bricks__Abbr.State> {
        }


        interface Accordion extends CombinedMixins.BaseColorSchemaContentEditableElementaryNestingLevelPureRender.Mixin {
        }

        class Accordion extends React.Component<Bricks__Accordion.Props, Bricks__Accordion.State> {
            getPanelById(panelId: any): any;

            getPanelByName(panelName: any): any;

            getPanels(): any;

            eachPanel(callback: any): any;

            eachPanelByIds(ids: any, callback: any): any;

            eachPanelByNames(names: any, callback: any): any;

            expandPanelById(panelId: any, setStateCallback?: () => {}): any;

            expandPanelByName(panelName: any, setStateCallback?: () => {}): any;

            collapsePanelById(panelId: any, setStateCallback?: () => {}): any;

            collapsePanelByName(panelName: any, setStateCallback?: () => {}): any;

            togglePanelById(panelId: any, setStateCallback?: () => {}): any;

            togglePanelByName(panelName: any, setStateCallback?: () => {}): any;

            expandAll(setStateCallback?: () => {}): any;

            collapseAll(setStateCallback?: () => {}): any;

            toggleAll(setStateCallback?: () => {}): any;

            shouldCollapseOthers(): any;

            collapseOthers(panelId: any, setStateCallback?: () => {}): any;
        }


        interface Address extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Mixin {
        }

        class Address extends React.Component<Bricks__Address.Props, Bricks__Address.State> {
        }


        interface Alert extends CombinedMixins.BaseColorSchemaElementaryNestingLevelPureRenderSection.Mixin {
        }

        class Alert extends React.Component<Bricks__Alert.Props, Bricks__Alert.State> {
        }


        interface AlertBus extends CombinedMixins.BaseCcrWriterElementaryNestingLevelPureRender.Mixin {
        }

        class AlertBus extends React.Component<Bricks__AlertBus.Props, Bricks__AlertBus.State> {
            addAlert(alertProps: any, setStateCallback?: () => {}): any;

            addAlertToPosition(alertIndex: any, alertProps: any, setStateCallback?: () => {}): any;

            setAlert(alertProps: any, setStateCallback?: () => {}): any;

            setAlerts(alertStack: any, setStateCallback?: () => {}): any;

            removeAlert(alertId: any, setStateCallback?: () => {}): any;

            clearAlerts(setStateCallback?: () => {}): any;

            getAlerts(): any;
        }


        interface Authenticated extends CombinedMixins.BaseContentIdentity.Mixin {
        }

        class Authenticated extends React.Component<Bricks__Authenticated.Props, Bricks__Authenticated.State> {
        }


        interface Backdrop extends CombinedMixins.BaseElementaryNestingLevelPureRender.Mixin {
        }

        class Backdrop extends React.Component<Bricks__Backdrop.Props, Bricks__Backdrop.State> {
        }


        interface Badge extends CombinedMixins.BaseColorSchemaContentElementaryNestingLevelPureRender.Mixin {
        }

        class Badge extends React.Component<Bricks__Badge.Props, Bricks__Badge.State> {
        }


        interface Block extends CombinedMixins.BaseColorSchemaContentEditableElementaryNestingLevelPureRender.Mixin {
        }

        class Block extends React.Component<Bricks__Block.Props, Bricks__Block.State> {
        }


        interface Blockquote extends CombinedMixins.BaseColorSchemaContentElementaryNestingLevelPureRender.Mixin {
        }

        class Blockquote extends React.Component<Bricks__Blockquote.Props, Bricks__Blockquote.State> {
        }


        interface Box extends CombinedMixins.BaseColorSchemaContentElementaryNestingLevelPureRender.Mixin {
        }

        class Box extends React.Component<Bricks__Box.Props, Bricks__Box.State> {
            openInfo(modalProps: any, setStateCallback?: () => {}): any;

            closeInfo(setStateCallback?: () => {}): any;
        }


        interface Button extends CombinedMixins.BaseColorSchemaContentEditableElementaryNestingLevelPureRender.Mixin {
        }

        class Button extends React.Component<Bricks__Button.Props, Bricks__Button.State> {
            setActive(pressed: any, setStateCallback?: () => {}): any;

            press(setStateCallback?: () => {}): any;

            pressUp(setStateCallback?: () => {}): any;

            togglePressed(setStateCallback?: () => {}): any;

            isPressed(): any;

            focus(): any;
        }


        interface ButtonGroup extends CombinedMixins.BaseColorSchemaContentElementaryNestingLevelPureRender.Mixin {
        }

        class ButtonGroup extends React.Component<Bricks__ButtonGroup.Props, Bricks__ButtonGroup.State> {
        }


        interface ButtonSwitch extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Mixin {
        }

        class ButtonSwitch extends React.Component<Bricks__ButtonSwitch.Props, Bricks__ButtonSwitch.State> {
            switchOn(setStateCallback?: () => {}): any;

            switchOff(setStateCallback?: () => {}): any;

            toggle(setStateCallback?: () => {}): any;

            isSwitchOn(): any;

            isSwitchOff(): any;
        }


        interface ButtonToTop extends CombinedMixins.BaseColorSchemaElementaryNestingLevelPureRender.Mixin {
        }

        class ButtonToTop extends React.Component<Bricks__ButtonToTop.Props, Bricks__ButtonToTop.State> {
        }


        interface Camera extends CombinedMixins.BaseElementaryNestingLevelPureRender.Mixin {
        }

        class Camera extends React.Component<Bricks__Camera.Props, Bricks__Camera.State> {
            getScreenShot(): any;
        }


        interface Card extends CombinedMixins.BaseColorSchemaElementaryNestingLevelPureRenderSection.Mixin {
        }

        class Card extends React.Component<Bricks__Card.Props, Bricks__Card.State> {
        }


        namespace Carousel {


            interface Item extends CombinedMixins.BaseContentElementary.Mixin {
            }

            class Item extends React.Component<Bricks__CarouselItem.Props, Bricks__CarouselItem.State> {
            }


        }

        interface Carousel extends CombinedMixins.BaseColorSchemaContentElementarySwipe.Mixin {
        }

        class Carousel extends React.Component<Bricks__Carousel.Props, Bricks__Carousel.State> {
            setActiveIndex(activeIndex: any, setStateCallback?: () => {}): any;

            getActiveIndex(): any;

            setNext(setStateCallback?: () => {}): any;

            setPrevious(setStateCallback?: () => {}): any;
        }


        interface ClickConfirm extends CombinedMixins.BaseCcrWriterColorSchemaElementaryNestingLevelPureRender.Mixin {
        }

        class ClickConfirm extends React.Component<Bricks__ClickConfirm.Props, Bricks__ClickConfirm.State> {
            open(openAttrs: any): any;

            close(setStateCallback?: () => {}): any;
        }


        interface Code extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Mixin {
        }

        class Code extends React.Component<Bricks__Code.Props, Bricks__Code.State> {
        }


        interface CodePreview extends CombinedMixins.BaseElementaryPureRender.Mixin {
        }

        class CodePreview extends React.Component<Bricks__CodePreview.Props, Bricks__CodePreview.State> {
            setProp(name: any, value: any): any;
        }


        interface Column extends CombinedMixins.BaseElementaryNestingLevelPureRenderSection.Mixin {
        }

        class Column extends React.Component<Bricks__Column.Props, Bricks__Column.State> {
        }


        interface Console extends CombinedMixins.BaseElementaryNestingLevelPureRender.Mixin {
        }

        class Console extends React.Component<Bricks__Console.Props, Bricks__Console.State> {
            info(input: any, setStateCallback?: () => {}): any;

            warning(input: any, setStateCallback?: () => {}): any;

            error(input: any, setStateCallback?: () => {}): any;
        }


        interface Container extends CombinedMixins.BaseElementaryNestingLevelPureRenderSection.Mixin {
        }

        class Container extends React.Component<Bricks__Container.Props, Bricks__Container.State> {
        }


        namespace ContextMenu {


            interface Item extends CombinedMixins.BaseContentElementaryPureRender.Mixin {
            }

            class Item extends React.Component<Bricks__ContextMenuItem.Props, Bricks__ContextMenuItem.State> {
                onClickDefault(opt: any): any;
            }


        }

        interface ContextMenu extends CombinedMixins.BaseCcrWriterElementaryNestingLevelPureRenderSection.Mixin {
        }

        class ContextMenu extends React.Component<Bricks__ContextMenu.Props, Bricks__ContextMenu.State> {
            isContextMenu(): any;

            open(opt: any, setStateCallback?: () => {}): any;

            close(setStateCallback?: () => {}): any;

            isOpen(): any;
        }


        interface CookieBar extends CombinedMixins.BaseColorSchemaContentElementaryNestingLevelPureRender.Mixin {
        }

        class CookieBar extends React.Component<Bricks__CookieBar.Props, Bricks__CookieBar.State> {
        }


        interface CookiesInfo extends CombinedMixins.BaseElementaryNestingLevelPureRender.Mixin {
        }

        class CookiesInfo extends React.Component<Bricks__CookiesInfo.Props, Bricks__CookiesInfo.State> {
        }


        interface DataTable extends CombinedMixins.BaseElementaryLsiNestingLevelPureRenderSection.Mixin {
        }

        class DataTable extends React.Component<Bricks__DataTable.Props, Bricks__DataTable.State> {
            lsi(): any;
        }


        interface DateTime extends CombinedMixins.BaseElementaryNestingLevelPureRender.Mixin {
        }

        class DateTime extends React.Component<Bricks__DateTime.Props, Bricks__DateTime.State> {
            getFormat(): any;

            setFormat(format: any, setStateCallback?: () => {}): any;

            getCountry(): any;

            setCountry(country: any, setStateCallback?: () => {}): any;

            getTimeZone(): any;

            setTimeZone(timeZone: any, setStateCallback?: () => {}): any;

            setOptions(opt: any, setStateCallback?: () => {}): any;

            onChangeDefault(opt: any): any;
        }


        interface Dd extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Mixin {
        }

        class Dd extends React.Component<Bricks__Dd.Props, Bricks__Dd.State> {
        }


        interface Del extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Mixin {
        }

        class Del extends React.Component<Bricks__Del.Props, Bricks__Del.State> {
        }


        interface Dl extends CombinedMixins.BaseElementaryNestingLevelPureRenderSection.Mixin {
        }

        class Dl extends React.Component<Bricks__Dl.Props, Bricks__Dl.State> {
        }


        interface DraggableItem extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Mixin {
        }

        class DraggableItem extends React.Component<Bricks__DraggableItem.Props, Bricks__DraggableItem.State> {
            moveToPosition(x: any, y: any): any;

            setPosition(x: any, y: any, setStateCallback?: () => {}): any;

            stopDragging(): any;

            moveEnd(): any;

            onMoveDefault(opt: any): any;
        }


        namespace Dropdown {


            interface Item extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Mixin {
            }

            class Item extends React.Component<Bricks__DropdownItem.Props, Bricks__DropdownItem.State> {
            }


        }

        interface Dropdown extends CombinedMixins.BaseColorSchemaContentEditableElementaryNestingLevelPureRender.Mixin {
        }

        class Dropdown extends React.Component<Bricks__Dropdown.Props, Bricks__Dropdown.State> {
            isDropdown(): any;

            open(setStateCallback?: () => {}): any;

            close(setStateCallback?: () => {}): any;

            toggle(setStateCallback?: () => {}): any;

            isOpen(): any;
        }


        interface Dt extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Mixin {
        }

        class Dt extends React.Component<Bricks__Dt.Props, Bricks__Dt.State> {
        }


        interface Em extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Mixin {
        }

        class Em extends React.Component<Bricks__Em.Props, Bricks__Em.State> {
        }


        interface FileViewer extends CombinedMixins.BaseElementaryNestingLevelPureRender.Mixin {
        }

        class FileViewer extends React.Component<Bricks__FileViewer.Props, Bricks__FileViewer.State> {
        }


        interface Footer extends CombinedMixins.BaseContentElementaryLevelNestingLevelPureRender.Mixin {
        }

        class Footer extends React.Component<Bricks__Footer.Props, Bricks__Footer.State> {
        }


        interface GoogleMap extends CombinedMixins.BaseElementaryNestingLevelPureRender.Mixin {
        }

        class GoogleMap extends React.Component<Bricks__GoogleMap.Props, Bricks__GoogleMap.State> {
            getMap(): any;

            setMapOptions(options: any): any;
        }


        interface Header extends CombinedMixins.BaseColorSchemaContentEditableElementaryLevelNestingLevelPureRender.Mixin {
        }

        class Header extends React.Component<Bricks__Header.Props, Bricks__Header.State> {
        }


        interface Heading extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Mixin {
        }

        class Heading extends React.Component<Bricks__Heading.Props, Bricks__Heading.State> {
            getOffsetTop(): any;

            setFixedValue(fixed: any, setStateCallback?: () => {}): any;

            isFixed(): any;

            setFixed(setStateCallback?: () => {}): any;

            setBlocked(setStateCallback?: () => {}): any;
        }


        interface HomeScreen extends CombinedMixins.BaseElementaryLsiNestingLevelPureRender.Mixin {
        }

        class HomeScreen extends React.Component<Bricks__HomeScreen.Props, Bricks__HomeScreen.State> {
            activate(setStateCallback?: () => {}): any;
        }


        interface Icon extends CombinedMixins.BaseElementaryNestingLevelPureRender.Mixin {
        }

        class Icon extends React.Component<Bricks__Icon.Props, Bricks__Icon.State> {
        }


        interface Iframe extends CombinedMixins.BaseElementaryNestingLevelPureRender.Mixin {
        }

        class Iframe extends React.Component<Bricks__Iframe.Props, Bricks__Iframe.State> {
            resize(setStateCallback?: () => {}): any;

            setSize(width: any, height: any, setStateCallback?: () => {}): any;
        }


        interface Image extends CombinedMixins.BaseElementaryNestingLevelPureRender.Mixin {
        }

        class Image extends React.Component<Bricks__Image.Props, Bricks__Image.State> {
        }


        interface Ins extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Mixin {
        }

        class Ins extends React.Component<Bricks__Ins.Props, Bricks__Ins.State> {
        }


        interface Jumbotron extends CombinedMixins.BaseColorSchemaContentElementaryNestingLevelPureRender.Mixin {
        }

        class Jumbotron extends React.Component<Bricks__Jumbotron.Props, Bricks__Jumbotron.State> {
        }


        interface Kbd extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Mixin {
        }

        class Kbd extends React.Component<Bricks__Kbd.Props, Bricks__Kbd.State> {
        }


        interface Label extends CombinedMixins.BaseColorSchemaContentElementaryNestingLevelPureRender.Mixin {
        }

        class Label extends React.Component<Bricks__Label.Props, Bricks__Label.State> {
        }


        interface LanguageSelector extends CombinedMixins.BaseColorSchemaElementaryLsiNestingLevelPureRenderScreenSize.Mixin {
        }

        class LanguageSelector extends React.Component<Bricks__LanguageSelector.Props, Bricks__LanguageSelector.State> {
        }


        interface Lead extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Mixin {
        }

        class Lead extends React.Component<Bricks__Lead.Props, Bricks__Lead.State> {
        }


        interface Li extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Mixin {
        }

        class Li extends React.Component<Bricks__Li.Props, Bricks__Li.State> {
        }


        interface Line extends CombinedMixins.BaseColorSchemaElementaryNestingLevelPureRender.Mixin {
        }

        class Line extends React.Component<Bricks__Line.Props, Bricks__Line.State> {
        }


        interface Link extends CombinedMixins.BaseColorSchemaContentElementaryNestingLevelPureRender.Mixin {
        }

        class Link extends React.Component<Bricks__Link.Props, Bricks__Link.State> {
            focus(): any;
        }


        interface LinkBootstrap extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Mixin {
        }

        class LinkBootstrap extends React.Component<Bricks__LinkBootstrap.Props, Bricks__LinkBootstrap.State> {
        }


        interface LinkBusinessTerritory extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Mixin {
        }

        class LinkBusinessTerritory extends React.Component<Bricks__LinkBusinessTerritory.Props, Bricks__LinkBusinessTerritory.State> {
        }


        interface LinkCSS extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Mixin {
        }

        class LinkCSS extends React.Component<Bricks__LinkCSS.Props, Bricks__LinkCSS.State> {
        }


        interface LinkDocker extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Mixin {
        }

        class LinkDocker extends React.Component<Bricks__LinkDocker.Props, Bricks__LinkDocker.State> {
        }


        interface LinkHTML5 extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Mixin {
        }

        class LinkHTML5 extends React.Component<Bricks__LinkHTML5.Props, Bricks__LinkHTML5.State> {
        }


        interface LinkJavaScript extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Mixin {
        }

        class LinkJavaScript extends React.Component<Bricks__LinkJavaScript.Props, Bricks__LinkJavaScript.State> {
        }


        interface LinkJQuery extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Mixin {
        }

        class LinkJQuery extends React.Component<Bricks__LinkJQuery.Props, Bricks__LinkJQuery.State> {
        }


        interface LinkMaterialDesign extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Mixin {
        }

        class LinkMaterialDesign extends React.Component<Bricks__LinkMaterialDesign.Props, Bricks__LinkMaterialDesign.State> {
        }


        interface LinkMongoDB extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Mixin {
        }

        class LinkMongoDB extends React.Component<Bricks__LinkMongoDB.Props, Bricks__LinkMongoDB.State> {
        }


        interface LinkMSAzure extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Mixin {
        }

        class LinkMSAzure extends React.Component<Bricks__LinkMSAzure.Props, Bricks__LinkMSAzure.State> {
        }


        interface LinkMyTerritory extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Mixin {
        }

        class LinkMyTerritory extends React.Component<Bricks__LinkMyTerritory.Props, Bricks__LinkMyTerritory.State> {
        }


        interface LinkPlus4U extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Mixin {
        }

        class LinkPlus4U extends React.Component<Bricks__LinkPlus4U.Props, Bricks__LinkPlus4U.State> {
        }


        interface LinkPuma extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Mixin {
        }

        class LinkPuma extends React.Component<Bricks__LinkPuma.Props, Bricks__LinkPuma.State> {
        }


        interface LinkReact extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Mixin {
        }

        class LinkReact extends React.Component<Bricks__LinkReact.Props, Bricks__LinkReact.State> {
        }


        interface LinkRuby extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Mixin {
        }

        class LinkRuby extends React.Component<Bricks__LinkRuby.Props, Bricks__LinkRuby.State> {
        }


        interface LinkUAF extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Mixin {
        }

        class LinkUAF extends React.Component<Bricks__LinkUAF.Props, Bricks__LinkUAF.State> {
        }


        interface LinkUnicorn extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Mixin {
        }

        class LinkUnicorn extends React.Component<Bricks__LinkUnicorn.Props, Bricks__LinkUnicorn.State> {
        }


        interface LinkUnicornApproach extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Mixin {
        }

        class LinkUnicornApproach extends React.Component<Bricks__LinkUnicornApproach.Props, Bricks__LinkUnicornApproach.State> {
        }


        interface LinkUnicornCollege extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Mixin {
        }

        class LinkUnicornCollege extends React.Component<Bricks__LinkUnicornCollege.Props, Bricks__LinkUnicornCollege.State> {
        }


        interface LinkUnicornSystems extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Mixin {
        }

        class LinkUnicornSystems extends React.Component<Bricks__LinkUnicornSystems.Props, Bricks__LinkUnicornSystems.State> {
        }


        interface LinkUnicornUniverse extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Mixin {
        }

        class LinkUnicornUniverse extends React.Component<Bricks__LinkUnicornUniverse.Props, Bricks__LinkUnicornUniverse.State> {
        }


        interface LinkUU5 extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Mixin {
        }

        class LinkUU5 extends React.Component<Bricks__LinkUU5.Props, Bricks__LinkUU5.State> {
        }


        interface LinkUu5CodeKit extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Mixin {
        }

        class LinkUu5CodeKit extends React.Component<Bricks__LinkUu5CodeKit.Props, Bricks__LinkUu5CodeKit.State> {
        }


        interface LinkUu5LibraryRegistry extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Mixin {
        }

        class LinkUu5LibraryRegistry extends React.Component<Bricks__LinkUu5LibraryRegistry.Props, Bricks__LinkUu5LibraryRegistry.State> {
        }


        interface LinkUuApp extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Mixin {
        }

        class LinkUuApp extends React.Component<Bricks__LinkUuApp.Props, Bricks__LinkUuApp.State> {
        }


        interface LinkUuAppServer extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Mixin {
        }

        class LinkUuAppServer extends React.Component<Bricks__LinkUuAppServer.Props, Bricks__LinkUuAppServer.State> {
        }


        interface LinkUuAppServerJava extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Mixin {
        }

        class LinkUuAppServerJava extends React.Component<Bricks__LinkUuAppServerJava.Props, Bricks__LinkUuAppServerJava.State> {
        }


        interface LinkUuBmlDraw extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Mixin {
        }

        class LinkUuBmlDraw extends React.Component<Bricks__LinkUuBmlDraw.Props, Bricks__LinkUuBmlDraw.State> {
        }


        interface LinkUuBookKit extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Mixin {
        }

        class LinkUuBookKit extends React.Component<Bricks__LinkUuBookKit.Props, Bricks__LinkUuBookKit.State> {
        }


        interface LinkUuBT extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Mixin {
        }

        class LinkUuBT extends React.Component<Bricks__LinkUuBT.Props, Bricks__LinkUuBT.State> {
        }


        interface LinkUuCloud extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Mixin {
        }

        class LinkUuCloud extends React.Component<Bricks__LinkUuCloud.Props, Bricks__LinkUuCloud.State> {
        }


        interface LinkUuDocKit extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Mixin {
        }

        class LinkUuDocKit extends React.Component<Bricks__LinkUuDocKit.Props, Bricks__LinkUuDocKit.State> {
        }


        interface LinkUuKnowledgeBase extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Mixin {
        }

        class LinkUuKnowledgeBase extends React.Component<Bricks__LinkUuKnowledgeBase.Props, Bricks__LinkUuKnowledgeBase.State> {
        }


        interface LinkUuMT extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Mixin {
        }

        class LinkUuMT extends React.Component<Bricks__LinkUuMT.Props, Bricks__LinkUuMT.State> {
        }


        interface LinkUuOIDC extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Mixin {
        }

        class LinkUuOIDC extends React.Component<Bricks__LinkUuOIDC.Props, Bricks__LinkUuOIDC.State> {
        }


        interface LinkUuP extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Mixin {
        }

        class LinkUuP extends React.Component<Bricks__LinkUuP.Props, Bricks__LinkUuP.State> {
        }


        interface LinkUuPlus4U5 extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Mixin {
        }

        class LinkUuPlus4U5 extends React.Component<Bricks__LinkUuPlus4U5.Props, Bricks__LinkUuPlus4U5.State> {
        }


        interface LinkW3Schools extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Mixin {
        }

        class LinkW3Schools extends React.Component<Bricks__LinkW3Schools.Props, Bricks__LinkW3Schools.State> {
        }


        interface Loader extends CombinedMixins.Base.Mixin {
        }

        class Loader extends React.Component<Bricks__Loader.Props, Bricks__Loader.State> {
        }


        interface Loading extends CombinedMixins.BaseColorSchemaContentElementaryNestingLevelPureRender.Mixin {
        }

        class Loading extends React.Component<Bricks__Loading.Props, Bricks__Loading.State> {
        }


        interface Lsi extends CombinedMixins.BaseContentElementaryLsiNestingLevelPureRender.Mixin {
        }

        class Lsi extends React.Component<Bricks__Lsi.Props, Bricks__Lsi.State> {
            isLsi(): any;
        }


        interface LsiContext extends CombinedMixins.BaseContent.Mixin {
        }

        class LsiContext extends React.Component<Bricks__LsiContext.Props, Bricks__LsiContext.State> {
            setLanguage(language: any): any;

            getLanguage(): any;

            registerLsi(id: any, listener: any): any;

            unregisterLsi(id: any): any;
        }


        interface Mark extends CombinedMixins.BaseColorSchemaContentElementaryNestingLevelPureRender.Mixin {
        }

        class Mark extends React.Component<Bricks__Mark.Props, Bricks__Mark.State> {
        }


        interface Modal extends CombinedMixins.BaseCcrReaderElementaryNestingLevelPureRenderSection.Mixin {
        }

        class Modal extends React.Component<Bricks__Modal.Props, Bricks__Modal.State> {
            isModal(): any;

            open(openProps: any, setStateCallback?: () => {}): any;

            close(shouldOnClose: any, setStateCallback?: () => {}): any;

            toggle(setStateCallback?: () => {}): any;

            isSticky(): any;

            onCloseDefault(): any;
        }


        namespace NavBar {


            interface Header extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Mixin {
            }

            class Header extends React.Component<Bricks__NavBarHeader.Props, Bricks__NavBarHeader.State> {
            }


            namespace NavBarNav {


                interface Item extends CombinedMixins.BaseColorSchemaContentElementaryPureRender.Mixin {
                }

                class Item extends React.Component<Bricks__NavBarNavItem.Props, Bricks__NavBarNavItem.State> {
                }


            }

            interface Nav extends CombinedMixins.BaseContentElementaryPureRender.Mixin {
            }

            class Nav extends React.Component<Bricks__NavBarNav.Props, Bricks__NavBarNav.State> {
                isNav(): any;
            }


        }

        interface NavBar extends CombinedMixins.BaseColorSchemaContentElementaryNestingLevelPureRender.Mixin {
        }

        class NavBar extends React.Component<Bricks__NavBar.Props, Bricks__NavBar.State> {
            isNavBar(): any;

            isOpen(): any;

            open(setStateCallback?: () => {}): any;

            close(setStateCallback?: () => {}): any;

            toggle(setStateCallback?: () => {}): any;

            getOffset(): any;
        }


        interface Newspaper extends CombinedMixins.BaseColorSchemaElementaryNestingLevelPureRenderSection.Mixin {
        }

        class Newspaper extends React.Component<Bricks__Newspaper.Props, Bricks__Newspaper.State> {
        }


        interface Number extends CombinedMixins.BaseElementaryNestingLevelPureRender.Mixin {
        }

        class Number extends React.Component<Bricks__Number.Props, Bricks__Number.State> {
            getCountry(): any;

            setCountry(country: any, setStateCallback?: () => {}): any;

            getDecimalSeparator(): any;

            setDecimalSeparator(decimalSeparator: any, setStateCallback?: () => {}): any;

            getThousandSeparator(): any;

            setThousandSeparator(thousandSeparator: any, setStateCallback?: () => {}): any;

            setOptions(opt: any, setStateCallback?: () => {}): any;

            onChangeDefault(opt: any): any;
        }


        interface Ol extends CombinedMixins.BaseElementaryNestingLevelSection.Mixin {
        }

        class Ol extends React.Component<Bricks__Ol.Props, Bricks__Ol.State> {
        }


        interface P extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Mixin {
        }

        class P extends React.Component<Bricks__P.Props, Bricks__P.State> {
        }


        namespace Page {


            interface MenuButton extends CombinedMixins.BaseCcrReaderColorSchemaContentElementaryNestingLevel.Mixin {
            }

            class MenuButton extends React.Component<Bricks__PageMenuButton.Props, Bricks__PageMenuButton.State> {
                onClickDefault(component: any, e: any): any;
            }


        }

        interface Page extends CombinedMixins.BaseCcrWriterContentElementaryNestingLevelPureRenderScreenSize.Mixin {
        }

        class Page extends React.Component<Bricks__Page.Props, Bricks__Page.State> {
            isPage(): any;

            isLeftFloat(): any;

            isRightFloat(): any;

            isLeftOpen(): any;

            isRightOpen(): any;

            getLeftColumn(): any;

            getLeft(): any;

            getRightColumn(): any;

            getRight(): any;

            getLeftOpen(): any;

            getLeftClosed(): any;

            getRightOpen(): any;

            getRightClosed(): any;

            getTop(): any;

            getBottom(): any;

            toggleLeft(setStateCallback?: () => {}): any;

            openLeft(setStateCallback?: () => {}): any;

            closeLeft(setStateCallback?: () => {}): any;

            toggleRight(setStateCallback?: () => {}): any;

            openRight(setStateCallback?: () => {}): any;

            closeRight(setStateCallback?: () => {}): any;

            getUserLayer(): any;

            getAppLayer(): any;

            getSystemLayer(): any;

            getAlertBus(): any;

            getModal(): any;

            getPopover(): any;
        }


        interface Pager extends CombinedMixins.BaseColorSchemaElementaryNestingLevelPureRender.Mixin {
        }

        class Pager extends React.Component<Bricks__Pager.Props, Bricks__Pager.State> {
        }


        interface Pagination extends CombinedMixins.BaseColorSchemaElementaryNestingLevelPureRender.Mixin {
        }

        class Pagination extends React.Component<Bricks__Pagination.Props, Bricks__Pagination.State> {
            getItemsLength(): any;

            getActiveIndex(): any;

            setActiveIndex(activeIndex: any, setStateCallback?: () => {}): any;

            increaseActiveIndex(setStateCallback?: () => {}): any;

            decreaseActiveIndex(setStateCallback?: () => {}): any;

            onChangeDefault(component: any, newActive: any, event: any): any;
        }


        interface Panel extends CombinedMixins.BaseColorSchemaElementaryNestingLevelPureRenderSection.Mixin {
        }

        class Panel extends React.Component<Bricks__Panel.Props, Bricks__Panel.State> {
            isPanel(): any;

            setExpandedValue(expanded: any, setStateCallback?: () => {}): any;

            expand(setStateCallback?: () => {}): any;

            collapse(setStateCallback?: () => {}): any;

            toggle(setStateCallback?: () => {}): any;

            isExpanded(): any;

            isExpandable(props: any): any;
        }


        interface Paragraph extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Mixin {
        }

        class Paragraph extends React.Component<Bricks__Paragraph.Props, Bricks__Paragraph.State> {
        }


        interface Popover extends CombinedMixins.BaseCcrWriterElementaryNestingLevelPureRenderSection.Mixin {
        }

        class Popover extends React.Component<Bricks__Popover.Props, Bricks__Popover.State> {
            open(opt: any, setStateCallback?: () => {}): any;

            close(setStateCallback?: () => {}): any;

            isOpen(): any;
        }


        interface Pre extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Mixin {
        }

        class Pre extends React.Component<Bricks__Pre.Props, Bricks__Pre.State> {
        }


        namespace ProgressBar {


            interface Item extends CombinedMixins.BaseColorSchemaContentElementaryNestingLevelPureRender.Mixin {
            }

            class Item extends React.Component<Bricks__ProgressBarItem.Props, Bricks__ProgressBarItem.State> {
                getProgress(): any;

                getProgressContent(): any;

                isStriped(): any;

                isAnimated(): any;

                setProgress(params: any, setStateCallback?: () => {}): any;

                increase(params: any, setStateCallback?: () => {}): any;

                decrease(params: any, setStateCallback?: () => {}): any;
            }


        }

        interface ProgressBar extends CombinedMixins.BaseColorSchemaContentElementaryNestingLevelPureRender.Mixin {
        }

        class ProgressBar extends React.Component<Bricks__ProgressBar.Props, Bricks__ProgressBar.State> {
            isProgressBar(): any;

            isPossibleChangeProgress(progress: any): any;

            isPossibleIncrease(increasedValue: any): any;

            isPossibleDecrease(decreasedValue: any): any;

            getProgress(name: any): any;

            setProgress(params: any, setStateCallback?: () => {}): any;

            increase(params: any, setStateCallback?: () => {}): any;

            decrease(params: any, setStateCallback?: () => {}): any;

            getItem(name: any): any;
        }


        interface ProgressBus extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Mixin {
        }

        class ProgressBus extends React.Component<Bricks__ProgressBus.Props, Bricks__ProgressBus.State> {
            addItem(itemProps: any, setStateCallback?: () => {}): any;

            removeItem(itemId: any, setStateCallback?: () => {}): any;

            getItem(itemId: any): any;

            getItemByCode(code: any): any;

            getItemsByCode(code: any): any;

            setItem(itemId: any, itemProps: any, setStateCallback?: () => {}): any;

            updateItem(itemId: any, itemProps: any, setStateCallback?: () => {}): any;

            getItemList(): any;

            showAlert(itemId: any, setStateCallback?: () => {}): any;

            hideAlert(itemId: any, setStateCallback?: () => {}): any;
        }


        interface Rating extends CombinedMixins.BaseColorSchemaElementaryPureRender.Mixin {
        }

        class Rating extends React.Component<Bricks__Rating.Props, Bricks__Rating.State> {
        }


        namespace Resize {


            interface Item extends CombinedMixins.BaseContentElementaryNestingLevel.Mixin {
            }

            class Item extends React.Component<Bricks__ResizeItem.Props, Bricks__ResizeItem.State> {
            }


        }

        interface Resize extends CombinedMixins.BaseContentElementaryNestingLevelResize.Mixin {
        }

        class Resize extends React.Component<Bricks__Resize.Props, Bricks__Resize.State> {
            isResize(): any;
        }


        interface Row extends CombinedMixins.BaseElementaryNestingLevelPureRenderSection.Mixin {
        }

        class Row extends React.Component<Bricks__Row.Props, Bricks__Row.State> {
        }


        interface S extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Mixin {
        }

        class S extends React.Component<Bricks__S.Props, Bricks__S.State> {
        }


        interface Samp extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Mixin {
        }

        class Samp extends React.Component<Bricks__Samp.Props, Bricks__Samp.State> {
        }


        namespace ScreenSize {


            interface Item extends CombinedMixins.BaseContentElementaryNestingLevel.Mixin {
            }

            class Item extends React.Component<Bricks__ScreenSizeItem.Props, Bricks__ScreenSizeItem.State> {
            }


        }

        interface ScreenSize extends CombinedMixins.BaseContentElementaryNestingLevelScreenSize.Mixin {
        }

        class ScreenSize extends React.Component<Bricks__ScreenSize.Props, Bricks__ScreenSize.State> {
            isScreenSize(): any;
        }


        interface Section extends CombinedMixins.BaseColorSchemaEditableElementaryNestingLevelPureRenderSection.Mixin {
        }

        class Section extends React.Component<Bricks__Section.Props, Bricks__Section.State> {
        }


        namespace Slider {


            interface Item extends CombinedMixins.BaseContentElementary.Mixin {
            }

            class Item extends React.Component<Bricks__SliderItem.Props, Bricks__SliderItem.State> {
                getValue(): any;

                setValue(value: any, setStateCallback?: () => {}): any;

                increase(value: any, setStateCallback?: () => {}): any;

                decrease(value: any, setStateCallback?: () => {}): any;
            }


        }

        interface Slider extends CombinedMixins.BaseColorSchemaContentElementaryNestingLevelPureRender.Mixin {
        }

        class Slider extends React.Component<Bricks__Slider.Props, Bricks__Slider.State> {
            getPointers(): any;

            getValue(): any;

            setValue(value: any, setStateCallback?: () => {}): any;

            increase(value: any, setStateCallback?: () => {}): any;

            decrease(value: any, setStateCallback?: () => {}): any;

            onChangeDefault(opt: any): any;
        }


        interface Small extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Mixin {
        }

        class Small extends React.Component<Bricks__Small.Props, Bricks__Small.State> {
        }


        interface Span extends CombinedMixins.BaseContentElementaryPureRender.Mixin {
        }

        class Span extends React.Component<Bricks__Span.Props, Bricks__Span.State> {
        }


        interface Spreadsheet extends CombinedMixins.BaseElementaryPureRenderSection.Mixin {
        }

        class Spreadsheet extends React.Component<Bricks__Spreadsheet.Props, Bricks__Spreadsheet.State> {
            lsi(): any;
        }


        namespace Stepper {


            interface Item extends CombinedMixins.BaseColorSchemaElementary.Mixin {
            }

            class Item extends React.Component<Bricks__StepperItem.Props, Bricks__StepperItem.State> {
            }


        }

        interface Stepper extends CombinedMixins.BaseColorSchemaElementaryNestingLevelResize.Mixin {
        }

        class Stepper extends React.Component<Bricks__Stepper.Props, Bricks__Stepper.State> {
        }


        interface Strong extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Mixin {
        }

        class Strong extends React.Component<Bricks__Strong.Props, Bricks__Strong.State> {
        }


        namespace Swiper {


            interface Menu extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Mixin {
            }

            class Menu extends React.Component<Bricks__SwiperMenu.Props, Bricks__SwiperMenu.State> {
            }


            interface Body extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Mixin {
            }

            class Body extends React.Component<Bricks__SwiperBody.Props, Bricks__SwiperBody.State> {
            }


        }

        interface Swiper extends CombinedMixins.BaseContentElementaryNestingLevelPureRenderSwipe.Mixin {
        }

        class Swiper extends React.Component<Bricks__Swiper.Props, Bricks__Swiper.State> {
            isSwiper(): any;

            openLeftMenu(setStateCallback?: () => {}): any;

            closeLeftMenu(setStateCallback?: () => {}): any;

            toggleLeftMenu(setStateCallback?: () => {}): any;

            openRightMenu(setStateCallback?: () => {}): any;

            closeRightMenu(setStateCallback?: () => {}): any;

            toggleRightMenu(setStateCallback?: () => {}): any;

            isLeftMenuOpen(): any;

            isRightMenuOpen(): any;

            onSwipeCloseRightMenuDefault(component: any): any;

            onSwipeOpenLeftMenuDefault(component: any): any;

            onSwipeCloseLeftMenuDefault(component: any): any;

            onSwipeOpenRightMenuDefault(component: any): any;
        }


        interface Switch extends CombinedMixins.BaseColorSchemaElementaryPureRender.Mixin {
        }

        class Switch extends React.Component<Bricks__Switch.Props, Bricks__Switch.State> {
            setSwitched(switchedOn: any, setStateCallback?: () => {}): any;

            switchOn(setStateCallback?: () => {}): any;

            switchOff(setStateCallback?: () => {}): any;

            toggle(setStateCallback?: () => {}): any;

            isSwitchedOn(): any;

            onChangeDefault(opt: any): any;

            focus(): any;
        }


        namespace Table {


            interface ColGroup extends CombinedMixins.BaseColorSchemaContentElementaryNestingLevelPureRender.Mixin {
            }

            class ColGroup extends React.Component<Bricks__TableColGroup.Props, Bricks__TableColGroup.State> {
                isColGroup(): any;
            }


            interface Col extends CombinedMixins.BaseColorSchemaElementaryNestingLevelPureRender.Mixin {
            }

            class Col extends React.Component<Bricks__TableCol.Props, Bricks__TableCol.State> {
            }


            interface TBody extends CombinedMixins.BaseColorSchemaContentElementaryNestingLevelPureRender.Mixin {
            }

            class TBody extends React.Component<Bricks__TableTbody.Props, Bricks__TableTbody.State> {
                isTBody(): any;
            }


            interface Td extends CombinedMixins.BaseColorSchemaContentElementaryNestingLevelPureRender.Mixin {
            }

            class Td extends React.Component<Bricks__TableTd.Props, Bricks__TableTd.State> {
            }


            interface TFoot extends CombinedMixins.BaseColorSchemaContentElementaryNestingLevelPureRender.Mixin {
            }

            class TFoot extends React.Component<Bricks__TableTfoot.Props, Bricks__TableTfoot.State> {
                isTFoot(): any;
            }


            interface Th extends CombinedMixins.BaseColorSchemaContentElementaryNestingLevelPureRender.Mixin {
            }

            class Th extends React.Component<Bricks__TableTh.Props, Bricks__TableTh.State> {
            }


            interface THead extends CombinedMixins.BaseColorSchemaContentElementaryNestingLevelPureRender.Mixin {
            }

            class THead extends React.Component<Bricks__TableThead.Props, Bricks__TableThead.State> {
                isTHead(): any;
            }


            interface Tr extends CombinedMixins.BaseColorSchemaContentElementaryNestingLevelPureRender.Mixin {
            }

            class Tr extends React.Component<Bricks__TableTr.Props, Bricks__TableTr.State> {
                isTr(): any;
            }


        }

        interface Table extends CombinedMixins.BaseColorSchemaElementaryNestingLevelPureRenderSection.Mixin {
        }

        class Table extends React.Component<Bricks__Table.Props, Bricks__Table.State> {
            isTable(): any;
        }


        namespace Tabs {


            interface Item extends CombinedMixins.BaseElementaryNestingLevelPureRenderSection.Mixin {
            }

            class Item extends React.Component<Bricks__TabsItem.Props, Bricks__TabsItem.State> {
            }


        }

        interface Tabs extends CombinedMixins.BaseColorSchemaContentElementaryNestingLevelPureRenderScreenSize.Mixin {
        }

        class Tabs extends React.Component<Bricks__Tabs.Props, Bricks__Tabs.State> {
            isTabs(): any;

            setActive(name: any): any;

            getActive(): any;

            onChangeDefault(tab: any): any;
        }


        interface Text extends CombinedMixins.BaseColorSchemaContentElementaryNestingLevelPureRender.Mixin {
        }

        class Text extends React.Component<Bricks__Text.Props, Bricks__Text.State> {
        }


        interface Todo extends CombinedMixins.BaseElementaryNestingLevelSection.Mixin {
        }

        class Todo extends React.Component<Bricks__Todo.Props, Bricks__Todo.State> {
        }


        interface TouchIcon extends CombinedMixins.BaseColorSchemaContentEditableElementaryNestingLevelPureRender.Mixin {
        }

        class TouchIcon extends React.Component<Bricks__TouchIcon.Props, Bricks__TouchIcon.State> {
        }


        namespace Tree {


            interface List extends CombinedMixins.BaseContentElementaryPureRender.Mixin {
            }

            class List extends React.Component<Bricks__TreeList.Props, Bricks__TreeList.State> {
                isTreeList(): any;
            }


            interface Item extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Mixin {
            }

            class Item extends React.Component<Bricks__TreeItem.Props, Bricks__TreeItem.State> {
                isTreeItem(): any;

                expand(setStateCallback?: () => {}): any;

                collapse(setStateCallback?: () => {}): any;

                toggleExpanded(setStateCallback?: () => {}): any;

                isExpanded(): any;
            }


        }

        interface Tree extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Mixin {
        }

        class Tree extends React.Component<Bricks__Tree.Props, Bricks__Tree.State> {
            isTree(): any;
        }


        interface U extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Mixin {
        }

        class U extends React.Component<Bricks__U.Props, Bricks__U.State> {
        }


        interface Ul extends CombinedMixins.BaseElementaryNestingLevelSection.Mixin {
        }

        class Ul extends React.Component<Bricks__Ul.Props, Bricks__Ul.State> {
        }


        interface Var extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Mixin {
        }

        class Var extends React.Component<Bricks__Var.Props, Bricks__Var.State> {
        }


        interface Video extends CombinedMixins.BaseElementaryNestingLevelPureRender.Mixin {
        }

        class Video extends React.Component<Bricks__Video.Props, Bricks__Video.State> {
            toggleMuted(): any;
        }


        interface VirtualList extends CombinedMixins.BaseElementary.Mixin {
        }

        class VirtualList extends React.Component<Bricks__VirtualList.Props, Bricks__VirtualList.State> {
            getScrollTop(): any;

            setScrollTop(scrollTop: any): any;
        }


        interface Well extends CombinedMixins.BaseColorSchemaContentElementaryNestingLevelPureRender.Mixin {
        }

        class Well extends React.Component<Bricks__Well.Props, Bricks__Well.State> {
        }


        interface YoutubeVideo extends CombinedMixins.BaseElementaryNestingLevelPureRender.Mixin {
        }

        class YoutubeVideo extends React.Component<Bricks__YoutubeVideo.Props, Bricks__YoutubeVideo.State> {
        }


// endregion
    }

    namespace Forms {
        // region NSForms


        interface Calendar extends CombinedMixins.BaseElementaryLsiSwipe.Mixin {
        }

        class Calendar extends React.Component<Forms__Calendar.Props, Forms__Calendar.State> {
            setPrevious(setStateCallback?: () => {}): any;

            setNext(setStateCallback?: () => {}): any;

            getDate(): any;

            setDate(date: any, setStateCallback?: () => {}): any;

            onChangeDefault(opt: any): any;

            lsi(): any;
        }


        interface Checkbox extends CombinedMixins.BaseColorSchemaElementaryInputPureRender.Mixin {
        }

        class Checkbox extends React.Component<Forms__Checkbox.Props, Forms__Checkbox.State> {
            onChangeDefault(opt: any): any;
        }


        interface Checkboxes extends CombinedMixins.BaseColorSchemaElementaryGroupInputPureRenderScreenSize.Mixin {
        }

        class Checkboxes extends React.Component<Forms__Checkboxes.Props, Forms__Checkboxes.State> {
            onChangeDefault(opt: any): any;

            lsi(): any;
        }


        interface Controls extends CombinedMixins.Controls.Mixin {
        }

        class Controls extends React.Component<Forms__Controls.Props, Forms__Controls.State> {
            lsi(): any;
        }


        interface Datepicker extends CombinedMixins.BaseElementaryPureRenderScreenSizeTextInput.Mixin {
        }

        class Datepicker extends React.Component<Forms__Datepicker.Props, Forms__Datepicker.State> {
            toggle(setStateCallback?: () => {}): any;

            parseDate(stringDate: any): any;

            parseDateDefault(stringDate: any): any;
        }


        interface Datetimepicker extends CombinedMixins.BaseElementaryScreenSizeTextInput.Mixin {
        }

        class Datetimepicker extends React.Component<Forms__Datetimepicker.Props, Forms__Datetimepicker.State> {
            openCalendar(setStateCallback?: () => {}): any;

            openTime(setStateCallback?: () => {}): any;

            toggleCalendar(setStateCallback?: () => {}): any;

            toggleTime(setStateCallback?: () => {}): any;

            parseDateDefault(stringDate: any): any;

            lsi(): any;
        }


        interface File extends CombinedMixins.BaseChoiceColorSchemaContentElementaryInputPureRender.Mixin {
        }

        class File extends React.Component<Forms__File.Props, Forms__File.State> {
            addValue(file: any, setStateCallback?: () => {}): any;

            onChangeDefault(opt: any): any;

            lsi(): any;
        }


        interface Form extends CombinedMixins.BaseElementaryFormPureRenderSection.Mixin {
        }

        class Form extends React.Component<Forms__Form.Props, Forms__Form.State> {
        }


        interface Iconpicker extends CombinedMixins.BaseColorSchemaElementaryInputPureRenderScreenSize.Mixin {
        }

        class Iconpicker extends React.Component<Forms__Iconpicker.Props, Forms__Iconpicker.State> {
            open(setStateCallback?: () => {}): any;

            close(setStateCallback?: () => {}): any;

            toggle(setStateCallback?: () => {}): any;

            isOpen(): any;

            isLoadingData(): any;

            isValid(): any;

            onChangeDefault(opt: any): any;

            lsi(): any;
        }


        interface Number extends CombinedMixins.BaseElementaryPureRenderTextInput.Mixin {
        }

        class Number extends React.Component<Forms__Number.Props, Forms__Number.State> {
        }


        interface PropsForm extends CombinedMixins.BaseElementaryPureRenderSection.Mixin {
        }

        class PropsForm extends React.Component<Forms__PropsForm.Props, Forms__PropsForm.State> {
        }


        interface Radios extends CombinedMixins.BaseColorSchemaElementaryGroupInputPureRenderScreenSize.Mixin {
        }

        class Radios extends React.Component<Forms__Radios.Props, Forms__Radios.State> {
            onChangeDefault(opt: any, setStateCallback?: () => {}): any;

            lsi(): any;
        }


        namespace Select {


            interface Option extends CombinedMixins.BaseContentElementaryPureRender.Mixin {
            }

            class Option extends React.Component<Forms__SelectOption.Props, Forms__SelectOption.State> {
                getValue(): any;

                focus(): any;
            }


        }

        interface Select extends CombinedMixins.BaseChoiceColorSchemaContentElementaryInputPureRenderScreenSize.Mixin {
        }

        class Select extends React.Component<Forms__Select.Props, Forms__Select.State> {
            isSelect(): any;

            isOpen(): any;

            open(setStateCallback?: () => {}): any;

            close(setStateCallback?: () => {}): any;

            toggle(setStateCallback?: () => {}): any;

            addValue(index: any, setStateCallback?: () => {}): any;

            removeValue(opt: any, setStateCallback?: () => {}): any;

            onChangeDefault(opt: any): any;

            lsi(): any;
        }


        interface Slider extends CombinedMixins.BaseColorSchemaContentElementaryInputPureRender.Mixin {
        }

        class Slider extends React.Component<Forms__Slider.Props, Forms__Slider.State> {
            onChangeDefault(opt: any): any;
        }


        interface Text extends CombinedMixins.BaseElementaryPureRenderTextInput.Mixin {
        }

        class Text extends React.Component<Forms__Text.Props, Forms__Text.State> {
            lsi(): any;
        }


        interface TextArea extends CombinedMixins.BaseElementaryPureRenderTextInput.Mixin {
        }

        class TextArea extends React.Component<Forms__TextArea.Props, Forms__TextArea.State> {
            lsi(): any;
        }


        interface TextButton extends CombinedMixins.BaseElementaryPureRenderTextInput.Mixin {
        }

        class TextButton extends React.Component<Forms__TextButton.Props, Forms__TextButton.State> {
            lsi(): any;
        }


        interface TextIcon extends CombinedMixins.BaseElementaryPureRenderTextInput.Mixin {
        }

        class TextIcon extends React.Component<Forms__TextIcon.Props, Forms__TextIcon.State> {
            lsi(): any;
        }


        interface Time extends CombinedMixins.BaseElementaryLsiPureRenderScreenSize.Mixin {
        }

        class Time extends React.Component<Forms__Time.Props, Forms__Time.State> {
            onChangeDefault(opt: any): any;

            lsi(): any;
        }


        interface Timepicker extends CombinedMixins.BaseElementaryPureRenderScreenSizeTextInput.Mixin {
        }

        class Timepicker extends React.Component<Forms__Timepicker.Props, Forms__Timepicker.State> {
            toggle(setStateCallback?: () => {}): any;
        }


// endregion
    }

    namespace Typings {
        // region NSTypings
        class BaseContentElementaryNestingLevelPureRender extends React.Component<CombinedMixins.BaseContentElementaryNestingLevelPureRender.Props, CombinedMixins.BaseContentElementaryNestingLevelPureRender.State> {
            getTagName(): string;

            getMixinRegister(): Array<object>;

            registerMixin(mixinName: string): this;

            hasMixin(mixinName: string): boolean;

            isRendered(): boolean;

            getClassName(item: string, mixinName?: string): string;

            getClassName(): object;

            getDefault(item: string, mixinName?: string): any;

            getOpt(item: string, mixinName?: string): any;

            getLimit(item: string, mixinName?: string): number;

            getLsi(item: string, mixinName?: string): LsiValue;

            getLsiComponent(item: string, mixinName?: string, params?: object): React.ReactNode;

            getLsiValue(item: string, mixinName?: string, params?: object): string;

            getLsiItem(value: LsiValue, params?: object): string;

            isRendered(): boolean;

            setAsyncState(newState: (prevState: object) => object, setStateCallback?: () => void): this;

            setAsyncState(newState: object, setStateCallback?: () => void): this;

            getId(): string;

            getName(): string;

            getTooltip(): string;

            getMainPropsToPass(mixinNames?: Array<string>): CombinedMixins.BaseContentElementaryNestingLevelPureRender.Props

            getMainAttrs(): React.HTMLAttributes<HTMLElement>;

            getParent(): React.ReactNode;

            getParentByType(typeFunction: string): React.ReactNode;

            checkParentTagName(parentTagName: string): React.ReactNode;

            checkParentType(parentTypeFunction: string): React.ReactNode;

            getIndex(): number;

            getFullClassName(className): string

            stringToObjectType(string: string, type: any, prefix: object): any;

            switchChildrenToBody(props: object): object;

            findDOMNode(): HTMLElement;

            showError(msgKey: string, msgParams: Array<string>, opt?: WithContext): this;

            showError(msgKey: string, msgParams: string, opt?: WithContext): this;

            showWarning(msgKey: string, msgParams: Array<string>, opt?: WithContext): this;

            showWarning(msgKey: string, msgParams: string, opt?: WithContext): this;

            replaceByHardSpace(text: string, language: string): string;

            shouldRender(nextProps, nextState, thisProps, thisState): boolean

            isDynamic(): boolean;

            getContent(): Uu5Content;

            expandChildProps(prevChild: React.ReactNode, childIndex: number): object;

            buildChild(childTag: string, childProps?: object, children?: React.ReactChildren): React.ReactNode;

            cloneChild(child: React.ReactNode, props: object): React.ReactNode;

            expandChildDefault(child: React.ReactNode, key?: any): React.ReactNode

            buildNodeChildren(children: React.ReactChildren, childPropsExpander: (child: React.ReactNode, index: number) => object): React.ReactChildren;

            shouldChildRender(child: React.ReactChildren): boolean;

            buildChildren(contentProps: object, childPropsExpander: (child: React.ReactNode, index: number) => object, childIndex: number): React.ReactChildren;

            buildChildrenDefault(contentProps: object, childPropsExpander: (child: React.ReactNode, index: number) => object, childIndex: number): React.ReactChildren;

            getStandardChildren(): React.ReactChildren;

            getOutlineChildren(): React.ReactChildren

            getChildren(): React.ReactChildren;

            getRenderedChildren(): React.ReactChild;

            getRenderedChildrenDefault(): React.ReactChild;

            setRenderedChildren(childrenIndexList: any): this;

            // TODO
            addRenderedChild(renderedChild, index): this;

            // TODO
            removeRenderedChild(renderedChild): this;

            // TODO
            getRenderedChildrenIdList(): any;

            // TODO
            setRenderedChildrenIdList(childrenIdList): this;

            // TODO
            addRenderedChildToIdList(renderedChild): this;

            // TODO
            removeRenderedChildFromIdList(renderedChild): this;

            // TODO
            getRenderedChildrenNameList(): any;

            // TODO
            setRenderedChildrenNameList(childrenNameList): this;

            // TODO
            addRenderedChildToNameList(renderedChild): this;

            // TODO
            removeRenderedChildFromNameList(renderedChild): this;

            getChildIndexById(childId: string): number;

            getChildIndexByIdDefault(childId: string): number;

            getRenderedChildById(childId: string): React.ReactChild;

            getRenderedChildByIdDefault(childId: string): React.ReactChild;

            getRenderedChildrenByName(childName: string): React.ReactChildren;

            getRenderedChildByName(childName: string): React.ReactChild;

            getRenderedChildByNameDefault(childName: string): React.ReactChild;

            getRenderedChildByIndex(index: number): React.ReactChild;

            getRenderedChildByIndexDefault(index: number): React.ReactChild;

            getRenderedChildByTagName(tagName: string): React.ReactChild;

            getRenderedChildByTagNameDefault(tagName: string): React.ReactChild;

            getFirstRenderedChild(): React.ReactChild;

            getFirstRenderedChildDefault(): React.ReactChild;

            getLastRenderedChild(): React.ReactChild;

            getLastRenderedChildDefault(): React.ReactChild;

            eachRenderedChild(callback: (rendredChild: React.ReactChild, index: number) => boolean): this;

            eachRenderedChildDefault(callback: (rendredChild: React.ReactChild, index: number) => boolean): this;

            registerRenderedChild(renderedChild: React.ReactChild, index: number): this;

            unregisterRenderedChild(renderedChild: React.ReactChild): this;

            // dynamic functions

            setChildren(newChildren: React.ReactChildren, setStateCallback?: () => void): this;

            setChildren(newChildren: React.ReactChildren, props?: object, setStateCallback?: () => void): this;

            setChildrenDefault(newChildren: React.ReactChildren, setStateCallback?: () => void): this;

            insertChild(child: object | React.ReactNode, opt?: { position?: number, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildDefault(child: object | React.ReactNode, opt?: { position?: number, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildBefore(child: object | React.ReactNode, opt?: { childAfterId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildBeforeDefault(child: object | React.ReactNode, opt?: { childAfterId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildAfter(child: object | React.ReactNode, opt?: { childBeforeId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildAfterDefault(child: object | React.ReactNode, opt?: { childBeforeId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            updateChild(childId: string, newProps: object, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this

            updateChildDefault(childId: string, newProps: object, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            replaceChild(childId: string, child: object | React.ReactNode, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            replaceChildDefault(childId: string, child: object | React.ReactNode, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            deleteChild(childId: string, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            deleteChildDefault(childId: string, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            clearChildren(opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            clearChildrenDefault(opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            // TODO
            setFilter(filter, setStateCallback?: () => void): this;

            resetFilter(setStateCallback?: () => void): this;

            // TODO
            setSorter(sorter, setStateCallback?: () => void): this;

            resetSorter(setStateCallback?: () => void): this;

            // TODO
            setFilterAndSorter(filter, sorter, setStateCallback?: () => void): this;

            resetFilterAndSorter(setStateCallback?: () => void): this;

            getFilteredSorterChildren(children?: React.ReactChildren): React.ReactChildren;

            setStandardMode(setStateCallback?: () => void): this;

            setOutlineMode(setStateCallback?: () => void): this;

            getMode(): string;

            isStandardMode(): boolean

            isOutlineMode(): boolean

            setHiddenValue(value: boolean, setStateCallback?: () => void): this;

            hide(setStateCallback?: () => void): this;

            hideDefault(setStateCallback?: () => void): void;

            show(setStateCallback?: () => void): this;

            showDefault(setStateCallback?: () => void): this;

            isHidden(): boolean;

            toggleHidden(setStateCallback?: () => void): this;

            toggleHiddenDefault(setStateCallback?: () => void): this;

            setDisabledValue(value: boolean, setStateCallback?: () => void): this;

            disable(setStateCallback?: () => void): this;

            disableDefault(setStateCallback?: () => void): this;

            enable(setStateCallback?: () => void): this

            enableDefault(setStateCallback?: () => void): this;

            isDisabled(): boolean;

            toggleDisabled(setStateCallback?: () => void): this;

            toggleDisabledDefault(setStateCallback?: () => void): this;

            setSelectedValue(value, setStateCallback?: () => void): this;

            select(setStateCallback?: () => void): this;

            selectDefault(setStateCallback?: () => void): this;

            deselect(setStateCallback?: () => void): this;

            deselectDefault(setStateCallback?: () => void): this

            isSelected(): boolean;

            toggleSelected(setStateCallback?: () => void): this;

            toggleSelectedDefault(setStateCallback?: () => void): this;

            buildMainAttrs(mainAttrs: object): React.HTMLAttributes<HTMLElement>;

            getHiddenClassName(className?: string): string;

            getDisabledClassName(className?: string): string;

            getSelectedClassName(className?: string): string

            getDisabledCover(): React.ReactNode

            getDisabledCoverTransparent(): React.ReactNode

            getNestingLevel(): NestingLevels

            getParentNestingLevel(): NestingLevels

            getNestingLevelList(): Array<NestingLevels>

            checkNestingLevel(): NestingLevels | null

        }


        class BaseColorSchemaContentEditableElementaryNestingLevelPureRender extends React.Component<CombinedMixins.BaseColorSchemaContentEditableElementaryNestingLevelPureRender.Props, CombinedMixins.BaseColorSchemaContentEditableElementaryNestingLevelPureRender.State> {
            getTagName(): string;

            getMixinRegister(): Array<object>;

            registerMixin(mixinName: string): this;

            hasMixin(mixinName: string): boolean;

            isRendered(): boolean;

            getClassName(item: string, mixinName?: string): string;

            getClassName(): object;

            getDefault(item: string, mixinName?: string): any;

            getOpt(item: string, mixinName?: string): any;

            getLimit(item: string, mixinName?: string): number;

            getLsi(item: string, mixinName?: string): LsiValue;

            getLsiComponent(item: string, mixinName?: string, params?: object): React.ReactNode;

            getLsiValue(item: string, mixinName?: string, params?: object): string;

            getLsiItem(value: LsiValue, params?: object): string;

            isRendered(): boolean;

            setAsyncState(newState: (prevState: object) => object, setStateCallback?: () => void): this;

            setAsyncState(newState: object, setStateCallback?: () => void): this;

            getId(): string;

            getName(): string;

            getTooltip(): string;

            getMainPropsToPass(mixinNames?: Array<string>): CombinedMixins.BaseColorSchemaContentEditableElementaryNestingLevelPureRender.Props

            getMainAttrs(): React.HTMLAttributes<HTMLElement>;

            getParent(): React.ReactNode;

            getParentByType(typeFunction: string): React.ReactNode;

            checkParentTagName(parentTagName: string): React.ReactNode;

            checkParentType(parentTypeFunction: string): React.ReactNode;

            getIndex(): number;

            getFullClassName(className): string

            stringToObjectType(string: string, type: any, prefix: object): any;

            switchChildrenToBody(props: object): object;

            findDOMNode(): HTMLElement;

            showError(msgKey: string, msgParams: Array<string>, opt?: WithContext): this;

            showError(msgKey: string, msgParams: string, opt?: WithContext): this;

            showWarning(msgKey: string, msgParams: Array<string>, opt?: WithContext): this;

            showWarning(msgKey: string, msgParams: string, opt?: WithContext): this;

            replaceByHardSpace(text: string, language: string): string;

            shouldRender(nextProps, nextState, thisProps, thisState): boolean

            getColorSchema(): string

            isDynamic(): boolean;

            getContent(): Uu5Content;

            expandChildProps(prevChild: React.ReactNode, childIndex: number): object;

            buildChild(childTag: string, childProps?: object, children?: React.ReactChildren): React.ReactNode;

            cloneChild(child: React.ReactNode, props: object): React.ReactNode;

            expandChildDefault(child: React.ReactNode, key?: any): React.ReactNode

            buildNodeChildren(children: React.ReactChildren, childPropsExpander: (child: React.ReactNode, index: number) => object): React.ReactChildren;

            shouldChildRender(child: React.ReactChildren): boolean;

            buildChildren(contentProps: object, childPropsExpander: (child: React.ReactNode, index: number) => object, childIndex: number): React.ReactChildren;

            buildChildrenDefault(contentProps: object, childPropsExpander: (child: React.ReactNode, index: number) => object, childIndex: number): React.ReactChildren;

            getStandardChildren(): React.ReactChildren;

            getOutlineChildren(): React.ReactChildren

            getChildren(): React.ReactChildren;

            getRenderedChildren(): React.ReactChild;

            getRenderedChildrenDefault(): React.ReactChild;

            setRenderedChildren(childrenIndexList: any): this;

            // TODO
            addRenderedChild(renderedChild, index): this;

            // TODO
            removeRenderedChild(renderedChild): this;

            // TODO
            getRenderedChildrenIdList(): any;

            // TODO
            setRenderedChildrenIdList(childrenIdList): this;

            // TODO
            addRenderedChildToIdList(renderedChild): this;

            // TODO
            removeRenderedChildFromIdList(renderedChild): this;

            // TODO
            getRenderedChildrenNameList(): any;

            // TODO
            setRenderedChildrenNameList(childrenNameList): this;

            // TODO
            addRenderedChildToNameList(renderedChild): this;

            // TODO
            removeRenderedChildFromNameList(renderedChild): this;

            getChildIndexById(childId: string): number;

            getChildIndexByIdDefault(childId: string): number;

            getRenderedChildById(childId: string): React.ReactChild;

            getRenderedChildByIdDefault(childId: string): React.ReactChild;

            getRenderedChildrenByName(childName: string): React.ReactChildren;

            getRenderedChildByName(childName: string): React.ReactChild;

            getRenderedChildByNameDefault(childName: string): React.ReactChild;

            getRenderedChildByIndex(index: number): React.ReactChild;

            getRenderedChildByIndexDefault(index: number): React.ReactChild;

            getRenderedChildByTagName(tagName: string): React.ReactChild;

            getRenderedChildByTagNameDefault(tagName: string): React.ReactChild;

            getFirstRenderedChild(): React.ReactChild;

            getFirstRenderedChildDefault(): React.ReactChild;

            getLastRenderedChild(): React.ReactChild;

            getLastRenderedChildDefault(): React.ReactChild;

            eachRenderedChild(callback: (rendredChild: React.ReactChild, index: number) => boolean): this;

            eachRenderedChildDefault(callback: (rendredChild: React.ReactChild, index: number) => boolean): this;

            registerRenderedChild(renderedChild: React.ReactChild, index: number): this;

            unregisterRenderedChild(renderedChild: React.ReactChild): this;

            // dynamic functions

            setChildren(newChildren: React.ReactChildren, setStateCallback?: () => void): this;

            setChildren(newChildren: React.ReactChildren, props?: object, setStateCallback?: () => void): this;

            setChildrenDefault(newChildren: React.ReactChildren, setStateCallback?: () => void): this;

            insertChild(child: object | React.ReactNode, opt?: { position?: number, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildDefault(child: object | React.ReactNode, opt?: { position?: number, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildBefore(child: object | React.ReactNode, opt?: { childAfterId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildBeforeDefault(child: object | React.ReactNode, opt?: { childAfterId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildAfter(child: object | React.ReactNode, opt?: { childBeforeId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildAfterDefault(child: object | React.ReactNode, opt?: { childBeforeId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            updateChild(childId: string, newProps: object, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this

            updateChildDefault(childId: string, newProps: object, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            replaceChild(childId: string, child: object | React.ReactNode, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            replaceChildDefault(childId: string, child: object | React.ReactNode, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            deleteChild(childId: string, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            deleteChildDefault(childId: string, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            clearChildren(opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            clearChildrenDefault(opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            // TODO
            setFilter(filter, setStateCallback?: () => void): this;

            resetFilter(setStateCallback?: () => void): this;

            // TODO
            setSorter(sorter, setStateCallback?: () => void): this;

            resetSorter(setStateCallback?: () => void): this;

            // TODO
            setFilterAndSorter(filter, sorter, setStateCallback?: () => void): this;

            resetFilterAndSorter(setStateCallback?: () => void): this;

            getFilteredSorterChildren(children?: React.ReactChildren): React.ReactChildren;

            setStandardMode(setStateCallback?: () => void): this;

            setOutlineMode(setStateCallback?: () => void): this;

            getMode(): string;

            isStandardMode(): boolean

            isOutlineMode(): boolean

            startWatchingResize(key: string, resizeCallback?: (opt: {
                id: string, width: number, height: number
            }) => void): void;

            stopWatchingResize(key: string): void

            setHiddenValue(value: boolean, setStateCallback?: () => void): this;

            hide(setStateCallback?: () => void): this;

            hideDefault(setStateCallback?: () => void): void;

            show(setStateCallback?: () => void): this;

            showDefault(setStateCallback?: () => void): this;

            isHidden(): boolean;

            toggleHidden(setStateCallback?: () => void): this;

            toggleHiddenDefault(setStateCallback?: () => void): this;

            setDisabledValue(value: boolean, setStateCallback?: () => void): this;

            disable(setStateCallback?: () => void): this;

            disableDefault(setStateCallback?: () => void): this;

            enable(setStateCallback?: () => void): this

            enableDefault(setStateCallback?: () => void): this;

            isDisabled(): boolean;

            toggleDisabled(setStateCallback?: () => void): this;

            toggleDisabledDefault(setStateCallback?: () => void): this;

            setSelectedValue(value, setStateCallback?: () => void): this;

            select(setStateCallback?: () => void): this;

            selectDefault(setStateCallback?: () => void): this;

            deselect(setStateCallback?: () => void): this;

            deselectDefault(setStateCallback?: () => void): this

            isSelected(): boolean;

            toggleSelected(setStateCallback?: () => void): this;

            toggleSelectedDefault(setStateCallback?: () => void): this;

            buildMainAttrs(mainAttrs: object): React.HTMLAttributes<HTMLElement>;

            getHiddenClassName(className?: string): string;

            getDisabledClassName(className?: string): string;

            getSelectedClassName(className?: string): string

            getDisabledCover(): React.ReactNode

            getDisabledCoverTransparent(): React.ReactNode

            getNestingLevel(): NestingLevels

            getParentNestingLevel(): NestingLevels

            getNestingLevelList(): Array<NestingLevels>

            checkNestingLevel(): NestingLevels | null

        }


        class BaseCcrWriterElementaryNestingLevelPureRender extends React.Component<CombinedMixins.BaseCcrWriterElementaryNestingLevelPureRender.Props, CombinedMixins.BaseCcrWriterElementaryNestingLevelPureRender.State> {
            getTagName(): string;

            getMixinRegister(): Array<object>;

            registerMixin(mixinName: string): this;

            hasMixin(mixinName: string): boolean;

            isRendered(): boolean;

            getClassName(item: string, mixinName?: string): string;

            getClassName(): object;

            getDefault(item: string, mixinName?: string): any;

            getOpt(item: string, mixinName?: string): any;

            getLimit(item: string, mixinName?: string): number;

            getLsi(item: string, mixinName?: string): LsiValue;

            getLsiComponent(item: string, mixinName?: string, params?: object): React.ReactNode;

            getLsiValue(item: string, mixinName?: string, params?: object): string;

            getLsiItem(value: LsiValue, params?: object): string;

            isRendered(): boolean;

            setAsyncState(newState: (prevState: object) => object, setStateCallback?: () => void): this;

            setAsyncState(newState: object, setStateCallback?: () => void): this;

            getId(): string;

            getName(): string;

            getTooltip(): string;

            getMainPropsToPass(mixinNames?: Array<string>): CombinedMixins.BaseCcrWriterElementaryNestingLevelPureRender.Props

            getMainAttrs(): React.HTMLAttributes<HTMLElement>;

            getParent(): React.ReactNode;

            getParentByType(typeFunction: string): React.ReactNode;

            checkParentTagName(parentTagName: string): React.ReactNode;

            checkParentType(parentTypeFunction: string): React.ReactNode;

            getIndex(): number;

            getFullClassName(className): string

            stringToObjectType(string: string, type: any, prefix: object): any;

            switchChildrenToBody(props: object): object;

            findDOMNode(): HTMLElement;

            showError(msgKey: string, msgParams: Array<string>, opt?: WithContext): this;

            showError(msgKey: string, msgParams: string, opt?: WithContext): this;

            showWarning(msgKey: string, msgParams: Array<string>, opt?: WithContext): this;

            showWarning(msgKey: string, msgParams: string, opt?: WithContext): this;

            replaceByHardSpace(text: string, language: string): string;

            shouldRender(nextProps, nextState, thisProps, thisState): boolean

            getCcrKey(props?: object): string;

            getCcrComponentByKey(key: string): React.ReactNode;

            isCcrRegisteredByKey(key: string): boolean;

            getCcrByKeyRegister(): object

            setHiddenValue(value: boolean, setStateCallback?: () => void): this;

            hide(setStateCallback?: () => void): this;

            hideDefault(setStateCallback?: () => void): void;

            show(setStateCallback?: () => void): this;

            showDefault(setStateCallback?: () => void): this;

            isHidden(): boolean;

            toggleHidden(setStateCallback?: () => void): this;

            toggleHiddenDefault(setStateCallback?: () => void): this;

            setDisabledValue(value: boolean, setStateCallback?: () => void): this;

            disable(setStateCallback?: () => void): this;

            disableDefault(setStateCallback?: () => void): this;

            enable(setStateCallback?: () => void): this

            enableDefault(setStateCallback?: () => void): this;

            isDisabled(): boolean;

            toggleDisabled(setStateCallback?: () => void): this;

            toggleDisabledDefault(setStateCallback?: () => void): this;

            setSelectedValue(value, setStateCallback?: () => void): this;

            select(setStateCallback?: () => void): this;

            selectDefault(setStateCallback?: () => void): this;

            deselect(setStateCallback?: () => void): this;

            deselectDefault(setStateCallback?: () => void): this

            isSelected(): boolean;

            toggleSelected(setStateCallback?: () => void): this;

            toggleSelectedDefault(setStateCallback?: () => void): this;

            buildMainAttrs(mainAttrs: object): React.HTMLAttributes<HTMLElement>;

            getHiddenClassName(className?: string): string;

            getDisabledClassName(className?: string): string;

            getSelectedClassName(className?: string): string

            getDisabledCover(): React.ReactNode

            getDisabledCoverTransparent(): React.ReactNode

            getNestingLevel(): NestingLevels

            getParentNestingLevel(): NestingLevels

            getNestingLevelList(): Array<NestingLevels>

            checkNestingLevel(): NestingLevels | null

        }


        class BaseColorSchemaElementaryNestingLevelPureRenderSection extends React.Component<CombinedMixins.BaseColorSchemaElementaryNestingLevelPureRenderSection.Props, CombinedMixins.BaseColorSchemaElementaryNestingLevelPureRenderSection.State> {
            getTagName(): string;

            getMixinRegister(): Array<object>;

            registerMixin(mixinName: string): this;

            hasMixin(mixinName: string): boolean;

            isRendered(): boolean;

            getClassName(item: string, mixinName?: string): string;

            getClassName(): object;

            getDefault(item: string, mixinName?: string): any;

            getOpt(item: string, mixinName?: string): any;

            getLimit(item: string, mixinName?: string): number;

            getLsi(item: string, mixinName?: string): LsiValue;

            getLsiComponent(item: string, mixinName?: string, params?: object): React.ReactNode;

            getLsiValue(item: string, mixinName?: string, params?: object): string;

            getLsiItem(value: LsiValue, params?: object): string;

            isRendered(): boolean;

            setAsyncState(newState: (prevState: object) => object, setStateCallback?: () => void): this;

            setAsyncState(newState: object, setStateCallback?: () => void): this;

            getId(): string;

            getName(): string;

            getTooltip(): string;

            getMainPropsToPass(mixinNames?: Array<string>): CombinedMixins.BaseColorSchemaElementaryNestingLevelPureRenderSection.Props

            getMainAttrs(): React.HTMLAttributes<HTMLElement>;

            getParent(): React.ReactNode;

            getParentByType(typeFunction: string): React.ReactNode;

            checkParentTagName(parentTagName: string): React.ReactNode;

            checkParentType(parentTypeFunction: string): React.ReactNode;

            getIndex(): number;

            getFullClassName(className): string

            stringToObjectType(string: string, type: any, prefix: object): any;

            switchChildrenToBody(props: object): object;

            findDOMNode(): HTMLElement;

            showError(msgKey: string, msgParams: Array<string>, opt?: WithContext): this;

            showError(msgKey: string, msgParams: string, opt?: WithContext): this;

            showWarning(msgKey: string, msgParams: Array<string>, opt?: WithContext): this;

            showWarning(msgKey: string, msgParams: string, opt?: WithContext): this;

            replaceByHardSpace(text: string, language: string): string;

            shouldRender(nextProps, nextState, thisProps, thisState): boolean

            getColorSchema(): string

            setHiddenValue(value: boolean, setStateCallback?: () => void): this;

            hide(setStateCallback?: () => void): this;

            hideDefault(setStateCallback?: () => void): void;

            show(setStateCallback?: () => void): this;

            showDefault(setStateCallback?: () => void): this;

            isHidden(): boolean;

            toggleHidden(setStateCallback?: () => void): this;

            toggleHiddenDefault(setStateCallback?: () => void): this;

            setDisabledValue(value: boolean, setStateCallback?: () => void): this;

            disable(setStateCallback?: () => void): this;

            disableDefault(setStateCallback?: () => void): this;

            enable(setStateCallback?: () => void): this

            enableDefault(setStateCallback?: () => void): this;

            isDisabled(): boolean;

            toggleDisabled(setStateCallback?: () => void): this;

            toggleDisabledDefault(setStateCallback?: () => void): this;

            setSelectedValue(value, setStateCallback?: () => void): this;

            select(setStateCallback?: () => void): this;

            selectDefault(setStateCallback?: () => void): this;

            deselect(setStateCallback?: () => void): this;

            deselectDefault(setStateCallback?: () => void): this

            isSelected(): boolean;

            toggleSelected(setStateCallback?: () => void): this;

            toggleSelectedDefault(setStateCallback?: () => void): this;

            buildMainAttrs(mainAttrs: object): React.HTMLAttributes<HTMLElement>;

            getHiddenClassName(className?: string): string;

            getDisabledClassName(className?: string): string;

            getSelectedClassName(className?: string): string

            getDisabledCover(): React.ReactNode

            getDisabledCoverTransparent(): React.ReactNode

            getNestingLevel(): NestingLevels

            getParentNestingLevel(): NestingLevels

            getNestingLevelList(): Array<NestingLevels>

            checkNestingLevel(): NestingLevels | null

            getHeader(props?: object): React.ReactNode

            getHeaderDefault(props?: object): React.ReactNode

            getFooter(props?: object): React.ReactNode

            getFooterDefault(props?: object): React.ReactNode

            getHeaderType(headerContent?: string | object): string;

            getFooterType(footerContent?: string | object): string;

            registerRenderedHeaderChild(renderedHeaderChild: React.ReactChild): this;

            registerRenderedFooterChild(renderedFooterChild: React.ReactChild): this;

            expandHeaderProps(prevHeaderChild: object): object;

            expandFooterProps(prevFooterChild: object): object

            buildHeaderChild(header): React.ReactChild

            buildHeaderChildDefault(header): React.ReactChild

            buildFooterChild(footer): React.ReactChild

            buildFooterChildDefault(footer): React.ReactChild

            getHeaderChild(): React.ReactChild

            getFooterChild(): React.ReactChild

            getRenderedHeaderChild(): React.ReactChild

            getRenderedFooterChild(): React.ReactChild

            isDynamic(): boolean;

            getContent(): Uu5Content;

            expandChildProps(prevChild: React.ReactNode, childIndex: number): object;

            buildChild(childTag: string, childProps?: object, children?: React.ReactChildren): React.ReactNode;

            cloneChild(child: React.ReactNode, props: object): React.ReactNode;

            expandChildDefault(child: React.ReactNode, key?: any): React.ReactNode

            buildNodeChildren(children: React.ReactChildren, childPropsExpander: (child: React.ReactNode, index: number) => object): React.ReactChildren;

            shouldChildRender(child: React.ReactChildren): boolean;

            buildChildren(contentProps: object, childPropsExpander: (child: React.ReactNode, index: number) => object, childIndex: number): React.ReactChildren;

            buildChildrenDefault(contentProps: object, childPropsExpander: (child: React.ReactNode, index: number) => object, childIndex: number): React.ReactChildren;

            getStandardChildren(): React.ReactChildren;

            getOutlineChildren(): React.ReactChildren

            getChildren(): React.ReactChildren;

            getRenderedChildren(): React.ReactChild;

            getRenderedChildrenDefault(): React.ReactChild;

            setRenderedChildren(childrenIndexList: any): this;

            // TODO
            addRenderedChild(renderedChild, index): this;

            // TODO
            removeRenderedChild(renderedChild): this;

            // TODO
            getRenderedChildrenIdList(): any;

            // TODO
            setRenderedChildrenIdList(childrenIdList): this;

            // TODO
            addRenderedChildToIdList(renderedChild): this;

            // TODO
            removeRenderedChildFromIdList(renderedChild): this;

            // TODO
            getRenderedChildrenNameList(): any;

            // TODO
            setRenderedChildrenNameList(childrenNameList): this;

            // TODO
            addRenderedChildToNameList(renderedChild): this;

            // TODO
            removeRenderedChildFromNameList(renderedChild): this;

            getChildIndexById(childId: string): number;

            getChildIndexByIdDefault(childId: string): number;

            getRenderedChildById(childId: string): React.ReactChild;

            getRenderedChildByIdDefault(childId: string): React.ReactChild;

            getRenderedChildrenByName(childName: string): React.ReactChildren;

            getRenderedChildByName(childName: string): React.ReactChild;

            getRenderedChildByNameDefault(childName: string): React.ReactChild;

            getRenderedChildByIndex(index: number): React.ReactChild;

            getRenderedChildByIndexDefault(index: number): React.ReactChild;

            getRenderedChildByTagName(tagName: string): React.ReactChild;

            getRenderedChildByTagNameDefault(tagName: string): React.ReactChild;

            getFirstRenderedChild(): React.ReactChild;

            getFirstRenderedChildDefault(): React.ReactChild;

            getLastRenderedChild(): React.ReactChild;

            getLastRenderedChildDefault(): React.ReactChild;

            eachRenderedChild(callback: (rendredChild: React.ReactChild, index: number) => boolean): this;

            eachRenderedChildDefault(callback: (rendredChild: React.ReactChild, index: number) => boolean): this;

            registerRenderedChild(renderedChild: React.ReactChild, index: number): this;

            unregisterRenderedChild(renderedChild: React.ReactChild): this;

            // dynamic functions

            setChildren(newChildren: React.ReactChildren, setStateCallback?: () => void): this;

            setChildren(newChildren: React.ReactChildren, props?: object, setStateCallback?: () => void): this;

            setChildrenDefault(newChildren: React.ReactChildren, setStateCallback?: () => void): this;

            insertChild(child: object | React.ReactNode, opt?: { position?: number, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildDefault(child: object | React.ReactNode, opt?: { position?: number, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildBefore(child: object | React.ReactNode, opt?: { childAfterId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildBeforeDefault(child: object | React.ReactNode, opt?: { childAfterId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildAfter(child: object | React.ReactNode, opt?: { childBeforeId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildAfterDefault(child: object | React.ReactNode, opt?: { childBeforeId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            updateChild(childId: string, newProps: object, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this

            updateChildDefault(childId: string, newProps: object, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            replaceChild(childId: string, child: object | React.ReactNode, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            replaceChildDefault(childId: string, child: object | React.ReactNode, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            deleteChild(childId: string, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            deleteChildDefault(childId: string, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            clearChildren(opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            clearChildrenDefault(opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            // TODO
            setFilter(filter, setStateCallback?: () => void): this;

            resetFilter(setStateCallback?: () => void): this;

            // TODO
            setSorter(sorter, setStateCallback?: () => void): this;

            resetSorter(setStateCallback?: () => void): this;

            // TODO
            setFilterAndSorter(filter, sorter, setStateCallback?: () => void): this;

            resetFilterAndSorter(setStateCallback?: () => void): this;

            getFilteredSorterChildren(children?: React.ReactChildren): React.ReactChildren;

            setStandardMode(setStateCallback?: () => void): this;

            setOutlineMode(setStateCallback?: () => void): this;

            getMode(): string;

            isStandardMode(): boolean

            isOutlineMode(): boolean

            getLevel(): number;

            shouldIncreaseLevel(parentLevelComponent: React.ReactNode, props?: object): boolean

            checkLevel(props?: object): number;

        }


        class BaseContentIdentity extends React.Component<CombinedMixins.BaseContentIdentity.Props, CombinedMixins.BaseContentIdentity.State> {
            getTagName(): string;

            getMixinRegister(): Array<object>;

            registerMixin(mixinName: string): this;

            hasMixin(mixinName: string): boolean;

            isRendered(): boolean;

            getClassName(item: string, mixinName?: string): string;

            getClassName(): object;

            getDefault(item: string, mixinName?: string): any;

            getOpt(item: string, mixinName?: string): any;

            getLimit(item: string, mixinName?: string): number;

            getLsi(item: string, mixinName?: string): LsiValue;

            getLsiComponent(item: string, mixinName?: string, params?: object): React.ReactNode;

            getLsiValue(item: string, mixinName?: string, params?: object): string;

            getLsiItem(value: LsiValue, params?: object): string;

            isRendered(): boolean;

            setAsyncState(newState: (prevState: object) => object, setStateCallback?: () => void): this;

            setAsyncState(newState: object, setStateCallback?: () => void): this;

            getId(): string;

            getName(): string;

            getTooltip(): string;

            getMainPropsToPass(mixinNames?: Array<string>): CombinedMixins.BaseContentIdentity.Props

            getMainAttrs(): React.HTMLAttributes<HTMLElement>;

            getParent(): React.ReactNode;

            getParentByType(typeFunction: string): React.ReactNode;

            checkParentTagName(parentTagName: string): React.ReactNode;

            checkParentType(parentTypeFunction: string): React.ReactNode;

            getIndex(): number;

            getFullClassName(className): string

            stringToObjectType(string: string, type: any, prefix: object): any;

            switchChildrenToBody(props: object): object;

            findDOMNode(): HTMLElement;

            showError(msgKey: string, msgParams: Array<string>, opt?: WithContext): this;

            showError(msgKey: string, msgParams: string, opt?: WithContext): this;

            showWarning(msgKey: string, msgParams: Array<string>, opt?: WithContext): this;

            showWarning(msgKey: string, msgParams: string, opt?: WithContext): this;

            replaceByHardSpace(text: string, language: string): string;

            shouldRender(nextProps, nextState, thisProps, thisState): boolean

            isDynamic(): boolean;

            getContent(): Uu5Content;

            expandChildProps(prevChild: React.ReactNode, childIndex: number): object;

            buildChild(childTag: string, childProps?: object, children?: React.ReactChildren): React.ReactNode;

            cloneChild(child: React.ReactNode, props: object): React.ReactNode;

            expandChildDefault(child: React.ReactNode, key?: any): React.ReactNode

            buildNodeChildren(children: React.ReactChildren, childPropsExpander: (child: React.ReactNode, index: number) => object): React.ReactChildren;

            shouldChildRender(child: React.ReactChildren): boolean;

            buildChildren(contentProps: object, childPropsExpander: (child: React.ReactNode, index: number) => object, childIndex: number): React.ReactChildren;

            buildChildrenDefault(contentProps: object, childPropsExpander: (child: React.ReactNode, index: number) => object, childIndex: number): React.ReactChildren;

            getStandardChildren(): React.ReactChildren;

            getOutlineChildren(): React.ReactChildren

            getChildren(): React.ReactChildren;

            getRenderedChildren(): React.ReactChild;

            getRenderedChildrenDefault(): React.ReactChild;

            setRenderedChildren(childrenIndexList: any): this;

            // TODO
            addRenderedChild(renderedChild, index): this;

            // TODO
            removeRenderedChild(renderedChild): this;

            // TODO
            getRenderedChildrenIdList(): any;

            // TODO
            setRenderedChildrenIdList(childrenIdList): this;

            // TODO
            addRenderedChildToIdList(renderedChild): this;

            // TODO
            removeRenderedChildFromIdList(renderedChild): this;

            // TODO
            getRenderedChildrenNameList(): any;

            // TODO
            setRenderedChildrenNameList(childrenNameList): this;

            // TODO
            addRenderedChildToNameList(renderedChild): this;

            // TODO
            removeRenderedChildFromNameList(renderedChild): this;

            getChildIndexById(childId: string): number;

            getChildIndexByIdDefault(childId: string): number;

            getRenderedChildById(childId: string): React.ReactChild;

            getRenderedChildByIdDefault(childId: string): React.ReactChild;

            getRenderedChildrenByName(childName: string): React.ReactChildren;

            getRenderedChildByName(childName: string): React.ReactChild;

            getRenderedChildByNameDefault(childName: string): React.ReactChild;

            getRenderedChildByIndex(index: number): React.ReactChild;

            getRenderedChildByIndexDefault(index: number): React.ReactChild;

            getRenderedChildByTagName(tagName: string): React.ReactChild;

            getRenderedChildByTagNameDefault(tagName: string): React.ReactChild;

            getFirstRenderedChild(): React.ReactChild;

            getFirstRenderedChildDefault(): React.ReactChild;

            getLastRenderedChild(): React.ReactChild;

            getLastRenderedChildDefault(): React.ReactChild;

            eachRenderedChild(callback: (rendredChild: React.ReactChild, index: number) => boolean): this;

            eachRenderedChildDefault(callback: (rendredChild: React.ReactChild, index: number) => boolean): this;

            registerRenderedChild(renderedChild: React.ReactChild, index: number): this;

            unregisterRenderedChild(renderedChild: React.ReactChild): this;

            // dynamic functions

            setChildren(newChildren: React.ReactChildren, setStateCallback?: () => void): this;

            setChildren(newChildren: React.ReactChildren, props?: object, setStateCallback?: () => void): this;

            setChildrenDefault(newChildren: React.ReactChildren, setStateCallback?: () => void): this;

            insertChild(child: object | React.ReactNode, opt?: { position?: number, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildDefault(child: object | React.ReactNode, opt?: { position?: number, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildBefore(child: object | React.ReactNode, opt?: { childAfterId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildBeforeDefault(child: object | React.ReactNode, opt?: { childAfterId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildAfter(child: object | React.ReactNode, opt?: { childBeforeId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildAfterDefault(child: object | React.ReactNode, opt?: { childBeforeId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            updateChild(childId: string, newProps: object, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this

            updateChildDefault(childId: string, newProps: object, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            replaceChild(childId: string, child: object | React.ReactNode, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            replaceChildDefault(childId: string, child: object | React.ReactNode, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            deleteChild(childId: string, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            deleteChildDefault(childId: string, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            clearChildren(opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            clearChildrenDefault(opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            // TODO
            setFilter(filter, setStateCallback?: () => void): this;

            resetFilter(setStateCallback?: () => void): this;

            // TODO
            setSorter(sorter, setStateCallback?: () => void): this;

            resetSorter(setStateCallback?: () => void): this;

            // TODO
            setFilterAndSorter(filter, sorter, setStateCallback?: () => void): this;

            resetFilterAndSorter(setStateCallback?: () => void): this;

            getFilteredSorterChildren(children?: React.ReactChildren): React.ReactChildren;

            setStandardMode(setStateCallback?: () => void): this;

            setOutlineMode(setStateCallback?: () => void): this;

            getMode(): string;

            isStandardMode(): boolean

            isOutlineMode(): boolean

            isAuthenticated(): boolean;

            isNotAuthenticated(): boolean;

            isPending(): boolean;

            getIdentityFeedback(): IdentityFeedback

            getIdentity(): object;

            setAuthenticated(isAuth: boolean, setStateCallback?: () => void): this;

            changeIdentity(setStateCallback?: () => void): this;

            onChangeIdentityDefault(session?: object): this;

            getAuthenticatedChild(getChild: () => React.ReactNode, opt?: {
                silent?: boolean,
                inline?: boolean,
                message?: string
            }): React.ReactNode

        }


        class BaseElementaryNestingLevelPureRender extends React.Component<CombinedMixins.BaseElementaryNestingLevelPureRender.Props, CombinedMixins.BaseElementaryNestingLevelPureRender.State> {
            getTagName(): string;

            getMixinRegister(): Array<object>;

            registerMixin(mixinName: string): this;

            hasMixin(mixinName: string): boolean;

            isRendered(): boolean;

            getClassName(item: string, mixinName?: string): string;

            getClassName(): object;

            getDefault(item: string, mixinName?: string): any;

            getOpt(item: string, mixinName?: string): any;

            getLimit(item: string, mixinName?: string): number;

            getLsi(item: string, mixinName?: string): LsiValue;

            getLsiComponent(item: string, mixinName?: string, params?: object): React.ReactNode;

            getLsiValue(item: string, mixinName?: string, params?: object): string;

            getLsiItem(value: LsiValue, params?: object): string;

            isRendered(): boolean;

            setAsyncState(newState: (prevState: object) => object, setStateCallback?: () => void): this;

            setAsyncState(newState: object, setStateCallback?: () => void): this;

            getId(): string;

            getName(): string;

            getTooltip(): string;

            getMainPropsToPass(mixinNames?: Array<string>): CombinedMixins.BaseElementaryNestingLevelPureRender.Props

            getMainAttrs(): React.HTMLAttributes<HTMLElement>;

            getParent(): React.ReactNode;

            getParentByType(typeFunction: string): React.ReactNode;

            checkParentTagName(parentTagName: string): React.ReactNode;

            checkParentType(parentTypeFunction: string): React.ReactNode;

            getIndex(): number;

            getFullClassName(className): string

            stringToObjectType(string: string, type: any, prefix: object): any;

            switchChildrenToBody(props: object): object;

            findDOMNode(): HTMLElement;

            showError(msgKey: string, msgParams: Array<string>, opt?: WithContext): this;

            showError(msgKey: string, msgParams: string, opt?: WithContext): this;

            showWarning(msgKey: string, msgParams: Array<string>, opt?: WithContext): this;

            showWarning(msgKey: string, msgParams: string, opt?: WithContext): this;

            replaceByHardSpace(text: string, language: string): string;

            shouldRender(nextProps, nextState, thisProps, thisState): boolean

            setHiddenValue(value: boolean, setStateCallback?: () => void): this;

            hide(setStateCallback?: () => void): this;

            hideDefault(setStateCallback?: () => void): void;

            show(setStateCallback?: () => void): this;

            showDefault(setStateCallback?: () => void): this;

            isHidden(): boolean;

            toggleHidden(setStateCallback?: () => void): this;

            toggleHiddenDefault(setStateCallback?: () => void): this;

            setDisabledValue(value: boolean, setStateCallback?: () => void): this;

            disable(setStateCallback?: () => void): this;

            disableDefault(setStateCallback?: () => void): this;

            enable(setStateCallback?: () => void): this

            enableDefault(setStateCallback?: () => void): this;

            isDisabled(): boolean;

            toggleDisabled(setStateCallback?: () => void): this;

            toggleDisabledDefault(setStateCallback?: () => void): this;

            setSelectedValue(value, setStateCallback?: () => void): this;

            select(setStateCallback?: () => void): this;

            selectDefault(setStateCallback?: () => void): this;

            deselect(setStateCallback?: () => void): this;

            deselectDefault(setStateCallback?: () => void): this

            isSelected(): boolean;

            toggleSelected(setStateCallback?: () => void): this;

            toggleSelectedDefault(setStateCallback?: () => void): this;

            buildMainAttrs(mainAttrs: object): React.HTMLAttributes<HTMLElement>;

            getHiddenClassName(className?: string): string;

            getDisabledClassName(className?: string): string;

            getSelectedClassName(className?: string): string

            getDisabledCover(): React.ReactNode

            getDisabledCoverTransparent(): React.ReactNode

            getNestingLevel(): NestingLevels

            getParentNestingLevel(): NestingLevels

            getNestingLevelList(): Array<NestingLevels>

            checkNestingLevel(): NestingLevels | null

        }


        class BaseColorSchemaContentElementaryNestingLevelPureRender extends React.Component<CombinedMixins.BaseColorSchemaContentElementaryNestingLevelPureRender.Props, CombinedMixins.BaseColorSchemaContentElementaryNestingLevelPureRender.State> {
            getTagName(): string;

            getMixinRegister(): Array<object>;

            registerMixin(mixinName: string): this;

            hasMixin(mixinName: string): boolean;

            isRendered(): boolean;

            getClassName(item: string, mixinName?: string): string;

            getClassName(): object;

            getDefault(item: string, mixinName?: string): any;

            getOpt(item: string, mixinName?: string): any;

            getLimit(item: string, mixinName?: string): number;

            getLsi(item: string, mixinName?: string): LsiValue;

            getLsiComponent(item: string, mixinName?: string, params?: object): React.ReactNode;

            getLsiValue(item: string, mixinName?: string, params?: object): string;

            getLsiItem(value: LsiValue, params?: object): string;

            isRendered(): boolean;

            setAsyncState(newState: (prevState: object) => object, setStateCallback?: () => void): this;

            setAsyncState(newState: object, setStateCallback?: () => void): this;

            getId(): string;

            getName(): string;

            getTooltip(): string;

            getMainPropsToPass(mixinNames?: Array<string>): CombinedMixins.BaseColorSchemaContentElementaryNestingLevelPureRender.Props

            getMainAttrs(): React.HTMLAttributes<HTMLElement>;

            getParent(): React.ReactNode;

            getParentByType(typeFunction: string): React.ReactNode;

            checkParentTagName(parentTagName: string): React.ReactNode;

            checkParentType(parentTypeFunction: string): React.ReactNode;

            getIndex(): number;

            getFullClassName(className): string

            stringToObjectType(string: string, type: any, prefix: object): any;

            switchChildrenToBody(props: object): object;

            findDOMNode(): HTMLElement;

            showError(msgKey: string, msgParams: Array<string>, opt?: WithContext): this;

            showError(msgKey: string, msgParams: string, opt?: WithContext): this;

            showWarning(msgKey: string, msgParams: Array<string>, opt?: WithContext): this;

            showWarning(msgKey: string, msgParams: string, opt?: WithContext): this;

            replaceByHardSpace(text: string, language: string): string;

            shouldRender(nextProps, nextState, thisProps, thisState): boolean

            getColorSchema(): string

            isDynamic(): boolean;

            getContent(): Uu5Content;

            expandChildProps(prevChild: React.ReactNode, childIndex: number): object;

            buildChild(childTag: string, childProps?: object, children?: React.ReactChildren): React.ReactNode;

            cloneChild(child: React.ReactNode, props: object): React.ReactNode;

            expandChildDefault(child: React.ReactNode, key?: any): React.ReactNode

            buildNodeChildren(children: React.ReactChildren, childPropsExpander: (child: React.ReactNode, index: number) => object): React.ReactChildren;

            shouldChildRender(child: React.ReactChildren): boolean;

            buildChildren(contentProps: object, childPropsExpander: (child: React.ReactNode, index: number) => object, childIndex: number): React.ReactChildren;

            buildChildrenDefault(contentProps: object, childPropsExpander: (child: React.ReactNode, index: number) => object, childIndex: number): React.ReactChildren;

            getStandardChildren(): React.ReactChildren;

            getOutlineChildren(): React.ReactChildren

            getChildren(): React.ReactChildren;

            getRenderedChildren(): React.ReactChild;

            getRenderedChildrenDefault(): React.ReactChild;

            setRenderedChildren(childrenIndexList: any): this;

            // TODO
            addRenderedChild(renderedChild, index): this;

            // TODO
            removeRenderedChild(renderedChild): this;

            // TODO
            getRenderedChildrenIdList(): any;

            // TODO
            setRenderedChildrenIdList(childrenIdList): this;

            // TODO
            addRenderedChildToIdList(renderedChild): this;

            // TODO
            removeRenderedChildFromIdList(renderedChild): this;

            // TODO
            getRenderedChildrenNameList(): any;

            // TODO
            setRenderedChildrenNameList(childrenNameList): this;

            // TODO
            addRenderedChildToNameList(renderedChild): this;

            // TODO
            removeRenderedChildFromNameList(renderedChild): this;

            getChildIndexById(childId: string): number;

            getChildIndexByIdDefault(childId: string): number;

            getRenderedChildById(childId: string): React.ReactChild;

            getRenderedChildByIdDefault(childId: string): React.ReactChild;

            getRenderedChildrenByName(childName: string): React.ReactChildren;

            getRenderedChildByName(childName: string): React.ReactChild;

            getRenderedChildByNameDefault(childName: string): React.ReactChild;

            getRenderedChildByIndex(index: number): React.ReactChild;

            getRenderedChildByIndexDefault(index: number): React.ReactChild;

            getRenderedChildByTagName(tagName: string): React.ReactChild;

            getRenderedChildByTagNameDefault(tagName: string): React.ReactChild;

            getFirstRenderedChild(): React.ReactChild;

            getFirstRenderedChildDefault(): React.ReactChild;

            getLastRenderedChild(): React.ReactChild;

            getLastRenderedChildDefault(): React.ReactChild;

            eachRenderedChild(callback: (rendredChild: React.ReactChild, index: number) => boolean): this;

            eachRenderedChildDefault(callback: (rendredChild: React.ReactChild, index: number) => boolean): this;

            registerRenderedChild(renderedChild: React.ReactChild, index: number): this;

            unregisterRenderedChild(renderedChild: React.ReactChild): this;

            // dynamic functions

            setChildren(newChildren: React.ReactChildren, setStateCallback?: () => void): this;

            setChildren(newChildren: React.ReactChildren, props?: object, setStateCallback?: () => void): this;

            setChildrenDefault(newChildren: React.ReactChildren, setStateCallback?: () => void): this;

            insertChild(child: object | React.ReactNode, opt?: { position?: number, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildDefault(child: object | React.ReactNode, opt?: { position?: number, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildBefore(child: object | React.ReactNode, opt?: { childAfterId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildBeforeDefault(child: object | React.ReactNode, opt?: { childAfterId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildAfter(child: object | React.ReactNode, opt?: { childBeforeId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildAfterDefault(child: object | React.ReactNode, opt?: { childBeforeId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            updateChild(childId: string, newProps: object, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this

            updateChildDefault(childId: string, newProps: object, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            replaceChild(childId: string, child: object | React.ReactNode, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            replaceChildDefault(childId: string, child: object | React.ReactNode, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            deleteChild(childId: string, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            deleteChildDefault(childId: string, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            clearChildren(opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            clearChildrenDefault(opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            // TODO
            setFilter(filter, setStateCallback?: () => void): this;

            resetFilter(setStateCallback?: () => void): this;

            // TODO
            setSorter(sorter, setStateCallback?: () => void): this;

            resetSorter(setStateCallback?: () => void): this;

            // TODO
            setFilterAndSorter(filter, sorter, setStateCallback?: () => void): this;

            resetFilterAndSorter(setStateCallback?: () => void): this;

            getFilteredSorterChildren(children?: React.ReactChildren): React.ReactChildren;

            setStandardMode(setStateCallback?: () => void): this;

            setOutlineMode(setStateCallback?: () => void): this;

            getMode(): string;

            isStandardMode(): boolean

            isOutlineMode(): boolean

            setHiddenValue(value: boolean, setStateCallback?: () => void): this;

            hide(setStateCallback?: () => void): this;

            hideDefault(setStateCallback?: () => void): void;

            show(setStateCallback?: () => void): this;

            showDefault(setStateCallback?: () => void): this;

            isHidden(): boolean;

            toggleHidden(setStateCallback?: () => void): this;

            toggleHiddenDefault(setStateCallback?: () => void): this;

            setDisabledValue(value: boolean, setStateCallback?: () => void): this;

            disable(setStateCallback?: () => void): this;

            disableDefault(setStateCallback?: () => void): this;

            enable(setStateCallback?: () => void): this

            enableDefault(setStateCallback?: () => void): this;

            isDisabled(): boolean;

            toggleDisabled(setStateCallback?: () => void): this;

            toggleDisabledDefault(setStateCallback?: () => void): this;

            setSelectedValue(value, setStateCallback?: () => void): this;

            select(setStateCallback?: () => void): this;

            selectDefault(setStateCallback?: () => void): this;

            deselect(setStateCallback?: () => void): this;

            deselectDefault(setStateCallback?: () => void): this

            isSelected(): boolean;

            toggleSelected(setStateCallback?: () => void): this;

            toggleSelectedDefault(setStateCallback?: () => void): this;

            buildMainAttrs(mainAttrs: object): React.HTMLAttributes<HTMLElement>;

            getHiddenClassName(className?: string): string;

            getDisabledClassName(className?: string): string;

            getSelectedClassName(className?: string): string

            getDisabledCover(): React.ReactNode

            getDisabledCoverTransparent(): React.ReactNode

            getNestingLevel(): NestingLevels

            getParentNestingLevel(): NestingLevels

            getNestingLevelList(): Array<NestingLevels>

            checkNestingLevel(): NestingLevels | null

        }


        class BaseColorSchemaElementaryNestingLevelPureRender extends React.Component<CombinedMixins.BaseColorSchemaElementaryNestingLevelPureRender.Props, CombinedMixins.BaseColorSchemaElementaryNestingLevelPureRender.State> {
            getTagName(): string;

            getMixinRegister(): Array<object>;

            registerMixin(mixinName: string): this;

            hasMixin(mixinName: string): boolean;

            isRendered(): boolean;

            getClassName(item: string, mixinName?: string): string;

            getClassName(): object;

            getDefault(item: string, mixinName?: string): any;

            getOpt(item: string, mixinName?: string): any;

            getLimit(item: string, mixinName?: string): number;

            getLsi(item: string, mixinName?: string): LsiValue;

            getLsiComponent(item: string, mixinName?: string, params?: object): React.ReactNode;

            getLsiValue(item: string, mixinName?: string, params?: object): string;

            getLsiItem(value: LsiValue, params?: object): string;

            isRendered(): boolean;

            setAsyncState(newState: (prevState: object) => object, setStateCallback?: () => void): this;

            setAsyncState(newState: object, setStateCallback?: () => void): this;

            getId(): string;

            getName(): string;

            getTooltip(): string;

            getMainPropsToPass(mixinNames?: Array<string>): CombinedMixins.BaseColorSchemaElementaryNestingLevelPureRender.Props

            getMainAttrs(): React.HTMLAttributes<HTMLElement>;

            getParent(): React.ReactNode;

            getParentByType(typeFunction: string): React.ReactNode;

            checkParentTagName(parentTagName: string): React.ReactNode;

            checkParentType(parentTypeFunction: string): React.ReactNode;

            getIndex(): number;

            getFullClassName(className): string

            stringToObjectType(string: string, type: any, prefix: object): any;

            switchChildrenToBody(props: object): object;

            findDOMNode(): HTMLElement;

            showError(msgKey: string, msgParams: Array<string>, opt?: WithContext): this;

            showError(msgKey: string, msgParams: string, opt?: WithContext): this;

            showWarning(msgKey: string, msgParams: Array<string>, opt?: WithContext): this;

            showWarning(msgKey: string, msgParams: string, opt?: WithContext): this;

            replaceByHardSpace(text: string, language: string): string;

            shouldRender(nextProps, nextState, thisProps, thisState): boolean

            getColorSchema(): string

            setHiddenValue(value: boolean, setStateCallback?: () => void): this;

            hide(setStateCallback?: () => void): this;

            hideDefault(setStateCallback?: () => void): void;

            show(setStateCallback?: () => void): this;

            showDefault(setStateCallback?: () => void): this;

            isHidden(): boolean;

            toggleHidden(setStateCallback?: () => void): this;

            toggleHiddenDefault(setStateCallback?: () => void): this;

            setDisabledValue(value: boolean, setStateCallback?: () => void): this;

            disable(setStateCallback?: () => void): this;

            disableDefault(setStateCallback?: () => void): this;

            enable(setStateCallback?: () => void): this

            enableDefault(setStateCallback?: () => void): this;

            isDisabled(): boolean;

            toggleDisabled(setStateCallback?: () => void): this;

            toggleDisabledDefault(setStateCallback?: () => void): this;

            setSelectedValue(value, setStateCallback?: () => void): this;

            select(setStateCallback?: () => void): this;

            selectDefault(setStateCallback?: () => void): this;

            deselect(setStateCallback?: () => void): this;

            deselectDefault(setStateCallback?: () => void): this

            isSelected(): boolean;

            toggleSelected(setStateCallback?: () => void): this;

            toggleSelectedDefault(setStateCallback?: () => void): this;

            buildMainAttrs(mainAttrs: object): React.HTMLAttributes<HTMLElement>;

            getHiddenClassName(className?: string): string;

            getDisabledClassName(className?: string): string;

            getSelectedClassName(className?: string): string

            getDisabledCover(): React.ReactNode

            getDisabledCoverTransparent(): React.ReactNode

            getNestingLevel(): NestingLevels

            getParentNestingLevel(): NestingLevels

            getNestingLevelList(): Array<NestingLevels>

            checkNestingLevel(): NestingLevels | null

        }


        class BaseContentElementary extends React.Component<CombinedMixins.BaseContentElementary.Props, CombinedMixins.BaseContentElementary.State> {
            getTagName(): string;

            getMixinRegister(): Array<object>;

            registerMixin(mixinName: string): this;

            hasMixin(mixinName: string): boolean;

            isRendered(): boolean;

            getClassName(item: string, mixinName?: string): string;

            getClassName(): object;

            getDefault(item: string, mixinName?: string): any;

            getOpt(item: string, mixinName?: string): any;

            getLimit(item: string, mixinName?: string): number;

            getLsi(item: string, mixinName?: string): LsiValue;

            getLsiComponent(item: string, mixinName?: string, params?: object): React.ReactNode;

            getLsiValue(item: string, mixinName?: string, params?: object): string;

            getLsiItem(value: LsiValue, params?: object): string;

            isRendered(): boolean;

            setAsyncState(newState: (prevState: object) => object, setStateCallback?: () => void): this;

            setAsyncState(newState: object, setStateCallback?: () => void): this;

            getId(): string;

            getName(): string;

            getTooltip(): string;

            getMainPropsToPass(mixinNames?: Array<string>): CombinedMixins.BaseContentElementary.Props

            getMainAttrs(): React.HTMLAttributes<HTMLElement>;

            getParent(): React.ReactNode;

            getParentByType(typeFunction: string): React.ReactNode;

            checkParentTagName(parentTagName: string): React.ReactNode;

            checkParentType(parentTypeFunction: string): React.ReactNode;

            getIndex(): number;

            getFullClassName(className): string

            stringToObjectType(string: string, type: any, prefix: object): any;

            switchChildrenToBody(props: object): object;

            findDOMNode(): HTMLElement;

            showError(msgKey: string, msgParams: Array<string>, opt?: WithContext): this;

            showError(msgKey: string, msgParams: string, opt?: WithContext): this;

            showWarning(msgKey: string, msgParams: Array<string>, opt?: WithContext): this;

            showWarning(msgKey: string, msgParams: string, opt?: WithContext): this;

            replaceByHardSpace(text: string, language: string): string;

            shouldRender(nextProps, nextState, thisProps, thisState): boolean

            isDynamic(): boolean;

            getContent(): Uu5Content;

            expandChildProps(prevChild: React.ReactNode, childIndex: number): object;

            buildChild(childTag: string, childProps?: object, children?: React.ReactChildren): React.ReactNode;

            cloneChild(child: React.ReactNode, props: object): React.ReactNode;

            expandChildDefault(child: React.ReactNode, key?: any): React.ReactNode

            buildNodeChildren(children: React.ReactChildren, childPropsExpander: (child: React.ReactNode, index: number) => object): React.ReactChildren;

            shouldChildRender(child: React.ReactChildren): boolean;

            buildChildren(contentProps: object, childPropsExpander: (child: React.ReactNode, index: number) => object, childIndex: number): React.ReactChildren;

            buildChildrenDefault(contentProps: object, childPropsExpander: (child: React.ReactNode, index: number) => object, childIndex: number): React.ReactChildren;

            getStandardChildren(): React.ReactChildren;

            getOutlineChildren(): React.ReactChildren

            getChildren(): React.ReactChildren;

            getRenderedChildren(): React.ReactChild;

            getRenderedChildrenDefault(): React.ReactChild;

            setRenderedChildren(childrenIndexList: any): this;

            // TODO
            addRenderedChild(renderedChild, index): this;

            // TODO
            removeRenderedChild(renderedChild): this;

            // TODO
            getRenderedChildrenIdList(): any;

            // TODO
            setRenderedChildrenIdList(childrenIdList): this;

            // TODO
            addRenderedChildToIdList(renderedChild): this;

            // TODO
            removeRenderedChildFromIdList(renderedChild): this;

            // TODO
            getRenderedChildrenNameList(): any;

            // TODO
            setRenderedChildrenNameList(childrenNameList): this;

            // TODO
            addRenderedChildToNameList(renderedChild): this;

            // TODO
            removeRenderedChildFromNameList(renderedChild): this;

            getChildIndexById(childId: string): number;

            getChildIndexByIdDefault(childId: string): number;

            getRenderedChildById(childId: string): React.ReactChild;

            getRenderedChildByIdDefault(childId: string): React.ReactChild;

            getRenderedChildrenByName(childName: string): React.ReactChildren;

            getRenderedChildByName(childName: string): React.ReactChild;

            getRenderedChildByNameDefault(childName: string): React.ReactChild;

            getRenderedChildByIndex(index: number): React.ReactChild;

            getRenderedChildByIndexDefault(index: number): React.ReactChild;

            getRenderedChildByTagName(tagName: string): React.ReactChild;

            getRenderedChildByTagNameDefault(tagName: string): React.ReactChild;

            getFirstRenderedChild(): React.ReactChild;

            getFirstRenderedChildDefault(): React.ReactChild;

            getLastRenderedChild(): React.ReactChild;

            getLastRenderedChildDefault(): React.ReactChild;

            eachRenderedChild(callback: (rendredChild: React.ReactChild, index: number) => boolean): this;

            eachRenderedChildDefault(callback: (rendredChild: React.ReactChild, index: number) => boolean): this;

            registerRenderedChild(renderedChild: React.ReactChild, index: number): this;

            unregisterRenderedChild(renderedChild: React.ReactChild): this;

            // dynamic functions

            setChildren(newChildren: React.ReactChildren, setStateCallback?: () => void): this;

            setChildren(newChildren: React.ReactChildren, props?: object, setStateCallback?: () => void): this;

            setChildrenDefault(newChildren: React.ReactChildren, setStateCallback?: () => void): this;

            insertChild(child: object | React.ReactNode, opt?: { position?: number, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildDefault(child: object | React.ReactNode, opt?: { position?: number, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildBefore(child: object | React.ReactNode, opt?: { childAfterId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildBeforeDefault(child: object | React.ReactNode, opt?: { childAfterId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildAfter(child: object | React.ReactNode, opt?: { childBeforeId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildAfterDefault(child: object | React.ReactNode, opt?: { childBeforeId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            updateChild(childId: string, newProps: object, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this

            updateChildDefault(childId: string, newProps: object, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            replaceChild(childId: string, child: object | React.ReactNode, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            replaceChildDefault(childId: string, child: object | React.ReactNode, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            deleteChild(childId: string, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            deleteChildDefault(childId: string, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            clearChildren(opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            clearChildrenDefault(opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            // TODO
            setFilter(filter, setStateCallback?: () => void): this;

            resetFilter(setStateCallback?: () => void): this;

            // TODO
            setSorter(sorter, setStateCallback?: () => void): this;

            resetSorter(setStateCallback?: () => void): this;

            // TODO
            setFilterAndSorter(filter, sorter, setStateCallback?: () => void): this;

            resetFilterAndSorter(setStateCallback?: () => void): this;

            getFilteredSorterChildren(children?: React.ReactChildren): React.ReactChildren;

            setStandardMode(setStateCallback?: () => void): this;

            setOutlineMode(setStateCallback?: () => void): this;

            getMode(): string;

            isStandardMode(): boolean

            isOutlineMode(): boolean

            setHiddenValue(value: boolean, setStateCallback?: () => void): this;

            hide(setStateCallback?: () => void): this;

            hideDefault(setStateCallback?: () => void): void;

            show(setStateCallback?: () => void): this;

            showDefault(setStateCallback?: () => void): this;

            isHidden(): boolean;

            toggleHidden(setStateCallback?: () => void): this;

            toggleHiddenDefault(setStateCallback?: () => void): this;

            setDisabledValue(value: boolean, setStateCallback?: () => void): this;

            disable(setStateCallback?: () => void): this;

            disableDefault(setStateCallback?: () => void): this;

            enable(setStateCallback?: () => void): this

            enableDefault(setStateCallback?: () => void): this;

            isDisabled(): boolean;

            toggleDisabled(setStateCallback?: () => void): this;

            toggleDisabledDefault(setStateCallback?: () => void): this;

            setSelectedValue(value, setStateCallback?: () => void): this;

            select(setStateCallback?: () => void): this;

            selectDefault(setStateCallback?: () => void): this;

            deselect(setStateCallback?: () => void): this;

            deselectDefault(setStateCallback?: () => void): this

            isSelected(): boolean;

            toggleSelected(setStateCallback?: () => void): this;

            toggleSelectedDefault(setStateCallback?: () => void): this;

            buildMainAttrs(mainAttrs: object): React.HTMLAttributes<HTMLElement>;

            getHiddenClassName(className?: string): string;

            getDisabledClassName(className?: string): string;

            getSelectedClassName(className?: string): string

            getDisabledCover(): React.ReactNode

            getDisabledCoverTransparent(): React.ReactNode

        }


        class BaseColorSchemaContentElementarySwipe extends React.Component<CombinedMixins.BaseColorSchemaContentElementarySwipe.Props, CombinedMixins.BaseColorSchemaContentElementarySwipe.State> {
            getTagName(): string;

            getMixinRegister(): Array<object>;

            registerMixin(mixinName: string): this;

            hasMixin(mixinName: string): boolean;

            isRendered(): boolean;

            getClassName(item: string, mixinName?: string): string;

            getClassName(): object;

            getDefault(item: string, mixinName?: string): any;

            getOpt(item: string, mixinName?: string): any;

            getLimit(item: string, mixinName?: string): number;

            getLsi(item: string, mixinName?: string): LsiValue;

            getLsiComponent(item: string, mixinName?: string, params?: object): React.ReactNode;

            getLsiValue(item: string, mixinName?: string, params?: object): string;

            getLsiItem(value: LsiValue, params?: object): string;

            isRendered(): boolean;

            setAsyncState(newState: (prevState: object) => object, setStateCallback?: () => void): this;

            setAsyncState(newState: object, setStateCallback?: () => void): this;

            getId(): string;

            getName(): string;

            getTooltip(): string;

            getMainPropsToPass(mixinNames?: Array<string>): CombinedMixins.BaseColorSchemaContentElementarySwipe.Props

            getMainAttrs(): React.HTMLAttributes<HTMLElement>;

            getParent(): React.ReactNode;

            getParentByType(typeFunction: string): React.ReactNode;

            checkParentTagName(parentTagName: string): React.ReactNode;

            checkParentType(parentTypeFunction: string): React.ReactNode;

            getIndex(): number;

            getFullClassName(className): string

            stringToObjectType(string: string, type: any, prefix: object): any;

            switchChildrenToBody(props: object): object;

            findDOMNode(): HTMLElement;

            showError(msgKey: string, msgParams: Array<string>, opt?: WithContext): this;

            showError(msgKey: string, msgParams: string, opt?: WithContext): this;

            showWarning(msgKey: string, msgParams: Array<string>, opt?: WithContext): this;

            showWarning(msgKey: string, msgParams: string, opt?: WithContext): this;

            replaceByHardSpace(text: string, language: string): string;

            shouldRender(nextProps, nextState, thisProps, thisState): boolean

            getColorSchema(): string

            isDynamic(): boolean;

            getContent(): Uu5Content;

            expandChildProps(prevChild: React.ReactNode, childIndex: number): object;

            buildChild(childTag: string, childProps?: object, children?: React.ReactChildren): React.ReactNode;

            cloneChild(child: React.ReactNode, props: object): React.ReactNode;

            expandChildDefault(child: React.ReactNode, key?: any): React.ReactNode

            buildNodeChildren(children: React.ReactChildren, childPropsExpander: (child: React.ReactNode, index: number) => object): React.ReactChildren;

            shouldChildRender(child: React.ReactChildren): boolean;

            buildChildren(contentProps: object, childPropsExpander: (child: React.ReactNode, index: number) => object, childIndex: number): React.ReactChildren;

            buildChildrenDefault(contentProps: object, childPropsExpander: (child: React.ReactNode, index: number) => object, childIndex: number): React.ReactChildren;

            getStandardChildren(): React.ReactChildren;

            getOutlineChildren(): React.ReactChildren

            getChildren(): React.ReactChildren;

            getRenderedChildren(): React.ReactChild;

            getRenderedChildrenDefault(): React.ReactChild;

            setRenderedChildren(childrenIndexList: any): this;

            // TODO
            addRenderedChild(renderedChild, index): this;

            // TODO
            removeRenderedChild(renderedChild): this;

            // TODO
            getRenderedChildrenIdList(): any;

            // TODO
            setRenderedChildrenIdList(childrenIdList): this;

            // TODO
            addRenderedChildToIdList(renderedChild): this;

            // TODO
            removeRenderedChildFromIdList(renderedChild): this;

            // TODO
            getRenderedChildrenNameList(): any;

            // TODO
            setRenderedChildrenNameList(childrenNameList): this;

            // TODO
            addRenderedChildToNameList(renderedChild): this;

            // TODO
            removeRenderedChildFromNameList(renderedChild): this;

            getChildIndexById(childId: string): number;

            getChildIndexByIdDefault(childId: string): number;

            getRenderedChildById(childId: string): React.ReactChild;

            getRenderedChildByIdDefault(childId: string): React.ReactChild;

            getRenderedChildrenByName(childName: string): React.ReactChildren;

            getRenderedChildByName(childName: string): React.ReactChild;

            getRenderedChildByNameDefault(childName: string): React.ReactChild;

            getRenderedChildByIndex(index: number): React.ReactChild;

            getRenderedChildByIndexDefault(index: number): React.ReactChild;

            getRenderedChildByTagName(tagName: string): React.ReactChild;

            getRenderedChildByTagNameDefault(tagName: string): React.ReactChild;

            getFirstRenderedChild(): React.ReactChild;

            getFirstRenderedChildDefault(): React.ReactChild;

            getLastRenderedChild(): React.ReactChild;

            getLastRenderedChildDefault(): React.ReactChild;

            eachRenderedChild(callback: (rendredChild: React.ReactChild, index: number) => boolean): this;

            eachRenderedChildDefault(callback: (rendredChild: React.ReactChild, index: number) => boolean): this;

            registerRenderedChild(renderedChild: React.ReactChild, index: number): this;

            unregisterRenderedChild(renderedChild: React.ReactChild): this;

            // dynamic functions

            setChildren(newChildren: React.ReactChildren, setStateCallback?: () => void): this;

            setChildren(newChildren: React.ReactChildren, props?: object, setStateCallback?: () => void): this;

            setChildrenDefault(newChildren: React.ReactChildren, setStateCallback?: () => void): this;

            insertChild(child: object | React.ReactNode, opt?: { position?: number, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildDefault(child: object | React.ReactNode, opt?: { position?: number, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildBefore(child: object | React.ReactNode, opt?: { childAfterId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildBeforeDefault(child: object | React.ReactNode, opt?: { childAfterId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildAfter(child: object | React.ReactNode, opt?: { childBeforeId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildAfterDefault(child: object | React.ReactNode, opt?: { childBeforeId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            updateChild(childId: string, newProps: object, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this

            updateChildDefault(childId: string, newProps: object, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            replaceChild(childId: string, child: object | React.ReactNode, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            replaceChildDefault(childId: string, child: object | React.ReactNode, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            deleteChild(childId: string, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            deleteChildDefault(childId: string, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            clearChildren(opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            clearChildrenDefault(opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            // TODO
            setFilter(filter, setStateCallback?: () => void): this;

            resetFilter(setStateCallback?: () => void): this;

            // TODO
            setSorter(sorter, setStateCallback?: () => void): this;

            resetSorter(setStateCallback?: () => void): this;

            // TODO
            setFilterAndSorter(filter, sorter, setStateCallback?: () => void): this;

            resetFilterAndSorter(setStateCallback?: () => void): this;

            getFilteredSorterChildren(children?: React.ReactChildren): React.ReactChildren;

            setStandardMode(setStateCallback?: () => void): this;

            setOutlineMode(setStateCallback?: () => void): this;

            getMode(): string;

            isStandardMode(): boolean

            isOutlineMode(): boolean

            setHiddenValue(value: boolean, setStateCallback?: () => void): this;

            hide(setStateCallback?: () => void): this;

            hideDefault(setStateCallback?: () => void): void;

            show(setStateCallback?: () => void): this;

            showDefault(setStateCallback?: () => void): this;

            isHidden(): boolean;

            toggleHidden(setStateCallback?: () => void): this;

            toggleHiddenDefault(setStateCallback?: () => void): this;

            setDisabledValue(value: boolean, setStateCallback?: () => void): this;

            disable(setStateCallback?: () => void): this;

            disableDefault(setStateCallback?: () => void): this;

            enable(setStateCallback?: () => void): this

            enableDefault(setStateCallback?: () => void): this;

            isDisabled(): boolean;

            toggleDisabled(setStateCallback?: () => void): this;

            toggleDisabledDefault(setStateCallback?: () => void): this;

            setSelectedValue(value, setStateCallback?: () => void): this;

            select(setStateCallback?: () => void): this;

            selectDefault(setStateCallback?: () => void): this;

            deselect(setStateCallback?: () => void): this;

            deselectDefault(setStateCallback?: () => void): this

            isSelected(): boolean;

            toggleSelected(setStateCallback?: () => void): this;

            toggleSelectedDefault(setStateCallback?: () => void): this;

            buildMainAttrs(mainAttrs: object): React.HTMLAttributes<HTMLElement>;

            getHiddenClassName(className?: string): string;

            getDisabledClassName(className?: string): string;

            getSelectedClassName(className?: string): string

            getDisabledCover(): React.ReactNode

            getDisabledCoverTransparent(): React.ReactNode

            getSwipeLength(): number;

            getAngle(): number;

            isSwipedHorizontal(): boolean;

            isSwipedVertical(): boolean;

            isSwiped(): boolean;

            isSwipedShort(): boolean;

            isSwipedLong(): boolean;

            isSwipedSlow(): boolean;

            isSwipedFast(): boolean;

            isSwipedUp(): boolean;

            isSwipedRight(): boolean;

            isSwipedDown(): boolean;

            isSwipedLeft(): boolean;

            isSwipedUpRight(): boolean;

            isSwipedDownRight(): boolean;

            isSwipedUpLeft(): boolean;

            isSwipedDownLeft(): boolean;

            isSwipedUpShort(): boolean;

            isSwipedRightShort(): boolean;

            isSwipedDownShort(): boolean;

            isSwipedLeftShort(): boolean;

            isSwipedUpRightShort(): boolean;

            isSwipedDownRightShort(): boolean;

            isSwipedUpLeftShort(): boolean;

            isSwipedDownLeftShort(): boolean;

            isSwipedUpLong(): boolean;

            isSwipedRightLong(): boolean;

            isSwipedDownLong(): boolean;

            isSwipedLeftLong(): boolean;

            isSwipedUpRightLong(): boolean;

            isSwipedDownRightLong(): boolean;

            isSwipedUpLeftLong(): boolean;

            isSwipedDownLeftLong(): boolean;

            swipeOnTouchStart(handler: object | ((arguments?) => void), e: Event): this;

            swipeOnTouchStart(e: Event): this;

            swipeOnTouchMove(handler: object | ((arguments?) => void), e: Event): this;

            swipeOnTouchMove(e: Event): this;

            swipeOnTouchEnd(handler: object | ((arguments?) => void), e: Event): this;

            swipeOnTouchEnd(e: Event): this;

            angle(): number

        }


        class BaseCcrWriterColorSchemaElementaryNestingLevelPureRender extends React.Component<CombinedMixins.BaseCcrWriterColorSchemaElementaryNestingLevelPureRender.Props, CombinedMixins.BaseCcrWriterColorSchemaElementaryNestingLevelPureRender.State> {
            getTagName(): string;

            getMixinRegister(): Array<object>;

            registerMixin(mixinName: string): this;

            hasMixin(mixinName: string): boolean;

            isRendered(): boolean;

            getClassName(item: string, mixinName?: string): string;

            getClassName(): object;

            getDefault(item: string, mixinName?: string): any;

            getOpt(item: string, mixinName?: string): any;

            getLimit(item: string, mixinName?: string): number;

            getLsi(item: string, mixinName?: string): LsiValue;

            getLsiComponent(item: string, mixinName?: string, params?: object): React.ReactNode;

            getLsiValue(item: string, mixinName?: string, params?: object): string;

            getLsiItem(value: LsiValue, params?: object): string;

            isRendered(): boolean;

            setAsyncState(newState: (prevState: object) => object, setStateCallback?: () => void): this;

            setAsyncState(newState: object, setStateCallback?: () => void): this;

            getId(): string;

            getName(): string;

            getTooltip(): string;

            getMainPropsToPass(mixinNames?: Array<string>): CombinedMixins.BaseCcrWriterColorSchemaElementaryNestingLevelPureRender.Props

            getMainAttrs(): React.HTMLAttributes<HTMLElement>;

            getParent(): React.ReactNode;

            getParentByType(typeFunction: string): React.ReactNode;

            checkParentTagName(parentTagName: string): React.ReactNode;

            checkParentType(parentTypeFunction: string): React.ReactNode;

            getIndex(): number;

            getFullClassName(className): string

            stringToObjectType(string: string, type: any, prefix: object): any;

            switchChildrenToBody(props: object): object;

            findDOMNode(): HTMLElement;

            showError(msgKey: string, msgParams: Array<string>, opt?: WithContext): this;

            showError(msgKey: string, msgParams: string, opt?: WithContext): this;

            showWarning(msgKey: string, msgParams: Array<string>, opt?: WithContext): this;

            showWarning(msgKey: string, msgParams: string, opt?: WithContext): this;

            replaceByHardSpace(text: string, language: string): string;

            shouldRender(nextProps, nextState, thisProps, thisState): boolean

            getCcrKey(props?: object): string;

            getCcrComponentByKey(key: string): React.ReactNode;

            isCcrRegisteredByKey(key: string): boolean;

            getCcrByKeyRegister(): object

            getColorSchema(): string

            setHiddenValue(value: boolean, setStateCallback?: () => void): this;

            hide(setStateCallback?: () => void): this;

            hideDefault(setStateCallback?: () => void): void;

            show(setStateCallback?: () => void): this;

            showDefault(setStateCallback?: () => void): this;

            isHidden(): boolean;

            toggleHidden(setStateCallback?: () => void): this;

            toggleHiddenDefault(setStateCallback?: () => void): this;

            setDisabledValue(value: boolean, setStateCallback?: () => void): this;

            disable(setStateCallback?: () => void): this;

            disableDefault(setStateCallback?: () => void): this;

            enable(setStateCallback?: () => void): this

            enableDefault(setStateCallback?: () => void): this;

            isDisabled(): boolean;

            toggleDisabled(setStateCallback?: () => void): this;

            toggleDisabledDefault(setStateCallback?: () => void): this;

            setSelectedValue(value, setStateCallback?: () => void): this;

            select(setStateCallback?: () => void): this;

            selectDefault(setStateCallback?: () => void): this;

            deselect(setStateCallback?: () => void): this;

            deselectDefault(setStateCallback?: () => void): this

            isSelected(): boolean;

            toggleSelected(setStateCallback?: () => void): this;

            toggleSelectedDefault(setStateCallback?: () => void): this;

            buildMainAttrs(mainAttrs: object): React.HTMLAttributes<HTMLElement>;

            getHiddenClassName(className?: string): string;

            getDisabledClassName(className?: string): string;

            getSelectedClassName(className?: string): string

            getDisabledCover(): React.ReactNode

            getDisabledCoverTransparent(): React.ReactNode

            getNestingLevel(): NestingLevels

            getParentNestingLevel(): NestingLevels

            getNestingLevelList(): Array<NestingLevels>

            checkNestingLevel(): NestingLevels | null

        }


        class BaseElementaryPureRender extends React.Component<CombinedMixins.BaseElementaryPureRender.Props, CombinedMixins.BaseElementaryPureRender.State> {
            getTagName(): string;

            getMixinRegister(): Array<object>;

            registerMixin(mixinName: string): this;

            hasMixin(mixinName: string): boolean;

            isRendered(): boolean;

            getClassName(item: string, mixinName?: string): string;

            getClassName(): object;

            getDefault(item: string, mixinName?: string): any;

            getOpt(item: string, mixinName?: string): any;

            getLimit(item: string, mixinName?: string): number;

            getLsi(item: string, mixinName?: string): LsiValue;

            getLsiComponent(item: string, mixinName?: string, params?: object): React.ReactNode;

            getLsiValue(item: string, mixinName?: string, params?: object): string;

            getLsiItem(value: LsiValue, params?: object): string;

            isRendered(): boolean;

            setAsyncState(newState: (prevState: object) => object, setStateCallback?: () => void): this;

            setAsyncState(newState: object, setStateCallback?: () => void): this;

            getId(): string;

            getName(): string;

            getTooltip(): string;

            getMainPropsToPass(mixinNames?: Array<string>): CombinedMixins.BaseElementaryPureRender.Props

            getMainAttrs(): React.HTMLAttributes<HTMLElement>;

            getParent(): React.ReactNode;

            getParentByType(typeFunction: string): React.ReactNode;

            checkParentTagName(parentTagName: string): React.ReactNode;

            checkParentType(parentTypeFunction: string): React.ReactNode;

            getIndex(): number;

            getFullClassName(className): string

            stringToObjectType(string: string, type: any, prefix: object): any;

            switchChildrenToBody(props: object): object;

            findDOMNode(): HTMLElement;

            showError(msgKey: string, msgParams: Array<string>, opt?: WithContext): this;

            showError(msgKey: string, msgParams: string, opt?: WithContext): this;

            showWarning(msgKey: string, msgParams: Array<string>, opt?: WithContext): this;

            showWarning(msgKey: string, msgParams: string, opt?: WithContext): this;

            replaceByHardSpace(text: string, language: string): string;

            shouldRender(nextProps, nextState, thisProps, thisState): boolean

            setHiddenValue(value: boolean, setStateCallback?: () => void): this;

            hide(setStateCallback?: () => void): this;

            hideDefault(setStateCallback?: () => void): void;

            show(setStateCallback?: () => void): this;

            showDefault(setStateCallback?: () => void): this;

            isHidden(): boolean;

            toggleHidden(setStateCallback?: () => void): this;

            toggleHiddenDefault(setStateCallback?: () => void): this;

            setDisabledValue(value: boolean, setStateCallback?: () => void): this;

            disable(setStateCallback?: () => void): this;

            disableDefault(setStateCallback?: () => void): this;

            enable(setStateCallback?: () => void): this

            enableDefault(setStateCallback?: () => void): this;

            isDisabled(): boolean;

            toggleDisabled(setStateCallback?: () => void): this;

            toggleDisabledDefault(setStateCallback?: () => void): this;

            setSelectedValue(value, setStateCallback?: () => void): this;

            select(setStateCallback?: () => void): this;

            selectDefault(setStateCallback?: () => void): this;

            deselect(setStateCallback?: () => void): this;

            deselectDefault(setStateCallback?: () => void): this

            isSelected(): boolean;

            toggleSelected(setStateCallback?: () => void): this;

            toggleSelectedDefault(setStateCallback?: () => void): this;

            buildMainAttrs(mainAttrs: object): React.HTMLAttributes<HTMLElement>;

            getHiddenClassName(className?: string): string;

            getDisabledClassName(className?: string): string;

            getSelectedClassName(className?: string): string

            getDisabledCover(): React.ReactNode

            getDisabledCoverTransparent(): React.ReactNode

        }


        class BaseElementaryNestingLevelPureRenderSection extends React.Component<CombinedMixins.BaseElementaryNestingLevelPureRenderSection.Props, CombinedMixins.BaseElementaryNestingLevelPureRenderSection.State> {
            getTagName(): string;

            getMixinRegister(): Array<object>;

            registerMixin(mixinName: string): this;

            hasMixin(mixinName: string): boolean;

            isRendered(): boolean;

            getClassName(item: string, mixinName?: string): string;

            getClassName(): object;

            getDefault(item: string, mixinName?: string): any;

            getOpt(item: string, mixinName?: string): any;

            getLimit(item: string, mixinName?: string): number;

            getLsi(item: string, mixinName?: string): LsiValue;

            getLsiComponent(item: string, mixinName?: string, params?: object): React.ReactNode;

            getLsiValue(item: string, mixinName?: string, params?: object): string;

            getLsiItem(value: LsiValue, params?: object): string;

            isRendered(): boolean;

            setAsyncState(newState: (prevState: object) => object, setStateCallback?: () => void): this;

            setAsyncState(newState: object, setStateCallback?: () => void): this;

            getId(): string;

            getName(): string;

            getTooltip(): string;

            getMainPropsToPass(mixinNames?: Array<string>): CombinedMixins.BaseElementaryNestingLevelPureRenderSection.Props

            getMainAttrs(): React.HTMLAttributes<HTMLElement>;

            getParent(): React.ReactNode;

            getParentByType(typeFunction: string): React.ReactNode;

            checkParentTagName(parentTagName: string): React.ReactNode;

            checkParentType(parentTypeFunction: string): React.ReactNode;

            getIndex(): number;

            getFullClassName(className): string

            stringToObjectType(string: string, type: any, prefix: object): any;

            switchChildrenToBody(props: object): object;

            findDOMNode(): HTMLElement;

            showError(msgKey: string, msgParams: Array<string>, opt?: WithContext): this;

            showError(msgKey: string, msgParams: string, opt?: WithContext): this;

            showWarning(msgKey: string, msgParams: Array<string>, opt?: WithContext): this;

            showWarning(msgKey: string, msgParams: string, opt?: WithContext): this;

            replaceByHardSpace(text: string, language: string): string;

            shouldRender(nextProps, nextState, thisProps, thisState): boolean

            setHiddenValue(value: boolean, setStateCallback?: () => void): this;

            hide(setStateCallback?: () => void): this;

            hideDefault(setStateCallback?: () => void): void;

            show(setStateCallback?: () => void): this;

            showDefault(setStateCallback?: () => void): this;

            isHidden(): boolean;

            toggleHidden(setStateCallback?: () => void): this;

            toggleHiddenDefault(setStateCallback?: () => void): this;

            setDisabledValue(value: boolean, setStateCallback?: () => void): this;

            disable(setStateCallback?: () => void): this;

            disableDefault(setStateCallback?: () => void): this;

            enable(setStateCallback?: () => void): this

            enableDefault(setStateCallback?: () => void): this;

            isDisabled(): boolean;

            toggleDisabled(setStateCallback?: () => void): this;

            toggleDisabledDefault(setStateCallback?: () => void): this;

            setSelectedValue(value, setStateCallback?: () => void): this;

            select(setStateCallback?: () => void): this;

            selectDefault(setStateCallback?: () => void): this;

            deselect(setStateCallback?: () => void): this;

            deselectDefault(setStateCallback?: () => void): this

            isSelected(): boolean;

            toggleSelected(setStateCallback?: () => void): this;

            toggleSelectedDefault(setStateCallback?: () => void): this;

            buildMainAttrs(mainAttrs: object): React.HTMLAttributes<HTMLElement>;

            getHiddenClassName(className?: string): string;

            getDisabledClassName(className?: string): string;

            getSelectedClassName(className?: string): string

            getDisabledCover(): React.ReactNode

            getDisabledCoverTransparent(): React.ReactNode

            getNestingLevel(): NestingLevels

            getParentNestingLevel(): NestingLevels

            getNestingLevelList(): Array<NestingLevels>

            checkNestingLevel(): NestingLevels | null

            getHeader(props?: object): React.ReactNode

            getHeaderDefault(props?: object): React.ReactNode

            getFooter(props?: object): React.ReactNode

            getFooterDefault(props?: object): React.ReactNode

            getHeaderType(headerContent?: string | object): string;

            getFooterType(footerContent?: string | object): string;

            registerRenderedHeaderChild(renderedHeaderChild: React.ReactChild): this;

            registerRenderedFooterChild(renderedFooterChild: React.ReactChild): this;

            expandHeaderProps(prevHeaderChild: object): object;

            expandFooterProps(prevFooterChild: object): object

            buildHeaderChild(header): React.ReactChild

            buildHeaderChildDefault(header): React.ReactChild

            buildFooterChild(footer): React.ReactChild

            buildFooterChildDefault(footer): React.ReactChild

            getHeaderChild(): React.ReactChild

            getFooterChild(): React.ReactChild

            getRenderedHeaderChild(): React.ReactChild

            getRenderedFooterChild(): React.ReactChild

            isDynamic(): boolean;

            getContent(): Uu5Content;

            expandChildProps(prevChild: React.ReactNode, childIndex: number): object;

            buildChild(childTag: string, childProps?: object, children?: React.ReactChildren): React.ReactNode;

            cloneChild(child: React.ReactNode, props: object): React.ReactNode;

            expandChildDefault(child: React.ReactNode, key?: any): React.ReactNode

            buildNodeChildren(children: React.ReactChildren, childPropsExpander: (child: React.ReactNode, index: number) => object): React.ReactChildren;

            shouldChildRender(child: React.ReactChildren): boolean;

            buildChildren(contentProps: object, childPropsExpander: (child: React.ReactNode, index: number) => object, childIndex: number): React.ReactChildren;

            buildChildrenDefault(contentProps: object, childPropsExpander: (child: React.ReactNode, index: number) => object, childIndex: number): React.ReactChildren;

            getStandardChildren(): React.ReactChildren;

            getOutlineChildren(): React.ReactChildren

            getChildren(): React.ReactChildren;

            getRenderedChildren(): React.ReactChild;

            getRenderedChildrenDefault(): React.ReactChild;

            setRenderedChildren(childrenIndexList: any): this;

            // TODO
            addRenderedChild(renderedChild, index): this;

            // TODO
            removeRenderedChild(renderedChild): this;

            // TODO
            getRenderedChildrenIdList(): any;

            // TODO
            setRenderedChildrenIdList(childrenIdList): this;

            // TODO
            addRenderedChildToIdList(renderedChild): this;

            // TODO
            removeRenderedChildFromIdList(renderedChild): this;

            // TODO
            getRenderedChildrenNameList(): any;

            // TODO
            setRenderedChildrenNameList(childrenNameList): this;

            // TODO
            addRenderedChildToNameList(renderedChild): this;

            // TODO
            removeRenderedChildFromNameList(renderedChild): this;

            getChildIndexById(childId: string): number;

            getChildIndexByIdDefault(childId: string): number;

            getRenderedChildById(childId: string): React.ReactChild;

            getRenderedChildByIdDefault(childId: string): React.ReactChild;

            getRenderedChildrenByName(childName: string): React.ReactChildren;

            getRenderedChildByName(childName: string): React.ReactChild;

            getRenderedChildByNameDefault(childName: string): React.ReactChild;

            getRenderedChildByIndex(index: number): React.ReactChild;

            getRenderedChildByIndexDefault(index: number): React.ReactChild;

            getRenderedChildByTagName(tagName: string): React.ReactChild;

            getRenderedChildByTagNameDefault(tagName: string): React.ReactChild;

            getFirstRenderedChild(): React.ReactChild;

            getFirstRenderedChildDefault(): React.ReactChild;

            getLastRenderedChild(): React.ReactChild;

            getLastRenderedChildDefault(): React.ReactChild;

            eachRenderedChild(callback: (rendredChild: React.ReactChild, index: number) => boolean): this;

            eachRenderedChildDefault(callback: (rendredChild: React.ReactChild, index: number) => boolean): this;

            registerRenderedChild(renderedChild: React.ReactChild, index: number): this;

            unregisterRenderedChild(renderedChild: React.ReactChild): this;

            // dynamic functions

            setChildren(newChildren: React.ReactChildren, setStateCallback?: () => void): this;

            setChildren(newChildren: React.ReactChildren, props?: object, setStateCallback?: () => void): this;

            setChildrenDefault(newChildren: React.ReactChildren, setStateCallback?: () => void): this;

            insertChild(child: object | React.ReactNode, opt?: { position?: number, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildDefault(child: object | React.ReactNode, opt?: { position?: number, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildBefore(child: object | React.ReactNode, opt?: { childAfterId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildBeforeDefault(child: object | React.ReactNode, opt?: { childAfterId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildAfter(child: object | React.ReactNode, opt?: { childBeforeId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildAfterDefault(child: object | React.ReactNode, opt?: { childBeforeId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            updateChild(childId: string, newProps: object, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this

            updateChildDefault(childId: string, newProps: object, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            replaceChild(childId: string, child: object | React.ReactNode, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            replaceChildDefault(childId: string, child: object | React.ReactNode, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            deleteChild(childId: string, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            deleteChildDefault(childId: string, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            clearChildren(opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            clearChildrenDefault(opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            // TODO
            setFilter(filter, setStateCallback?: () => void): this;

            resetFilter(setStateCallback?: () => void): this;

            // TODO
            setSorter(sorter, setStateCallback?: () => void): this;

            resetSorter(setStateCallback?: () => void): this;

            // TODO
            setFilterAndSorter(filter, sorter, setStateCallback?: () => void): this;

            resetFilterAndSorter(setStateCallback?: () => void): this;

            getFilteredSorterChildren(children?: React.ReactChildren): React.ReactChildren;

            setStandardMode(setStateCallback?: () => void): this;

            setOutlineMode(setStateCallback?: () => void): this;

            getMode(): string;

            isStandardMode(): boolean

            isOutlineMode(): boolean

            getLevel(): number;

            shouldIncreaseLevel(parentLevelComponent: React.ReactNode, props?: object): boolean

            checkLevel(props?: object): number;

        }


        class BaseContentElementaryPureRender extends React.Component<CombinedMixins.BaseContentElementaryPureRender.Props, CombinedMixins.BaseContentElementaryPureRender.State> {
            getTagName(): string;

            getMixinRegister(): Array<object>;

            registerMixin(mixinName: string): this;

            hasMixin(mixinName: string): boolean;

            isRendered(): boolean;

            getClassName(item: string, mixinName?: string): string;

            getClassName(): object;

            getDefault(item: string, mixinName?: string): any;

            getOpt(item: string, mixinName?: string): any;

            getLimit(item: string, mixinName?: string): number;

            getLsi(item: string, mixinName?: string): LsiValue;

            getLsiComponent(item: string, mixinName?: string, params?: object): React.ReactNode;

            getLsiValue(item: string, mixinName?: string, params?: object): string;

            getLsiItem(value: LsiValue, params?: object): string;

            isRendered(): boolean;

            setAsyncState(newState: (prevState: object) => object, setStateCallback?: () => void): this;

            setAsyncState(newState: object, setStateCallback?: () => void): this;

            getId(): string;

            getName(): string;

            getTooltip(): string;

            getMainPropsToPass(mixinNames?: Array<string>): CombinedMixins.BaseContentElementaryPureRender.Props

            getMainAttrs(): React.HTMLAttributes<HTMLElement>;

            getParent(): React.ReactNode;

            getParentByType(typeFunction: string): React.ReactNode;

            checkParentTagName(parentTagName: string): React.ReactNode;

            checkParentType(parentTypeFunction: string): React.ReactNode;

            getIndex(): number;

            getFullClassName(className): string

            stringToObjectType(string: string, type: any, prefix: object): any;

            switchChildrenToBody(props: object): object;

            findDOMNode(): HTMLElement;

            showError(msgKey: string, msgParams: Array<string>, opt?: WithContext): this;

            showError(msgKey: string, msgParams: string, opt?: WithContext): this;

            showWarning(msgKey: string, msgParams: Array<string>, opt?: WithContext): this;

            showWarning(msgKey: string, msgParams: string, opt?: WithContext): this;

            replaceByHardSpace(text: string, language: string): string;

            shouldRender(nextProps, nextState, thisProps, thisState): boolean

            isDynamic(): boolean;

            getContent(): Uu5Content;

            expandChildProps(prevChild: React.ReactNode, childIndex: number): object;

            buildChild(childTag: string, childProps?: object, children?: React.ReactChildren): React.ReactNode;

            cloneChild(child: React.ReactNode, props: object): React.ReactNode;

            expandChildDefault(child: React.ReactNode, key?: any): React.ReactNode

            buildNodeChildren(children: React.ReactChildren, childPropsExpander: (child: React.ReactNode, index: number) => object): React.ReactChildren;

            shouldChildRender(child: React.ReactChildren): boolean;

            buildChildren(contentProps: object, childPropsExpander: (child: React.ReactNode, index: number) => object, childIndex: number): React.ReactChildren;

            buildChildrenDefault(contentProps: object, childPropsExpander: (child: React.ReactNode, index: number) => object, childIndex: number): React.ReactChildren;

            getStandardChildren(): React.ReactChildren;

            getOutlineChildren(): React.ReactChildren

            getChildren(): React.ReactChildren;

            getRenderedChildren(): React.ReactChild;

            getRenderedChildrenDefault(): React.ReactChild;

            setRenderedChildren(childrenIndexList: any): this;

            // TODO
            addRenderedChild(renderedChild, index): this;

            // TODO
            removeRenderedChild(renderedChild): this;

            // TODO
            getRenderedChildrenIdList(): any;

            // TODO
            setRenderedChildrenIdList(childrenIdList): this;

            // TODO
            addRenderedChildToIdList(renderedChild): this;

            // TODO
            removeRenderedChildFromIdList(renderedChild): this;

            // TODO
            getRenderedChildrenNameList(): any;

            // TODO
            setRenderedChildrenNameList(childrenNameList): this;

            // TODO
            addRenderedChildToNameList(renderedChild): this;

            // TODO
            removeRenderedChildFromNameList(renderedChild): this;

            getChildIndexById(childId: string): number;

            getChildIndexByIdDefault(childId: string): number;

            getRenderedChildById(childId: string): React.ReactChild;

            getRenderedChildByIdDefault(childId: string): React.ReactChild;

            getRenderedChildrenByName(childName: string): React.ReactChildren;

            getRenderedChildByName(childName: string): React.ReactChild;

            getRenderedChildByNameDefault(childName: string): React.ReactChild;

            getRenderedChildByIndex(index: number): React.ReactChild;

            getRenderedChildByIndexDefault(index: number): React.ReactChild;

            getRenderedChildByTagName(tagName: string): React.ReactChild;

            getRenderedChildByTagNameDefault(tagName: string): React.ReactChild;

            getFirstRenderedChild(): React.ReactChild;

            getFirstRenderedChildDefault(): React.ReactChild;

            getLastRenderedChild(): React.ReactChild;

            getLastRenderedChildDefault(): React.ReactChild;

            eachRenderedChild(callback: (rendredChild: React.ReactChild, index: number) => boolean): this;

            eachRenderedChildDefault(callback: (rendredChild: React.ReactChild, index: number) => boolean): this;

            registerRenderedChild(renderedChild: React.ReactChild, index: number): this;

            unregisterRenderedChild(renderedChild: React.ReactChild): this;

            // dynamic functions

            setChildren(newChildren: React.ReactChildren, setStateCallback?: () => void): this;

            setChildren(newChildren: React.ReactChildren, props?: object, setStateCallback?: () => void): this;

            setChildrenDefault(newChildren: React.ReactChildren, setStateCallback?: () => void): this;

            insertChild(child: object | React.ReactNode, opt?: { position?: number, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildDefault(child: object | React.ReactNode, opt?: { position?: number, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildBefore(child: object | React.ReactNode, opt?: { childAfterId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildBeforeDefault(child: object | React.ReactNode, opt?: { childAfterId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildAfter(child: object | React.ReactNode, opt?: { childBeforeId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildAfterDefault(child: object | React.ReactNode, opt?: { childBeforeId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            updateChild(childId: string, newProps: object, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this

            updateChildDefault(childId: string, newProps: object, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            replaceChild(childId: string, child: object | React.ReactNode, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            replaceChildDefault(childId: string, child: object | React.ReactNode, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            deleteChild(childId: string, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            deleteChildDefault(childId: string, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            clearChildren(opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            clearChildrenDefault(opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            // TODO
            setFilter(filter, setStateCallback?: () => void): this;

            resetFilter(setStateCallback?: () => void): this;

            // TODO
            setSorter(sorter, setStateCallback?: () => void): this;

            resetSorter(setStateCallback?: () => void): this;

            // TODO
            setFilterAndSorter(filter, sorter, setStateCallback?: () => void): this;

            resetFilterAndSorter(setStateCallback?: () => void): this;

            getFilteredSorterChildren(children?: React.ReactChildren): React.ReactChildren;

            setStandardMode(setStateCallback?: () => void): this;

            setOutlineMode(setStateCallback?: () => void): this;

            getMode(): string;

            isStandardMode(): boolean

            isOutlineMode(): boolean

            setHiddenValue(value: boolean, setStateCallback?: () => void): this;

            hide(setStateCallback?: () => void): this;

            hideDefault(setStateCallback?: () => void): void;

            show(setStateCallback?: () => void): this;

            showDefault(setStateCallback?: () => void): this;

            isHidden(): boolean;

            toggleHidden(setStateCallback?: () => void): this;

            toggleHiddenDefault(setStateCallback?: () => void): this;

            setDisabledValue(value: boolean, setStateCallback?: () => void): this;

            disable(setStateCallback?: () => void): this;

            disableDefault(setStateCallback?: () => void): this;

            enable(setStateCallback?: () => void): this

            enableDefault(setStateCallback?: () => void): this;

            isDisabled(): boolean;

            toggleDisabled(setStateCallback?: () => void): this;

            toggleDisabledDefault(setStateCallback?: () => void): this;

            setSelectedValue(value, setStateCallback?: () => void): this;

            select(setStateCallback?: () => void): this;

            selectDefault(setStateCallback?: () => void): this;

            deselect(setStateCallback?: () => void): this;

            deselectDefault(setStateCallback?: () => void): this

            isSelected(): boolean;

            toggleSelected(setStateCallback?: () => void): this;

            toggleSelectedDefault(setStateCallback?: () => void): this;

            buildMainAttrs(mainAttrs: object): React.HTMLAttributes<HTMLElement>;

            getHiddenClassName(className?: string): string;

            getDisabledClassName(className?: string): string;

            getSelectedClassName(className?: string): string

            getDisabledCover(): React.ReactNode

            getDisabledCoverTransparent(): React.ReactNode

        }


        class BaseCcrWriterElementaryNestingLevelPureRenderSection extends React.Component<CombinedMixins.BaseCcrWriterElementaryNestingLevelPureRenderSection.Props, CombinedMixins.BaseCcrWriterElementaryNestingLevelPureRenderSection.State> {
            getTagName(): string;

            getMixinRegister(): Array<object>;

            registerMixin(mixinName: string): this;

            hasMixin(mixinName: string): boolean;

            isRendered(): boolean;

            getClassName(item: string, mixinName?: string): string;

            getClassName(): object;

            getDefault(item: string, mixinName?: string): any;

            getOpt(item: string, mixinName?: string): any;

            getLimit(item: string, mixinName?: string): number;

            getLsi(item: string, mixinName?: string): LsiValue;

            getLsiComponent(item: string, mixinName?: string, params?: object): React.ReactNode;

            getLsiValue(item: string, mixinName?: string, params?: object): string;

            getLsiItem(value: LsiValue, params?: object): string;

            isRendered(): boolean;

            setAsyncState(newState: (prevState: object) => object, setStateCallback?: () => void): this;

            setAsyncState(newState: object, setStateCallback?: () => void): this;

            getId(): string;

            getName(): string;

            getTooltip(): string;

            getMainPropsToPass(mixinNames?: Array<string>): CombinedMixins.BaseCcrWriterElementaryNestingLevelPureRenderSection.Props

            getMainAttrs(): React.HTMLAttributes<HTMLElement>;

            getParent(): React.ReactNode;

            getParentByType(typeFunction: string): React.ReactNode;

            checkParentTagName(parentTagName: string): React.ReactNode;

            checkParentType(parentTypeFunction: string): React.ReactNode;

            getIndex(): number;

            getFullClassName(className): string

            stringToObjectType(string: string, type: any, prefix: object): any;

            switchChildrenToBody(props: object): object;

            findDOMNode(): HTMLElement;

            showError(msgKey: string, msgParams: Array<string>, opt?: WithContext): this;

            showError(msgKey: string, msgParams: string, opt?: WithContext): this;

            showWarning(msgKey: string, msgParams: Array<string>, opt?: WithContext): this;

            showWarning(msgKey: string, msgParams: string, opt?: WithContext): this;

            replaceByHardSpace(text: string, language: string): string;

            shouldRender(nextProps, nextState, thisProps, thisState): boolean

            getCcrKey(props?: object): string;

            getCcrComponentByKey(key: string): React.ReactNode;

            isCcrRegisteredByKey(key: string): boolean;

            getCcrByKeyRegister(): object

            setHiddenValue(value: boolean, setStateCallback?: () => void): this;

            hide(setStateCallback?: () => void): this;

            hideDefault(setStateCallback?: () => void): void;

            show(setStateCallback?: () => void): this;

            showDefault(setStateCallback?: () => void): this;

            isHidden(): boolean;

            toggleHidden(setStateCallback?: () => void): this;

            toggleHiddenDefault(setStateCallback?: () => void): this;

            setDisabledValue(value: boolean, setStateCallback?: () => void): this;

            disable(setStateCallback?: () => void): this;

            disableDefault(setStateCallback?: () => void): this;

            enable(setStateCallback?: () => void): this

            enableDefault(setStateCallback?: () => void): this;

            isDisabled(): boolean;

            toggleDisabled(setStateCallback?: () => void): this;

            toggleDisabledDefault(setStateCallback?: () => void): this;

            setSelectedValue(value, setStateCallback?: () => void): this;

            select(setStateCallback?: () => void): this;

            selectDefault(setStateCallback?: () => void): this;

            deselect(setStateCallback?: () => void): this;

            deselectDefault(setStateCallback?: () => void): this

            isSelected(): boolean;

            toggleSelected(setStateCallback?: () => void): this;

            toggleSelectedDefault(setStateCallback?: () => void): this;

            buildMainAttrs(mainAttrs: object): React.HTMLAttributes<HTMLElement>;

            getHiddenClassName(className?: string): string;

            getDisabledClassName(className?: string): string;

            getSelectedClassName(className?: string): string

            getDisabledCover(): React.ReactNode

            getDisabledCoverTransparent(): React.ReactNode

            getNestingLevel(): NestingLevels

            getParentNestingLevel(): NestingLevels

            getNestingLevelList(): Array<NestingLevels>

            checkNestingLevel(): NestingLevels | null

            getHeader(props?: object): React.ReactNode

            getHeaderDefault(props?: object): React.ReactNode

            getFooter(props?: object): React.ReactNode

            getFooterDefault(props?: object): React.ReactNode

            getHeaderType(headerContent?: string | object): string;

            getFooterType(footerContent?: string | object): string;

            registerRenderedHeaderChild(renderedHeaderChild: React.ReactChild): this;

            registerRenderedFooterChild(renderedFooterChild: React.ReactChild): this;

            expandHeaderProps(prevHeaderChild: object): object;

            expandFooterProps(prevFooterChild: object): object

            buildHeaderChild(header): React.ReactChild

            buildHeaderChildDefault(header): React.ReactChild

            buildFooterChild(footer): React.ReactChild

            buildFooterChildDefault(footer): React.ReactChild

            getHeaderChild(): React.ReactChild

            getFooterChild(): React.ReactChild

            getRenderedHeaderChild(): React.ReactChild

            getRenderedFooterChild(): React.ReactChild

            isDynamic(): boolean;

            getContent(): Uu5Content;

            expandChildProps(prevChild: React.ReactNode, childIndex: number): object;

            buildChild(childTag: string, childProps?: object, children?: React.ReactChildren): React.ReactNode;

            cloneChild(child: React.ReactNode, props: object): React.ReactNode;

            expandChildDefault(child: React.ReactNode, key?: any): React.ReactNode

            buildNodeChildren(children: React.ReactChildren, childPropsExpander: (child: React.ReactNode, index: number) => object): React.ReactChildren;

            shouldChildRender(child: React.ReactChildren): boolean;

            buildChildren(contentProps: object, childPropsExpander: (child: React.ReactNode, index: number) => object, childIndex: number): React.ReactChildren;

            buildChildrenDefault(contentProps: object, childPropsExpander: (child: React.ReactNode, index: number) => object, childIndex: number): React.ReactChildren;

            getStandardChildren(): React.ReactChildren;

            getOutlineChildren(): React.ReactChildren

            getChildren(): React.ReactChildren;

            getRenderedChildren(): React.ReactChild;

            getRenderedChildrenDefault(): React.ReactChild;

            setRenderedChildren(childrenIndexList: any): this;

            // TODO
            addRenderedChild(renderedChild, index): this;

            // TODO
            removeRenderedChild(renderedChild): this;

            // TODO
            getRenderedChildrenIdList(): any;

            // TODO
            setRenderedChildrenIdList(childrenIdList): this;

            // TODO
            addRenderedChildToIdList(renderedChild): this;

            // TODO
            removeRenderedChildFromIdList(renderedChild): this;

            // TODO
            getRenderedChildrenNameList(): any;

            // TODO
            setRenderedChildrenNameList(childrenNameList): this;

            // TODO
            addRenderedChildToNameList(renderedChild): this;

            // TODO
            removeRenderedChildFromNameList(renderedChild): this;

            getChildIndexById(childId: string): number;

            getChildIndexByIdDefault(childId: string): number;

            getRenderedChildById(childId: string): React.ReactChild;

            getRenderedChildByIdDefault(childId: string): React.ReactChild;

            getRenderedChildrenByName(childName: string): React.ReactChildren;

            getRenderedChildByName(childName: string): React.ReactChild;

            getRenderedChildByNameDefault(childName: string): React.ReactChild;

            getRenderedChildByIndex(index: number): React.ReactChild;

            getRenderedChildByIndexDefault(index: number): React.ReactChild;

            getRenderedChildByTagName(tagName: string): React.ReactChild;

            getRenderedChildByTagNameDefault(tagName: string): React.ReactChild;

            getFirstRenderedChild(): React.ReactChild;

            getFirstRenderedChildDefault(): React.ReactChild;

            getLastRenderedChild(): React.ReactChild;

            getLastRenderedChildDefault(): React.ReactChild;

            eachRenderedChild(callback: (rendredChild: React.ReactChild, index: number) => boolean): this;

            eachRenderedChildDefault(callback: (rendredChild: React.ReactChild, index: number) => boolean): this;

            registerRenderedChild(renderedChild: React.ReactChild, index: number): this;

            unregisterRenderedChild(renderedChild: React.ReactChild): this;

            // dynamic functions

            setChildren(newChildren: React.ReactChildren, setStateCallback?: () => void): this;

            setChildren(newChildren: React.ReactChildren, props?: object, setStateCallback?: () => void): this;

            setChildrenDefault(newChildren: React.ReactChildren, setStateCallback?: () => void): this;

            insertChild(child: object | React.ReactNode, opt?: { position?: number, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildDefault(child: object | React.ReactNode, opt?: { position?: number, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildBefore(child: object | React.ReactNode, opt?: { childAfterId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildBeforeDefault(child: object | React.ReactNode, opt?: { childAfterId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildAfter(child: object | React.ReactNode, opt?: { childBeforeId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildAfterDefault(child: object | React.ReactNode, opt?: { childBeforeId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            updateChild(childId: string, newProps: object, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this

            updateChildDefault(childId: string, newProps: object, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            replaceChild(childId: string, child: object | React.ReactNode, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            replaceChildDefault(childId: string, child: object | React.ReactNode, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            deleteChild(childId: string, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            deleteChildDefault(childId: string, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            clearChildren(opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            clearChildrenDefault(opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            // TODO
            setFilter(filter, setStateCallback?: () => void): this;

            resetFilter(setStateCallback?: () => void): this;

            // TODO
            setSorter(sorter, setStateCallback?: () => void): this;

            resetSorter(setStateCallback?: () => void): this;

            // TODO
            setFilterAndSorter(filter, sorter, setStateCallback?: () => void): this;

            resetFilterAndSorter(setStateCallback?: () => void): this;

            getFilteredSorterChildren(children?: React.ReactChildren): React.ReactChildren;

            setStandardMode(setStateCallback?: () => void): this;

            setOutlineMode(setStateCallback?: () => void): this;

            getMode(): string;

            isStandardMode(): boolean

            isOutlineMode(): boolean

            getLevel(): number;

            shouldIncreaseLevel(parentLevelComponent: React.ReactNode, props?: object): boolean

            checkLevel(props?: object): number;

        }


        class BaseElementaryLsiNestingLevelPureRenderSection extends React.Component<CombinedMixins.BaseElementaryLsiNestingLevelPureRenderSection.Props, CombinedMixins.BaseElementaryLsiNestingLevelPureRenderSection.State> {
            getTagName(): string;

            getMixinRegister(): Array<object>;

            registerMixin(mixinName: string): this;

            hasMixin(mixinName: string): boolean;

            isRendered(): boolean;

            getClassName(item: string, mixinName?: string): string;

            getClassName(): object;

            getDefault(item: string, mixinName?: string): any;

            getOpt(item: string, mixinName?: string): any;

            getLimit(item: string, mixinName?: string): number;

            getLsi(item: string, mixinName?: string): LsiValue;

            getLsiComponent(item: string, mixinName?: string, params?: object): React.ReactNode;

            getLsiValue(item: string, mixinName?: string, params?: object): string;

            getLsiItem(value: LsiValue, params?: object): string;

            isRendered(): boolean;

            setAsyncState(newState: (prevState: object) => object, setStateCallback?: () => void): this;

            setAsyncState(newState: object, setStateCallback?: () => void): this;

            getId(): string;

            getName(): string;

            getTooltip(): string;

            getMainPropsToPass(mixinNames?: Array<string>): CombinedMixins.BaseElementaryLsiNestingLevelPureRenderSection.Props

            getMainAttrs(): React.HTMLAttributes<HTMLElement>;

            getParent(): React.ReactNode;

            getParentByType(typeFunction: string): React.ReactNode;

            checkParentTagName(parentTagName: string): React.ReactNode;

            checkParentType(parentTypeFunction: string): React.ReactNode;

            getIndex(): number;

            getFullClassName(className): string

            stringToObjectType(string: string, type: any, prefix: object): any;

            switchChildrenToBody(props: object): object;

            findDOMNode(): HTMLElement;

            showError(msgKey: string, msgParams: Array<string>, opt?: WithContext): this;

            showError(msgKey: string, msgParams: string, opt?: WithContext): this;

            showWarning(msgKey: string, msgParams: Array<string>, opt?: WithContext): this;

            showWarning(msgKey: string, msgParams: string, opt?: WithContext): this;

            replaceByHardSpace(text: string, language: string): string;

            shouldRender(nextProps, nextState, thisProps, thisState): boolean

            setHiddenValue(value: boolean, setStateCallback?: () => void): this;

            hide(setStateCallback?: () => void): this;

            hideDefault(setStateCallback?: () => void): void;

            show(setStateCallback?: () => void): this;

            showDefault(setStateCallback?: () => void): this;

            isHidden(): boolean;

            toggleHidden(setStateCallback?: () => void): this;

            toggleHiddenDefault(setStateCallback?: () => void): this;

            setDisabledValue(value: boolean, setStateCallback?: () => void): this;

            disable(setStateCallback?: () => void): this;

            disableDefault(setStateCallback?: () => void): this;

            enable(setStateCallback?: () => void): this

            enableDefault(setStateCallback?: () => void): this;

            isDisabled(): boolean;

            toggleDisabled(setStateCallback?: () => void): this;

            toggleDisabledDefault(setStateCallback?: () => void): this;

            setSelectedValue(value, setStateCallback?: () => void): this;

            select(setStateCallback?: () => void): this;

            selectDefault(setStateCallback?: () => void): this;

            deselect(setStateCallback?: () => void): this;

            deselectDefault(setStateCallback?: () => void): this

            isSelected(): boolean;

            toggleSelected(setStateCallback?: () => void): this;

            toggleSelectedDefault(setStateCallback?: () => void): this;

            buildMainAttrs(mainAttrs: object): React.HTMLAttributes<HTMLElement>;

            getHiddenClassName(className?: string): string;

            getDisabledClassName(className?: string): string;

            getSelectedClassName(className?: string): string

            getDisabledCover(): React.ReactNode

            getDisabledCoverTransparent(): React.ReactNode

            getLanguages(): Array<{ language: string, q: number }>

            getLanguage(): string

            getNestingLevel(): NestingLevels

            getParentNestingLevel(): NestingLevels

            getNestingLevelList(): Array<NestingLevels>

            checkNestingLevel(): NestingLevels | null

            getHeader(props?: object): React.ReactNode

            getHeaderDefault(props?: object): React.ReactNode

            getFooter(props?: object): React.ReactNode

            getFooterDefault(props?: object): React.ReactNode

            getHeaderType(headerContent?: string | object): string;

            getFooterType(footerContent?: string | object): string;

            registerRenderedHeaderChild(renderedHeaderChild: React.ReactChild): this;

            registerRenderedFooterChild(renderedFooterChild: React.ReactChild): this;

            expandHeaderProps(prevHeaderChild: object): object;

            expandFooterProps(prevFooterChild: object): object

            buildHeaderChild(header): React.ReactChild

            buildHeaderChildDefault(header): React.ReactChild

            buildFooterChild(footer): React.ReactChild

            buildFooterChildDefault(footer): React.ReactChild

            getHeaderChild(): React.ReactChild

            getFooterChild(): React.ReactChild

            getRenderedHeaderChild(): React.ReactChild

            getRenderedFooterChild(): React.ReactChild

            isDynamic(): boolean;

            getContent(): Uu5Content;

            expandChildProps(prevChild: React.ReactNode, childIndex: number): object;

            buildChild(childTag: string, childProps?: object, children?: React.ReactChildren): React.ReactNode;

            cloneChild(child: React.ReactNode, props: object): React.ReactNode;

            expandChildDefault(child: React.ReactNode, key?: any): React.ReactNode

            buildNodeChildren(children: React.ReactChildren, childPropsExpander: (child: React.ReactNode, index: number) => object): React.ReactChildren;

            shouldChildRender(child: React.ReactChildren): boolean;

            buildChildren(contentProps: object, childPropsExpander: (child: React.ReactNode, index: number) => object, childIndex: number): React.ReactChildren;

            buildChildrenDefault(contentProps: object, childPropsExpander: (child: React.ReactNode, index: number) => object, childIndex: number): React.ReactChildren;

            getStandardChildren(): React.ReactChildren;

            getOutlineChildren(): React.ReactChildren

            getChildren(): React.ReactChildren;

            getRenderedChildren(): React.ReactChild;

            getRenderedChildrenDefault(): React.ReactChild;

            setRenderedChildren(childrenIndexList: any): this;

            // TODO
            addRenderedChild(renderedChild, index): this;

            // TODO
            removeRenderedChild(renderedChild): this;

            // TODO
            getRenderedChildrenIdList(): any;

            // TODO
            setRenderedChildrenIdList(childrenIdList): this;

            // TODO
            addRenderedChildToIdList(renderedChild): this;

            // TODO
            removeRenderedChildFromIdList(renderedChild): this;

            // TODO
            getRenderedChildrenNameList(): any;

            // TODO
            setRenderedChildrenNameList(childrenNameList): this;

            // TODO
            addRenderedChildToNameList(renderedChild): this;

            // TODO
            removeRenderedChildFromNameList(renderedChild): this;

            getChildIndexById(childId: string): number;

            getChildIndexByIdDefault(childId: string): number;

            getRenderedChildById(childId: string): React.ReactChild;

            getRenderedChildByIdDefault(childId: string): React.ReactChild;

            getRenderedChildrenByName(childName: string): React.ReactChildren;

            getRenderedChildByName(childName: string): React.ReactChild;

            getRenderedChildByNameDefault(childName: string): React.ReactChild;

            getRenderedChildByIndex(index: number): React.ReactChild;

            getRenderedChildByIndexDefault(index: number): React.ReactChild;

            getRenderedChildByTagName(tagName: string): React.ReactChild;

            getRenderedChildByTagNameDefault(tagName: string): React.ReactChild;

            getFirstRenderedChild(): React.ReactChild;

            getFirstRenderedChildDefault(): React.ReactChild;

            getLastRenderedChild(): React.ReactChild;

            getLastRenderedChildDefault(): React.ReactChild;

            eachRenderedChild(callback: (rendredChild: React.ReactChild, index: number) => boolean): this;

            eachRenderedChildDefault(callback: (rendredChild: React.ReactChild, index: number) => boolean): this;

            registerRenderedChild(renderedChild: React.ReactChild, index: number): this;

            unregisterRenderedChild(renderedChild: React.ReactChild): this;

            // dynamic functions

            setChildren(newChildren: React.ReactChildren, setStateCallback?: () => void): this;

            setChildren(newChildren: React.ReactChildren, props?: object, setStateCallback?: () => void): this;

            setChildrenDefault(newChildren: React.ReactChildren, setStateCallback?: () => void): this;

            insertChild(child: object | React.ReactNode, opt?: { position?: number, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildDefault(child: object | React.ReactNode, opt?: { position?: number, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildBefore(child: object | React.ReactNode, opt?: { childAfterId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildBeforeDefault(child: object | React.ReactNode, opt?: { childAfterId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildAfter(child: object | React.ReactNode, opt?: { childBeforeId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildAfterDefault(child: object | React.ReactNode, opt?: { childBeforeId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            updateChild(childId: string, newProps: object, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this

            updateChildDefault(childId: string, newProps: object, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            replaceChild(childId: string, child: object | React.ReactNode, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            replaceChildDefault(childId: string, child: object | React.ReactNode, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            deleteChild(childId: string, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            deleteChildDefault(childId: string, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            clearChildren(opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            clearChildrenDefault(opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            // TODO
            setFilter(filter, setStateCallback?: () => void): this;

            resetFilter(setStateCallback?: () => void): this;

            // TODO
            setSorter(sorter, setStateCallback?: () => void): this;

            resetSorter(setStateCallback?: () => void): this;

            // TODO
            setFilterAndSorter(filter, sorter, setStateCallback?: () => void): this;

            resetFilterAndSorter(setStateCallback?: () => void): this;

            getFilteredSorterChildren(children?: React.ReactChildren): React.ReactChildren;

            setStandardMode(setStateCallback?: () => void): this;

            setOutlineMode(setStateCallback?: () => void): this;

            getMode(): string;

            isStandardMode(): boolean

            isOutlineMode(): boolean

            getLevel(): number;

            shouldIncreaseLevel(parentLevelComponent: React.ReactNode, props?: object): boolean

            checkLevel(props?: object): number;

        }


        class BaseContentElementaryLevelNestingLevelPureRender extends React.Component<CombinedMixins.BaseContentElementaryLevelNestingLevelPureRender.Props, CombinedMixins.BaseContentElementaryLevelNestingLevelPureRender.State> {
            getTagName(): string;

            getMixinRegister(): Array<object>;

            registerMixin(mixinName: string): this;

            hasMixin(mixinName: string): boolean;

            isRendered(): boolean;

            getClassName(item: string, mixinName?: string): string;

            getClassName(): object;

            getDefault(item: string, mixinName?: string): any;

            getOpt(item: string, mixinName?: string): any;

            getLimit(item: string, mixinName?: string): number;

            getLsi(item: string, mixinName?: string): LsiValue;

            getLsiComponent(item: string, mixinName?: string, params?: object): React.ReactNode;

            getLsiValue(item: string, mixinName?: string, params?: object): string;

            getLsiItem(value: LsiValue, params?: object): string;

            isRendered(): boolean;

            setAsyncState(newState: (prevState: object) => object, setStateCallback?: () => void): this;

            setAsyncState(newState: object, setStateCallback?: () => void): this;

            getId(): string;

            getName(): string;

            getTooltip(): string;

            getMainPropsToPass(mixinNames?: Array<string>): CombinedMixins.BaseContentElementaryLevelNestingLevelPureRender.Props

            getMainAttrs(): React.HTMLAttributes<HTMLElement>;

            getParent(): React.ReactNode;

            getParentByType(typeFunction: string): React.ReactNode;

            checkParentTagName(parentTagName: string): React.ReactNode;

            checkParentType(parentTypeFunction: string): React.ReactNode;

            getIndex(): number;

            getFullClassName(className): string

            stringToObjectType(string: string, type: any, prefix: object): any;

            switchChildrenToBody(props: object): object;

            findDOMNode(): HTMLElement;

            showError(msgKey: string, msgParams: Array<string>, opt?: WithContext): this;

            showError(msgKey: string, msgParams: string, opt?: WithContext): this;

            showWarning(msgKey: string, msgParams: Array<string>, opt?: WithContext): this;

            showWarning(msgKey: string, msgParams: string, opt?: WithContext): this;

            replaceByHardSpace(text: string, language: string): string;

            shouldRender(nextProps, nextState, thisProps, thisState): boolean

            isDynamic(): boolean;

            getContent(): Uu5Content;

            expandChildProps(prevChild: React.ReactNode, childIndex: number): object;

            buildChild(childTag: string, childProps?: object, children?: React.ReactChildren): React.ReactNode;

            cloneChild(child: React.ReactNode, props: object): React.ReactNode;

            expandChildDefault(child: React.ReactNode, key?: any): React.ReactNode

            buildNodeChildren(children: React.ReactChildren, childPropsExpander: (child: React.ReactNode, index: number) => object): React.ReactChildren;

            shouldChildRender(child: React.ReactChildren): boolean;

            buildChildren(contentProps: object, childPropsExpander: (child: React.ReactNode, index: number) => object, childIndex: number): React.ReactChildren;

            buildChildrenDefault(contentProps: object, childPropsExpander: (child: React.ReactNode, index: number) => object, childIndex: number): React.ReactChildren;

            getStandardChildren(): React.ReactChildren;

            getOutlineChildren(): React.ReactChildren

            getChildren(): React.ReactChildren;

            getRenderedChildren(): React.ReactChild;

            getRenderedChildrenDefault(): React.ReactChild;

            setRenderedChildren(childrenIndexList: any): this;

            // TODO
            addRenderedChild(renderedChild, index): this;

            // TODO
            removeRenderedChild(renderedChild): this;

            // TODO
            getRenderedChildrenIdList(): any;

            // TODO
            setRenderedChildrenIdList(childrenIdList): this;

            // TODO
            addRenderedChildToIdList(renderedChild): this;

            // TODO
            removeRenderedChildFromIdList(renderedChild): this;

            // TODO
            getRenderedChildrenNameList(): any;

            // TODO
            setRenderedChildrenNameList(childrenNameList): this;

            // TODO
            addRenderedChildToNameList(renderedChild): this;

            // TODO
            removeRenderedChildFromNameList(renderedChild): this;

            getChildIndexById(childId: string): number;

            getChildIndexByIdDefault(childId: string): number;

            getRenderedChildById(childId: string): React.ReactChild;

            getRenderedChildByIdDefault(childId: string): React.ReactChild;

            getRenderedChildrenByName(childName: string): React.ReactChildren;

            getRenderedChildByName(childName: string): React.ReactChild;

            getRenderedChildByNameDefault(childName: string): React.ReactChild;

            getRenderedChildByIndex(index: number): React.ReactChild;

            getRenderedChildByIndexDefault(index: number): React.ReactChild;

            getRenderedChildByTagName(tagName: string): React.ReactChild;

            getRenderedChildByTagNameDefault(tagName: string): React.ReactChild;

            getFirstRenderedChild(): React.ReactChild;

            getFirstRenderedChildDefault(): React.ReactChild;

            getLastRenderedChild(): React.ReactChild;

            getLastRenderedChildDefault(): React.ReactChild;

            eachRenderedChild(callback: (rendredChild: React.ReactChild, index: number) => boolean): this;

            eachRenderedChildDefault(callback: (rendredChild: React.ReactChild, index: number) => boolean): this;

            registerRenderedChild(renderedChild: React.ReactChild, index: number): this;

            unregisterRenderedChild(renderedChild: React.ReactChild): this;

            // dynamic functions

            setChildren(newChildren: React.ReactChildren, setStateCallback?: () => void): this;

            setChildren(newChildren: React.ReactChildren, props?: object, setStateCallback?: () => void): this;

            setChildrenDefault(newChildren: React.ReactChildren, setStateCallback?: () => void): this;

            insertChild(child: object | React.ReactNode, opt?: { position?: number, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildDefault(child: object | React.ReactNode, opt?: { position?: number, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildBefore(child: object | React.ReactNode, opt?: { childAfterId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildBeforeDefault(child: object | React.ReactNode, opt?: { childAfterId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildAfter(child: object | React.ReactNode, opt?: { childBeforeId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildAfterDefault(child: object | React.ReactNode, opt?: { childBeforeId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            updateChild(childId: string, newProps: object, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this

            updateChildDefault(childId: string, newProps: object, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            replaceChild(childId: string, child: object | React.ReactNode, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            replaceChildDefault(childId: string, child: object | React.ReactNode, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            deleteChild(childId: string, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            deleteChildDefault(childId: string, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            clearChildren(opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            clearChildrenDefault(opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            // TODO
            setFilter(filter, setStateCallback?: () => void): this;

            resetFilter(setStateCallback?: () => void): this;

            // TODO
            setSorter(sorter, setStateCallback?: () => void): this;

            resetSorter(setStateCallback?: () => void): this;

            // TODO
            setFilterAndSorter(filter, sorter, setStateCallback?: () => void): this;

            resetFilterAndSorter(setStateCallback?: () => void): this;

            getFilteredSorterChildren(children?: React.ReactChildren): React.ReactChildren;

            setStandardMode(setStateCallback?: () => void): this;

            setOutlineMode(setStateCallback?: () => void): this;

            getMode(): string;

            isStandardMode(): boolean

            isOutlineMode(): boolean

            setHiddenValue(value: boolean, setStateCallback?: () => void): this;

            hide(setStateCallback?: () => void): this;

            hideDefault(setStateCallback?: () => void): void;

            show(setStateCallback?: () => void): this;

            showDefault(setStateCallback?: () => void): this;

            isHidden(): boolean;

            toggleHidden(setStateCallback?: () => void): this;

            toggleHiddenDefault(setStateCallback?: () => void): this;

            setDisabledValue(value: boolean, setStateCallback?: () => void): this;

            disable(setStateCallback?: () => void): this;

            disableDefault(setStateCallback?: () => void): this;

            enable(setStateCallback?: () => void): this

            enableDefault(setStateCallback?: () => void): this;

            isDisabled(): boolean;

            toggleDisabled(setStateCallback?: () => void): this;

            toggleDisabledDefault(setStateCallback?: () => void): this;

            setSelectedValue(value, setStateCallback?: () => void): this;

            select(setStateCallback?: () => void): this;

            selectDefault(setStateCallback?: () => void): this;

            deselect(setStateCallback?: () => void): this;

            deselectDefault(setStateCallback?: () => void): this

            isSelected(): boolean;

            toggleSelected(setStateCallback?: () => void): this;

            toggleSelectedDefault(setStateCallback?: () => void): this;

            buildMainAttrs(mainAttrs: object): React.HTMLAttributes<HTMLElement>;

            getHiddenClassName(className?: string): string;

            getDisabledClassName(className?: string): string;

            getSelectedClassName(className?: string): string

            getDisabledCover(): React.ReactNode

            getDisabledCoverTransparent(): React.ReactNode

            getLevel(): number;

            shouldIncreaseLevel(parentLevelComponent: React.ReactNode, props?: object): boolean

            checkLevel(props?: object): number;

            getNestingLevel(): NestingLevels

            getParentNestingLevel(): NestingLevels

            getNestingLevelList(): Array<NestingLevels>

            checkNestingLevel(): NestingLevels | null

        }


        class BaseColorSchemaContentEditableElementaryLevelNestingLevelPureRender extends React.Component<CombinedMixins.BaseColorSchemaContentEditableElementaryLevelNestingLevelPureRender.Props, CombinedMixins.BaseColorSchemaContentEditableElementaryLevelNestingLevelPureRender.State> {
            getTagName(): string;

            getMixinRegister(): Array<object>;

            registerMixin(mixinName: string): this;

            hasMixin(mixinName: string): boolean;

            isRendered(): boolean;

            getClassName(item: string, mixinName?: string): string;

            getClassName(): object;

            getDefault(item: string, mixinName?: string): any;

            getOpt(item: string, mixinName?: string): any;

            getLimit(item: string, mixinName?: string): number;

            getLsi(item: string, mixinName?: string): LsiValue;

            getLsiComponent(item: string, mixinName?: string, params?: object): React.ReactNode;

            getLsiValue(item: string, mixinName?: string, params?: object): string;

            getLsiItem(value: LsiValue, params?: object): string;

            isRendered(): boolean;

            setAsyncState(newState: (prevState: object) => object, setStateCallback?: () => void): this;

            setAsyncState(newState: object, setStateCallback?: () => void): this;

            getId(): string;

            getName(): string;

            getTooltip(): string;

            getMainPropsToPass(mixinNames?: Array<string>): CombinedMixins.BaseColorSchemaContentEditableElementaryLevelNestingLevelPureRender.Props

            getMainAttrs(): React.HTMLAttributes<HTMLElement>;

            getParent(): React.ReactNode;

            getParentByType(typeFunction: string): React.ReactNode;

            checkParentTagName(parentTagName: string): React.ReactNode;

            checkParentType(parentTypeFunction: string): React.ReactNode;

            getIndex(): number;

            getFullClassName(className): string

            stringToObjectType(string: string, type: any, prefix: object): any;

            switchChildrenToBody(props: object): object;

            findDOMNode(): HTMLElement;

            showError(msgKey: string, msgParams: Array<string>, opt?: WithContext): this;

            showError(msgKey: string, msgParams: string, opt?: WithContext): this;

            showWarning(msgKey: string, msgParams: Array<string>, opt?: WithContext): this;

            showWarning(msgKey: string, msgParams: string, opt?: WithContext): this;

            replaceByHardSpace(text: string, language: string): string;

            shouldRender(nextProps, nextState, thisProps, thisState): boolean

            getColorSchema(): string

            isDynamic(): boolean;

            getContent(): Uu5Content;

            expandChildProps(prevChild: React.ReactNode, childIndex: number): object;

            buildChild(childTag: string, childProps?: object, children?: React.ReactChildren): React.ReactNode;

            cloneChild(child: React.ReactNode, props: object): React.ReactNode;

            expandChildDefault(child: React.ReactNode, key?: any): React.ReactNode

            buildNodeChildren(children: React.ReactChildren, childPropsExpander: (child: React.ReactNode, index: number) => object): React.ReactChildren;

            shouldChildRender(child: React.ReactChildren): boolean;

            buildChildren(contentProps: object, childPropsExpander: (child: React.ReactNode, index: number) => object, childIndex: number): React.ReactChildren;

            buildChildrenDefault(contentProps: object, childPropsExpander: (child: React.ReactNode, index: number) => object, childIndex: number): React.ReactChildren;

            getStandardChildren(): React.ReactChildren;

            getOutlineChildren(): React.ReactChildren

            getChildren(): React.ReactChildren;

            getRenderedChildren(): React.ReactChild;

            getRenderedChildrenDefault(): React.ReactChild;

            setRenderedChildren(childrenIndexList: any): this;

            // TODO
            addRenderedChild(renderedChild, index): this;

            // TODO
            removeRenderedChild(renderedChild): this;

            // TODO
            getRenderedChildrenIdList(): any;

            // TODO
            setRenderedChildrenIdList(childrenIdList): this;

            // TODO
            addRenderedChildToIdList(renderedChild): this;

            // TODO
            removeRenderedChildFromIdList(renderedChild): this;

            // TODO
            getRenderedChildrenNameList(): any;

            // TODO
            setRenderedChildrenNameList(childrenNameList): this;

            // TODO
            addRenderedChildToNameList(renderedChild): this;

            // TODO
            removeRenderedChildFromNameList(renderedChild): this;

            getChildIndexById(childId: string): number;

            getChildIndexByIdDefault(childId: string): number;

            getRenderedChildById(childId: string): React.ReactChild;

            getRenderedChildByIdDefault(childId: string): React.ReactChild;

            getRenderedChildrenByName(childName: string): React.ReactChildren;

            getRenderedChildByName(childName: string): React.ReactChild;

            getRenderedChildByNameDefault(childName: string): React.ReactChild;

            getRenderedChildByIndex(index: number): React.ReactChild;

            getRenderedChildByIndexDefault(index: number): React.ReactChild;

            getRenderedChildByTagName(tagName: string): React.ReactChild;

            getRenderedChildByTagNameDefault(tagName: string): React.ReactChild;

            getFirstRenderedChild(): React.ReactChild;

            getFirstRenderedChildDefault(): React.ReactChild;

            getLastRenderedChild(): React.ReactChild;

            getLastRenderedChildDefault(): React.ReactChild;

            eachRenderedChild(callback: (rendredChild: React.ReactChild, index: number) => boolean): this;

            eachRenderedChildDefault(callback: (rendredChild: React.ReactChild, index: number) => boolean): this;

            registerRenderedChild(renderedChild: React.ReactChild, index: number): this;

            unregisterRenderedChild(renderedChild: React.ReactChild): this;

            // dynamic functions

            setChildren(newChildren: React.ReactChildren, setStateCallback?: () => void): this;

            setChildren(newChildren: React.ReactChildren, props?: object, setStateCallback?: () => void): this;

            setChildrenDefault(newChildren: React.ReactChildren, setStateCallback?: () => void): this;

            insertChild(child: object | React.ReactNode, opt?: { position?: number, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildDefault(child: object | React.ReactNode, opt?: { position?: number, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildBefore(child: object | React.ReactNode, opt?: { childAfterId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildBeforeDefault(child: object | React.ReactNode, opt?: { childAfterId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildAfter(child: object | React.ReactNode, opt?: { childBeforeId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildAfterDefault(child: object | React.ReactNode, opt?: { childBeforeId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            updateChild(childId: string, newProps: object, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this

            updateChildDefault(childId: string, newProps: object, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            replaceChild(childId: string, child: object | React.ReactNode, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            replaceChildDefault(childId: string, child: object | React.ReactNode, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            deleteChild(childId: string, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            deleteChildDefault(childId: string, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            clearChildren(opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            clearChildrenDefault(opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            // TODO
            setFilter(filter, setStateCallback?: () => void): this;

            resetFilter(setStateCallback?: () => void): this;

            // TODO
            setSorter(sorter, setStateCallback?: () => void): this;

            resetSorter(setStateCallback?: () => void): this;

            // TODO
            setFilterAndSorter(filter, sorter, setStateCallback?: () => void): this;

            resetFilterAndSorter(setStateCallback?: () => void): this;

            getFilteredSorterChildren(children?: React.ReactChildren): React.ReactChildren;

            setStandardMode(setStateCallback?: () => void): this;

            setOutlineMode(setStateCallback?: () => void): this;

            getMode(): string;

            isStandardMode(): boolean

            isOutlineMode(): boolean

            startWatchingResize(key: string, resizeCallback?: (opt: {
                id: string, width: number, height: number
            }) => void): void;

            stopWatchingResize(key: string): void

            setHiddenValue(value: boolean, setStateCallback?: () => void): this;

            hide(setStateCallback?: () => void): this;

            hideDefault(setStateCallback?: () => void): void;

            show(setStateCallback?: () => void): this;

            showDefault(setStateCallback?: () => void): this;

            isHidden(): boolean;

            toggleHidden(setStateCallback?: () => void): this;

            toggleHiddenDefault(setStateCallback?: () => void): this;

            setDisabledValue(value: boolean, setStateCallback?: () => void): this;

            disable(setStateCallback?: () => void): this;

            disableDefault(setStateCallback?: () => void): this;

            enable(setStateCallback?: () => void): this

            enableDefault(setStateCallback?: () => void): this;

            isDisabled(): boolean;

            toggleDisabled(setStateCallback?: () => void): this;

            toggleDisabledDefault(setStateCallback?: () => void): this;

            setSelectedValue(value, setStateCallback?: () => void): this;

            select(setStateCallback?: () => void): this;

            selectDefault(setStateCallback?: () => void): this;

            deselect(setStateCallback?: () => void): this;

            deselectDefault(setStateCallback?: () => void): this

            isSelected(): boolean;

            toggleSelected(setStateCallback?: () => void): this;

            toggleSelectedDefault(setStateCallback?: () => void): this;

            buildMainAttrs(mainAttrs: object): React.HTMLAttributes<HTMLElement>;

            getHiddenClassName(className?: string): string;

            getDisabledClassName(className?: string): string;

            getSelectedClassName(className?: string): string

            getDisabledCover(): React.ReactNode

            getDisabledCoverTransparent(): React.ReactNode

            getLevel(): number;

            shouldIncreaseLevel(parentLevelComponent: React.ReactNode, props?: object): boolean

            checkLevel(props?: object): number;

            getNestingLevel(): NestingLevels

            getParentNestingLevel(): NestingLevels

            getNestingLevelList(): Array<NestingLevels>

            checkNestingLevel(): NestingLevels | null

        }


        class BaseElementaryLsiNestingLevelPureRender extends React.Component<CombinedMixins.BaseElementaryLsiNestingLevelPureRender.Props, CombinedMixins.BaseElementaryLsiNestingLevelPureRender.State> {
            getTagName(): string;

            getMixinRegister(): Array<object>;

            registerMixin(mixinName: string): this;

            hasMixin(mixinName: string): boolean;

            isRendered(): boolean;

            getClassName(item: string, mixinName?: string): string;

            getClassName(): object;

            getDefault(item: string, mixinName?: string): any;

            getOpt(item: string, mixinName?: string): any;

            getLimit(item: string, mixinName?: string): number;

            getLsi(item: string, mixinName?: string): LsiValue;

            getLsiComponent(item: string, mixinName?: string, params?: object): React.ReactNode;

            getLsiValue(item: string, mixinName?: string, params?: object): string;

            getLsiItem(value: LsiValue, params?: object): string;

            isRendered(): boolean;

            setAsyncState(newState: (prevState: object) => object, setStateCallback?: () => void): this;

            setAsyncState(newState: object, setStateCallback?: () => void): this;

            getId(): string;

            getName(): string;

            getTooltip(): string;

            getMainPropsToPass(mixinNames?: Array<string>): CombinedMixins.BaseElementaryLsiNestingLevelPureRender.Props

            getMainAttrs(): React.HTMLAttributes<HTMLElement>;

            getParent(): React.ReactNode;

            getParentByType(typeFunction: string): React.ReactNode;

            checkParentTagName(parentTagName: string): React.ReactNode;

            checkParentType(parentTypeFunction: string): React.ReactNode;

            getIndex(): number;

            getFullClassName(className): string

            stringToObjectType(string: string, type: any, prefix: object): any;

            switchChildrenToBody(props: object): object;

            findDOMNode(): HTMLElement;

            showError(msgKey: string, msgParams: Array<string>, opt?: WithContext): this;

            showError(msgKey: string, msgParams: string, opt?: WithContext): this;

            showWarning(msgKey: string, msgParams: Array<string>, opt?: WithContext): this;

            showWarning(msgKey: string, msgParams: string, opt?: WithContext): this;

            replaceByHardSpace(text: string, language: string): string;

            shouldRender(nextProps, nextState, thisProps, thisState): boolean

            setHiddenValue(value: boolean, setStateCallback?: () => void): this;

            hide(setStateCallback?: () => void): this;

            hideDefault(setStateCallback?: () => void): void;

            show(setStateCallback?: () => void): this;

            showDefault(setStateCallback?: () => void): this;

            isHidden(): boolean;

            toggleHidden(setStateCallback?: () => void): this;

            toggleHiddenDefault(setStateCallback?: () => void): this;

            setDisabledValue(value: boolean, setStateCallback?: () => void): this;

            disable(setStateCallback?: () => void): this;

            disableDefault(setStateCallback?: () => void): this;

            enable(setStateCallback?: () => void): this

            enableDefault(setStateCallback?: () => void): this;

            isDisabled(): boolean;

            toggleDisabled(setStateCallback?: () => void): this;

            toggleDisabledDefault(setStateCallback?: () => void): this;

            setSelectedValue(value, setStateCallback?: () => void): this;

            select(setStateCallback?: () => void): this;

            selectDefault(setStateCallback?: () => void): this;

            deselect(setStateCallback?: () => void): this;

            deselectDefault(setStateCallback?: () => void): this

            isSelected(): boolean;

            toggleSelected(setStateCallback?: () => void): this;

            toggleSelectedDefault(setStateCallback?: () => void): this;

            buildMainAttrs(mainAttrs: object): React.HTMLAttributes<HTMLElement>;

            getHiddenClassName(className?: string): string;

            getDisabledClassName(className?: string): string;

            getSelectedClassName(className?: string): string

            getDisabledCover(): React.ReactNode

            getDisabledCoverTransparent(): React.ReactNode

            getLanguages(): Array<{ language: string, q: number }>

            getLanguage(): string

            getNestingLevel(): NestingLevels

            getParentNestingLevel(): NestingLevels

            getNestingLevelList(): Array<NestingLevels>

            checkNestingLevel(): NestingLevels | null

        }


        class BaseColorSchemaElementaryLsiNestingLevelPureRenderScreenSize extends React.Component<CombinedMixins.BaseColorSchemaElementaryLsiNestingLevelPureRenderScreenSize.Props, CombinedMixins.BaseColorSchemaElementaryLsiNestingLevelPureRenderScreenSize.State> {
            getTagName(): string;

            getMixinRegister(): Array<object>;

            registerMixin(mixinName: string): this;

            hasMixin(mixinName: string): boolean;

            isRendered(): boolean;

            getClassName(item: string, mixinName?: string): string;

            getClassName(): object;

            getDefault(item: string, mixinName?: string): any;

            getOpt(item: string, mixinName?: string): any;

            getLimit(item: string, mixinName?: string): number;

            getLsi(item: string, mixinName?: string): LsiValue;

            getLsiComponent(item: string, mixinName?: string, params?: object): React.ReactNode;

            getLsiValue(item: string, mixinName?: string, params?: object): string;

            getLsiItem(value: LsiValue, params?: object): string;

            isRendered(): boolean;

            setAsyncState(newState: (prevState: object) => object, setStateCallback?: () => void): this;

            setAsyncState(newState: object, setStateCallback?: () => void): this;

            getId(): string;

            getName(): string;

            getTooltip(): string;

            getMainPropsToPass(mixinNames?: Array<string>): CombinedMixins.BaseColorSchemaElementaryLsiNestingLevelPureRenderScreenSize.Props

            getMainAttrs(): React.HTMLAttributes<HTMLElement>;

            getParent(): React.ReactNode;

            getParentByType(typeFunction: string): React.ReactNode;

            checkParentTagName(parentTagName: string): React.ReactNode;

            checkParentType(parentTypeFunction: string): React.ReactNode;

            getIndex(): number;

            getFullClassName(className): string

            stringToObjectType(string: string, type: any, prefix: object): any;

            switchChildrenToBody(props: object): object;

            findDOMNode(): HTMLElement;

            showError(msgKey: string, msgParams: Array<string>, opt?: WithContext): this;

            showError(msgKey: string, msgParams: string, opt?: WithContext): this;

            showWarning(msgKey: string, msgParams: Array<string>, opt?: WithContext): this;

            showWarning(msgKey: string, msgParams: string, opt?: WithContext): this;

            replaceByHardSpace(text: string, language: string): string;

            shouldRender(nextProps, nextState, thisProps, thisState): boolean

            getColorSchema(): string

            setHiddenValue(value: boolean, setStateCallback?: () => void): this;

            hide(setStateCallback?: () => void): this;

            hideDefault(setStateCallback?: () => void): void;

            show(setStateCallback?: () => void): this;

            showDefault(setStateCallback?: () => void): this;

            isHidden(): boolean;

            toggleHidden(setStateCallback?: () => void): this;

            toggleHiddenDefault(setStateCallback?: () => void): this;

            setDisabledValue(value: boolean, setStateCallback?: () => void): this;

            disable(setStateCallback?: () => void): this;

            disableDefault(setStateCallback?: () => void): this;

            enable(setStateCallback?: () => void): this

            enableDefault(setStateCallback?: () => void): this;

            isDisabled(): boolean;

            toggleDisabled(setStateCallback?: () => void): this;

            toggleDisabledDefault(setStateCallback?: () => void): this;

            setSelectedValue(value, setStateCallback?: () => void): this;

            select(setStateCallback?: () => void): this;

            selectDefault(setStateCallback?: () => void): this;

            deselect(setStateCallback?: () => void): this;

            deselectDefault(setStateCallback?: () => void): this

            isSelected(): boolean;

            toggleSelected(setStateCallback?: () => void): this;

            toggleSelectedDefault(setStateCallback?: () => void): this;

            buildMainAttrs(mainAttrs: object): React.HTMLAttributes<HTMLElement>;

            getHiddenClassName(className?: string): string;

            getDisabledClassName(className?: string): string;

            getSelectedClassName(className?: string): string

            getDisabledCover(): React.ReactNode

            getDisabledCoverTransparent(): React.ReactNode

            getLanguages(): Array<{ language: string, q: number }>

            getLanguage(): string

            getNestingLevel(): NestingLevels

            getParentNestingLevel(): NestingLevels

            getNestingLevelList(): Array<NestingLevels>

            checkNestingLevel(): NestingLevels | null

            getScreenSize(): ScreenSizes

            isXs(): boolean

            isS(): boolean;

            isM(): boolean;

            isL(): boolean;

            isXl(): boolean;

            onChangeScreenSizeDefault(e, actualScreenSize: ScreenSizes): this

            onChangeScreenSize_?(e, actualScreenSize: ScreenSizes): void

        }


        class Base extends React.Component<CombinedMixins.Base.Props, CombinedMixins.Base.State> {
            getTagName(): string;

            getMixinRegister(): Array<object>;

            registerMixin(mixinName: string): this;

            hasMixin(mixinName: string): boolean;

            isRendered(): boolean;

            getClassName(item: string, mixinName?: string): string;

            getClassName(): object;

            getDefault(item: string, mixinName?: string): any;

            getOpt(item: string, mixinName?: string): any;

            getLimit(item: string, mixinName?: string): number;

            getLsi(item: string, mixinName?: string): LsiValue;

            getLsiComponent(item: string, mixinName?: string, params?: object): React.ReactNode;

            getLsiValue(item: string, mixinName?: string, params?: object): string;

            getLsiItem(value: LsiValue, params?: object): string;

            isRendered(): boolean;

            setAsyncState(newState: (prevState: object) => object, setStateCallback?: () => void): this;

            setAsyncState(newState: object, setStateCallback?: () => void): this;

            getId(): string;

            getName(): string;

            getTooltip(): string;

            getMainPropsToPass(mixinNames?: Array<string>): CombinedMixins.Base.Props

            getMainAttrs(): React.HTMLAttributes<HTMLElement>;

            getParent(): React.ReactNode;

            getParentByType(typeFunction: string): React.ReactNode;

            checkParentTagName(parentTagName: string): React.ReactNode;

            checkParentType(parentTypeFunction: string): React.ReactNode;

            getIndex(): number;

            getFullClassName(className): string

            stringToObjectType(string: string, type: any, prefix: object): any;

            switchChildrenToBody(props: object): object;

            findDOMNode(): HTMLElement;

            showError(msgKey: string, msgParams: Array<string>, opt?: WithContext): this;

            showError(msgKey: string, msgParams: string, opt?: WithContext): this;

            showWarning(msgKey: string, msgParams: Array<string>, opt?: WithContext): this;

            showWarning(msgKey: string, msgParams: string, opt?: WithContext): this;

            replaceByHardSpace(text: string, language: string): string;

            shouldRender(nextProps, nextState, thisProps, thisState): boolean

        }


        class BaseContent extends React.Component<CombinedMixins.BaseContent.Props, CombinedMixins.BaseContent.State> {
            getTagName(): string;

            getMixinRegister(): Array<object>;

            registerMixin(mixinName: string): this;

            hasMixin(mixinName: string): boolean;

            isRendered(): boolean;

            getClassName(item: string, mixinName?: string): string;

            getClassName(): object;

            getDefault(item: string, mixinName?: string): any;

            getOpt(item: string, mixinName?: string): any;

            getLimit(item: string, mixinName?: string): number;

            getLsi(item: string, mixinName?: string): LsiValue;

            getLsiComponent(item: string, mixinName?: string, params?: object): React.ReactNode;

            getLsiValue(item: string, mixinName?: string, params?: object): string;

            getLsiItem(value: LsiValue, params?: object): string;

            isRendered(): boolean;

            setAsyncState(newState: (prevState: object) => object, setStateCallback?: () => void): this;

            setAsyncState(newState: object, setStateCallback?: () => void): this;

            getId(): string;

            getName(): string;

            getTooltip(): string;

            getMainPropsToPass(mixinNames?: Array<string>): CombinedMixins.BaseContent.Props

            getMainAttrs(): React.HTMLAttributes<HTMLElement>;

            getParent(): React.ReactNode;

            getParentByType(typeFunction: string): React.ReactNode;

            checkParentTagName(parentTagName: string): React.ReactNode;

            checkParentType(parentTypeFunction: string): React.ReactNode;

            getIndex(): number;

            getFullClassName(className): string

            stringToObjectType(string: string, type: any, prefix: object): any;

            switchChildrenToBody(props: object): object;

            findDOMNode(): HTMLElement;

            showError(msgKey: string, msgParams: Array<string>, opt?: WithContext): this;

            showError(msgKey: string, msgParams: string, opt?: WithContext): this;

            showWarning(msgKey: string, msgParams: Array<string>, opt?: WithContext): this;

            showWarning(msgKey: string, msgParams: string, opt?: WithContext): this;

            replaceByHardSpace(text: string, language: string): string;

            shouldRender(nextProps, nextState, thisProps, thisState): boolean

            isDynamic(): boolean;

            getContent(): Uu5Content;

            expandChildProps(prevChild: React.ReactNode, childIndex: number): object;

            buildChild(childTag: string, childProps?: object, children?: React.ReactChildren): React.ReactNode;

            cloneChild(child: React.ReactNode, props: object): React.ReactNode;

            expandChildDefault(child: React.ReactNode, key?: any): React.ReactNode

            buildNodeChildren(children: React.ReactChildren, childPropsExpander: (child: React.ReactNode, index: number) => object): React.ReactChildren;

            shouldChildRender(child: React.ReactChildren): boolean;

            buildChildren(contentProps: object, childPropsExpander: (child: React.ReactNode, index: number) => object, childIndex: number): React.ReactChildren;

            buildChildrenDefault(contentProps: object, childPropsExpander: (child: React.ReactNode, index: number) => object, childIndex: number): React.ReactChildren;

            getStandardChildren(): React.ReactChildren;

            getOutlineChildren(): React.ReactChildren

            getChildren(): React.ReactChildren;

            getRenderedChildren(): React.ReactChild;

            getRenderedChildrenDefault(): React.ReactChild;

            setRenderedChildren(childrenIndexList: any): this;

            // TODO
            addRenderedChild(renderedChild, index): this;

            // TODO
            removeRenderedChild(renderedChild): this;

            // TODO
            getRenderedChildrenIdList(): any;

            // TODO
            setRenderedChildrenIdList(childrenIdList): this;

            // TODO
            addRenderedChildToIdList(renderedChild): this;

            // TODO
            removeRenderedChildFromIdList(renderedChild): this;

            // TODO
            getRenderedChildrenNameList(): any;

            // TODO
            setRenderedChildrenNameList(childrenNameList): this;

            // TODO
            addRenderedChildToNameList(renderedChild): this;

            // TODO
            removeRenderedChildFromNameList(renderedChild): this;

            getChildIndexById(childId: string): number;

            getChildIndexByIdDefault(childId: string): number;

            getRenderedChildById(childId: string): React.ReactChild;

            getRenderedChildByIdDefault(childId: string): React.ReactChild;

            getRenderedChildrenByName(childName: string): React.ReactChildren;

            getRenderedChildByName(childName: string): React.ReactChild;

            getRenderedChildByNameDefault(childName: string): React.ReactChild;

            getRenderedChildByIndex(index: number): React.ReactChild;

            getRenderedChildByIndexDefault(index: number): React.ReactChild;

            getRenderedChildByTagName(tagName: string): React.ReactChild;

            getRenderedChildByTagNameDefault(tagName: string): React.ReactChild;

            getFirstRenderedChild(): React.ReactChild;

            getFirstRenderedChildDefault(): React.ReactChild;

            getLastRenderedChild(): React.ReactChild;

            getLastRenderedChildDefault(): React.ReactChild;

            eachRenderedChild(callback: (rendredChild: React.ReactChild, index: number) => boolean): this;

            eachRenderedChildDefault(callback: (rendredChild: React.ReactChild, index: number) => boolean): this;

            registerRenderedChild(renderedChild: React.ReactChild, index: number): this;

            unregisterRenderedChild(renderedChild: React.ReactChild): this;

            // dynamic functions

            setChildren(newChildren: React.ReactChildren, setStateCallback?: () => void): this;

            setChildren(newChildren: React.ReactChildren, props?: object, setStateCallback?: () => void): this;

            setChildrenDefault(newChildren: React.ReactChildren, setStateCallback?: () => void): this;

            insertChild(child: object | React.ReactNode, opt?: { position?: number, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildDefault(child: object | React.ReactNode, opt?: { position?: number, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildBefore(child: object | React.ReactNode, opt?: { childAfterId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildBeforeDefault(child: object | React.ReactNode, opt?: { childAfterId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildAfter(child: object | React.ReactNode, opt?: { childBeforeId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildAfterDefault(child: object | React.ReactNode, opt?: { childBeforeId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            updateChild(childId: string, newProps: object, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this

            updateChildDefault(childId: string, newProps: object, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            replaceChild(childId: string, child: object | React.ReactNode, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            replaceChildDefault(childId: string, child: object | React.ReactNode, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            deleteChild(childId: string, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            deleteChildDefault(childId: string, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            clearChildren(opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            clearChildrenDefault(opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            // TODO
            setFilter(filter, setStateCallback?: () => void): this;

            resetFilter(setStateCallback?: () => void): this;

            // TODO
            setSorter(sorter, setStateCallback?: () => void): this;

            resetSorter(setStateCallback?: () => void): this;

            // TODO
            setFilterAndSorter(filter, sorter, setStateCallback?: () => void): this;

            resetFilterAndSorter(setStateCallback?: () => void): this;

            getFilteredSorterChildren(children?: React.ReactChildren): React.ReactChildren;

            setStandardMode(setStateCallback?: () => void): this;

            setOutlineMode(setStateCallback?: () => void): this;

            getMode(): string;

            isStandardMode(): boolean

            isOutlineMode(): boolean

        }


        class BaseContentElementaryLsiNestingLevelPureRender extends React.Component<CombinedMixins.BaseContentElementaryLsiNestingLevelPureRender.Props, CombinedMixins.BaseContentElementaryLsiNestingLevelPureRender.State> {
            getTagName(): string;

            getMixinRegister(): Array<object>;

            registerMixin(mixinName: string): this;

            hasMixin(mixinName: string): boolean;

            isRendered(): boolean;

            getClassName(item: string, mixinName?: string): string;

            getClassName(): object;

            getDefault(item: string, mixinName?: string): any;

            getOpt(item: string, mixinName?: string): any;

            getLimit(item: string, mixinName?: string): number;

            getLsi(item: string, mixinName?: string): LsiValue;

            getLsiComponent(item: string, mixinName?: string, params?: object): React.ReactNode;

            getLsiValue(item: string, mixinName?: string, params?: object): string;

            getLsiItem(value: LsiValue, params?: object): string;

            isRendered(): boolean;

            setAsyncState(newState: (prevState: object) => object, setStateCallback?: () => void): this;

            setAsyncState(newState: object, setStateCallback?: () => void): this;

            getId(): string;

            getName(): string;

            getTooltip(): string;

            getMainPropsToPass(mixinNames?: Array<string>): CombinedMixins.BaseContentElementaryLsiNestingLevelPureRender.Props

            getMainAttrs(): React.HTMLAttributes<HTMLElement>;

            getParent(): React.ReactNode;

            getParentByType(typeFunction: string): React.ReactNode;

            checkParentTagName(parentTagName: string): React.ReactNode;

            checkParentType(parentTypeFunction: string): React.ReactNode;

            getIndex(): number;

            getFullClassName(className): string

            stringToObjectType(string: string, type: any, prefix: object): any;

            switchChildrenToBody(props: object): object;

            findDOMNode(): HTMLElement;

            showError(msgKey: string, msgParams: Array<string>, opt?: WithContext): this;

            showError(msgKey: string, msgParams: string, opt?: WithContext): this;

            showWarning(msgKey: string, msgParams: Array<string>, opt?: WithContext): this;

            showWarning(msgKey: string, msgParams: string, opt?: WithContext): this;

            replaceByHardSpace(text: string, language: string): string;

            shouldRender(nextProps, nextState, thisProps, thisState): boolean

            isDynamic(): boolean;

            getContent(): Uu5Content;

            expandChildProps(prevChild: React.ReactNode, childIndex: number): object;

            buildChild(childTag: string, childProps?: object, children?: React.ReactChildren): React.ReactNode;

            cloneChild(child: React.ReactNode, props: object): React.ReactNode;

            expandChildDefault(child: React.ReactNode, key?: any): React.ReactNode

            buildNodeChildren(children: React.ReactChildren, childPropsExpander: (child: React.ReactNode, index: number) => object): React.ReactChildren;

            shouldChildRender(child: React.ReactChildren): boolean;

            buildChildren(contentProps: object, childPropsExpander: (child: React.ReactNode, index: number) => object, childIndex: number): React.ReactChildren;

            buildChildrenDefault(contentProps: object, childPropsExpander: (child: React.ReactNode, index: number) => object, childIndex: number): React.ReactChildren;

            getStandardChildren(): React.ReactChildren;

            getOutlineChildren(): React.ReactChildren

            getChildren(): React.ReactChildren;

            getRenderedChildren(): React.ReactChild;

            getRenderedChildrenDefault(): React.ReactChild;

            setRenderedChildren(childrenIndexList: any): this;

            // TODO
            addRenderedChild(renderedChild, index): this;

            // TODO
            removeRenderedChild(renderedChild): this;

            // TODO
            getRenderedChildrenIdList(): any;

            // TODO
            setRenderedChildrenIdList(childrenIdList): this;

            // TODO
            addRenderedChildToIdList(renderedChild): this;

            // TODO
            removeRenderedChildFromIdList(renderedChild): this;

            // TODO
            getRenderedChildrenNameList(): any;

            // TODO
            setRenderedChildrenNameList(childrenNameList): this;

            // TODO
            addRenderedChildToNameList(renderedChild): this;

            // TODO
            removeRenderedChildFromNameList(renderedChild): this;

            getChildIndexById(childId: string): number;

            getChildIndexByIdDefault(childId: string): number;

            getRenderedChildById(childId: string): React.ReactChild;

            getRenderedChildByIdDefault(childId: string): React.ReactChild;

            getRenderedChildrenByName(childName: string): React.ReactChildren;

            getRenderedChildByName(childName: string): React.ReactChild;

            getRenderedChildByNameDefault(childName: string): React.ReactChild;

            getRenderedChildByIndex(index: number): React.ReactChild;

            getRenderedChildByIndexDefault(index: number): React.ReactChild;

            getRenderedChildByTagName(tagName: string): React.ReactChild;

            getRenderedChildByTagNameDefault(tagName: string): React.ReactChild;

            getFirstRenderedChild(): React.ReactChild;

            getFirstRenderedChildDefault(): React.ReactChild;

            getLastRenderedChild(): React.ReactChild;

            getLastRenderedChildDefault(): React.ReactChild;

            eachRenderedChild(callback: (rendredChild: React.ReactChild, index: number) => boolean): this;

            eachRenderedChildDefault(callback: (rendredChild: React.ReactChild, index: number) => boolean): this;

            registerRenderedChild(renderedChild: React.ReactChild, index: number): this;

            unregisterRenderedChild(renderedChild: React.ReactChild): this;

            // dynamic functions

            setChildren(newChildren: React.ReactChildren, setStateCallback?: () => void): this;

            setChildren(newChildren: React.ReactChildren, props?: object, setStateCallback?: () => void): this;

            setChildrenDefault(newChildren: React.ReactChildren, setStateCallback?: () => void): this;

            insertChild(child: object | React.ReactNode, opt?: { position?: number, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildDefault(child: object | React.ReactNode, opt?: { position?: number, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildBefore(child: object | React.ReactNode, opt?: { childAfterId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildBeforeDefault(child: object | React.ReactNode, opt?: { childAfterId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildAfter(child: object | React.ReactNode, opt?: { childBeforeId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildAfterDefault(child: object | React.ReactNode, opt?: { childBeforeId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            updateChild(childId: string, newProps: object, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this

            updateChildDefault(childId: string, newProps: object, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            replaceChild(childId: string, child: object | React.ReactNode, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            replaceChildDefault(childId: string, child: object | React.ReactNode, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            deleteChild(childId: string, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            deleteChildDefault(childId: string, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            clearChildren(opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            clearChildrenDefault(opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            // TODO
            setFilter(filter, setStateCallback?: () => void): this;

            resetFilter(setStateCallback?: () => void): this;

            // TODO
            setSorter(sorter, setStateCallback?: () => void): this;

            resetSorter(setStateCallback?: () => void): this;

            // TODO
            setFilterAndSorter(filter, sorter, setStateCallback?: () => void): this;

            resetFilterAndSorter(setStateCallback?: () => void): this;

            getFilteredSorterChildren(children?: React.ReactChildren): React.ReactChildren;

            setStandardMode(setStateCallback?: () => void): this;

            setOutlineMode(setStateCallback?: () => void): this;

            getMode(): string;

            isStandardMode(): boolean

            isOutlineMode(): boolean

            setHiddenValue(value: boolean, setStateCallback?: () => void): this;

            hide(setStateCallback?: () => void): this;

            hideDefault(setStateCallback?: () => void): void;

            show(setStateCallback?: () => void): this;

            showDefault(setStateCallback?: () => void): this;

            isHidden(): boolean;

            toggleHidden(setStateCallback?: () => void): this;

            toggleHiddenDefault(setStateCallback?: () => void): this;

            setDisabledValue(value: boolean, setStateCallback?: () => void): this;

            disable(setStateCallback?: () => void): this;

            disableDefault(setStateCallback?: () => void): this;

            enable(setStateCallback?: () => void): this

            enableDefault(setStateCallback?: () => void): this;

            isDisabled(): boolean;

            toggleDisabled(setStateCallback?: () => void): this;

            toggleDisabledDefault(setStateCallback?: () => void): this;

            setSelectedValue(value, setStateCallback?: () => void): this;

            select(setStateCallback?: () => void): this;

            selectDefault(setStateCallback?: () => void): this;

            deselect(setStateCallback?: () => void): this;

            deselectDefault(setStateCallback?: () => void): this

            isSelected(): boolean;

            toggleSelected(setStateCallback?: () => void): this;

            toggleSelectedDefault(setStateCallback?: () => void): this;

            buildMainAttrs(mainAttrs: object): React.HTMLAttributes<HTMLElement>;

            getHiddenClassName(className?: string): string;

            getDisabledClassName(className?: string): string;

            getSelectedClassName(className?: string): string

            getDisabledCover(): React.ReactNode

            getDisabledCoverTransparent(): React.ReactNode

            getLanguages(): Array<{ language: string, q: number }>

            getLanguage(): string

            getNestingLevel(): NestingLevels

            getParentNestingLevel(): NestingLevels

            getNestingLevelList(): Array<NestingLevels>

            checkNestingLevel(): NestingLevels | null

        }


        class BaseCcrReaderElementaryNestingLevelPureRenderSection extends React.Component<CombinedMixins.BaseCcrReaderElementaryNestingLevelPureRenderSection.Props, CombinedMixins.BaseCcrReaderElementaryNestingLevelPureRenderSection.State> {
            getTagName(): string;

            getMixinRegister(): Array<object>;

            registerMixin(mixinName: string): this;

            hasMixin(mixinName: string): boolean;

            isRendered(): boolean;

            getClassName(item: string, mixinName?: string): string;

            getClassName(): object;

            getDefault(item: string, mixinName?: string): any;

            getOpt(item: string, mixinName?: string): any;

            getLimit(item: string, mixinName?: string): number;

            getLsi(item: string, mixinName?: string): LsiValue;

            getLsiComponent(item: string, mixinName?: string, params?: object): React.ReactNode;

            getLsiValue(item: string, mixinName?: string, params?: object): string;

            getLsiItem(value: LsiValue, params?: object): string;

            isRendered(): boolean;

            setAsyncState(newState: (prevState: object) => object, setStateCallback?: () => void): this;

            setAsyncState(newState: object, setStateCallback?: () => void): this;

            getId(): string;

            getName(): string;

            getTooltip(): string;

            getMainPropsToPass(mixinNames?: Array<string>): CombinedMixins.BaseCcrReaderElementaryNestingLevelPureRenderSection.Props

            getMainAttrs(): React.HTMLAttributes<HTMLElement>;

            getParent(): React.ReactNode;

            getParentByType(typeFunction: string): React.ReactNode;

            checkParentTagName(parentTagName: string): React.ReactNode;

            checkParentType(parentTypeFunction: string): React.ReactNode;

            getIndex(): number;

            getFullClassName(className): string

            stringToObjectType(string: string, type: any, prefix: object): any;

            switchChildrenToBody(props: object): object;

            findDOMNode(): HTMLElement;

            showError(msgKey: string, msgParams: Array<string>, opt?: WithContext): this;

            showError(msgKey: string, msgParams: string, opt?: WithContext): this;

            showWarning(msgKey: string, msgParams: Array<string>, opt?: WithContext): this;

            showWarning(msgKey: string, msgParams: string, opt?: WithContext): this;

            replaceByHardSpace(text: string, language: string): string;

            shouldRender(nextProps, nextState, thisProps, thisState): boolean

            getCcrComponentByKey(key: string): React.ReactNode;

            isCcrRegisteredByKey(key: string): boolean;

            getCcrByKeyRegister(): object

            setHiddenValue(value: boolean, setStateCallback?: () => void): this;

            hide(setStateCallback?: () => void): this;

            hideDefault(setStateCallback?: () => void): void;

            show(setStateCallback?: () => void): this;

            showDefault(setStateCallback?: () => void): this;

            isHidden(): boolean;

            toggleHidden(setStateCallback?: () => void): this;

            toggleHiddenDefault(setStateCallback?: () => void): this;

            setDisabledValue(value: boolean, setStateCallback?: () => void): this;

            disable(setStateCallback?: () => void): this;

            disableDefault(setStateCallback?: () => void): this;

            enable(setStateCallback?: () => void): this

            enableDefault(setStateCallback?: () => void): this;

            isDisabled(): boolean;

            toggleDisabled(setStateCallback?: () => void): this;

            toggleDisabledDefault(setStateCallback?: () => void): this;

            setSelectedValue(value, setStateCallback?: () => void): this;

            select(setStateCallback?: () => void): this;

            selectDefault(setStateCallback?: () => void): this;

            deselect(setStateCallback?: () => void): this;

            deselectDefault(setStateCallback?: () => void): this

            isSelected(): boolean;

            toggleSelected(setStateCallback?: () => void): this;

            toggleSelectedDefault(setStateCallback?: () => void): this;

            buildMainAttrs(mainAttrs: object): React.HTMLAttributes<HTMLElement>;

            getHiddenClassName(className?: string): string;

            getDisabledClassName(className?: string): string;

            getSelectedClassName(className?: string): string

            getDisabledCover(): React.ReactNode

            getDisabledCoverTransparent(): React.ReactNode

            getNestingLevel(): NestingLevels

            getParentNestingLevel(): NestingLevels

            getNestingLevelList(): Array<NestingLevels>

            checkNestingLevel(): NestingLevels | null

            getHeader(props?: object): React.ReactNode

            getHeaderDefault(props?: object): React.ReactNode

            getFooter(props?: object): React.ReactNode

            getFooterDefault(props?: object): React.ReactNode

            getHeaderType(headerContent?: string | object): string;

            getFooterType(footerContent?: string | object): string;

            registerRenderedHeaderChild(renderedHeaderChild: React.ReactChild): this;

            registerRenderedFooterChild(renderedFooterChild: React.ReactChild): this;

            expandHeaderProps(prevHeaderChild: object): object;

            expandFooterProps(prevFooterChild: object): object

            buildHeaderChild(header): React.ReactChild

            buildHeaderChildDefault(header): React.ReactChild

            buildFooterChild(footer): React.ReactChild

            buildFooterChildDefault(footer): React.ReactChild

            getHeaderChild(): React.ReactChild

            getFooterChild(): React.ReactChild

            getRenderedHeaderChild(): React.ReactChild

            getRenderedFooterChild(): React.ReactChild

            isDynamic(): boolean;

            getContent(): Uu5Content;

            expandChildProps(prevChild: React.ReactNode, childIndex: number): object;

            buildChild(childTag: string, childProps?: object, children?: React.ReactChildren): React.ReactNode;

            cloneChild(child: React.ReactNode, props: object): React.ReactNode;

            expandChildDefault(child: React.ReactNode, key?: any): React.ReactNode

            buildNodeChildren(children: React.ReactChildren, childPropsExpander: (child: React.ReactNode, index: number) => object): React.ReactChildren;

            shouldChildRender(child: React.ReactChildren): boolean;

            buildChildren(contentProps: object, childPropsExpander: (child: React.ReactNode, index: number) => object, childIndex: number): React.ReactChildren;

            buildChildrenDefault(contentProps: object, childPropsExpander: (child: React.ReactNode, index: number) => object, childIndex: number): React.ReactChildren;

            getStandardChildren(): React.ReactChildren;

            getOutlineChildren(): React.ReactChildren

            getChildren(): React.ReactChildren;

            getRenderedChildren(): React.ReactChild;

            getRenderedChildrenDefault(): React.ReactChild;

            setRenderedChildren(childrenIndexList: any): this;

            // TODO
            addRenderedChild(renderedChild, index): this;

            // TODO
            removeRenderedChild(renderedChild): this;

            // TODO
            getRenderedChildrenIdList(): any;

            // TODO
            setRenderedChildrenIdList(childrenIdList): this;

            // TODO
            addRenderedChildToIdList(renderedChild): this;

            // TODO
            removeRenderedChildFromIdList(renderedChild): this;

            // TODO
            getRenderedChildrenNameList(): any;

            // TODO
            setRenderedChildrenNameList(childrenNameList): this;

            // TODO
            addRenderedChildToNameList(renderedChild): this;

            // TODO
            removeRenderedChildFromNameList(renderedChild): this;

            getChildIndexById(childId: string): number;

            getChildIndexByIdDefault(childId: string): number;

            getRenderedChildById(childId: string): React.ReactChild;

            getRenderedChildByIdDefault(childId: string): React.ReactChild;

            getRenderedChildrenByName(childName: string): React.ReactChildren;

            getRenderedChildByName(childName: string): React.ReactChild;

            getRenderedChildByNameDefault(childName: string): React.ReactChild;

            getRenderedChildByIndex(index: number): React.ReactChild;

            getRenderedChildByIndexDefault(index: number): React.ReactChild;

            getRenderedChildByTagName(tagName: string): React.ReactChild;

            getRenderedChildByTagNameDefault(tagName: string): React.ReactChild;

            getFirstRenderedChild(): React.ReactChild;

            getFirstRenderedChildDefault(): React.ReactChild;

            getLastRenderedChild(): React.ReactChild;

            getLastRenderedChildDefault(): React.ReactChild;

            eachRenderedChild(callback: (rendredChild: React.ReactChild, index: number) => boolean): this;

            eachRenderedChildDefault(callback: (rendredChild: React.ReactChild, index: number) => boolean): this;

            registerRenderedChild(renderedChild: React.ReactChild, index: number): this;

            unregisterRenderedChild(renderedChild: React.ReactChild): this;

            // dynamic functions

            setChildren(newChildren: React.ReactChildren, setStateCallback?: () => void): this;

            setChildren(newChildren: React.ReactChildren, props?: object, setStateCallback?: () => void): this;

            setChildrenDefault(newChildren: React.ReactChildren, setStateCallback?: () => void): this;

            insertChild(child: object | React.ReactNode, opt?: { position?: number, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildDefault(child: object | React.ReactNode, opt?: { position?: number, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildBefore(child: object | React.ReactNode, opt?: { childAfterId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildBeforeDefault(child: object | React.ReactNode, opt?: { childAfterId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildAfter(child: object | React.ReactNode, opt?: { childBeforeId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildAfterDefault(child: object | React.ReactNode, opt?: { childBeforeId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            updateChild(childId: string, newProps: object, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this

            updateChildDefault(childId: string, newProps: object, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            replaceChild(childId: string, child: object | React.ReactNode, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            replaceChildDefault(childId: string, child: object | React.ReactNode, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            deleteChild(childId: string, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            deleteChildDefault(childId: string, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            clearChildren(opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            clearChildrenDefault(opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            // TODO
            setFilter(filter, setStateCallback?: () => void): this;

            resetFilter(setStateCallback?: () => void): this;

            // TODO
            setSorter(sorter, setStateCallback?: () => void): this;

            resetSorter(setStateCallback?: () => void): this;

            // TODO
            setFilterAndSorter(filter, sorter, setStateCallback?: () => void): this;

            resetFilterAndSorter(setStateCallback?: () => void): this;

            getFilteredSorterChildren(children?: React.ReactChildren): React.ReactChildren;

            setStandardMode(setStateCallback?: () => void): this;

            setOutlineMode(setStateCallback?: () => void): this;

            getMode(): string;

            isStandardMode(): boolean

            isOutlineMode(): boolean

            getLevel(): number;

            shouldIncreaseLevel(parentLevelComponent: React.ReactNode, props?: object): boolean

            checkLevel(props?: object): number;

        }


        class BaseColorSchemaContentElementaryPureRender extends React.Component<CombinedMixins.BaseColorSchemaContentElementaryPureRender.Props, CombinedMixins.BaseColorSchemaContentElementaryPureRender.State> {
            getTagName(): string;

            getMixinRegister(): Array<object>;

            registerMixin(mixinName: string): this;

            hasMixin(mixinName: string): boolean;

            isRendered(): boolean;

            getClassName(item: string, mixinName?: string): string;

            getClassName(): object;

            getDefault(item: string, mixinName?: string): any;

            getOpt(item: string, mixinName?: string): any;

            getLimit(item: string, mixinName?: string): number;

            getLsi(item: string, mixinName?: string): LsiValue;

            getLsiComponent(item: string, mixinName?: string, params?: object): React.ReactNode;

            getLsiValue(item: string, mixinName?: string, params?: object): string;

            getLsiItem(value: LsiValue, params?: object): string;

            isRendered(): boolean;

            setAsyncState(newState: (prevState: object) => object, setStateCallback?: () => void): this;

            setAsyncState(newState: object, setStateCallback?: () => void): this;

            getId(): string;

            getName(): string;

            getTooltip(): string;

            getMainPropsToPass(mixinNames?: Array<string>): CombinedMixins.BaseColorSchemaContentElementaryPureRender.Props

            getMainAttrs(): React.HTMLAttributes<HTMLElement>;

            getParent(): React.ReactNode;

            getParentByType(typeFunction: string): React.ReactNode;

            checkParentTagName(parentTagName: string): React.ReactNode;

            checkParentType(parentTypeFunction: string): React.ReactNode;

            getIndex(): number;

            getFullClassName(className): string

            stringToObjectType(string: string, type: any, prefix: object): any;

            switchChildrenToBody(props: object): object;

            findDOMNode(): HTMLElement;

            showError(msgKey: string, msgParams: Array<string>, opt?: WithContext): this;

            showError(msgKey: string, msgParams: string, opt?: WithContext): this;

            showWarning(msgKey: string, msgParams: Array<string>, opt?: WithContext): this;

            showWarning(msgKey: string, msgParams: string, opt?: WithContext): this;

            replaceByHardSpace(text: string, language: string): string;

            shouldRender(nextProps, nextState, thisProps, thisState): boolean

            getColorSchema(): string

            isDynamic(): boolean;

            getContent(): Uu5Content;

            expandChildProps(prevChild: React.ReactNode, childIndex: number): object;

            buildChild(childTag: string, childProps?: object, children?: React.ReactChildren): React.ReactNode;

            cloneChild(child: React.ReactNode, props: object): React.ReactNode;

            expandChildDefault(child: React.ReactNode, key?: any): React.ReactNode

            buildNodeChildren(children: React.ReactChildren, childPropsExpander: (child: React.ReactNode, index: number) => object): React.ReactChildren;

            shouldChildRender(child: React.ReactChildren): boolean;

            buildChildren(contentProps: object, childPropsExpander: (child: React.ReactNode, index: number) => object, childIndex: number): React.ReactChildren;

            buildChildrenDefault(contentProps: object, childPropsExpander: (child: React.ReactNode, index: number) => object, childIndex: number): React.ReactChildren;

            getStandardChildren(): React.ReactChildren;

            getOutlineChildren(): React.ReactChildren

            getChildren(): React.ReactChildren;

            getRenderedChildren(): React.ReactChild;

            getRenderedChildrenDefault(): React.ReactChild;

            setRenderedChildren(childrenIndexList: any): this;

            // TODO
            addRenderedChild(renderedChild, index): this;

            // TODO
            removeRenderedChild(renderedChild): this;

            // TODO
            getRenderedChildrenIdList(): any;

            // TODO
            setRenderedChildrenIdList(childrenIdList): this;

            // TODO
            addRenderedChildToIdList(renderedChild): this;

            // TODO
            removeRenderedChildFromIdList(renderedChild): this;

            // TODO
            getRenderedChildrenNameList(): any;

            // TODO
            setRenderedChildrenNameList(childrenNameList): this;

            // TODO
            addRenderedChildToNameList(renderedChild): this;

            // TODO
            removeRenderedChildFromNameList(renderedChild): this;

            getChildIndexById(childId: string): number;

            getChildIndexByIdDefault(childId: string): number;

            getRenderedChildById(childId: string): React.ReactChild;

            getRenderedChildByIdDefault(childId: string): React.ReactChild;

            getRenderedChildrenByName(childName: string): React.ReactChildren;

            getRenderedChildByName(childName: string): React.ReactChild;

            getRenderedChildByNameDefault(childName: string): React.ReactChild;

            getRenderedChildByIndex(index: number): React.ReactChild;

            getRenderedChildByIndexDefault(index: number): React.ReactChild;

            getRenderedChildByTagName(tagName: string): React.ReactChild;

            getRenderedChildByTagNameDefault(tagName: string): React.ReactChild;

            getFirstRenderedChild(): React.ReactChild;

            getFirstRenderedChildDefault(): React.ReactChild;

            getLastRenderedChild(): React.ReactChild;

            getLastRenderedChildDefault(): React.ReactChild;

            eachRenderedChild(callback: (rendredChild: React.ReactChild, index: number) => boolean): this;

            eachRenderedChildDefault(callback: (rendredChild: React.ReactChild, index: number) => boolean): this;

            registerRenderedChild(renderedChild: React.ReactChild, index: number): this;

            unregisterRenderedChild(renderedChild: React.ReactChild): this;

            // dynamic functions

            setChildren(newChildren: React.ReactChildren, setStateCallback?: () => void): this;

            setChildren(newChildren: React.ReactChildren, props?: object, setStateCallback?: () => void): this;

            setChildrenDefault(newChildren: React.ReactChildren, setStateCallback?: () => void): this;

            insertChild(child: object | React.ReactNode, opt?: { position?: number, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildDefault(child: object | React.ReactNode, opt?: { position?: number, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildBefore(child: object | React.ReactNode, opt?: { childAfterId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildBeforeDefault(child: object | React.ReactNode, opt?: { childAfterId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildAfter(child: object | React.ReactNode, opt?: { childBeforeId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildAfterDefault(child: object | React.ReactNode, opt?: { childBeforeId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            updateChild(childId: string, newProps: object, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this

            updateChildDefault(childId: string, newProps: object, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            replaceChild(childId: string, child: object | React.ReactNode, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            replaceChildDefault(childId: string, child: object | React.ReactNode, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            deleteChild(childId: string, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            deleteChildDefault(childId: string, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            clearChildren(opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            clearChildrenDefault(opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            // TODO
            setFilter(filter, setStateCallback?: () => void): this;

            resetFilter(setStateCallback?: () => void): this;

            // TODO
            setSorter(sorter, setStateCallback?: () => void): this;

            resetSorter(setStateCallback?: () => void): this;

            // TODO
            setFilterAndSorter(filter, sorter, setStateCallback?: () => void): this;

            resetFilterAndSorter(setStateCallback?: () => void): this;

            getFilteredSorterChildren(children?: React.ReactChildren): React.ReactChildren;

            setStandardMode(setStateCallback?: () => void): this;

            setOutlineMode(setStateCallback?: () => void): this;

            getMode(): string;

            isStandardMode(): boolean

            isOutlineMode(): boolean

            setHiddenValue(value: boolean, setStateCallback?: () => void): this;

            hide(setStateCallback?: () => void): this;

            hideDefault(setStateCallback?: () => void): void;

            show(setStateCallback?: () => void): this;

            showDefault(setStateCallback?: () => void): this;

            isHidden(): boolean;

            toggleHidden(setStateCallback?: () => void): this;

            toggleHiddenDefault(setStateCallback?: () => void): this;

            setDisabledValue(value: boolean, setStateCallback?: () => void): this;

            disable(setStateCallback?: () => void): this;

            disableDefault(setStateCallback?: () => void): this;

            enable(setStateCallback?: () => void): this

            enableDefault(setStateCallback?: () => void): this;

            isDisabled(): boolean;

            toggleDisabled(setStateCallback?: () => void): this;

            toggleDisabledDefault(setStateCallback?: () => void): this;

            setSelectedValue(value, setStateCallback?: () => void): this;

            select(setStateCallback?: () => void): this;

            selectDefault(setStateCallback?: () => void): this;

            deselect(setStateCallback?: () => void): this;

            deselectDefault(setStateCallback?: () => void): this

            isSelected(): boolean;

            toggleSelected(setStateCallback?: () => void): this;

            toggleSelectedDefault(setStateCallback?: () => void): this;

            buildMainAttrs(mainAttrs: object): React.HTMLAttributes<HTMLElement>;

            getHiddenClassName(className?: string): string;

            getDisabledClassName(className?: string): string;

            getSelectedClassName(className?: string): string

            getDisabledCover(): React.ReactNode

            getDisabledCoverTransparent(): React.ReactNode

        }


        class BaseElementaryNestingLevelSection extends React.Component<CombinedMixins.BaseElementaryNestingLevelSection.Props, CombinedMixins.BaseElementaryNestingLevelSection.State> {
            getTagName(): string;

            getMixinRegister(): Array<object>;

            registerMixin(mixinName: string): this;

            hasMixin(mixinName: string): boolean;

            isRendered(): boolean;

            getClassName(item: string, mixinName?: string): string;

            getClassName(): object;

            getDefault(item: string, mixinName?: string): any;

            getOpt(item: string, mixinName?: string): any;

            getLimit(item: string, mixinName?: string): number;

            getLsi(item: string, mixinName?: string): LsiValue;

            getLsiComponent(item: string, mixinName?: string, params?: object): React.ReactNode;

            getLsiValue(item: string, mixinName?: string, params?: object): string;

            getLsiItem(value: LsiValue, params?: object): string;

            isRendered(): boolean;

            setAsyncState(newState: (prevState: object) => object, setStateCallback?: () => void): this;

            setAsyncState(newState: object, setStateCallback?: () => void): this;

            getId(): string;

            getName(): string;

            getTooltip(): string;

            getMainPropsToPass(mixinNames?: Array<string>): CombinedMixins.BaseElementaryNestingLevelSection.Props

            getMainAttrs(): React.HTMLAttributes<HTMLElement>;

            getParent(): React.ReactNode;

            getParentByType(typeFunction: string): React.ReactNode;

            checkParentTagName(parentTagName: string): React.ReactNode;

            checkParentType(parentTypeFunction: string): React.ReactNode;

            getIndex(): number;

            getFullClassName(className): string

            stringToObjectType(string: string, type: any, prefix: object): any;

            switchChildrenToBody(props: object): object;

            findDOMNode(): HTMLElement;

            showError(msgKey: string, msgParams: Array<string>, opt?: WithContext): this;

            showError(msgKey: string, msgParams: string, opt?: WithContext): this;

            showWarning(msgKey: string, msgParams: Array<string>, opt?: WithContext): this;

            showWarning(msgKey: string, msgParams: string, opt?: WithContext): this;

            replaceByHardSpace(text: string, language: string): string;

            shouldRender(nextProps, nextState, thisProps, thisState): boolean

            setHiddenValue(value: boolean, setStateCallback?: () => void): this;

            hide(setStateCallback?: () => void): this;

            hideDefault(setStateCallback?: () => void): void;

            show(setStateCallback?: () => void): this;

            showDefault(setStateCallback?: () => void): this;

            isHidden(): boolean;

            toggleHidden(setStateCallback?: () => void): this;

            toggleHiddenDefault(setStateCallback?: () => void): this;

            setDisabledValue(value: boolean, setStateCallback?: () => void): this;

            disable(setStateCallback?: () => void): this;

            disableDefault(setStateCallback?: () => void): this;

            enable(setStateCallback?: () => void): this

            enableDefault(setStateCallback?: () => void): this;

            isDisabled(): boolean;

            toggleDisabled(setStateCallback?: () => void): this;

            toggleDisabledDefault(setStateCallback?: () => void): this;

            setSelectedValue(value, setStateCallback?: () => void): this;

            select(setStateCallback?: () => void): this;

            selectDefault(setStateCallback?: () => void): this;

            deselect(setStateCallback?: () => void): this;

            deselectDefault(setStateCallback?: () => void): this

            isSelected(): boolean;

            toggleSelected(setStateCallback?: () => void): this;

            toggleSelectedDefault(setStateCallback?: () => void): this;

            buildMainAttrs(mainAttrs: object): React.HTMLAttributes<HTMLElement>;

            getHiddenClassName(className?: string): string;

            getDisabledClassName(className?: string): string;

            getSelectedClassName(className?: string): string

            getDisabledCover(): React.ReactNode

            getDisabledCoverTransparent(): React.ReactNode

            getNestingLevel(): NestingLevels

            getParentNestingLevel(): NestingLevels

            getNestingLevelList(): Array<NestingLevels>

            checkNestingLevel(): NestingLevels | null

            getHeader(props?: object): React.ReactNode

            getHeaderDefault(props?: object): React.ReactNode

            getFooter(props?: object): React.ReactNode

            getFooterDefault(props?: object): React.ReactNode

            getHeaderType(headerContent?: string | object): string;

            getFooterType(footerContent?: string | object): string;

            registerRenderedHeaderChild(renderedHeaderChild: React.ReactChild): this;

            registerRenderedFooterChild(renderedFooterChild: React.ReactChild): this;

            expandHeaderProps(prevHeaderChild: object): object;

            expandFooterProps(prevFooterChild: object): object

            buildHeaderChild(header): React.ReactChild

            buildHeaderChildDefault(header): React.ReactChild

            buildFooterChild(footer): React.ReactChild

            buildFooterChildDefault(footer): React.ReactChild

            getHeaderChild(): React.ReactChild

            getFooterChild(): React.ReactChild

            getRenderedHeaderChild(): React.ReactChild

            getRenderedFooterChild(): React.ReactChild

            isDynamic(): boolean;

            getContent(): Uu5Content;

            expandChildProps(prevChild: React.ReactNode, childIndex: number): object;

            buildChild(childTag: string, childProps?: object, children?: React.ReactChildren): React.ReactNode;

            cloneChild(child: React.ReactNode, props: object): React.ReactNode;

            expandChildDefault(child: React.ReactNode, key?: any): React.ReactNode

            buildNodeChildren(children: React.ReactChildren, childPropsExpander: (child: React.ReactNode, index: number) => object): React.ReactChildren;

            shouldChildRender(child: React.ReactChildren): boolean;

            buildChildren(contentProps: object, childPropsExpander: (child: React.ReactNode, index: number) => object, childIndex: number): React.ReactChildren;

            buildChildrenDefault(contentProps: object, childPropsExpander: (child: React.ReactNode, index: number) => object, childIndex: number): React.ReactChildren;

            getStandardChildren(): React.ReactChildren;

            getOutlineChildren(): React.ReactChildren

            getChildren(): React.ReactChildren;

            getRenderedChildren(): React.ReactChild;

            getRenderedChildrenDefault(): React.ReactChild;

            setRenderedChildren(childrenIndexList: any): this;

            // TODO
            addRenderedChild(renderedChild, index): this;

            // TODO
            removeRenderedChild(renderedChild): this;

            // TODO
            getRenderedChildrenIdList(): any;

            // TODO
            setRenderedChildrenIdList(childrenIdList): this;

            // TODO
            addRenderedChildToIdList(renderedChild): this;

            // TODO
            removeRenderedChildFromIdList(renderedChild): this;

            // TODO
            getRenderedChildrenNameList(): any;

            // TODO
            setRenderedChildrenNameList(childrenNameList): this;

            // TODO
            addRenderedChildToNameList(renderedChild): this;

            // TODO
            removeRenderedChildFromNameList(renderedChild): this;

            getChildIndexById(childId: string): number;

            getChildIndexByIdDefault(childId: string): number;

            getRenderedChildById(childId: string): React.ReactChild;

            getRenderedChildByIdDefault(childId: string): React.ReactChild;

            getRenderedChildrenByName(childName: string): React.ReactChildren;

            getRenderedChildByName(childName: string): React.ReactChild;

            getRenderedChildByNameDefault(childName: string): React.ReactChild;

            getRenderedChildByIndex(index: number): React.ReactChild;

            getRenderedChildByIndexDefault(index: number): React.ReactChild;

            getRenderedChildByTagName(tagName: string): React.ReactChild;

            getRenderedChildByTagNameDefault(tagName: string): React.ReactChild;

            getFirstRenderedChild(): React.ReactChild;

            getFirstRenderedChildDefault(): React.ReactChild;

            getLastRenderedChild(): React.ReactChild;

            getLastRenderedChildDefault(): React.ReactChild;

            eachRenderedChild(callback: (rendredChild: React.ReactChild, index: number) => boolean): this;

            eachRenderedChildDefault(callback: (rendredChild: React.ReactChild, index: number) => boolean): this;

            registerRenderedChild(renderedChild: React.ReactChild, index: number): this;

            unregisterRenderedChild(renderedChild: React.ReactChild): this;

            // dynamic functions

            setChildren(newChildren: React.ReactChildren, setStateCallback?: () => void): this;

            setChildren(newChildren: React.ReactChildren, props?: object, setStateCallback?: () => void): this;

            setChildrenDefault(newChildren: React.ReactChildren, setStateCallback?: () => void): this;

            insertChild(child: object | React.ReactNode, opt?: { position?: number, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildDefault(child: object | React.ReactNode, opt?: { position?: number, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildBefore(child: object | React.ReactNode, opt?: { childAfterId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildBeforeDefault(child: object | React.ReactNode, opt?: { childAfterId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildAfter(child: object | React.ReactNode, opt?: { childBeforeId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildAfterDefault(child: object | React.ReactNode, opt?: { childBeforeId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            updateChild(childId: string, newProps: object, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this

            updateChildDefault(childId: string, newProps: object, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            replaceChild(childId: string, child: object | React.ReactNode, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            replaceChildDefault(childId: string, child: object | React.ReactNode, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            deleteChild(childId: string, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            deleteChildDefault(childId: string, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            clearChildren(opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            clearChildrenDefault(opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            // TODO
            setFilter(filter, setStateCallback?: () => void): this;

            resetFilter(setStateCallback?: () => void): this;

            // TODO
            setSorter(sorter, setStateCallback?: () => void): this;

            resetSorter(setStateCallback?: () => void): this;

            // TODO
            setFilterAndSorter(filter, sorter, setStateCallback?: () => void): this;

            resetFilterAndSorter(setStateCallback?: () => void): this;

            getFilteredSorterChildren(children?: React.ReactChildren): React.ReactChildren;

            setStandardMode(setStateCallback?: () => void): this;

            setOutlineMode(setStateCallback?: () => void): this;

            getMode(): string;

            isStandardMode(): boolean

            isOutlineMode(): boolean

            getLevel(): number;

            shouldIncreaseLevel(parentLevelComponent: React.ReactNode, props?: object): boolean

            checkLevel(props?: object): number;

        }


        class BaseContentPureRender extends React.Component<CombinedMixins.BaseContentPureRender.Props, CombinedMixins.BaseContentPureRender.State> {
            getTagName(): string;

            getMixinRegister(): Array<object>;

            registerMixin(mixinName: string): this;

            hasMixin(mixinName: string): boolean;

            isRendered(): boolean;

            getClassName(item: string, mixinName?: string): string;

            getClassName(): object;

            getDefault(item: string, mixinName?: string): any;

            getOpt(item: string, mixinName?: string): any;

            getLimit(item: string, mixinName?: string): number;

            getLsi(item: string, mixinName?: string): LsiValue;

            getLsiComponent(item: string, mixinName?: string, params?: object): React.ReactNode;

            getLsiValue(item: string, mixinName?: string, params?: object): string;

            getLsiItem(value: LsiValue, params?: object): string;

            isRendered(): boolean;

            setAsyncState(newState: (prevState: object) => object, setStateCallback?: () => void): this;

            setAsyncState(newState: object, setStateCallback?: () => void): this;

            getId(): string;

            getName(): string;

            getTooltip(): string;

            getMainPropsToPass(mixinNames?: Array<string>): CombinedMixins.BaseContentPureRender.Props

            getMainAttrs(): React.HTMLAttributes<HTMLElement>;

            getParent(): React.ReactNode;

            getParentByType(typeFunction: string): React.ReactNode;

            checkParentTagName(parentTagName: string): React.ReactNode;

            checkParentType(parentTypeFunction: string): React.ReactNode;

            getIndex(): number;

            getFullClassName(className): string

            stringToObjectType(string: string, type: any, prefix: object): any;

            switchChildrenToBody(props: object): object;

            findDOMNode(): HTMLElement;

            showError(msgKey: string, msgParams: Array<string>, opt?: WithContext): this;

            showError(msgKey: string, msgParams: string, opt?: WithContext): this;

            showWarning(msgKey: string, msgParams: Array<string>, opt?: WithContext): this;

            showWarning(msgKey: string, msgParams: string, opt?: WithContext): this;

            replaceByHardSpace(text: string, language: string): string;

            shouldRender(nextProps, nextState, thisProps, thisState): boolean

            isDynamic(): boolean;

            getContent(): Uu5Content;

            expandChildProps(prevChild: React.ReactNode, childIndex: number): object;

            buildChild(childTag: string, childProps?: object, children?: React.ReactChildren): React.ReactNode;

            cloneChild(child: React.ReactNode, props: object): React.ReactNode;

            expandChildDefault(child: React.ReactNode, key?: any): React.ReactNode

            buildNodeChildren(children: React.ReactChildren, childPropsExpander: (child: React.ReactNode, index: number) => object): React.ReactChildren;

            shouldChildRender(child: React.ReactChildren): boolean;

            buildChildren(contentProps: object, childPropsExpander: (child: React.ReactNode, index: number) => object, childIndex: number): React.ReactChildren;

            buildChildrenDefault(contentProps: object, childPropsExpander: (child: React.ReactNode, index: number) => object, childIndex: number): React.ReactChildren;

            getStandardChildren(): React.ReactChildren;

            getOutlineChildren(): React.ReactChildren

            getChildren(): React.ReactChildren;

            getRenderedChildren(): React.ReactChild;

            getRenderedChildrenDefault(): React.ReactChild;

            setRenderedChildren(childrenIndexList: any): this;

            // TODO
            addRenderedChild(renderedChild, index): this;

            // TODO
            removeRenderedChild(renderedChild): this;

            // TODO
            getRenderedChildrenIdList(): any;

            // TODO
            setRenderedChildrenIdList(childrenIdList): this;

            // TODO
            addRenderedChildToIdList(renderedChild): this;

            // TODO
            removeRenderedChildFromIdList(renderedChild): this;

            // TODO
            getRenderedChildrenNameList(): any;

            // TODO
            setRenderedChildrenNameList(childrenNameList): this;

            // TODO
            addRenderedChildToNameList(renderedChild): this;

            // TODO
            removeRenderedChildFromNameList(renderedChild): this;

            getChildIndexById(childId: string): number;

            getChildIndexByIdDefault(childId: string): number;

            getRenderedChildById(childId: string): React.ReactChild;

            getRenderedChildByIdDefault(childId: string): React.ReactChild;

            getRenderedChildrenByName(childName: string): React.ReactChildren;

            getRenderedChildByName(childName: string): React.ReactChild;

            getRenderedChildByNameDefault(childName: string): React.ReactChild;

            getRenderedChildByIndex(index: number): React.ReactChild;

            getRenderedChildByIndexDefault(index: number): React.ReactChild;

            getRenderedChildByTagName(tagName: string): React.ReactChild;

            getRenderedChildByTagNameDefault(tagName: string): React.ReactChild;

            getFirstRenderedChild(): React.ReactChild;

            getFirstRenderedChildDefault(): React.ReactChild;

            getLastRenderedChild(): React.ReactChild;

            getLastRenderedChildDefault(): React.ReactChild;

            eachRenderedChild(callback: (rendredChild: React.ReactChild, index: number) => boolean): this;

            eachRenderedChildDefault(callback: (rendredChild: React.ReactChild, index: number) => boolean): this;

            registerRenderedChild(renderedChild: React.ReactChild, index: number): this;

            unregisterRenderedChild(renderedChild: React.ReactChild): this;

            // dynamic functions

            setChildren(newChildren: React.ReactChildren, setStateCallback?: () => void): this;

            setChildren(newChildren: React.ReactChildren, props?: object, setStateCallback?: () => void): this;

            setChildrenDefault(newChildren: React.ReactChildren, setStateCallback?: () => void): this;

            insertChild(child: object | React.ReactNode, opt?: { position?: number, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildDefault(child: object | React.ReactNode, opt?: { position?: number, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildBefore(child: object | React.ReactNode, opt?: { childAfterId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildBeforeDefault(child: object | React.ReactNode, opt?: { childAfterId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildAfter(child: object | React.ReactNode, opt?: { childBeforeId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildAfterDefault(child: object | React.ReactNode, opt?: { childBeforeId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            updateChild(childId: string, newProps: object, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this

            updateChildDefault(childId: string, newProps: object, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            replaceChild(childId: string, child: object | React.ReactNode, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            replaceChildDefault(childId: string, child: object | React.ReactNode, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            deleteChild(childId: string, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            deleteChildDefault(childId: string, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            clearChildren(opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            clearChildrenDefault(opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            // TODO
            setFilter(filter, setStateCallback?: () => void): this;

            resetFilter(setStateCallback?: () => void): this;

            // TODO
            setSorter(sorter, setStateCallback?: () => void): this;

            resetSorter(setStateCallback?: () => void): this;

            // TODO
            setFilterAndSorter(filter, sorter, setStateCallback?: () => void): this;

            resetFilterAndSorter(setStateCallback?: () => void): this;

            getFilteredSorterChildren(children?: React.ReactChildren): React.ReactChildren;

            setStandardMode(setStateCallback?: () => void): this;

            setOutlineMode(setStateCallback?: () => void): this;

            getMode(): string;

            isStandardMode(): boolean

            isOutlineMode(): boolean

        }


        class BaseCcrReaderColorSchemaContentElementaryNestingLevel extends React.Component<CombinedMixins.BaseCcrReaderColorSchemaContentElementaryNestingLevel.Props, CombinedMixins.BaseCcrReaderColorSchemaContentElementaryNestingLevel.State> {
            getTagName(): string;

            getMixinRegister(): Array<object>;

            registerMixin(mixinName: string): this;

            hasMixin(mixinName: string): boolean;

            isRendered(): boolean;

            getClassName(item: string, mixinName?: string): string;

            getClassName(): object;

            getDefault(item: string, mixinName?: string): any;

            getOpt(item: string, mixinName?: string): any;

            getLimit(item: string, mixinName?: string): number;

            getLsi(item: string, mixinName?: string): LsiValue;

            getLsiComponent(item: string, mixinName?: string, params?: object): React.ReactNode;

            getLsiValue(item: string, mixinName?: string, params?: object): string;

            getLsiItem(value: LsiValue, params?: object): string;

            isRendered(): boolean;

            setAsyncState(newState: (prevState: object) => object, setStateCallback?: () => void): this;

            setAsyncState(newState: object, setStateCallback?: () => void): this;

            getId(): string;

            getName(): string;

            getTooltip(): string;

            getMainPropsToPass(mixinNames?: Array<string>): CombinedMixins.BaseCcrReaderColorSchemaContentElementaryNestingLevel.Props

            getMainAttrs(): React.HTMLAttributes<HTMLElement>;

            getParent(): React.ReactNode;

            getParentByType(typeFunction: string): React.ReactNode;

            checkParentTagName(parentTagName: string): React.ReactNode;

            checkParentType(parentTypeFunction: string): React.ReactNode;

            getIndex(): number;

            getFullClassName(className): string

            stringToObjectType(string: string, type: any, prefix: object): any;

            switchChildrenToBody(props: object): object;

            findDOMNode(): HTMLElement;

            showError(msgKey: string, msgParams: Array<string>, opt?: WithContext): this;

            showError(msgKey: string, msgParams: string, opt?: WithContext): this;

            showWarning(msgKey: string, msgParams: Array<string>, opt?: WithContext): this;

            showWarning(msgKey: string, msgParams: string, opt?: WithContext): this;

            replaceByHardSpace(text: string, language: string): string;

            shouldRender(nextProps, nextState, thisProps, thisState): boolean

            getCcrComponentByKey(key: string): React.ReactNode;

            isCcrRegisteredByKey(key: string): boolean;

            getCcrByKeyRegister(): object

            getColorSchema(): string

            isDynamic(): boolean;

            getContent(): Uu5Content;

            expandChildProps(prevChild: React.ReactNode, childIndex: number): object;

            buildChild(childTag: string, childProps?: object, children?: React.ReactChildren): React.ReactNode;

            cloneChild(child: React.ReactNode, props: object): React.ReactNode;

            expandChildDefault(child: React.ReactNode, key?: any): React.ReactNode

            buildNodeChildren(children: React.ReactChildren, childPropsExpander: (child: React.ReactNode, index: number) => object): React.ReactChildren;

            shouldChildRender(child: React.ReactChildren): boolean;

            buildChildren(contentProps: object, childPropsExpander: (child: React.ReactNode, index: number) => object, childIndex: number): React.ReactChildren;

            buildChildrenDefault(contentProps: object, childPropsExpander: (child: React.ReactNode, index: number) => object, childIndex: number): React.ReactChildren;

            getStandardChildren(): React.ReactChildren;

            getOutlineChildren(): React.ReactChildren

            getChildren(): React.ReactChildren;

            getRenderedChildren(): React.ReactChild;

            getRenderedChildrenDefault(): React.ReactChild;

            setRenderedChildren(childrenIndexList: any): this;

            // TODO
            addRenderedChild(renderedChild, index): this;

            // TODO
            removeRenderedChild(renderedChild): this;

            // TODO
            getRenderedChildrenIdList(): any;

            // TODO
            setRenderedChildrenIdList(childrenIdList): this;

            // TODO
            addRenderedChildToIdList(renderedChild): this;

            // TODO
            removeRenderedChildFromIdList(renderedChild): this;

            // TODO
            getRenderedChildrenNameList(): any;

            // TODO
            setRenderedChildrenNameList(childrenNameList): this;

            // TODO
            addRenderedChildToNameList(renderedChild): this;

            // TODO
            removeRenderedChildFromNameList(renderedChild): this;

            getChildIndexById(childId: string): number;

            getChildIndexByIdDefault(childId: string): number;

            getRenderedChildById(childId: string): React.ReactChild;

            getRenderedChildByIdDefault(childId: string): React.ReactChild;

            getRenderedChildrenByName(childName: string): React.ReactChildren;

            getRenderedChildByName(childName: string): React.ReactChild;

            getRenderedChildByNameDefault(childName: string): React.ReactChild;

            getRenderedChildByIndex(index: number): React.ReactChild;

            getRenderedChildByIndexDefault(index: number): React.ReactChild;

            getRenderedChildByTagName(tagName: string): React.ReactChild;

            getRenderedChildByTagNameDefault(tagName: string): React.ReactChild;

            getFirstRenderedChild(): React.ReactChild;

            getFirstRenderedChildDefault(): React.ReactChild;

            getLastRenderedChild(): React.ReactChild;

            getLastRenderedChildDefault(): React.ReactChild;

            eachRenderedChild(callback: (rendredChild: React.ReactChild, index: number) => boolean): this;

            eachRenderedChildDefault(callback: (rendredChild: React.ReactChild, index: number) => boolean): this;

            registerRenderedChild(renderedChild: React.ReactChild, index: number): this;

            unregisterRenderedChild(renderedChild: React.ReactChild): this;

            // dynamic functions

            setChildren(newChildren: React.ReactChildren, setStateCallback?: () => void): this;

            setChildren(newChildren: React.ReactChildren, props?: object, setStateCallback?: () => void): this;

            setChildrenDefault(newChildren: React.ReactChildren, setStateCallback?: () => void): this;

            insertChild(child: object | React.ReactNode, opt?: { position?: number, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildDefault(child: object | React.ReactNode, opt?: { position?: number, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildBefore(child: object | React.ReactNode, opt?: { childAfterId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildBeforeDefault(child: object | React.ReactNode, opt?: { childAfterId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildAfter(child: object | React.ReactNode, opt?: { childBeforeId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildAfterDefault(child: object | React.ReactNode, opt?: { childBeforeId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            updateChild(childId: string, newProps: object, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this

            updateChildDefault(childId: string, newProps: object, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            replaceChild(childId: string, child: object | React.ReactNode, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            replaceChildDefault(childId: string, child: object | React.ReactNode, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            deleteChild(childId: string, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            deleteChildDefault(childId: string, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            clearChildren(opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            clearChildrenDefault(opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            // TODO
            setFilter(filter, setStateCallback?: () => void): this;

            resetFilter(setStateCallback?: () => void): this;

            // TODO
            setSorter(sorter, setStateCallback?: () => void): this;

            resetSorter(setStateCallback?: () => void): this;

            // TODO
            setFilterAndSorter(filter, sorter, setStateCallback?: () => void): this;

            resetFilterAndSorter(setStateCallback?: () => void): this;

            getFilteredSorterChildren(children?: React.ReactChildren): React.ReactChildren;

            setStandardMode(setStateCallback?: () => void): this;

            setOutlineMode(setStateCallback?: () => void): this;

            getMode(): string;

            isStandardMode(): boolean

            isOutlineMode(): boolean

            setHiddenValue(value: boolean, setStateCallback?: () => void): this;

            hide(setStateCallback?: () => void): this;

            hideDefault(setStateCallback?: () => void): void;

            show(setStateCallback?: () => void): this;

            showDefault(setStateCallback?: () => void): this;

            isHidden(): boolean;

            toggleHidden(setStateCallback?: () => void): this;

            toggleHiddenDefault(setStateCallback?: () => void): this;

            setDisabledValue(value: boolean, setStateCallback?: () => void): this;

            disable(setStateCallback?: () => void): this;

            disableDefault(setStateCallback?: () => void): this;

            enable(setStateCallback?: () => void): this

            enableDefault(setStateCallback?: () => void): this;

            isDisabled(): boolean;

            toggleDisabled(setStateCallback?: () => void): this;

            toggleDisabledDefault(setStateCallback?: () => void): this;

            setSelectedValue(value, setStateCallback?: () => void): this;

            select(setStateCallback?: () => void): this;

            selectDefault(setStateCallback?: () => void): this;

            deselect(setStateCallback?: () => void): this;

            deselectDefault(setStateCallback?: () => void): this

            isSelected(): boolean;

            toggleSelected(setStateCallback?: () => void): this;

            toggleSelectedDefault(setStateCallback?: () => void): this;

            buildMainAttrs(mainAttrs: object): React.HTMLAttributes<HTMLElement>;

            getHiddenClassName(className?: string): string;

            getDisabledClassName(className?: string): string;

            getSelectedClassName(className?: string): string

            getDisabledCover(): React.ReactNode

            getDisabledCoverTransparent(): React.ReactNode

            getNestingLevel(): NestingLevels

            getParentNestingLevel(): NestingLevels

            getNestingLevelList(): Array<NestingLevels>

            checkNestingLevel(): NestingLevels | null

        }


        class BaseContentElementaryNestingLevelPureRenderSwipe extends React.Component<CombinedMixins.BaseContentElementaryNestingLevelPureRenderSwipe.Props, CombinedMixins.BaseContentElementaryNestingLevelPureRenderSwipe.State> {
            getTagName(): string;

            getMixinRegister(): Array<object>;

            registerMixin(mixinName: string): this;

            hasMixin(mixinName: string): boolean;

            isRendered(): boolean;

            getClassName(item: string, mixinName?: string): string;

            getClassName(): object;

            getDefault(item: string, mixinName?: string): any;

            getOpt(item: string, mixinName?: string): any;

            getLimit(item: string, mixinName?: string): number;

            getLsi(item: string, mixinName?: string): LsiValue;

            getLsiComponent(item: string, mixinName?: string, params?: object): React.ReactNode;

            getLsiValue(item: string, mixinName?: string, params?: object): string;

            getLsiItem(value: LsiValue, params?: object): string;

            isRendered(): boolean;

            setAsyncState(newState: (prevState: object) => object, setStateCallback?: () => void): this;

            setAsyncState(newState: object, setStateCallback?: () => void): this;

            getId(): string;

            getName(): string;

            getTooltip(): string;

            getMainPropsToPass(mixinNames?: Array<string>): CombinedMixins.BaseContentElementaryNestingLevelPureRenderSwipe.Props

            getMainAttrs(): React.HTMLAttributes<HTMLElement>;

            getParent(): React.ReactNode;

            getParentByType(typeFunction: string): React.ReactNode;

            checkParentTagName(parentTagName: string): React.ReactNode;

            checkParentType(parentTypeFunction: string): React.ReactNode;

            getIndex(): number;

            getFullClassName(className): string

            stringToObjectType(string: string, type: any, prefix: object): any;

            switchChildrenToBody(props: object): object;

            findDOMNode(): HTMLElement;

            showError(msgKey: string, msgParams: Array<string>, opt?: WithContext): this;

            showError(msgKey: string, msgParams: string, opt?: WithContext): this;

            showWarning(msgKey: string, msgParams: Array<string>, opt?: WithContext): this;

            showWarning(msgKey: string, msgParams: string, opt?: WithContext): this;

            replaceByHardSpace(text: string, language: string): string;

            shouldRender(nextProps, nextState, thisProps, thisState): boolean

            isDynamic(): boolean;

            getContent(): Uu5Content;

            expandChildProps(prevChild: React.ReactNode, childIndex: number): object;

            buildChild(childTag: string, childProps?: object, children?: React.ReactChildren): React.ReactNode;

            cloneChild(child: React.ReactNode, props: object): React.ReactNode;

            expandChildDefault(child: React.ReactNode, key?: any): React.ReactNode

            buildNodeChildren(children: React.ReactChildren, childPropsExpander: (child: React.ReactNode, index: number) => object): React.ReactChildren;

            shouldChildRender(child: React.ReactChildren): boolean;

            buildChildren(contentProps: object, childPropsExpander: (child: React.ReactNode, index: number) => object, childIndex: number): React.ReactChildren;

            buildChildrenDefault(contentProps: object, childPropsExpander: (child: React.ReactNode, index: number) => object, childIndex: number): React.ReactChildren;

            getStandardChildren(): React.ReactChildren;

            getOutlineChildren(): React.ReactChildren

            getChildren(): React.ReactChildren;

            getRenderedChildren(): React.ReactChild;

            getRenderedChildrenDefault(): React.ReactChild;

            setRenderedChildren(childrenIndexList: any): this;

            // TODO
            addRenderedChild(renderedChild, index): this;

            // TODO
            removeRenderedChild(renderedChild): this;

            // TODO
            getRenderedChildrenIdList(): any;

            // TODO
            setRenderedChildrenIdList(childrenIdList): this;

            // TODO
            addRenderedChildToIdList(renderedChild): this;

            // TODO
            removeRenderedChildFromIdList(renderedChild): this;

            // TODO
            getRenderedChildrenNameList(): any;

            // TODO
            setRenderedChildrenNameList(childrenNameList): this;

            // TODO
            addRenderedChildToNameList(renderedChild): this;

            // TODO
            removeRenderedChildFromNameList(renderedChild): this;

            getChildIndexById(childId: string): number;

            getChildIndexByIdDefault(childId: string): number;

            getRenderedChildById(childId: string): React.ReactChild;

            getRenderedChildByIdDefault(childId: string): React.ReactChild;

            getRenderedChildrenByName(childName: string): React.ReactChildren;

            getRenderedChildByName(childName: string): React.ReactChild;

            getRenderedChildByNameDefault(childName: string): React.ReactChild;

            getRenderedChildByIndex(index: number): React.ReactChild;

            getRenderedChildByIndexDefault(index: number): React.ReactChild;

            getRenderedChildByTagName(tagName: string): React.ReactChild;

            getRenderedChildByTagNameDefault(tagName: string): React.ReactChild;

            getFirstRenderedChild(): React.ReactChild;

            getFirstRenderedChildDefault(): React.ReactChild;

            getLastRenderedChild(): React.ReactChild;

            getLastRenderedChildDefault(): React.ReactChild;

            eachRenderedChild(callback: (rendredChild: React.ReactChild, index: number) => boolean): this;

            eachRenderedChildDefault(callback: (rendredChild: React.ReactChild, index: number) => boolean): this;

            registerRenderedChild(renderedChild: React.ReactChild, index: number): this;

            unregisterRenderedChild(renderedChild: React.ReactChild): this;

            // dynamic functions

            setChildren(newChildren: React.ReactChildren, setStateCallback?: () => void): this;

            setChildren(newChildren: React.ReactChildren, props?: object, setStateCallback?: () => void): this;

            setChildrenDefault(newChildren: React.ReactChildren, setStateCallback?: () => void): this;

            insertChild(child: object | React.ReactNode, opt?: { position?: number, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildDefault(child: object | React.ReactNode, opt?: { position?: number, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildBefore(child: object | React.ReactNode, opt?: { childAfterId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildBeforeDefault(child: object | React.ReactNode, opt?: { childAfterId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildAfter(child: object | React.ReactNode, opt?: { childBeforeId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildAfterDefault(child: object | React.ReactNode, opt?: { childBeforeId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            updateChild(childId: string, newProps: object, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this

            updateChildDefault(childId: string, newProps: object, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            replaceChild(childId: string, child: object | React.ReactNode, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            replaceChildDefault(childId: string, child: object | React.ReactNode, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            deleteChild(childId: string, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            deleteChildDefault(childId: string, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            clearChildren(opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            clearChildrenDefault(opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            // TODO
            setFilter(filter, setStateCallback?: () => void): this;

            resetFilter(setStateCallback?: () => void): this;

            // TODO
            setSorter(sorter, setStateCallback?: () => void): this;

            resetSorter(setStateCallback?: () => void): this;

            // TODO
            setFilterAndSorter(filter, sorter, setStateCallback?: () => void): this;

            resetFilterAndSorter(setStateCallback?: () => void): this;

            getFilteredSorterChildren(children?: React.ReactChildren): React.ReactChildren;

            setStandardMode(setStateCallback?: () => void): this;

            setOutlineMode(setStateCallback?: () => void): this;

            getMode(): string;

            isStandardMode(): boolean

            isOutlineMode(): boolean

            setHiddenValue(value: boolean, setStateCallback?: () => void): this;

            hide(setStateCallback?: () => void): this;

            hideDefault(setStateCallback?: () => void): void;

            show(setStateCallback?: () => void): this;

            showDefault(setStateCallback?: () => void): this;

            isHidden(): boolean;

            toggleHidden(setStateCallback?: () => void): this;

            toggleHiddenDefault(setStateCallback?: () => void): this;

            setDisabledValue(value: boolean, setStateCallback?: () => void): this;

            disable(setStateCallback?: () => void): this;

            disableDefault(setStateCallback?: () => void): this;

            enable(setStateCallback?: () => void): this

            enableDefault(setStateCallback?: () => void): this;

            isDisabled(): boolean;

            toggleDisabled(setStateCallback?: () => void): this;

            toggleDisabledDefault(setStateCallback?: () => void): this;

            setSelectedValue(value, setStateCallback?: () => void): this;

            select(setStateCallback?: () => void): this;

            selectDefault(setStateCallback?: () => void): this;

            deselect(setStateCallback?: () => void): this;

            deselectDefault(setStateCallback?: () => void): this

            isSelected(): boolean;

            toggleSelected(setStateCallback?: () => void): this;

            toggleSelectedDefault(setStateCallback?: () => void): this;

            buildMainAttrs(mainAttrs: object): React.HTMLAttributes<HTMLElement>;

            getHiddenClassName(className?: string): string;

            getDisabledClassName(className?: string): string;

            getSelectedClassName(className?: string): string

            getDisabledCover(): React.ReactNode

            getDisabledCoverTransparent(): React.ReactNode

            getNestingLevel(): NestingLevels

            getParentNestingLevel(): NestingLevels

            getNestingLevelList(): Array<NestingLevels>

            checkNestingLevel(): NestingLevels | null

            getSwipeLength(): number;

            getAngle(): number;

            isSwipedHorizontal(): boolean;

            isSwipedVertical(): boolean;

            isSwiped(): boolean;

            isSwipedShort(): boolean;

            isSwipedLong(): boolean;

            isSwipedSlow(): boolean;

            isSwipedFast(): boolean;

            isSwipedUp(): boolean;

            isSwipedRight(): boolean;

            isSwipedDown(): boolean;

            isSwipedLeft(): boolean;

            isSwipedUpRight(): boolean;

            isSwipedDownRight(): boolean;

            isSwipedUpLeft(): boolean;

            isSwipedDownLeft(): boolean;

            isSwipedUpShort(): boolean;

            isSwipedRightShort(): boolean;

            isSwipedDownShort(): boolean;

            isSwipedLeftShort(): boolean;

            isSwipedUpRightShort(): boolean;

            isSwipedDownRightShort(): boolean;

            isSwipedUpLeftShort(): boolean;

            isSwipedDownLeftShort(): boolean;

            isSwipedUpLong(): boolean;

            isSwipedRightLong(): boolean;

            isSwipedDownLong(): boolean;

            isSwipedLeftLong(): boolean;

            isSwipedUpRightLong(): boolean;

            isSwipedDownRightLong(): boolean;

            isSwipedUpLeftLong(): boolean;

            isSwipedDownLeftLong(): boolean;

            swipeOnTouchStart(handler: object | ((arguments?) => void), e: Event): this;

            swipeOnTouchStart(e: Event): this;

            swipeOnTouchMove(handler: object | ((arguments?) => void), e: Event): this;

            swipeOnTouchMove(e: Event): this;

            swipeOnTouchEnd(handler: object | ((arguments?) => void), e: Event): this;

            swipeOnTouchEnd(e: Event): this;

            angle(): number

        }


        class BaseCcrWriterContentElementaryNestingLevelPureRenderScreenSize extends React.Component<CombinedMixins.BaseCcrWriterContentElementaryNestingLevelPureRenderScreenSize.Props, CombinedMixins.BaseCcrWriterContentElementaryNestingLevelPureRenderScreenSize.State> {
            getTagName(): string;

            getMixinRegister(): Array<object>;

            registerMixin(mixinName: string): this;

            hasMixin(mixinName: string): boolean;

            isRendered(): boolean;

            getClassName(item: string, mixinName?: string): string;

            getClassName(): object;

            getDefault(item: string, mixinName?: string): any;

            getOpt(item: string, mixinName?: string): any;

            getLimit(item: string, mixinName?: string): number;

            getLsi(item: string, mixinName?: string): LsiValue;

            getLsiComponent(item: string, mixinName?: string, params?: object): React.ReactNode;

            getLsiValue(item: string, mixinName?: string, params?: object): string;

            getLsiItem(value: LsiValue, params?: object): string;

            isRendered(): boolean;

            setAsyncState(newState: (prevState: object) => object, setStateCallback?: () => void): this;

            setAsyncState(newState: object, setStateCallback?: () => void): this;

            getId(): string;

            getName(): string;

            getTooltip(): string;

            getMainPropsToPass(mixinNames?: Array<string>): CombinedMixins.BaseCcrWriterContentElementaryNestingLevelPureRenderScreenSize.Props

            getMainAttrs(): React.HTMLAttributes<HTMLElement>;

            getParent(): React.ReactNode;

            getParentByType(typeFunction: string): React.ReactNode;

            checkParentTagName(parentTagName: string): React.ReactNode;

            checkParentType(parentTypeFunction: string): React.ReactNode;

            getIndex(): number;

            getFullClassName(className): string

            stringToObjectType(string: string, type: any, prefix: object): any;

            switchChildrenToBody(props: object): object;

            findDOMNode(): HTMLElement;

            showError(msgKey: string, msgParams: Array<string>, opt?: WithContext): this;

            showError(msgKey: string, msgParams: string, opt?: WithContext): this;

            showWarning(msgKey: string, msgParams: Array<string>, opt?: WithContext): this;

            showWarning(msgKey: string, msgParams: string, opt?: WithContext): this;

            replaceByHardSpace(text: string, language: string): string;

            shouldRender(nextProps, nextState, thisProps, thisState): boolean

            getCcrKey(props?: object): string;

            getCcrComponentByKey(key: string): React.ReactNode;

            isCcrRegisteredByKey(key: string): boolean;

            getCcrByKeyRegister(): object

            isDynamic(): boolean;

            getContent(): Uu5Content;

            expandChildProps(prevChild: React.ReactNode, childIndex: number): object;

            buildChild(childTag: string, childProps?: object, children?: React.ReactChildren): React.ReactNode;

            cloneChild(child: React.ReactNode, props: object): React.ReactNode;

            expandChildDefault(child: React.ReactNode, key?: any): React.ReactNode

            buildNodeChildren(children: React.ReactChildren, childPropsExpander: (child: React.ReactNode, index: number) => object): React.ReactChildren;

            shouldChildRender(child: React.ReactChildren): boolean;

            buildChildren(contentProps: object, childPropsExpander: (child: React.ReactNode, index: number) => object, childIndex: number): React.ReactChildren;

            buildChildrenDefault(contentProps: object, childPropsExpander: (child: React.ReactNode, index: number) => object, childIndex: number): React.ReactChildren;

            getStandardChildren(): React.ReactChildren;

            getOutlineChildren(): React.ReactChildren

            getChildren(): React.ReactChildren;

            getRenderedChildren(): React.ReactChild;

            getRenderedChildrenDefault(): React.ReactChild;

            setRenderedChildren(childrenIndexList: any): this;

            // TODO
            addRenderedChild(renderedChild, index): this;

            // TODO
            removeRenderedChild(renderedChild): this;

            // TODO
            getRenderedChildrenIdList(): any;

            // TODO
            setRenderedChildrenIdList(childrenIdList): this;

            // TODO
            addRenderedChildToIdList(renderedChild): this;

            // TODO
            removeRenderedChildFromIdList(renderedChild): this;

            // TODO
            getRenderedChildrenNameList(): any;

            // TODO
            setRenderedChildrenNameList(childrenNameList): this;

            // TODO
            addRenderedChildToNameList(renderedChild): this;

            // TODO
            removeRenderedChildFromNameList(renderedChild): this;

            getChildIndexById(childId: string): number;

            getChildIndexByIdDefault(childId: string): number;

            getRenderedChildById(childId: string): React.ReactChild;

            getRenderedChildByIdDefault(childId: string): React.ReactChild;

            getRenderedChildrenByName(childName: string): React.ReactChildren;

            getRenderedChildByName(childName: string): React.ReactChild;

            getRenderedChildByNameDefault(childName: string): React.ReactChild;

            getRenderedChildByIndex(index: number): React.ReactChild;

            getRenderedChildByIndexDefault(index: number): React.ReactChild;

            getRenderedChildByTagName(tagName: string): React.ReactChild;

            getRenderedChildByTagNameDefault(tagName: string): React.ReactChild;

            getFirstRenderedChild(): React.ReactChild;

            getFirstRenderedChildDefault(): React.ReactChild;

            getLastRenderedChild(): React.ReactChild;

            getLastRenderedChildDefault(): React.ReactChild;

            eachRenderedChild(callback: (rendredChild: React.ReactChild, index: number) => boolean): this;

            eachRenderedChildDefault(callback: (rendredChild: React.ReactChild, index: number) => boolean): this;

            registerRenderedChild(renderedChild: React.ReactChild, index: number): this;

            unregisterRenderedChild(renderedChild: React.ReactChild): this;

            // dynamic functions

            setChildren(newChildren: React.ReactChildren, setStateCallback?: () => void): this;

            setChildren(newChildren: React.ReactChildren, props?: object, setStateCallback?: () => void): this;

            setChildrenDefault(newChildren: React.ReactChildren, setStateCallback?: () => void): this;

            insertChild(child: object | React.ReactNode, opt?: { position?: number, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildDefault(child: object | React.ReactNode, opt?: { position?: number, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildBefore(child: object | React.ReactNode, opt?: { childAfterId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildBeforeDefault(child: object | React.ReactNode, opt?: { childAfterId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildAfter(child: object | React.ReactNode, opt?: { childBeforeId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildAfterDefault(child: object | React.ReactNode, opt?: { childBeforeId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            updateChild(childId: string, newProps: object, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this

            updateChildDefault(childId: string, newProps: object, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            replaceChild(childId: string, child: object | React.ReactNode, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            replaceChildDefault(childId: string, child: object | React.ReactNode, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            deleteChild(childId: string, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            deleteChildDefault(childId: string, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            clearChildren(opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            clearChildrenDefault(opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            // TODO
            setFilter(filter, setStateCallback?: () => void): this;

            resetFilter(setStateCallback?: () => void): this;

            // TODO
            setSorter(sorter, setStateCallback?: () => void): this;

            resetSorter(setStateCallback?: () => void): this;

            // TODO
            setFilterAndSorter(filter, sorter, setStateCallback?: () => void): this;

            resetFilterAndSorter(setStateCallback?: () => void): this;

            getFilteredSorterChildren(children?: React.ReactChildren): React.ReactChildren;

            setStandardMode(setStateCallback?: () => void): this;

            setOutlineMode(setStateCallback?: () => void): this;

            getMode(): string;

            isStandardMode(): boolean

            isOutlineMode(): boolean

            setHiddenValue(value: boolean, setStateCallback?: () => void): this;

            hide(setStateCallback?: () => void): this;

            hideDefault(setStateCallback?: () => void): void;

            show(setStateCallback?: () => void): this;

            showDefault(setStateCallback?: () => void): this;

            isHidden(): boolean;

            toggleHidden(setStateCallback?: () => void): this;

            toggleHiddenDefault(setStateCallback?: () => void): this;

            setDisabledValue(value: boolean, setStateCallback?: () => void): this;

            disable(setStateCallback?: () => void): this;

            disableDefault(setStateCallback?: () => void): this;

            enable(setStateCallback?: () => void): this

            enableDefault(setStateCallback?: () => void): this;

            isDisabled(): boolean;

            toggleDisabled(setStateCallback?: () => void): this;

            toggleDisabledDefault(setStateCallback?: () => void): this;

            setSelectedValue(value, setStateCallback?: () => void): this;

            select(setStateCallback?: () => void): this;

            selectDefault(setStateCallback?: () => void): this;

            deselect(setStateCallback?: () => void): this;

            deselectDefault(setStateCallback?: () => void): this

            isSelected(): boolean;

            toggleSelected(setStateCallback?: () => void): this;

            toggleSelectedDefault(setStateCallback?: () => void): this;

            buildMainAttrs(mainAttrs: object): React.HTMLAttributes<HTMLElement>;

            getHiddenClassName(className?: string): string;

            getDisabledClassName(className?: string): string;

            getSelectedClassName(className?: string): string

            getDisabledCover(): React.ReactNode

            getDisabledCoverTransparent(): React.ReactNode

            getNestingLevel(): NestingLevels

            getParentNestingLevel(): NestingLevels

            getNestingLevelList(): Array<NestingLevels>

            checkNestingLevel(): NestingLevels | null

            getScreenSize(): ScreenSizes

            isXs(): boolean

            isS(): boolean;

            isM(): boolean;

            isL(): boolean;

            isXl(): boolean;

            onChangeScreenSizeDefault(e, actualScreenSize: ScreenSizes): this

            onChangeScreenSize_?(e, actualScreenSize: ScreenSizes): void

        }


        class BaseColorSchemaElementaryPureRender extends React.Component<CombinedMixins.BaseColorSchemaElementaryPureRender.Props, CombinedMixins.BaseColorSchemaElementaryPureRender.State> {
            getTagName(): string;

            getMixinRegister(): Array<object>;

            registerMixin(mixinName: string): this;

            hasMixin(mixinName: string): boolean;

            isRendered(): boolean;

            getClassName(item: string, mixinName?: string): string;

            getClassName(): object;

            getDefault(item: string, mixinName?: string): any;

            getOpt(item: string, mixinName?: string): any;

            getLimit(item: string, mixinName?: string): number;

            getLsi(item: string, mixinName?: string): LsiValue;

            getLsiComponent(item: string, mixinName?: string, params?: object): React.ReactNode;

            getLsiValue(item: string, mixinName?: string, params?: object): string;

            getLsiItem(value: LsiValue, params?: object): string;

            isRendered(): boolean;

            setAsyncState(newState: (prevState: object) => object, setStateCallback?: () => void): this;

            setAsyncState(newState: object, setStateCallback?: () => void): this;

            getId(): string;

            getName(): string;

            getTooltip(): string;

            getMainPropsToPass(mixinNames?: Array<string>): CombinedMixins.BaseColorSchemaElementaryPureRender.Props

            getMainAttrs(): React.HTMLAttributes<HTMLElement>;

            getParent(): React.ReactNode;

            getParentByType(typeFunction: string): React.ReactNode;

            checkParentTagName(parentTagName: string): React.ReactNode;

            checkParentType(parentTypeFunction: string): React.ReactNode;

            getIndex(): number;

            getFullClassName(className): string

            stringToObjectType(string: string, type: any, prefix: object): any;

            switchChildrenToBody(props: object): object;

            findDOMNode(): HTMLElement;

            showError(msgKey: string, msgParams: Array<string>, opt?: WithContext): this;

            showError(msgKey: string, msgParams: string, opt?: WithContext): this;

            showWarning(msgKey: string, msgParams: Array<string>, opt?: WithContext): this;

            showWarning(msgKey: string, msgParams: string, opt?: WithContext): this;

            replaceByHardSpace(text: string, language: string): string;

            shouldRender(nextProps, nextState, thisProps, thisState): boolean

            getColorSchema(): string

            setHiddenValue(value: boolean, setStateCallback?: () => void): this;

            hide(setStateCallback?: () => void): this;

            hideDefault(setStateCallback?: () => void): void;

            show(setStateCallback?: () => void): this;

            showDefault(setStateCallback?: () => void): this;

            isHidden(): boolean;

            toggleHidden(setStateCallback?: () => void): this;

            toggleHiddenDefault(setStateCallback?: () => void): this;

            setDisabledValue(value: boolean, setStateCallback?: () => void): this;

            disable(setStateCallback?: () => void): this;

            disableDefault(setStateCallback?: () => void): this;

            enable(setStateCallback?: () => void): this

            enableDefault(setStateCallback?: () => void): this;

            isDisabled(): boolean;

            toggleDisabled(setStateCallback?: () => void): this;

            toggleDisabledDefault(setStateCallback?: () => void): this;

            setSelectedValue(value, setStateCallback?: () => void): this;

            select(setStateCallback?: () => void): this;

            selectDefault(setStateCallback?: () => void): this;

            deselect(setStateCallback?: () => void): this;

            deselectDefault(setStateCallback?: () => void): this

            isSelected(): boolean;

            toggleSelected(setStateCallback?: () => void): this;

            toggleSelectedDefault(setStateCallback?: () => void): this;

            buildMainAttrs(mainAttrs: object): React.HTMLAttributes<HTMLElement>;

            getHiddenClassName(className?: string): string;

            getDisabledClassName(className?: string): string;

            getSelectedClassName(className?: string): string

            getDisabledCover(): React.ReactNode

            getDisabledCoverTransparent(): React.ReactNode

        }


        class BaseContentElementaryNestingLevel extends React.Component<CombinedMixins.BaseContentElementaryNestingLevel.Props, CombinedMixins.BaseContentElementaryNestingLevel.State> {
            getTagName(): string;

            getMixinRegister(): Array<object>;

            registerMixin(mixinName: string): this;

            hasMixin(mixinName: string): boolean;

            isRendered(): boolean;

            getClassName(item: string, mixinName?: string): string;

            getClassName(): object;

            getDefault(item: string, mixinName?: string): any;

            getOpt(item: string, mixinName?: string): any;

            getLimit(item: string, mixinName?: string): number;

            getLsi(item: string, mixinName?: string): LsiValue;

            getLsiComponent(item: string, mixinName?: string, params?: object): React.ReactNode;

            getLsiValue(item: string, mixinName?: string, params?: object): string;

            getLsiItem(value: LsiValue, params?: object): string;

            isRendered(): boolean;

            setAsyncState(newState: (prevState: object) => object, setStateCallback?: () => void): this;

            setAsyncState(newState: object, setStateCallback?: () => void): this;

            getId(): string;

            getName(): string;

            getTooltip(): string;

            getMainPropsToPass(mixinNames?: Array<string>): CombinedMixins.BaseContentElementaryNestingLevel.Props

            getMainAttrs(): React.HTMLAttributes<HTMLElement>;

            getParent(): React.ReactNode;

            getParentByType(typeFunction: string): React.ReactNode;

            checkParentTagName(parentTagName: string): React.ReactNode;

            checkParentType(parentTypeFunction: string): React.ReactNode;

            getIndex(): number;

            getFullClassName(className): string

            stringToObjectType(string: string, type: any, prefix: object): any;

            switchChildrenToBody(props: object): object;

            findDOMNode(): HTMLElement;

            showError(msgKey: string, msgParams: Array<string>, opt?: WithContext): this;

            showError(msgKey: string, msgParams: string, opt?: WithContext): this;

            showWarning(msgKey: string, msgParams: Array<string>, opt?: WithContext): this;

            showWarning(msgKey: string, msgParams: string, opt?: WithContext): this;

            replaceByHardSpace(text: string, language: string): string;

            shouldRender(nextProps, nextState, thisProps, thisState): boolean

            isDynamic(): boolean;

            getContent(): Uu5Content;

            expandChildProps(prevChild: React.ReactNode, childIndex: number): object;

            buildChild(childTag: string, childProps?: object, children?: React.ReactChildren): React.ReactNode;

            cloneChild(child: React.ReactNode, props: object): React.ReactNode;

            expandChildDefault(child: React.ReactNode, key?: any): React.ReactNode

            buildNodeChildren(children: React.ReactChildren, childPropsExpander: (child: React.ReactNode, index: number) => object): React.ReactChildren;

            shouldChildRender(child: React.ReactChildren): boolean;

            buildChildren(contentProps: object, childPropsExpander: (child: React.ReactNode, index: number) => object, childIndex: number): React.ReactChildren;

            buildChildrenDefault(contentProps: object, childPropsExpander: (child: React.ReactNode, index: number) => object, childIndex: number): React.ReactChildren;

            getStandardChildren(): React.ReactChildren;

            getOutlineChildren(): React.ReactChildren

            getChildren(): React.ReactChildren;

            getRenderedChildren(): React.ReactChild;

            getRenderedChildrenDefault(): React.ReactChild;

            setRenderedChildren(childrenIndexList: any): this;

            // TODO
            addRenderedChild(renderedChild, index): this;

            // TODO
            removeRenderedChild(renderedChild): this;

            // TODO
            getRenderedChildrenIdList(): any;

            // TODO
            setRenderedChildrenIdList(childrenIdList): this;

            // TODO
            addRenderedChildToIdList(renderedChild): this;

            // TODO
            removeRenderedChildFromIdList(renderedChild): this;

            // TODO
            getRenderedChildrenNameList(): any;

            // TODO
            setRenderedChildrenNameList(childrenNameList): this;

            // TODO
            addRenderedChildToNameList(renderedChild): this;

            // TODO
            removeRenderedChildFromNameList(renderedChild): this;

            getChildIndexById(childId: string): number;

            getChildIndexByIdDefault(childId: string): number;

            getRenderedChildById(childId: string): React.ReactChild;

            getRenderedChildByIdDefault(childId: string): React.ReactChild;

            getRenderedChildrenByName(childName: string): React.ReactChildren;

            getRenderedChildByName(childName: string): React.ReactChild;

            getRenderedChildByNameDefault(childName: string): React.ReactChild;

            getRenderedChildByIndex(index: number): React.ReactChild;

            getRenderedChildByIndexDefault(index: number): React.ReactChild;

            getRenderedChildByTagName(tagName: string): React.ReactChild;

            getRenderedChildByTagNameDefault(tagName: string): React.ReactChild;

            getFirstRenderedChild(): React.ReactChild;

            getFirstRenderedChildDefault(): React.ReactChild;

            getLastRenderedChild(): React.ReactChild;

            getLastRenderedChildDefault(): React.ReactChild;

            eachRenderedChild(callback: (rendredChild: React.ReactChild, index: number) => boolean): this;

            eachRenderedChildDefault(callback: (rendredChild: React.ReactChild, index: number) => boolean): this;

            registerRenderedChild(renderedChild: React.ReactChild, index: number): this;

            unregisterRenderedChild(renderedChild: React.ReactChild): this;

            // dynamic functions

            setChildren(newChildren: React.ReactChildren, setStateCallback?: () => void): this;

            setChildren(newChildren: React.ReactChildren, props?: object, setStateCallback?: () => void): this;

            setChildrenDefault(newChildren: React.ReactChildren, setStateCallback?: () => void): this;

            insertChild(child: object | React.ReactNode, opt?: { position?: number, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildDefault(child: object | React.ReactNode, opt?: { position?: number, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildBefore(child: object | React.ReactNode, opt?: { childAfterId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildBeforeDefault(child: object | React.ReactNode, opt?: { childAfterId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildAfter(child: object | React.ReactNode, opt?: { childBeforeId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildAfterDefault(child: object | React.ReactNode, opt?: { childBeforeId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            updateChild(childId: string, newProps: object, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this

            updateChildDefault(childId: string, newProps: object, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            replaceChild(childId: string, child: object | React.ReactNode, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            replaceChildDefault(childId: string, child: object | React.ReactNode, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            deleteChild(childId: string, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            deleteChildDefault(childId: string, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            clearChildren(opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            clearChildrenDefault(opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            // TODO
            setFilter(filter, setStateCallback?: () => void): this;

            resetFilter(setStateCallback?: () => void): this;

            // TODO
            setSorter(sorter, setStateCallback?: () => void): this;

            resetSorter(setStateCallback?: () => void): this;

            // TODO
            setFilterAndSorter(filter, sorter, setStateCallback?: () => void): this;

            resetFilterAndSorter(setStateCallback?: () => void): this;

            getFilteredSorterChildren(children?: React.ReactChildren): React.ReactChildren;

            setStandardMode(setStateCallback?: () => void): this;

            setOutlineMode(setStateCallback?: () => void): this;

            getMode(): string;

            isStandardMode(): boolean

            isOutlineMode(): boolean

            setHiddenValue(value: boolean, setStateCallback?: () => void): this;

            hide(setStateCallback?: () => void): this;

            hideDefault(setStateCallback?: () => void): void;

            show(setStateCallback?: () => void): this;

            showDefault(setStateCallback?: () => void): this;

            isHidden(): boolean;

            toggleHidden(setStateCallback?: () => void): this;

            toggleHiddenDefault(setStateCallback?: () => void): this;

            setDisabledValue(value: boolean, setStateCallback?: () => void): this;

            disable(setStateCallback?: () => void): this;

            disableDefault(setStateCallback?: () => void): this;

            enable(setStateCallback?: () => void): this

            enableDefault(setStateCallback?: () => void): this;

            isDisabled(): boolean;

            toggleDisabled(setStateCallback?: () => void): this;

            toggleDisabledDefault(setStateCallback?: () => void): this;

            setSelectedValue(value, setStateCallback?: () => void): this;

            select(setStateCallback?: () => void): this;

            selectDefault(setStateCallback?: () => void): this;

            deselect(setStateCallback?: () => void): this;

            deselectDefault(setStateCallback?: () => void): this

            isSelected(): boolean;

            toggleSelected(setStateCallback?: () => void): this;

            toggleSelectedDefault(setStateCallback?: () => void): this;

            buildMainAttrs(mainAttrs: object): React.HTMLAttributes<HTMLElement>;

            getHiddenClassName(className?: string): string;

            getDisabledClassName(className?: string): string;

            getSelectedClassName(className?: string): string

            getDisabledCover(): React.ReactNode

            getDisabledCoverTransparent(): React.ReactNode

            getNestingLevel(): NestingLevels

            getParentNestingLevel(): NestingLevels

            getNestingLevelList(): Array<NestingLevels>

            checkNestingLevel(): NestingLevels | null

        }


        class BaseContentElementaryNestingLevelResize extends React.Component<CombinedMixins.BaseContentElementaryNestingLevelResize.Props, CombinedMixins.BaseContentElementaryNestingLevelResize.State> {
            getTagName(): string;

            getMixinRegister(): Array<object>;

            registerMixin(mixinName: string): this;

            hasMixin(mixinName: string): boolean;

            isRendered(): boolean;

            getClassName(item: string, mixinName?: string): string;

            getClassName(): object;

            getDefault(item: string, mixinName?: string): any;

            getOpt(item: string, mixinName?: string): any;

            getLimit(item: string, mixinName?: string): number;

            getLsi(item: string, mixinName?: string): LsiValue;

            getLsiComponent(item: string, mixinName?: string, params?: object): React.ReactNode;

            getLsiValue(item: string, mixinName?: string, params?: object): string;

            getLsiItem(value: LsiValue, params?: object): string;

            isRendered(): boolean;

            setAsyncState(newState: (prevState: object) => object, setStateCallback?: () => void): this;

            setAsyncState(newState: object, setStateCallback?: () => void): this;

            getId(): string;

            getName(): string;

            getTooltip(): string;

            getMainPropsToPass(mixinNames?: Array<string>): CombinedMixins.BaseContentElementaryNestingLevelResize.Props

            getMainAttrs(): React.HTMLAttributes<HTMLElement>;

            getParent(): React.ReactNode;

            getParentByType(typeFunction: string): React.ReactNode;

            checkParentTagName(parentTagName: string): React.ReactNode;

            checkParentType(parentTypeFunction: string): React.ReactNode;

            getIndex(): number;

            getFullClassName(className): string

            stringToObjectType(string: string, type: any, prefix: object): any;

            switchChildrenToBody(props: object): object;

            findDOMNode(): HTMLElement;

            showError(msgKey: string, msgParams: Array<string>, opt?: WithContext): this;

            showError(msgKey: string, msgParams: string, opt?: WithContext): this;

            showWarning(msgKey: string, msgParams: Array<string>, opt?: WithContext): this;

            showWarning(msgKey: string, msgParams: string, opt?: WithContext): this;

            replaceByHardSpace(text: string, language: string): string;

            shouldRender(nextProps, nextState, thisProps, thisState): boolean

            isDynamic(): boolean;

            getContent(): Uu5Content;

            expandChildProps(prevChild: React.ReactNode, childIndex: number): object;

            buildChild(childTag: string, childProps?: object, children?: React.ReactChildren): React.ReactNode;

            cloneChild(child: React.ReactNode, props: object): React.ReactNode;

            expandChildDefault(child: React.ReactNode, key?: any): React.ReactNode

            buildNodeChildren(children: React.ReactChildren, childPropsExpander: (child: React.ReactNode, index: number) => object): React.ReactChildren;

            shouldChildRender(child: React.ReactChildren): boolean;

            buildChildren(contentProps: object, childPropsExpander: (child: React.ReactNode, index: number) => object, childIndex: number): React.ReactChildren;

            buildChildrenDefault(contentProps: object, childPropsExpander: (child: React.ReactNode, index: number) => object, childIndex: number): React.ReactChildren;

            getStandardChildren(): React.ReactChildren;

            getOutlineChildren(): React.ReactChildren

            getChildren(): React.ReactChildren;

            getRenderedChildren(): React.ReactChild;

            getRenderedChildrenDefault(): React.ReactChild;

            setRenderedChildren(childrenIndexList: any): this;

            // TODO
            addRenderedChild(renderedChild, index): this;

            // TODO
            removeRenderedChild(renderedChild): this;

            // TODO
            getRenderedChildrenIdList(): any;

            // TODO
            setRenderedChildrenIdList(childrenIdList): this;

            // TODO
            addRenderedChildToIdList(renderedChild): this;

            // TODO
            removeRenderedChildFromIdList(renderedChild): this;

            // TODO
            getRenderedChildrenNameList(): any;

            // TODO
            setRenderedChildrenNameList(childrenNameList): this;

            // TODO
            addRenderedChildToNameList(renderedChild): this;

            // TODO
            removeRenderedChildFromNameList(renderedChild): this;

            getChildIndexById(childId: string): number;

            getChildIndexByIdDefault(childId: string): number;

            getRenderedChildById(childId: string): React.ReactChild;

            getRenderedChildByIdDefault(childId: string): React.ReactChild;

            getRenderedChildrenByName(childName: string): React.ReactChildren;

            getRenderedChildByName(childName: string): React.ReactChild;

            getRenderedChildByNameDefault(childName: string): React.ReactChild;

            getRenderedChildByIndex(index: number): React.ReactChild;

            getRenderedChildByIndexDefault(index: number): React.ReactChild;

            getRenderedChildByTagName(tagName: string): React.ReactChild;

            getRenderedChildByTagNameDefault(tagName: string): React.ReactChild;

            getFirstRenderedChild(): React.ReactChild;

            getFirstRenderedChildDefault(): React.ReactChild;

            getLastRenderedChild(): React.ReactChild;

            getLastRenderedChildDefault(): React.ReactChild;

            eachRenderedChild(callback: (rendredChild: React.ReactChild, index: number) => boolean): this;

            eachRenderedChildDefault(callback: (rendredChild: React.ReactChild, index: number) => boolean): this;

            registerRenderedChild(renderedChild: React.ReactChild, index: number): this;

            unregisterRenderedChild(renderedChild: React.ReactChild): this;

            // dynamic functions

            setChildren(newChildren: React.ReactChildren, setStateCallback?: () => void): this;

            setChildren(newChildren: React.ReactChildren, props?: object, setStateCallback?: () => void): this;

            setChildrenDefault(newChildren: React.ReactChildren, setStateCallback?: () => void): this;

            insertChild(child: object | React.ReactNode, opt?: { position?: number, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildDefault(child: object | React.ReactNode, opt?: { position?: number, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildBefore(child: object | React.ReactNode, opt?: { childAfterId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildBeforeDefault(child: object | React.ReactNode, opt?: { childAfterId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildAfter(child: object | React.ReactNode, opt?: { childBeforeId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildAfterDefault(child: object | React.ReactNode, opt?: { childBeforeId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            updateChild(childId: string, newProps: object, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this

            updateChildDefault(childId: string, newProps: object, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            replaceChild(childId: string, child: object | React.ReactNode, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            replaceChildDefault(childId: string, child: object | React.ReactNode, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            deleteChild(childId: string, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            deleteChildDefault(childId: string, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            clearChildren(opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            clearChildrenDefault(opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            // TODO
            setFilter(filter, setStateCallback?: () => void): this;

            resetFilter(setStateCallback?: () => void): this;

            // TODO
            setSorter(sorter, setStateCallback?: () => void): this;

            resetSorter(setStateCallback?: () => void): this;

            // TODO
            setFilterAndSorter(filter, sorter, setStateCallback?: () => void): this;

            resetFilterAndSorter(setStateCallback?: () => void): this;

            getFilteredSorterChildren(children?: React.ReactChildren): React.ReactChildren;

            setStandardMode(setStateCallback?: () => void): this;

            setOutlineMode(setStateCallback?: () => void): this;

            getMode(): string;

            isStandardMode(): boolean

            isOutlineMode(): boolean

            setHiddenValue(value: boolean, setStateCallback?: () => void): this;

            hide(setStateCallback?: () => void): this;

            hideDefault(setStateCallback?: () => void): void;

            show(setStateCallback?: () => void): this;

            showDefault(setStateCallback?: () => void): this;

            isHidden(): boolean;

            toggleHidden(setStateCallback?: () => void): this;

            toggleHiddenDefault(setStateCallback?: () => void): this;

            setDisabledValue(value: boolean, setStateCallback?: () => void): this;

            disable(setStateCallback?: () => void): this;

            disableDefault(setStateCallback?: () => void): this;

            enable(setStateCallback?: () => void): this

            enableDefault(setStateCallback?: () => void): this;

            isDisabled(): boolean;

            toggleDisabled(setStateCallback?: () => void): this;

            toggleDisabledDefault(setStateCallback?: () => void): this;

            setSelectedValue(value, setStateCallback?: () => void): this;

            select(setStateCallback?: () => void): this;

            selectDefault(setStateCallback?: () => void): this;

            deselect(setStateCallback?: () => void): this;

            deselectDefault(setStateCallback?: () => void): this

            isSelected(): boolean;

            toggleSelected(setStateCallback?: () => void): this;

            toggleSelectedDefault(setStateCallback?: () => void): this;

            buildMainAttrs(mainAttrs: object): React.HTMLAttributes<HTMLElement>;

            getHiddenClassName(className?: string): string;

            getDisabledClassName(className?: string): string;

            getSelectedClassName(className?: string): string

            getDisabledCover(): React.ReactNode

            getDisabledCoverTransparent(): React.ReactNode

            getNestingLevel(): NestingLevels

            getParentNestingLevel(): NestingLevels

            getNestingLevelList(): Array<NestingLevels>

            checkNestingLevel(): NestingLevels | null

        }


        class BaseContentElementaryNestingLevelScreenSize extends React.Component<CombinedMixins.BaseContentElementaryNestingLevelScreenSize.Props, CombinedMixins.BaseContentElementaryNestingLevelScreenSize.State> {
            getTagName(): string;

            getMixinRegister(): Array<object>;

            registerMixin(mixinName: string): this;

            hasMixin(mixinName: string): boolean;

            isRendered(): boolean;

            getClassName(item: string, mixinName?: string): string;

            getClassName(): object;

            getDefault(item: string, mixinName?: string): any;

            getOpt(item: string, mixinName?: string): any;

            getLimit(item: string, mixinName?: string): number;

            getLsi(item: string, mixinName?: string): LsiValue;

            getLsiComponent(item: string, mixinName?: string, params?: object): React.ReactNode;

            getLsiValue(item: string, mixinName?: string, params?: object): string;

            getLsiItem(value: LsiValue, params?: object): string;

            isRendered(): boolean;

            setAsyncState(newState: (prevState: object) => object, setStateCallback?: () => void): this;

            setAsyncState(newState: object, setStateCallback?: () => void): this;

            getId(): string;

            getName(): string;

            getTooltip(): string;

            getMainPropsToPass(mixinNames?: Array<string>): CombinedMixins.BaseContentElementaryNestingLevelScreenSize.Props

            getMainAttrs(): React.HTMLAttributes<HTMLElement>;

            getParent(): React.ReactNode;

            getParentByType(typeFunction: string): React.ReactNode;

            checkParentTagName(parentTagName: string): React.ReactNode;

            checkParentType(parentTypeFunction: string): React.ReactNode;

            getIndex(): number;

            getFullClassName(className): string

            stringToObjectType(string: string, type: any, prefix: object): any;

            switchChildrenToBody(props: object): object;

            findDOMNode(): HTMLElement;

            showError(msgKey: string, msgParams: Array<string>, opt?: WithContext): this;

            showError(msgKey: string, msgParams: string, opt?: WithContext): this;

            showWarning(msgKey: string, msgParams: Array<string>, opt?: WithContext): this;

            showWarning(msgKey: string, msgParams: string, opt?: WithContext): this;

            replaceByHardSpace(text: string, language: string): string;

            shouldRender(nextProps, nextState, thisProps, thisState): boolean

            isDynamic(): boolean;

            getContent(): Uu5Content;

            expandChildProps(prevChild: React.ReactNode, childIndex: number): object;

            buildChild(childTag: string, childProps?: object, children?: React.ReactChildren): React.ReactNode;

            cloneChild(child: React.ReactNode, props: object): React.ReactNode;

            expandChildDefault(child: React.ReactNode, key?: any): React.ReactNode

            buildNodeChildren(children: React.ReactChildren, childPropsExpander: (child: React.ReactNode, index: number) => object): React.ReactChildren;

            shouldChildRender(child: React.ReactChildren): boolean;

            buildChildren(contentProps: object, childPropsExpander: (child: React.ReactNode, index: number) => object, childIndex: number): React.ReactChildren;

            buildChildrenDefault(contentProps: object, childPropsExpander: (child: React.ReactNode, index: number) => object, childIndex: number): React.ReactChildren;

            getStandardChildren(): React.ReactChildren;

            getOutlineChildren(): React.ReactChildren

            getChildren(): React.ReactChildren;

            getRenderedChildren(): React.ReactChild;

            getRenderedChildrenDefault(): React.ReactChild;

            setRenderedChildren(childrenIndexList: any): this;

            // TODO
            addRenderedChild(renderedChild, index): this;

            // TODO
            removeRenderedChild(renderedChild): this;

            // TODO
            getRenderedChildrenIdList(): any;

            // TODO
            setRenderedChildrenIdList(childrenIdList): this;

            // TODO
            addRenderedChildToIdList(renderedChild): this;

            // TODO
            removeRenderedChildFromIdList(renderedChild): this;

            // TODO
            getRenderedChildrenNameList(): any;

            // TODO
            setRenderedChildrenNameList(childrenNameList): this;

            // TODO
            addRenderedChildToNameList(renderedChild): this;

            // TODO
            removeRenderedChildFromNameList(renderedChild): this;

            getChildIndexById(childId: string): number;

            getChildIndexByIdDefault(childId: string): number;

            getRenderedChildById(childId: string): React.ReactChild;

            getRenderedChildByIdDefault(childId: string): React.ReactChild;

            getRenderedChildrenByName(childName: string): React.ReactChildren;

            getRenderedChildByName(childName: string): React.ReactChild;

            getRenderedChildByNameDefault(childName: string): React.ReactChild;

            getRenderedChildByIndex(index: number): React.ReactChild;

            getRenderedChildByIndexDefault(index: number): React.ReactChild;

            getRenderedChildByTagName(tagName: string): React.ReactChild;

            getRenderedChildByTagNameDefault(tagName: string): React.ReactChild;

            getFirstRenderedChild(): React.ReactChild;

            getFirstRenderedChildDefault(): React.ReactChild;

            getLastRenderedChild(): React.ReactChild;

            getLastRenderedChildDefault(): React.ReactChild;

            eachRenderedChild(callback: (rendredChild: React.ReactChild, index: number) => boolean): this;

            eachRenderedChildDefault(callback: (rendredChild: React.ReactChild, index: number) => boolean): this;

            registerRenderedChild(renderedChild: React.ReactChild, index: number): this;

            unregisterRenderedChild(renderedChild: React.ReactChild): this;

            // dynamic functions

            setChildren(newChildren: React.ReactChildren, setStateCallback?: () => void): this;

            setChildren(newChildren: React.ReactChildren, props?: object, setStateCallback?: () => void): this;

            setChildrenDefault(newChildren: React.ReactChildren, setStateCallback?: () => void): this;

            insertChild(child: object | React.ReactNode, opt?: { position?: number, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildDefault(child: object | React.ReactNode, opt?: { position?: number, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildBefore(child: object | React.ReactNode, opt?: { childAfterId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildBeforeDefault(child: object | React.ReactNode, opt?: { childAfterId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildAfter(child: object | React.ReactNode, opt?: { childBeforeId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildAfterDefault(child: object | React.ReactNode, opt?: { childBeforeId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            updateChild(childId: string, newProps: object, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this

            updateChildDefault(childId: string, newProps: object, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            replaceChild(childId: string, child: object | React.ReactNode, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            replaceChildDefault(childId: string, child: object | React.ReactNode, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            deleteChild(childId: string, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            deleteChildDefault(childId: string, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            clearChildren(opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            clearChildrenDefault(opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            // TODO
            setFilter(filter, setStateCallback?: () => void): this;

            resetFilter(setStateCallback?: () => void): this;

            // TODO
            setSorter(sorter, setStateCallback?: () => void): this;

            resetSorter(setStateCallback?: () => void): this;

            // TODO
            setFilterAndSorter(filter, sorter, setStateCallback?: () => void): this;

            resetFilterAndSorter(setStateCallback?: () => void): this;

            getFilteredSorterChildren(children?: React.ReactChildren): React.ReactChildren;

            setStandardMode(setStateCallback?: () => void): this;

            setOutlineMode(setStateCallback?: () => void): this;

            getMode(): string;

            isStandardMode(): boolean

            isOutlineMode(): boolean

            setHiddenValue(value: boolean, setStateCallback?: () => void): this;

            hide(setStateCallback?: () => void): this;

            hideDefault(setStateCallback?: () => void): void;

            show(setStateCallback?: () => void): this;

            showDefault(setStateCallback?: () => void): this;

            isHidden(): boolean;

            toggleHidden(setStateCallback?: () => void): this;

            toggleHiddenDefault(setStateCallback?: () => void): this;

            setDisabledValue(value: boolean, setStateCallback?: () => void): this;

            disable(setStateCallback?: () => void): this;

            disableDefault(setStateCallback?: () => void): this;

            enable(setStateCallback?: () => void): this

            enableDefault(setStateCallback?: () => void): this;

            isDisabled(): boolean;

            toggleDisabled(setStateCallback?: () => void): this;

            toggleDisabledDefault(setStateCallback?: () => void): this;

            setSelectedValue(value, setStateCallback?: () => void): this;

            select(setStateCallback?: () => void): this;

            selectDefault(setStateCallback?: () => void): this;

            deselect(setStateCallback?: () => void): this;

            deselectDefault(setStateCallback?: () => void): this

            isSelected(): boolean;

            toggleSelected(setStateCallback?: () => void): this;

            toggleSelectedDefault(setStateCallback?: () => void): this;

            buildMainAttrs(mainAttrs: object): React.HTMLAttributes<HTMLElement>;

            getHiddenClassName(className?: string): string;

            getDisabledClassName(className?: string): string;

            getSelectedClassName(className?: string): string

            getDisabledCover(): React.ReactNode

            getDisabledCoverTransparent(): React.ReactNode

            getNestingLevel(): NestingLevels

            getParentNestingLevel(): NestingLevels

            getNestingLevelList(): Array<NestingLevels>

            checkNestingLevel(): NestingLevels | null

            getScreenSize(): ScreenSizes

            isXs(): boolean

            isS(): boolean;

            isM(): boolean;

            isL(): boolean;

            isXl(): boolean;

            onChangeScreenSizeDefault(e, actualScreenSize: ScreenSizes): this

            onChangeScreenSize_?(e, actualScreenSize: ScreenSizes): void

        }


        class BaseColorSchemaEditableElementaryNestingLevelPureRenderSection extends React.Component<CombinedMixins.BaseColorSchemaEditableElementaryNestingLevelPureRenderSection.Props, CombinedMixins.BaseColorSchemaEditableElementaryNestingLevelPureRenderSection.State> {
            getTagName(): string;

            getMixinRegister(): Array<object>;

            registerMixin(mixinName: string): this;

            hasMixin(mixinName: string): boolean;

            isRendered(): boolean;

            getClassName(item: string, mixinName?: string): string;

            getClassName(): object;

            getDefault(item: string, mixinName?: string): any;

            getOpt(item: string, mixinName?: string): any;

            getLimit(item: string, mixinName?: string): number;

            getLsi(item: string, mixinName?: string): LsiValue;

            getLsiComponent(item: string, mixinName?: string, params?: object): React.ReactNode;

            getLsiValue(item: string, mixinName?: string, params?: object): string;

            getLsiItem(value: LsiValue, params?: object): string;

            isRendered(): boolean;

            setAsyncState(newState: (prevState: object) => object, setStateCallback?: () => void): this;

            setAsyncState(newState: object, setStateCallback?: () => void): this;

            getId(): string;

            getName(): string;

            getTooltip(): string;

            getMainPropsToPass(mixinNames?: Array<string>): CombinedMixins.BaseColorSchemaEditableElementaryNestingLevelPureRenderSection.Props

            getMainAttrs(): React.HTMLAttributes<HTMLElement>;

            getParent(): React.ReactNode;

            getParentByType(typeFunction: string): React.ReactNode;

            checkParentTagName(parentTagName: string): React.ReactNode;

            checkParentType(parentTypeFunction: string): React.ReactNode;

            getIndex(): number;

            getFullClassName(className): string

            stringToObjectType(string: string, type: any, prefix: object): any;

            switchChildrenToBody(props: object): object;

            findDOMNode(): HTMLElement;

            showError(msgKey: string, msgParams: Array<string>, opt?: WithContext): this;

            showError(msgKey: string, msgParams: string, opt?: WithContext): this;

            showWarning(msgKey: string, msgParams: Array<string>, opt?: WithContext): this;

            showWarning(msgKey: string, msgParams: string, opt?: WithContext): this;

            replaceByHardSpace(text: string, language: string): string;

            shouldRender(nextProps, nextState, thisProps, thisState): boolean

            getColorSchema(): string

            startWatchingResize(key: string, resizeCallback?: (opt: {
                id: string, width: number, height: number
            }) => void): void;

            stopWatchingResize(key: string): void

            setHiddenValue(value: boolean, setStateCallback?: () => void): this;

            hide(setStateCallback?: () => void): this;

            hideDefault(setStateCallback?: () => void): void;

            show(setStateCallback?: () => void): this;

            showDefault(setStateCallback?: () => void): this;

            isHidden(): boolean;

            toggleHidden(setStateCallback?: () => void): this;

            toggleHiddenDefault(setStateCallback?: () => void): this;

            setDisabledValue(value: boolean, setStateCallback?: () => void): this;

            disable(setStateCallback?: () => void): this;

            disableDefault(setStateCallback?: () => void): this;

            enable(setStateCallback?: () => void): this

            enableDefault(setStateCallback?: () => void): this;

            isDisabled(): boolean;

            toggleDisabled(setStateCallback?: () => void): this;

            toggleDisabledDefault(setStateCallback?: () => void): this;

            setSelectedValue(value, setStateCallback?: () => void): this;

            select(setStateCallback?: () => void): this;

            selectDefault(setStateCallback?: () => void): this;

            deselect(setStateCallback?: () => void): this;

            deselectDefault(setStateCallback?: () => void): this

            isSelected(): boolean;

            toggleSelected(setStateCallback?: () => void): this;

            toggleSelectedDefault(setStateCallback?: () => void): this;

            buildMainAttrs(mainAttrs: object): React.HTMLAttributes<HTMLElement>;

            getHiddenClassName(className?: string): string;

            getDisabledClassName(className?: string): string;

            getSelectedClassName(className?: string): string

            getDisabledCover(): React.ReactNode

            getDisabledCoverTransparent(): React.ReactNode

            getNestingLevel(): NestingLevels

            getParentNestingLevel(): NestingLevels

            getNestingLevelList(): Array<NestingLevels>

            checkNestingLevel(): NestingLevels | null

            getHeader(props?: object): React.ReactNode

            getHeaderDefault(props?: object): React.ReactNode

            getFooter(props?: object): React.ReactNode

            getFooterDefault(props?: object): React.ReactNode

            getHeaderType(headerContent?: string | object): string;

            getFooterType(footerContent?: string | object): string;

            registerRenderedHeaderChild(renderedHeaderChild: React.ReactChild): this;

            registerRenderedFooterChild(renderedFooterChild: React.ReactChild): this;

            expandHeaderProps(prevHeaderChild: object): object;

            expandFooterProps(prevFooterChild: object): object

            buildHeaderChild(header): React.ReactChild

            buildHeaderChildDefault(header): React.ReactChild

            buildFooterChild(footer): React.ReactChild

            buildFooterChildDefault(footer): React.ReactChild

            getHeaderChild(): React.ReactChild

            getFooterChild(): React.ReactChild

            getRenderedHeaderChild(): React.ReactChild

            getRenderedFooterChild(): React.ReactChild

            isDynamic(): boolean;

            getContent(): Uu5Content;

            expandChildProps(prevChild: React.ReactNode, childIndex: number): object;

            buildChild(childTag: string, childProps?: object, children?: React.ReactChildren): React.ReactNode;

            cloneChild(child: React.ReactNode, props: object): React.ReactNode;

            expandChildDefault(child: React.ReactNode, key?: any): React.ReactNode

            buildNodeChildren(children: React.ReactChildren, childPropsExpander: (child: React.ReactNode, index: number) => object): React.ReactChildren;

            shouldChildRender(child: React.ReactChildren): boolean;

            buildChildren(contentProps: object, childPropsExpander: (child: React.ReactNode, index: number) => object, childIndex: number): React.ReactChildren;

            buildChildrenDefault(contentProps: object, childPropsExpander: (child: React.ReactNode, index: number) => object, childIndex: number): React.ReactChildren;

            getStandardChildren(): React.ReactChildren;

            getOutlineChildren(): React.ReactChildren

            getChildren(): React.ReactChildren;

            getRenderedChildren(): React.ReactChild;

            getRenderedChildrenDefault(): React.ReactChild;

            setRenderedChildren(childrenIndexList: any): this;

            // TODO
            addRenderedChild(renderedChild, index): this;

            // TODO
            removeRenderedChild(renderedChild): this;

            // TODO
            getRenderedChildrenIdList(): any;

            // TODO
            setRenderedChildrenIdList(childrenIdList): this;

            // TODO
            addRenderedChildToIdList(renderedChild): this;

            // TODO
            removeRenderedChildFromIdList(renderedChild): this;

            // TODO
            getRenderedChildrenNameList(): any;

            // TODO
            setRenderedChildrenNameList(childrenNameList): this;

            // TODO
            addRenderedChildToNameList(renderedChild): this;

            // TODO
            removeRenderedChildFromNameList(renderedChild): this;

            getChildIndexById(childId: string): number;

            getChildIndexByIdDefault(childId: string): number;

            getRenderedChildById(childId: string): React.ReactChild;

            getRenderedChildByIdDefault(childId: string): React.ReactChild;

            getRenderedChildrenByName(childName: string): React.ReactChildren;

            getRenderedChildByName(childName: string): React.ReactChild;

            getRenderedChildByNameDefault(childName: string): React.ReactChild;

            getRenderedChildByIndex(index: number): React.ReactChild;

            getRenderedChildByIndexDefault(index: number): React.ReactChild;

            getRenderedChildByTagName(tagName: string): React.ReactChild;

            getRenderedChildByTagNameDefault(tagName: string): React.ReactChild;

            getFirstRenderedChild(): React.ReactChild;

            getFirstRenderedChildDefault(): React.ReactChild;

            getLastRenderedChild(): React.ReactChild;

            getLastRenderedChildDefault(): React.ReactChild;

            eachRenderedChild(callback: (rendredChild: React.ReactChild, index: number) => boolean): this;

            eachRenderedChildDefault(callback: (rendredChild: React.ReactChild, index: number) => boolean): this;

            registerRenderedChild(renderedChild: React.ReactChild, index: number): this;

            unregisterRenderedChild(renderedChild: React.ReactChild): this;

            // dynamic functions

            setChildren(newChildren: React.ReactChildren, setStateCallback?: () => void): this;

            setChildren(newChildren: React.ReactChildren, props?: object, setStateCallback?: () => void): this;

            setChildrenDefault(newChildren: React.ReactChildren, setStateCallback?: () => void): this;

            insertChild(child: object | React.ReactNode, opt?: { position?: number, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildDefault(child: object | React.ReactNode, opt?: { position?: number, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildBefore(child: object | React.ReactNode, opt?: { childAfterId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildBeforeDefault(child: object | React.ReactNode, opt?: { childAfterId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildAfter(child: object | React.ReactNode, opt?: { childBeforeId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildAfterDefault(child: object | React.ReactNode, opt?: { childBeforeId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            updateChild(childId: string, newProps: object, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this

            updateChildDefault(childId: string, newProps: object, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            replaceChild(childId: string, child: object | React.ReactNode, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            replaceChildDefault(childId: string, child: object | React.ReactNode, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            deleteChild(childId: string, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            deleteChildDefault(childId: string, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            clearChildren(opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            clearChildrenDefault(opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            // TODO
            setFilter(filter, setStateCallback?: () => void): this;

            resetFilter(setStateCallback?: () => void): this;

            // TODO
            setSorter(sorter, setStateCallback?: () => void): this;

            resetSorter(setStateCallback?: () => void): this;

            // TODO
            setFilterAndSorter(filter, sorter, setStateCallback?: () => void): this;

            resetFilterAndSorter(setStateCallback?: () => void): this;

            getFilteredSorterChildren(children?: React.ReactChildren): React.ReactChildren;

            setStandardMode(setStateCallback?: () => void): this;

            setOutlineMode(setStateCallback?: () => void): this;

            getMode(): string;

            isStandardMode(): boolean

            isOutlineMode(): boolean

            getLevel(): number;

            shouldIncreaseLevel(parentLevelComponent: React.ReactNode, props?: object): boolean

            checkLevel(props?: object): number;

        }


        class BaseElementaryPureRenderSection extends React.Component<CombinedMixins.BaseElementaryPureRenderSection.Props, CombinedMixins.BaseElementaryPureRenderSection.State> {
            getTagName(): string;

            getMixinRegister(): Array<object>;

            registerMixin(mixinName: string): this;

            hasMixin(mixinName: string): boolean;

            isRendered(): boolean;

            getClassName(item: string, mixinName?: string): string;

            getClassName(): object;

            getDefault(item: string, mixinName?: string): any;

            getOpt(item: string, mixinName?: string): any;

            getLimit(item: string, mixinName?: string): number;

            getLsi(item: string, mixinName?: string): LsiValue;

            getLsiComponent(item: string, mixinName?: string, params?: object): React.ReactNode;

            getLsiValue(item: string, mixinName?: string, params?: object): string;

            getLsiItem(value: LsiValue, params?: object): string;

            isRendered(): boolean;

            setAsyncState(newState: (prevState: object) => object, setStateCallback?: () => void): this;

            setAsyncState(newState: object, setStateCallback?: () => void): this;

            getId(): string;

            getName(): string;

            getTooltip(): string;

            getMainPropsToPass(mixinNames?: Array<string>): CombinedMixins.BaseElementaryPureRenderSection.Props

            getMainAttrs(): React.HTMLAttributes<HTMLElement>;

            getParent(): React.ReactNode;

            getParentByType(typeFunction: string): React.ReactNode;

            checkParentTagName(parentTagName: string): React.ReactNode;

            checkParentType(parentTypeFunction: string): React.ReactNode;

            getIndex(): number;

            getFullClassName(className): string

            stringToObjectType(string: string, type: any, prefix: object): any;

            switchChildrenToBody(props: object): object;

            findDOMNode(): HTMLElement;

            showError(msgKey: string, msgParams: Array<string>, opt?: WithContext): this;

            showError(msgKey: string, msgParams: string, opt?: WithContext): this;

            showWarning(msgKey: string, msgParams: Array<string>, opt?: WithContext): this;

            showWarning(msgKey: string, msgParams: string, opt?: WithContext): this;

            replaceByHardSpace(text: string, language: string): string;

            shouldRender(nextProps, nextState, thisProps, thisState): boolean

            setHiddenValue(value: boolean, setStateCallback?: () => void): this;

            hide(setStateCallback?: () => void): this;

            hideDefault(setStateCallback?: () => void): void;

            show(setStateCallback?: () => void): this;

            showDefault(setStateCallback?: () => void): this;

            isHidden(): boolean;

            toggleHidden(setStateCallback?: () => void): this;

            toggleHiddenDefault(setStateCallback?: () => void): this;

            setDisabledValue(value: boolean, setStateCallback?: () => void): this;

            disable(setStateCallback?: () => void): this;

            disableDefault(setStateCallback?: () => void): this;

            enable(setStateCallback?: () => void): this

            enableDefault(setStateCallback?: () => void): this;

            isDisabled(): boolean;

            toggleDisabled(setStateCallback?: () => void): this;

            toggleDisabledDefault(setStateCallback?: () => void): this;

            setSelectedValue(value, setStateCallback?: () => void): this;

            select(setStateCallback?: () => void): this;

            selectDefault(setStateCallback?: () => void): this;

            deselect(setStateCallback?: () => void): this;

            deselectDefault(setStateCallback?: () => void): this

            isSelected(): boolean;

            toggleSelected(setStateCallback?: () => void): this;

            toggleSelectedDefault(setStateCallback?: () => void): this;

            buildMainAttrs(mainAttrs: object): React.HTMLAttributes<HTMLElement>;

            getHiddenClassName(className?: string): string;

            getDisabledClassName(className?: string): string;

            getSelectedClassName(className?: string): string

            getDisabledCover(): React.ReactNode

            getDisabledCoverTransparent(): React.ReactNode

            getHeader(props?: object): React.ReactNode

            getHeaderDefault(props?: object): React.ReactNode

            getFooter(props?: object): React.ReactNode

            getFooterDefault(props?: object): React.ReactNode

            getHeaderType(headerContent?: string | object): string;

            getFooterType(footerContent?: string | object): string;

            registerRenderedHeaderChild(renderedHeaderChild: React.ReactChild): this;

            registerRenderedFooterChild(renderedFooterChild: React.ReactChild): this;

            expandHeaderProps(prevHeaderChild: object): object;

            expandFooterProps(prevFooterChild: object): object

            buildHeaderChild(header): React.ReactChild

            buildHeaderChildDefault(header): React.ReactChild

            buildFooterChild(footer): React.ReactChild

            buildFooterChildDefault(footer): React.ReactChild

            getHeaderChild(): React.ReactChild

            getFooterChild(): React.ReactChild

            getRenderedHeaderChild(): React.ReactChild

            getRenderedFooterChild(): React.ReactChild

            isDynamic(): boolean;

            getContent(): Uu5Content;

            expandChildProps(prevChild: React.ReactNode, childIndex: number): object;

            buildChild(childTag: string, childProps?: object, children?: React.ReactChildren): React.ReactNode;

            cloneChild(child: React.ReactNode, props: object): React.ReactNode;

            expandChildDefault(child: React.ReactNode, key?: any): React.ReactNode

            buildNodeChildren(children: React.ReactChildren, childPropsExpander: (child: React.ReactNode, index: number) => object): React.ReactChildren;

            shouldChildRender(child: React.ReactChildren): boolean;

            buildChildren(contentProps: object, childPropsExpander: (child: React.ReactNode, index: number) => object, childIndex: number): React.ReactChildren;

            buildChildrenDefault(contentProps: object, childPropsExpander: (child: React.ReactNode, index: number) => object, childIndex: number): React.ReactChildren;

            getStandardChildren(): React.ReactChildren;

            getOutlineChildren(): React.ReactChildren

            getChildren(): React.ReactChildren;

            getRenderedChildren(): React.ReactChild;

            getRenderedChildrenDefault(): React.ReactChild;

            setRenderedChildren(childrenIndexList: any): this;

            // TODO
            addRenderedChild(renderedChild, index): this;

            // TODO
            removeRenderedChild(renderedChild): this;

            // TODO
            getRenderedChildrenIdList(): any;

            // TODO
            setRenderedChildrenIdList(childrenIdList): this;

            // TODO
            addRenderedChildToIdList(renderedChild): this;

            // TODO
            removeRenderedChildFromIdList(renderedChild): this;

            // TODO
            getRenderedChildrenNameList(): any;

            // TODO
            setRenderedChildrenNameList(childrenNameList): this;

            // TODO
            addRenderedChildToNameList(renderedChild): this;

            // TODO
            removeRenderedChildFromNameList(renderedChild): this;

            getChildIndexById(childId: string): number;

            getChildIndexByIdDefault(childId: string): number;

            getRenderedChildById(childId: string): React.ReactChild;

            getRenderedChildByIdDefault(childId: string): React.ReactChild;

            getRenderedChildrenByName(childName: string): React.ReactChildren;

            getRenderedChildByName(childName: string): React.ReactChild;

            getRenderedChildByNameDefault(childName: string): React.ReactChild;

            getRenderedChildByIndex(index: number): React.ReactChild;

            getRenderedChildByIndexDefault(index: number): React.ReactChild;

            getRenderedChildByTagName(tagName: string): React.ReactChild;

            getRenderedChildByTagNameDefault(tagName: string): React.ReactChild;

            getFirstRenderedChild(): React.ReactChild;

            getFirstRenderedChildDefault(): React.ReactChild;

            getLastRenderedChild(): React.ReactChild;

            getLastRenderedChildDefault(): React.ReactChild;

            eachRenderedChild(callback: (rendredChild: React.ReactChild, index: number) => boolean): this;

            eachRenderedChildDefault(callback: (rendredChild: React.ReactChild, index: number) => boolean): this;

            registerRenderedChild(renderedChild: React.ReactChild, index: number): this;

            unregisterRenderedChild(renderedChild: React.ReactChild): this;

            // dynamic functions

            setChildren(newChildren: React.ReactChildren, setStateCallback?: () => void): this;

            setChildren(newChildren: React.ReactChildren, props?: object, setStateCallback?: () => void): this;

            setChildrenDefault(newChildren: React.ReactChildren, setStateCallback?: () => void): this;

            insertChild(child: object | React.ReactNode, opt?: { position?: number, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildDefault(child: object | React.ReactNode, opt?: { position?: number, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildBefore(child: object | React.ReactNode, opt?: { childAfterId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildBeforeDefault(child: object | React.ReactNode, opt?: { childAfterId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildAfter(child: object | React.ReactNode, opt?: { childBeforeId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildAfterDefault(child: object | React.ReactNode, opt?: { childBeforeId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            updateChild(childId: string, newProps: object, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this

            updateChildDefault(childId: string, newProps: object, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            replaceChild(childId: string, child: object | React.ReactNode, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            replaceChildDefault(childId: string, child: object | React.ReactNode, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            deleteChild(childId: string, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            deleteChildDefault(childId: string, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            clearChildren(opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            clearChildrenDefault(opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            // TODO
            setFilter(filter, setStateCallback?: () => void): this;

            resetFilter(setStateCallback?: () => void): this;

            // TODO
            setSorter(sorter, setStateCallback?: () => void): this;

            resetSorter(setStateCallback?: () => void): this;

            // TODO
            setFilterAndSorter(filter, sorter, setStateCallback?: () => void): this;

            resetFilterAndSorter(setStateCallback?: () => void): this;

            getFilteredSorterChildren(children?: React.ReactChildren): React.ReactChildren;

            setStandardMode(setStateCallback?: () => void): this;

            setOutlineMode(setStateCallback?: () => void): this;

            getMode(): string;

            isStandardMode(): boolean

            isOutlineMode(): boolean

            getLevel(): number;

            shouldIncreaseLevel(parentLevelComponent: React.ReactNode, props?: object): boolean

            checkLevel(props?: object): number;

        }


        class BaseColorSchemaElementary extends React.Component<CombinedMixins.BaseColorSchemaElementary.Props, CombinedMixins.BaseColorSchemaElementary.State> {
            getTagName(): string;

            getMixinRegister(): Array<object>;

            registerMixin(mixinName: string): this;

            hasMixin(mixinName: string): boolean;

            isRendered(): boolean;

            getClassName(item: string, mixinName?: string): string;

            getClassName(): object;

            getDefault(item: string, mixinName?: string): any;

            getOpt(item: string, mixinName?: string): any;

            getLimit(item: string, mixinName?: string): number;

            getLsi(item: string, mixinName?: string): LsiValue;

            getLsiComponent(item: string, mixinName?: string, params?: object): React.ReactNode;

            getLsiValue(item: string, mixinName?: string, params?: object): string;

            getLsiItem(value: LsiValue, params?: object): string;

            isRendered(): boolean;

            setAsyncState(newState: (prevState: object) => object, setStateCallback?: () => void): this;

            setAsyncState(newState: object, setStateCallback?: () => void): this;

            getId(): string;

            getName(): string;

            getTooltip(): string;

            getMainPropsToPass(mixinNames?: Array<string>): CombinedMixins.BaseColorSchemaElementary.Props

            getMainAttrs(): React.HTMLAttributes<HTMLElement>;

            getParent(): React.ReactNode;

            getParentByType(typeFunction: string): React.ReactNode;

            checkParentTagName(parentTagName: string): React.ReactNode;

            checkParentType(parentTypeFunction: string): React.ReactNode;

            getIndex(): number;

            getFullClassName(className): string

            stringToObjectType(string: string, type: any, prefix: object): any;

            switchChildrenToBody(props: object): object;

            findDOMNode(): HTMLElement;

            showError(msgKey: string, msgParams: Array<string>, opt?: WithContext): this;

            showError(msgKey: string, msgParams: string, opt?: WithContext): this;

            showWarning(msgKey: string, msgParams: Array<string>, opt?: WithContext): this;

            showWarning(msgKey: string, msgParams: string, opt?: WithContext): this;

            replaceByHardSpace(text: string, language: string): string;

            shouldRender(nextProps, nextState, thisProps, thisState): boolean

            getColorSchema(): string

            setHiddenValue(value: boolean, setStateCallback?: () => void): this;

            hide(setStateCallback?: () => void): this;

            hideDefault(setStateCallback?: () => void): void;

            show(setStateCallback?: () => void): this;

            showDefault(setStateCallback?: () => void): this;

            isHidden(): boolean;

            toggleHidden(setStateCallback?: () => void): this;

            toggleHiddenDefault(setStateCallback?: () => void): this;

            setDisabledValue(value: boolean, setStateCallback?: () => void): this;

            disable(setStateCallback?: () => void): this;

            disableDefault(setStateCallback?: () => void): this;

            enable(setStateCallback?: () => void): this

            enableDefault(setStateCallback?: () => void): this;

            isDisabled(): boolean;

            toggleDisabled(setStateCallback?: () => void): this;

            toggleDisabledDefault(setStateCallback?: () => void): this;

            setSelectedValue(value, setStateCallback?: () => void): this;

            select(setStateCallback?: () => void): this;

            selectDefault(setStateCallback?: () => void): this;

            deselect(setStateCallback?: () => void): this;

            deselectDefault(setStateCallback?: () => void): this

            isSelected(): boolean;

            toggleSelected(setStateCallback?: () => void): this;

            toggleSelectedDefault(setStateCallback?: () => void): this;

            buildMainAttrs(mainAttrs: object): React.HTMLAttributes<HTMLElement>;

            getHiddenClassName(className?: string): string;

            getDisabledClassName(className?: string): string;

            getSelectedClassName(className?: string): string

            getDisabledCover(): React.ReactNode

            getDisabledCoverTransparent(): React.ReactNode

        }


        class BaseColorSchemaElementaryNestingLevelResize extends React.Component<CombinedMixins.BaseColorSchemaElementaryNestingLevelResize.Props, CombinedMixins.BaseColorSchemaElementaryNestingLevelResize.State> {
            getTagName(): string;

            getMixinRegister(): Array<object>;

            registerMixin(mixinName: string): this;

            hasMixin(mixinName: string): boolean;

            isRendered(): boolean;

            getClassName(item: string, mixinName?: string): string;

            getClassName(): object;

            getDefault(item: string, mixinName?: string): any;

            getOpt(item: string, mixinName?: string): any;

            getLimit(item: string, mixinName?: string): number;

            getLsi(item: string, mixinName?: string): LsiValue;

            getLsiComponent(item: string, mixinName?: string, params?: object): React.ReactNode;

            getLsiValue(item: string, mixinName?: string, params?: object): string;

            getLsiItem(value: LsiValue, params?: object): string;

            isRendered(): boolean;

            setAsyncState(newState: (prevState: object) => object, setStateCallback?: () => void): this;

            setAsyncState(newState: object, setStateCallback?: () => void): this;

            getId(): string;

            getName(): string;

            getTooltip(): string;

            getMainPropsToPass(mixinNames?: Array<string>): CombinedMixins.BaseColorSchemaElementaryNestingLevelResize.Props

            getMainAttrs(): React.HTMLAttributes<HTMLElement>;

            getParent(): React.ReactNode;

            getParentByType(typeFunction: string): React.ReactNode;

            checkParentTagName(parentTagName: string): React.ReactNode;

            checkParentType(parentTypeFunction: string): React.ReactNode;

            getIndex(): number;

            getFullClassName(className): string

            stringToObjectType(string: string, type: any, prefix: object): any;

            switchChildrenToBody(props: object): object;

            findDOMNode(): HTMLElement;

            showError(msgKey: string, msgParams: Array<string>, opt?: WithContext): this;

            showError(msgKey: string, msgParams: string, opt?: WithContext): this;

            showWarning(msgKey: string, msgParams: Array<string>, opt?: WithContext): this;

            showWarning(msgKey: string, msgParams: string, opt?: WithContext): this;

            replaceByHardSpace(text: string, language: string): string;

            shouldRender(nextProps, nextState, thisProps, thisState): boolean

            getColorSchema(): string

            setHiddenValue(value: boolean, setStateCallback?: () => void): this;

            hide(setStateCallback?: () => void): this;

            hideDefault(setStateCallback?: () => void): void;

            show(setStateCallback?: () => void): this;

            showDefault(setStateCallback?: () => void): this;

            isHidden(): boolean;

            toggleHidden(setStateCallback?: () => void): this;

            toggleHiddenDefault(setStateCallback?: () => void): this;

            setDisabledValue(value: boolean, setStateCallback?: () => void): this;

            disable(setStateCallback?: () => void): this;

            disableDefault(setStateCallback?: () => void): this;

            enable(setStateCallback?: () => void): this

            enableDefault(setStateCallback?: () => void): this;

            isDisabled(): boolean;

            toggleDisabled(setStateCallback?: () => void): this;

            toggleDisabledDefault(setStateCallback?: () => void): this;

            setSelectedValue(value, setStateCallback?: () => void): this;

            select(setStateCallback?: () => void): this;

            selectDefault(setStateCallback?: () => void): this;

            deselect(setStateCallback?: () => void): this;

            deselectDefault(setStateCallback?: () => void): this

            isSelected(): boolean;

            toggleSelected(setStateCallback?: () => void): this;

            toggleSelectedDefault(setStateCallback?: () => void): this;

            buildMainAttrs(mainAttrs: object): React.HTMLAttributes<HTMLElement>;

            getHiddenClassName(className?: string): string;

            getDisabledClassName(className?: string): string;

            getSelectedClassName(className?: string): string

            getDisabledCover(): React.ReactNode

            getDisabledCoverTransparent(): React.ReactNode

            getNestingLevel(): NestingLevels

            getParentNestingLevel(): NestingLevels

            getNestingLevelList(): Array<NestingLevels>

            checkNestingLevel(): NestingLevels | null

        }


        class BaseColorSchemaContentElementaryNestingLevelPureRenderScreenSize extends React.Component<CombinedMixins.BaseColorSchemaContentElementaryNestingLevelPureRenderScreenSize.Props, CombinedMixins.BaseColorSchemaContentElementaryNestingLevelPureRenderScreenSize.State> {
            getTagName(): string;

            getMixinRegister(): Array<object>;

            registerMixin(mixinName: string): this;

            hasMixin(mixinName: string): boolean;

            isRendered(): boolean;

            getClassName(item: string, mixinName?: string): string;

            getClassName(): object;

            getDefault(item: string, mixinName?: string): any;

            getOpt(item: string, mixinName?: string): any;

            getLimit(item: string, mixinName?: string): number;

            getLsi(item: string, mixinName?: string): LsiValue;

            getLsiComponent(item: string, mixinName?: string, params?: object): React.ReactNode;

            getLsiValue(item: string, mixinName?: string, params?: object): string;

            getLsiItem(value: LsiValue, params?: object): string;

            isRendered(): boolean;

            setAsyncState(newState: (prevState: object) => object, setStateCallback?: () => void): this;

            setAsyncState(newState: object, setStateCallback?: () => void): this;

            getId(): string;

            getName(): string;

            getTooltip(): string;

            getMainPropsToPass(mixinNames?: Array<string>): CombinedMixins.BaseColorSchemaContentElementaryNestingLevelPureRenderScreenSize.Props

            getMainAttrs(): React.HTMLAttributes<HTMLElement>;

            getParent(): React.ReactNode;

            getParentByType(typeFunction: string): React.ReactNode;

            checkParentTagName(parentTagName: string): React.ReactNode;

            checkParentType(parentTypeFunction: string): React.ReactNode;

            getIndex(): number;

            getFullClassName(className): string

            stringToObjectType(string: string, type: any, prefix: object): any;

            switchChildrenToBody(props: object): object;

            findDOMNode(): HTMLElement;

            showError(msgKey: string, msgParams: Array<string>, opt?: WithContext): this;

            showError(msgKey: string, msgParams: string, opt?: WithContext): this;

            showWarning(msgKey: string, msgParams: Array<string>, opt?: WithContext): this;

            showWarning(msgKey: string, msgParams: string, opt?: WithContext): this;

            replaceByHardSpace(text: string, language: string): string;

            shouldRender(nextProps, nextState, thisProps, thisState): boolean

            getColorSchema(): string

            isDynamic(): boolean;

            getContent(): Uu5Content;

            expandChildProps(prevChild: React.ReactNode, childIndex: number): object;

            buildChild(childTag: string, childProps?: object, children?: React.ReactChildren): React.ReactNode;

            cloneChild(child: React.ReactNode, props: object): React.ReactNode;

            expandChildDefault(child: React.ReactNode, key?: any): React.ReactNode

            buildNodeChildren(children: React.ReactChildren, childPropsExpander: (child: React.ReactNode, index: number) => object): React.ReactChildren;

            shouldChildRender(child: React.ReactChildren): boolean;

            buildChildren(contentProps: object, childPropsExpander: (child: React.ReactNode, index: number) => object, childIndex: number): React.ReactChildren;

            buildChildrenDefault(contentProps: object, childPropsExpander: (child: React.ReactNode, index: number) => object, childIndex: number): React.ReactChildren;

            getStandardChildren(): React.ReactChildren;

            getOutlineChildren(): React.ReactChildren

            getChildren(): React.ReactChildren;

            getRenderedChildren(): React.ReactChild;

            getRenderedChildrenDefault(): React.ReactChild;

            setRenderedChildren(childrenIndexList: any): this;

            // TODO
            addRenderedChild(renderedChild, index): this;

            // TODO
            removeRenderedChild(renderedChild): this;

            // TODO
            getRenderedChildrenIdList(): any;

            // TODO
            setRenderedChildrenIdList(childrenIdList): this;

            // TODO
            addRenderedChildToIdList(renderedChild): this;

            // TODO
            removeRenderedChildFromIdList(renderedChild): this;

            // TODO
            getRenderedChildrenNameList(): any;

            // TODO
            setRenderedChildrenNameList(childrenNameList): this;

            // TODO
            addRenderedChildToNameList(renderedChild): this;

            // TODO
            removeRenderedChildFromNameList(renderedChild): this;

            getChildIndexById(childId: string): number;

            getChildIndexByIdDefault(childId: string): number;

            getRenderedChildById(childId: string): React.ReactChild;

            getRenderedChildByIdDefault(childId: string): React.ReactChild;

            getRenderedChildrenByName(childName: string): React.ReactChildren;

            getRenderedChildByName(childName: string): React.ReactChild;

            getRenderedChildByNameDefault(childName: string): React.ReactChild;

            getRenderedChildByIndex(index: number): React.ReactChild;

            getRenderedChildByIndexDefault(index: number): React.ReactChild;

            getRenderedChildByTagName(tagName: string): React.ReactChild;

            getRenderedChildByTagNameDefault(tagName: string): React.ReactChild;

            getFirstRenderedChild(): React.ReactChild;

            getFirstRenderedChildDefault(): React.ReactChild;

            getLastRenderedChild(): React.ReactChild;

            getLastRenderedChildDefault(): React.ReactChild;

            eachRenderedChild(callback: (rendredChild: React.ReactChild, index: number) => boolean): this;

            eachRenderedChildDefault(callback: (rendredChild: React.ReactChild, index: number) => boolean): this;

            registerRenderedChild(renderedChild: React.ReactChild, index: number): this;

            unregisterRenderedChild(renderedChild: React.ReactChild): this;

            // dynamic functions

            setChildren(newChildren: React.ReactChildren, setStateCallback?: () => void): this;

            setChildren(newChildren: React.ReactChildren, props?: object, setStateCallback?: () => void): this;

            setChildrenDefault(newChildren: React.ReactChildren, setStateCallback?: () => void): this;

            insertChild(child: object | React.ReactNode, opt?: { position?: number, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildDefault(child: object | React.ReactNode, opt?: { position?: number, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildBefore(child: object | React.ReactNode, opt?: { childAfterId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildBeforeDefault(child: object | React.ReactNode, opt?: { childAfterId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildAfter(child: object | React.ReactNode, opt?: { childBeforeId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildAfterDefault(child: object | React.ReactNode, opt?: { childBeforeId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            updateChild(childId: string, newProps: object, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this

            updateChildDefault(childId: string, newProps: object, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            replaceChild(childId: string, child: object | React.ReactNode, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            replaceChildDefault(childId: string, child: object | React.ReactNode, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            deleteChild(childId: string, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            deleteChildDefault(childId: string, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            clearChildren(opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            clearChildrenDefault(opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            // TODO
            setFilter(filter, setStateCallback?: () => void): this;

            resetFilter(setStateCallback?: () => void): this;

            // TODO
            setSorter(sorter, setStateCallback?: () => void): this;

            resetSorter(setStateCallback?: () => void): this;

            // TODO
            setFilterAndSorter(filter, sorter, setStateCallback?: () => void): this;

            resetFilterAndSorter(setStateCallback?: () => void): this;

            getFilteredSorterChildren(children?: React.ReactChildren): React.ReactChildren;

            setStandardMode(setStateCallback?: () => void): this;

            setOutlineMode(setStateCallback?: () => void): this;

            getMode(): string;

            isStandardMode(): boolean

            isOutlineMode(): boolean

            setHiddenValue(value: boolean, setStateCallback?: () => void): this;

            hide(setStateCallback?: () => void): this;

            hideDefault(setStateCallback?: () => void): void;

            show(setStateCallback?: () => void): this;

            showDefault(setStateCallback?: () => void): this;

            isHidden(): boolean;

            toggleHidden(setStateCallback?: () => void): this;

            toggleHiddenDefault(setStateCallback?: () => void): this;

            setDisabledValue(value: boolean, setStateCallback?: () => void): this;

            disable(setStateCallback?: () => void): this;

            disableDefault(setStateCallback?: () => void): this;

            enable(setStateCallback?: () => void): this

            enableDefault(setStateCallback?: () => void): this;

            isDisabled(): boolean;

            toggleDisabled(setStateCallback?: () => void): this;

            toggleDisabledDefault(setStateCallback?: () => void): this;

            setSelectedValue(value, setStateCallback?: () => void): this;

            select(setStateCallback?: () => void): this;

            selectDefault(setStateCallback?: () => void): this;

            deselect(setStateCallback?: () => void): this;

            deselectDefault(setStateCallback?: () => void): this

            isSelected(): boolean;

            toggleSelected(setStateCallback?: () => void): this;

            toggleSelectedDefault(setStateCallback?: () => void): this;

            buildMainAttrs(mainAttrs: object): React.HTMLAttributes<HTMLElement>;

            getHiddenClassName(className?: string): string;

            getDisabledClassName(className?: string): string;

            getSelectedClassName(className?: string): string

            getDisabledCover(): React.ReactNode

            getDisabledCoverTransparent(): React.ReactNode

            getNestingLevel(): NestingLevels

            getParentNestingLevel(): NestingLevels

            getNestingLevelList(): Array<NestingLevels>

            checkNestingLevel(): NestingLevels | null

            getScreenSize(): ScreenSizes

            isXs(): boolean

            isS(): boolean;

            isM(): boolean;

            isL(): boolean;

            isXl(): boolean;

            onChangeScreenSizeDefault(e, actualScreenSize: ScreenSizes): this

            onChangeScreenSize_?(e, actualScreenSize: ScreenSizes): void

        }


        class BaseElementary extends React.Component<CombinedMixins.BaseElementary.Props, CombinedMixins.BaseElementary.State> {
            getTagName(): string;

            getMixinRegister(): Array<object>;

            registerMixin(mixinName: string): this;

            hasMixin(mixinName: string): boolean;

            isRendered(): boolean;

            getClassName(item: string, mixinName?: string): string;

            getClassName(): object;

            getDefault(item: string, mixinName?: string): any;

            getOpt(item: string, mixinName?: string): any;

            getLimit(item: string, mixinName?: string): number;

            getLsi(item: string, mixinName?: string): LsiValue;

            getLsiComponent(item: string, mixinName?: string, params?: object): React.ReactNode;

            getLsiValue(item: string, mixinName?: string, params?: object): string;

            getLsiItem(value: LsiValue, params?: object): string;

            isRendered(): boolean;

            setAsyncState(newState: (prevState: object) => object, setStateCallback?: () => void): this;

            setAsyncState(newState: object, setStateCallback?: () => void): this;

            getId(): string;

            getName(): string;

            getTooltip(): string;

            getMainPropsToPass(mixinNames?: Array<string>): CombinedMixins.BaseElementary.Props

            getMainAttrs(): React.HTMLAttributes<HTMLElement>;

            getParent(): React.ReactNode;

            getParentByType(typeFunction: string): React.ReactNode;

            checkParentTagName(parentTagName: string): React.ReactNode;

            checkParentType(parentTypeFunction: string): React.ReactNode;

            getIndex(): number;

            getFullClassName(className): string

            stringToObjectType(string: string, type: any, prefix: object): any;

            switchChildrenToBody(props: object): object;

            findDOMNode(): HTMLElement;

            showError(msgKey: string, msgParams: Array<string>, opt?: WithContext): this;

            showError(msgKey: string, msgParams: string, opt?: WithContext): this;

            showWarning(msgKey: string, msgParams: Array<string>, opt?: WithContext): this;

            showWarning(msgKey: string, msgParams: string, opt?: WithContext): this;

            replaceByHardSpace(text: string, language: string): string;

            shouldRender(nextProps, nextState, thisProps, thisState): boolean

            setHiddenValue(value: boolean, setStateCallback?: () => void): this;

            hide(setStateCallback?: () => void): this;

            hideDefault(setStateCallback?: () => void): void;

            show(setStateCallback?: () => void): this;

            showDefault(setStateCallback?: () => void): this;

            isHidden(): boolean;

            toggleHidden(setStateCallback?: () => void): this;

            toggleHiddenDefault(setStateCallback?: () => void): this;

            setDisabledValue(value: boolean, setStateCallback?: () => void): this;

            disable(setStateCallback?: () => void): this;

            disableDefault(setStateCallback?: () => void): this;

            enable(setStateCallback?: () => void): this

            enableDefault(setStateCallback?: () => void): this;

            isDisabled(): boolean;

            toggleDisabled(setStateCallback?: () => void): this;

            toggleDisabledDefault(setStateCallback?: () => void): this;

            setSelectedValue(value, setStateCallback?: () => void): this;

            select(setStateCallback?: () => void): this;

            selectDefault(setStateCallback?: () => void): this;

            deselect(setStateCallback?: () => void): this;

            deselectDefault(setStateCallback?: () => void): this

            isSelected(): boolean;

            toggleSelected(setStateCallback?: () => void): this;

            toggleSelectedDefault(setStateCallback?: () => void): this;

            buildMainAttrs(mainAttrs: object): React.HTMLAttributes<HTMLElement>;

            getHiddenClassName(className?: string): string;

            getDisabledClassName(className?: string): string;

            getSelectedClassName(className?: string): string

            getDisabledCover(): React.ReactNode

            getDisabledCoverTransparent(): React.ReactNode

        }


        class BaseCcrWriterElementaryPureRender extends React.Component<CombinedMixins.BaseCcrWriterElementaryPureRender.Props, CombinedMixins.BaseCcrWriterElementaryPureRender.State> {
            getTagName(): string;

            getMixinRegister(): Array<object>;

            registerMixin(mixinName: string): this;

            hasMixin(mixinName: string): boolean;

            isRendered(): boolean;

            getClassName(item: string, mixinName?: string): string;

            getClassName(): object;

            getDefault(item: string, mixinName?: string): any;

            getOpt(item: string, mixinName?: string): any;

            getLimit(item: string, mixinName?: string): number;

            getLsi(item: string, mixinName?: string): LsiValue;

            getLsiComponent(item: string, mixinName?: string, params?: object): React.ReactNode;

            getLsiValue(item: string, mixinName?: string, params?: object): string;

            getLsiItem(value: LsiValue, params?: object): string;

            isRendered(): boolean;

            setAsyncState(newState: (prevState: object) => object, setStateCallback?: () => void): this;

            setAsyncState(newState: object, setStateCallback?: () => void): this;

            getId(): string;

            getName(): string;

            getTooltip(): string;

            getMainPropsToPass(mixinNames?: Array<string>): CombinedMixins.BaseCcrWriterElementaryPureRender.Props

            getMainAttrs(): React.HTMLAttributes<HTMLElement>;

            getParent(): React.ReactNode;

            getParentByType(typeFunction: string): React.ReactNode;

            checkParentTagName(parentTagName: string): React.ReactNode;

            checkParentType(parentTypeFunction: string): React.ReactNode;

            getIndex(): number;

            getFullClassName(className): string

            stringToObjectType(string: string, type: any, prefix: object): any;

            switchChildrenToBody(props: object): object;

            findDOMNode(): HTMLElement;

            showError(msgKey: string, msgParams: Array<string>, opt?: WithContext): this;

            showError(msgKey: string, msgParams: string, opt?: WithContext): this;

            showWarning(msgKey: string, msgParams: Array<string>, opt?: WithContext): this;

            showWarning(msgKey: string, msgParams: string, opt?: WithContext): this;

            replaceByHardSpace(text: string, language: string): string;

            shouldRender(nextProps, nextState, thisProps, thisState): boolean

            getCcrKey(props?: object): string;

            getCcrComponentByKey(key: string): React.ReactNode;

            isCcrRegisteredByKey(key: string): boolean;

            getCcrByKeyRegister(): object

            setHiddenValue(value: boolean, setStateCallback?: () => void): this;

            hide(setStateCallback?: () => void): this;

            hideDefault(setStateCallback?: () => void): void;

            show(setStateCallback?: () => void): this;

            showDefault(setStateCallback?: () => void): this;

            isHidden(): boolean;

            toggleHidden(setStateCallback?: () => void): this;

            toggleHiddenDefault(setStateCallback?: () => void): this;

            setDisabledValue(value: boolean, setStateCallback?: () => void): this;

            disable(setStateCallback?: () => void): this;

            disableDefault(setStateCallback?: () => void): this;

            enable(setStateCallback?: () => void): this

            enableDefault(setStateCallback?: () => void): this;

            isDisabled(): boolean;

            toggleDisabled(setStateCallback?: () => void): this;

            toggleDisabledDefault(setStateCallback?: () => void): this;

            setSelectedValue(value, setStateCallback?: () => void): this;

            select(setStateCallback?: () => void): this;

            selectDefault(setStateCallback?: () => void): this;

            deselect(setStateCallback?: () => void): this;

            deselectDefault(setStateCallback?: () => void): this

            isSelected(): boolean;

            toggleSelected(setStateCallback?: () => void): this;

            toggleSelectedDefault(setStateCallback?: () => void): this;

            buildMainAttrs(mainAttrs: object): React.HTMLAttributes<HTMLElement>;

            getHiddenClassName(className?: string): string;

            getDisabledClassName(className?: string): string;

            getSelectedClassName(className?: string): string

            getDisabledCover(): React.ReactNode

            getDisabledCoverTransparent(): React.ReactNode

        }


        class BaseElementaryLsiSwipe extends React.Component<CombinedMixins.BaseElementaryLsiSwipe.Props, CombinedMixins.BaseElementaryLsiSwipe.State> {
            getTagName(): string;

            getMixinRegister(): Array<object>;

            registerMixin(mixinName: string): this;

            hasMixin(mixinName: string): boolean;

            isRendered(): boolean;

            getClassName(item: string, mixinName?: string): string;

            getClassName(): object;

            getDefault(item: string, mixinName?: string): any;

            getOpt(item: string, mixinName?: string): any;

            getLimit(item: string, mixinName?: string): number;

            getLsi(item: string, mixinName?: string): LsiValue;

            getLsiComponent(item: string, mixinName?: string, params?: object): React.ReactNode;

            getLsiValue(item: string, mixinName?: string, params?: object): string;

            getLsiItem(value: LsiValue, params?: object): string;

            isRendered(): boolean;

            setAsyncState(newState: (prevState: object) => object, setStateCallback?: () => void): this;

            setAsyncState(newState: object, setStateCallback?: () => void): this;

            getId(): string;

            getName(): string;

            getTooltip(): string;

            getMainPropsToPass(mixinNames?: Array<string>): CombinedMixins.BaseElementaryLsiSwipe.Props

            getMainAttrs(): React.HTMLAttributes<HTMLElement>;

            getParent(): React.ReactNode;

            getParentByType(typeFunction: string): React.ReactNode;

            checkParentTagName(parentTagName: string): React.ReactNode;

            checkParentType(parentTypeFunction: string): React.ReactNode;

            getIndex(): number;

            getFullClassName(className): string

            stringToObjectType(string: string, type: any, prefix: object): any;

            switchChildrenToBody(props: object): object;

            findDOMNode(): HTMLElement;

            showError(msgKey: string, msgParams: Array<string>, opt?: WithContext): this;

            showError(msgKey: string, msgParams: string, opt?: WithContext): this;

            showWarning(msgKey: string, msgParams: Array<string>, opt?: WithContext): this;

            showWarning(msgKey: string, msgParams: string, opt?: WithContext): this;

            replaceByHardSpace(text: string, language: string): string;

            shouldRender(nextProps, nextState, thisProps, thisState): boolean

            setHiddenValue(value: boolean, setStateCallback?: () => void): this;

            hide(setStateCallback?: () => void): this;

            hideDefault(setStateCallback?: () => void): void;

            show(setStateCallback?: () => void): this;

            showDefault(setStateCallback?: () => void): this;

            isHidden(): boolean;

            toggleHidden(setStateCallback?: () => void): this;

            toggleHiddenDefault(setStateCallback?: () => void): this;

            setDisabledValue(value: boolean, setStateCallback?: () => void): this;

            disable(setStateCallback?: () => void): this;

            disableDefault(setStateCallback?: () => void): this;

            enable(setStateCallback?: () => void): this

            enableDefault(setStateCallback?: () => void): this;

            isDisabled(): boolean;

            toggleDisabled(setStateCallback?: () => void): this;

            toggleDisabledDefault(setStateCallback?: () => void): this;

            setSelectedValue(value, setStateCallback?: () => void): this;

            select(setStateCallback?: () => void): this;

            selectDefault(setStateCallback?: () => void): this;

            deselect(setStateCallback?: () => void): this;

            deselectDefault(setStateCallback?: () => void): this

            isSelected(): boolean;

            toggleSelected(setStateCallback?: () => void): this;

            toggleSelectedDefault(setStateCallback?: () => void): this;

            buildMainAttrs(mainAttrs: object): React.HTMLAttributes<HTMLElement>;

            getHiddenClassName(className?: string): string;

            getDisabledClassName(className?: string): string;

            getSelectedClassName(className?: string): string

            getDisabledCover(): React.ReactNode

            getDisabledCoverTransparent(): React.ReactNode

            getLanguages(): Array<{ language: string, q: number }>

            getLanguage(): string

            getSwipeLength(): number;

            getAngle(): number;

            isSwipedHorizontal(): boolean;

            isSwipedVertical(): boolean;

            isSwiped(): boolean;

            isSwipedShort(): boolean;

            isSwipedLong(): boolean;

            isSwipedSlow(): boolean;

            isSwipedFast(): boolean;

            isSwipedUp(): boolean;

            isSwipedRight(): boolean;

            isSwipedDown(): boolean;

            isSwipedLeft(): boolean;

            isSwipedUpRight(): boolean;

            isSwipedDownRight(): boolean;

            isSwipedUpLeft(): boolean;

            isSwipedDownLeft(): boolean;

            isSwipedUpShort(): boolean;

            isSwipedRightShort(): boolean;

            isSwipedDownShort(): boolean;

            isSwipedLeftShort(): boolean;

            isSwipedUpRightShort(): boolean;

            isSwipedDownRightShort(): boolean;

            isSwipedUpLeftShort(): boolean;

            isSwipedDownLeftShort(): boolean;

            isSwipedUpLong(): boolean;

            isSwipedRightLong(): boolean;

            isSwipedDownLong(): boolean;

            isSwipedLeftLong(): boolean;

            isSwipedUpRightLong(): boolean;

            isSwipedDownRightLong(): boolean;

            isSwipedUpLeftLong(): boolean;

            isSwipedDownLeftLong(): boolean;

            swipeOnTouchStart(handler: object | ((arguments?) => void), e: Event): this;

            swipeOnTouchStart(e: Event): this;

            swipeOnTouchMove(handler: object | ((arguments?) => void), e: Event): this;

            swipeOnTouchMove(e: Event): this;

            swipeOnTouchEnd(handler: object | ((arguments?) => void), e: Event): this;

            swipeOnTouchEnd(e: Event): this;

            angle(): number

        }


        class BaseColorSchemaElementaryInputPureRender extends React.Component<CombinedMixins.BaseColorSchemaElementaryInputPureRender.Props, CombinedMixins.BaseColorSchemaElementaryInputPureRender.State> {
            getTagName(): string;

            getMixinRegister(): Array<object>;

            registerMixin(mixinName: string): this;

            hasMixin(mixinName: string): boolean;

            isRendered(): boolean;

            getClassName(item: string, mixinName?: string): string;

            getClassName(): object;

            getDefault(item: string, mixinName?: string): any;

            getOpt(item: string, mixinName?: string): any;

            getLimit(item: string, mixinName?: string): number;

            getLsi(item: string, mixinName?: string): LsiValue;

            getLsiComponent(item: string, mixinName?: string, params?: object): React.ReactNode;

            getLsiValue(item: string, mixinName?: string, params?: object): string;

            getLsiItem(value: LsiValue, params?: object): string;

            isRendered(): boolean;

            setAsyncState(newState: (prevState: object) => object, setStateCallback?: () => void): this;

            setAsyncState(newState: object, setStateCallback?: () => void): this;

            getId(): string;

            getName(): string;

            getTooltip(): string;

            getMainPropsToPass(mixinNames?: Array<string>): CombinedMixins.BaseColorSchemaElementaryInputPureRender.Props

            getMainAttrs(): React.HTMLAttributes<HTMLElement>;

            getParent(): React.ReactNode;

            getParentByType(typeFunction: string): React.ReactNode;

            checkParentTagName(parentTagName: string): React.ReactNode;

            checkParentType(parentTypeFunction: string): React.ReactNode;

            getIndex(): number;

            getFullClassName(className): string

            stringToObjectType(string: string, type: any, prefix: object): any;

            switchChildrenToBody(props: object): object;

            findDOMNode(): HTMLElement;

            showError(msgKey: string, msgParams: Array<string>, opt?: WithContext): this;

            showError(msgKey: string, msgParams: string, opt?: WithContext): this;

            showWarning(msgKey: string, msgParams: Array<string>, opt?: WithContext): this;

            showWarning(msgKey: string, msgParams: string, opt?: WithContext): this;

            replaceByHardSpace(text: string, language: string): string;

            shouldRender(nextProps, nextState, thisProps, thisState): boolean

            getColorSchema(): string

            setHiddenValue(value: boolean, setStateCallback?: () => void): this;

            hide(setStateCallback?: () => void): this;

            hideDefault(setStateCallback?: () => void): void;

            show(setStateCallback?: () => void): this;

            showDefault(setStateCallback?: () => void): this;

            isHidden(): boolean;

            toggleHidden(setStateCallback?: () => void): this;

            toggleHiddenDefault(setStateCallback?: () => void): this;

            setDisabledValue(value: boolean, setStateCallback?: () => void): this;

            disable(setStateCallback?: () => void): this;

            disableDefault(setStateCallback?: () => void): this;

            enable(setStateCallback?: () => void): this

            enableDefault(setStateCallback?: () => void): this;

            isDisabled(): boolean;

            toggleDisabled(setStateCallback?: () => void): this;

            toggleDisabledDefault(setStateCallback?: () => void): this;

            setSelectedValue(value, setStateCallback?: () => void): this;

            select(setStateCallback?: () => void): this;

            selectDefault(setStateCallback?: () => void): this;

            deselect(setStateCallback?: () => void): this;

            deselectDefault(setStateCallback?: () => void): this

            isSelected(): boolean;

            toggleSelected(setStateCallback?: () => void): this;

            toggleSelectedDefault(setStateCallback?: () => void): this;

            buildMainAttrs(mainAttrs: object): React.HTMLAttributes<HTMLElement>;

            getHiddenClassName(className?: string): string;

            getDisabledClassName(className?: string): string;

            getSelectedClassName(className?: string): string

            getDisabledCover(): React.ReactNode

            getDisabledCoverTransparent(): React.ReactNode

            isInput(): boolean;

            getValue(): any;

            getValueDefault(): any;

            setValue(value: any, opts?: { shouldValidateRequired: boolean }, setStateCallback?: () => void): this;

            setValue(value: any, setStateCallback?: () => void): this;

            setValueDefault(value: any, setStateCallback?: () => void): this;

            getMessage(): string;

            getMessageDefault(): string;

            setMessage(message: LsiValue, setStateCallback?: () => void): this;

            setMessageDefault(message: LsiValue, setStateCallback?: () => void): this;

            getFeedback(): FormInputFeedback

            getFeedbackDefault(): FormInputFeedback

            setFeedback(feedback: FormInputFeedback, message?: LsiValue, value?: any, setStateCallback?: () => void): this;

            setFeedbackDefault(eedback: FormInputFeedback, message: LsiValue, value: any, setStateCallback?: () => void): this;

            setInitial(message?: LsiValue, value?: any, setStateCallback?: () => void): this;

            setInitialDefault(message?: LsiValue, value?: any, setStateCallback?: () => void): this;

            isInitial(): boolean;

            setLoading(message?: LsiValue, value?: any, setStateCallback?: () => void): this;

            setLoadingDefault(message?: LsiValue, value?: any, setStateCallback?: () => void): this;

            isLoading(): boolean;

            setSuccess(message?: LsiValue, value?: any, setStateCallback?: () => void): this;

            setSuccessDefault(message?: LsiValue, value?: any, setStateCallback?: () => void): this;

            isSuccess(): boolean;

            setWarning(message?: LsiValue, value?: any, setStateCallback?: () => void): this;

            setWarningDefault(message?: LsiValue, value?: any, setStateCallback?: () => void): this;

            isWarning(): boolean;

            setError(message?: LsiValue, value?: any, setStateCallback?: () => void): this;

            setErrorDefault(message?: LsiValue, value?: any, setStateCallback?: () => void): this;

            isError(): boolean;

            reset(setStateCallback?: () => void): this;

            resetDefault(setStateCallback?: () => void): this;

            getChangeFeedback(opt?: FormInputFeedbackOptionalObject): FormInputFeedbackObject

            getChangeFeedbackDefault(opt?: FormInputFeedbackOptionalObject): FormInputFeedbackObject

            setChangeFeedback(opt?: FormInputFeedbackObject, setStateCallback?: () => void): this;

            setChangeFeedbackDefault(opt?: FormInputFeedbackObject, setStateCallback?: () => void): void;

            isReadOnly(): boolean;

            setEditableValue(value: any, setStateCallback?: () => void): this;

            setEditableValueDefault(value: any, setStateCallback?: () => void): this;

            readOnly(setStateCallback?: () => void): this;

            readOnlyDefault(setStateCallback?: () => void): this;

            editable(setStateCallback?: () => void): this;

            editableDefault(setStateCallback?: () => void): this;

            getLabel(inputId: string): React.ReactNode

            getInputWrapper(children: React.ReactChildren, buttons?: Array<{}>): React.ReactNode // TODO

            focus(): this;

            isComputedDisabled(): boolean;

            shouldValidateRequired(): boolean;

        }


        class BaseColorSchemaElementaryGroupInputPureRenderScreenSize extends React.Component<CombinedMixins.BaseColorSchemaElementaryGroupInputPureRenderScreenSize.Props, CombinedMixins.BaseColorSchemaElementaryGroupInputPureRenderScreenSize.State> {
            getTagName(): string;

            getMixinRegister(): Array<object>;

            registerMixin(mixinName: string): this;

            hasMixin(mixinName: string): boolean;

            isRendered(): boolean;

            getClassName(item: string, mixinName?: string): string;

            getClassName(): object;

            getDefault(item: string, mixinName?: string): any;

            getOpt(item: string, mixinName?: string): any;

            getLimit(item: string, mixinName?: string): number;

            getLsi(item: string, mixinName?: string): LsiValue;

            getLsiComponent(item: string, mixinName?: string, params?: object): React.ReactNode;

            getLsiValue(item: string, mixinName?: string, params?: object): string;

            getLsiItem(value: LsiValue, params?: object): string;

            isRendered(): boolean;

            setAsyncState(newState: (prevState: object) => object, setStateCallback?: () => void): this;

            setAsyncState(newState: object, setStateCallback?: () => void): this;

            getId(): string;

            getName(): string;

            getTooltip(): string;

            getMainPropsToPass(mixinNames?: Array<string>): CombinedMixins.BaseColorSchemaElementaryGroupInputPureRenderScreenSize.Props

            getMainAttrs(): React.HTMLAttributes<HTMLElement>;

            getParent(): React.ReactNode;

            getParentByType(typeFunction: string): React.ReactNode;

            checkParentTagName(parentTagName: string): React.ReactNode;

            checkParentType(parentTypeFunction: string): React.ReactNode;

            getIndex(): number;

            getFullClassName(className): string

            stringToObjectType(string: string, type: any, prefix: object): any;

            switchChildrenToBody(props: object): object;

            findDOMNode(): HTMLElement;

            showError(msgKey: string, msgParams: Array<string>, opt?: WithContext): this;

            showError(msgKey: string, msgParams: string, opt?: WithContext): this;

            showWarning(msgKey: string, msgParams: Array<string>, opt?: WithContext): this;

            showWarning(msgKey: string, msgParams: string, opt?: WithContext): this;

            replaceByHardSpace(text: string, language: string): string;

            shouldRender(nextProps, nextState, thisProps, thisState): boolean

            getColorSchema(): string

            setHiddenValue(value: boolean, setStateCallback?: () => void): this;

            hide(setStateCallback?: () => void): this;

            hideDefault(setStateCallback?: () => void): void;

            show(setStateCallback?: () => void): this;

            showDefault(setStateCallback?: () => void): this;

            isHidden(): boolean;

            toggleHidden(setStateCallback?: () => void): this;

            toggleHiddenDefault(setStateCallback?: () => void): this;

            setDisabledValue(value: boolean, setStateCallback?: () => void): this;

            disable(setStateCallback?: () => void): this;

            disableDefault(setStateCallback?: () => void): this;

            enable(setStateCallback?: () => void): this

            enableDefault(setStateCallback?: () => void): this;

            isDisabled(): boolean;

            toggleDisabled(setStateCallback?: () => void): this;

            toggleDisabledDefault(setStateCallback?: () => void): this;

            setSelectedValue(value, setStateCallback?: () => void): this;

            select(setStateCallback?: () => void): this;

            selectDefault(setStateCallback?: () => void): this;

            deselect(setStateCallback?: () => void): this;

            deselectDefault(setStateCallback?: () => void): this

            isSelected(): boolean;

            toggleSelected(setStateCallback?: () => void): this;

            toggleSelectedDefault(setStateCallback?: () => void): this;

            buildMainAttrs(mainAttrs: object): React.HTMLAttributes<HTMLElement>;

            getHiddenClassName(className?: string): string;

            getDisabledClassName(className?: string): string;

            getSelectedClassName(className?: string): string

            getDisabledCover(): React.ReactNode

            getDisabledCoverTransparent(): React.ReactNode

            isValid(): boolean;

            isInput(): boolean;

            getValue(): any;

            getValueDefault(): any;

            setValue(value: any, opts?: { shouldValidateRequired: boolean }, setStateCallback?: () => void): this;

            setValue(value: any, setStateCallback?: () => void): this;

            setValueDefault(value: any, setStateCallback?: () => void): this;

            getMessage(): string;

            getMessageDefault(): string;

            setMessage(message: LsiValue, setStateCallback?: () => void): this;

            setMessageDefault(message: LsiValue, setStateCallback?: () => void): this;

            getFeedback(): FormInputFeedback

            getFeedbackDefault(): FormInputFeedback

            setFeedback(feedback: FormInputFeedback, message?: LsiValue, value?: any, setStateCallback?: () => void): this;

            setFeedbackDefault(eedback: FormInputFeedback, message: LsiValue, value: any, setStateCallback?: () => void): this;

            setInitial(message?: LsiValue, value?: any, setStateCallback?: () => void): this;

            setInitialDefault(message?: LsiValue, value?: any, setStateCallback?: () => void): this;

            isInitial(): boolean;

            setLoading(message?: LsiValue, value?: any, setStateCallback?: () => void): this;

            setLoadingDefault(message?: LsiValue, value?: any, setStateCallback?: () => void): this;

            isLoading(): boolean;

            setSuccess(message?: LsiValue, value?: any, setStateCallback?: () => void): this;

            setSuccessDefault(message?: LsiValue, value?: any, setStateCallback?: () => void): this;

            isSuccess(): boolean;

            setWarning(message?: LsiValue, value?: any, setStateCallback?: () => void): this;

            setWarningDefault(message?: LsiValue, value?: any, setStateCallback?: () => void): this;

            isWarning(): boolean;

            setError(message?: LsiValue, value?: any, setStateCallback?: () => void): this;

            setErrorDefault(message?: LsiValue, value?: any, setStateCallback?: () => void): this;

            isError(): boolean;

            reset(setStateCallback?: () => void): this;

            resetDefault(setStateCallback?: () => void): this;

            getChangeFeedback(opt?: FormInputFeedbackOptionalObject): FormInputFeedbackObject

            getChangeFeedbackDefault(opt?: FormInputFeedbackOptionalObject): FormInputFeedbackObject

            setChangeFeedback(opt?: FormInputFeedbackObject, setStateCallback?: () => void): this;

            setChangeFeedbackDefault(opt?: FormInputFeedbackObject, setStateCallback?: () => void): void;

            isReadOnly(): boolean;

            setEditableValue(value: any, setStateCallback?: () => void): this;

            setEditableValueDefault(value: any, setStateCallback?: () => void): this;

            readOnly(setStateCallback?: () => void): this;

            readOnlyDefault(setStateCallback?: () => void): this;

            editable(setStateCallback?: () => void): this;

            editableDefault(setStateCallback?: () => void): this;

            getLabel(inputId: string): React.ReactNode

            getInputWrapper(children: React.ReactChildren, buttons?: Array<{}>): React.ReactNode // TODO

            focus(): this;

            isComputedDisabled(): boolean;

            shouldValidateRequired(): boolean;

            getScreenSize(): ScreenSizes

            isXs(): boolean

            isS(): boolean;

            isM(): boolean;

            isL(): boolean;

            isXl(): boolean;

            onChangeScreenSizeDefault(e, actualScreenSize: ScreenSizes): this

            onChangeScreenSize_?(e, actualScreenSize: ScreenSizes): void

        }


        class Controls extends React.Component<CombinedMixins.Controls.Props, CombinedMixins.Controls.State> {
            getForm(): Mixins.Form.Mixin | null

        }


        class BaseElementaryPureRenderScreenSizeTextInput extends React.Component<CombinedMixins.BaseElementaryPureRenderScreenSizeTextInput.Props, CombinedMixins.BaseElementaryPureRenderScreenSizeTextInput.State> {
            getTagName(): string;

            getMixinRegister(): Array<object>;

            registerMixin(mixinName: string): this;

            hasMixin(mixinName: string): boolean;

            isRendered(): boolean;

            getClassName(item: string, mixinName?: string): string;

            getClassName(): object;

            getDefault(item: string, mixinName?: string): any;

            getOpt(item: string, mixinName?: string): any;

            getLimit(item: string, mixinName?: string): number;

            getLsi(item: string, mixinName?: string): LsiValue;

            getLsiComponent(item: string, mixinName?: string, params?: object): React.ReactNode;

            getLsiValue(item: string, mixinName?: string, params?: object): string;

            getLsiItem(value: LsiValue, params?: object): string;

            isRendered(): boolean;

            setAsyncState(newState: (prevState: object) => object, setStateCallback?: () => void): this;

            setAsyncState(newState: object, setStateCallback?: () => void): this;

            getId(): string;

            getName(): string;

            getTooltip(): string;

            getMainPropsToPass(mixinNames?: Array<string>): CombinedMixins.BaseElementaryPureRenderScreenSizeTextInput.Props

            getMainAttrs(): React.HTMLAttributes<HTMLElement>;

            getParent(): React.ReactNode;

            getParentByType(typeFunction: string): React.ReactNode;

            checkParentTagName(parentTagName: string): React.ReactNode;

            checkParentType(parentTypeFunction: string): React.ReactNode;

            getIndex(): number;

            getFullClassName(className): string

            stringToObjectType(string: string, type: any, prefix: object): any;

            switchChildrenToBody(props: object): object;

            findDOMNode(): HTMLElement;

            showError(msgKey: string, msgParams: Array<string>, opt?: WithContext): this;

            showError(msgKey: string, msgParams: string, opt?: WithContext): this;

            showWarning(msgKey: string, msgParams: Array<string>, opt?: WithContext): this;

            showWarning(msgKey: string, msgParams: string, opt?: WithContext): this;

            replaceByHardSpace(text: string, language: string): string;

            shouldRender(nextProps, nextState, thisProps, thisState): boolean

            setHiddenValue(value: boolean, setStateCallback?: () => void): this;

            hide(setStateCallback?: () => void): this;

            hideDefault(setStateCallback?: () => void): void;

            show(setStateCallback?: () => void): this;

            showDefault(setStateCallback?: () => void): this;

            isHidden(): boolean;

            toggleHidden(setStateCallback?: () => void): this;

            toggleHiddenDefault(setStateCallback?: () => void): this;

            setDisabledValue(value: boolean, setStateCallback?: () => void): this;

            disable(setStateCallback?: () => void): this;

            disableDefault(setStateCallback?: () => void): this;

            enable(setStateCallback?: () => void): this

            enableDefault(setStateCallback?: () => void): this;

            isDisabled(): boolean;

            toggleDisabled(setStateCallback?: () => void): this;

            toggleDisabledDefault(setStateCallback?: () => void): this;

            setSelectedValue(value, setStateCallback?: () => void): this;

            select(setStateCallback?: () => void): this;

            selectDefault(setStateCallback?: () => void): this;

            deselect(setStateCallback?: () => void): this;

            deselectDefault(setStateCallback?: () => void): this

            isSelected(): boolean;

            toggleSelected(setStateCallback?: () => void): this;

            toggleSelectedDefault(setStateCallback?: () => void): this;

            buildMainAttrs(mainAttrs: object): React.HTMLAttributes<HTMLElement>;

            getHiddenClassName(className?: string): string;

            getDisabledClassName(className?: string): string;

            getSelectedClassName(className?: string): string

            getDisabledCover(): React.ReactNode

            getDisabledCoverTransparent(): React.ReactNode

            getScreenSize(): ScreenSizes

            isXs(): boolean

            isS(): boolean;

            isM(): boolean;

            isL(): boolean;

            isXl(): boolean;

            onChangeScreenSizeDefault(e, actualScreenSize: ScreenSizes): this

            onChangeScreenSize_?(e, actualScreenSize: ScreenSizes): void

            isTextInput(): boolean;

            getInput(): React.InputHTMLAttributes<HTMLInputElement>

            isValid(): boolean;

            open(setStateCallback?: () => void): this;

            openDefault(setStateCallback?: () => void): this;

            close(setStateCallback?: () => void): this;

            closeDefault(setStateCallback?: () => void): this;

            isOpen(): boolean

            isOpenDefault(): boolean;

            getFocusFeedback(): FormInputFeedbackObject

            getBlurFeedback(opt): FormInputFeedbackObject

            onValidate(opt): FormInputFeedbackObject;

            setAutoCompleteItems(items, opt?: object, setStateCallback?: () => void): this;

            onFocus(e: Event): this;

            onFocusDefault(opt: TextInputOpts): this;

            onChange(e: Event): this;

            onChangeDefault(opt: TextInputOpts): this;

            onBlur(e: Event): this

            onBlurDefault(opt: TextInputOpts): this;

            onKeyDown(e: Event, param?: (e: Event, opt: TextInputOpts) => void): this

            isInput(): boolean;

            getValue(): any;

            getValueDefault(): any;

            setValue(value: any, opts?: { shouldValidateRequired: boolean }, setStateCallback?: () => void): this;

            setValue(value: any, setStateCallback?: () => void): this;

            setValueDefault(value: any, setStateCallback?: () => void): this;

            getMessage(): string;

            getMessageDefault(): string;

            setMessage(message: LsiValue, setStateCallback?: () => void): this;

            setMessageDefault(message: LsiValue, setStateCallback?: () => void): this;

            getFeedback(): FormInputFeedback

            getFeedbackDefault(): FormInputFeedback

            setFeedback(feedback: FormInputFeedback, message?: LsiValue, value?: any, setStateCallback?: () => void): this;

            setFeedbackDefault(eedback: FormInputFeedback, message: LsiValue, value: any, setStateCallback?: () => void): this;

            setInitial(message?: LsiValue, value?: any, setStateCallback?: () => void): this;

            setInitialDefault(message?: LsiValue, value?: any, setStateCallback?: () => void): this;

            isInitial(): boolean;

            setLoading(message?: LsiValue, value?: any, setStateCallback?: () => void): this;

            setLoadingDefault(message?: LsiValue, value?: any, setStateCallback?: () => void): this;

            isLoading(): boolean;

            setSuccess(message?: LsiValue, value?: any, setStateCallback?: () => void): this;

            setSuccessDefault(message?: LsiValue, value?: any, setStateCallback?: () => void): this;

            isSuccess(): boolean;

            setWarning(message?: LsiValue, value?: any, setStateCallback?: () => void): this;

            setWarningDefault(message?: LsiValue, value?: any, setStateCallback?: () => void): this;

            isWarning(): boolean;

            setError(message?: LsiValue, value?: any, setStateCallback?: () => void): this;

            setErrorDefault(message?: LsiValue, value?: any, setStateCallback?: () => void): this;

            isError(): boolean;

            reset(setStateCallback?: () => void): this;

            resetDefault(setStateCallback?: () => void): this;

            getChangeFeedback(opt?: FormInputFeedbackOptionalObject): FormInputFeedbackObject

            getChangeFeedbackDefault(opt?: FormInputFeedbackOptionalObject): FormInputFeedbackObject

            setChangeFeedback(opt?: FormInputFeedbackObject, setStateCallback?: () => void): this;

            setChangeFeedbackDefault(opt?: FormInputFeedbackObject, setStateCallback?: () => void): void;

            isReadOnly(): boolean;

            setEditableValue(value: any, setStateCallback?: () => void): this;

            setEditableValueDefault(value: any, setStateCallback?: () => void): this;

            readOnly(setStateCallback?: () => void): this;

            readOnlyDefault(setStateCallback?: () => void): this;

            editable(setStateCallback?: () => void): this;

            editableDefault(setStateCallback?: () => void): this;

            getLabel(inputId: string): React.ReactNode

            getInputWrapper(children: React.ReactChildren, buttons?: Array<{}>): React.ReactNode // TODO

            focus(): this;

            isComputedDisabled(): boolean;

            shouldValidateRequired(): boolean;

            getColorSchema(): string

        }


        class BaseElementaryScreenSizeTextInput extends React.Component<CombinedMixins.BaseElementaryScreenSizeTextInput.Props, CombinedMixins.BaseElementaryScreenSizeTextInput.State> {
            getTagName(): string;

            getMixinRegister(): Array<object>;

            registerMixin(mixinName: string): this;

            hasMixin(mixinName: string): boolean;

            isRendered(): boolean;

            getClassName(item: string, mixinName?: string): string;

            getClassName(): object;

            getDefault(item: string, mixinName?: string): any;

            getOpt(item: string, mixinName?: string): any;

            getLimit(item: string, mixinName?: string): number;

            getLsi(item: string, mixinName?: string): LsiValue;

            getLsiComponent(item: string, mixinName?: string, params?: object): React.ReactNode;

            getLsiValue(item: string, mixinName?: string, params?: object): string;

            getLsiItem(value: LsiValue, params?: object): string;

            isRendered(): boolean;

            setAsyncState(newState: (prevState: object) => object, setStateCallback?: () => void): this;

            setAsyncState(newState: object, setStateCallback?: () => void): this;

            getId(): string;

            getName(): string;

            getTooltip(): string;

            getMainPropsToPass(mixinNames?: Array<string>): CombinedMixins.BaseElementaryScreenSizeTextInput.Props

            getMainAttrs(): React.HTMLAttributes<HTMLElement>;

            getParent(): React.ReactNode;

            getParentByType(typeFunction: string): React.ReactNode;

            checkParentTagName(parentTagName: string): React.ReactNode;

            checkParentType(parentTypeFunction: string): React.ReactNode;

            getIndex(): number;

            getFullClassName(className): string

            stringToObjectType(string: string, type: any, prefix: object): any;

            switchChildrenToBody(props: object): object;

            findDOMNode(): HTMLElement;

            showError(msgKey: string, msgParams: Array<string>, opt?: WithContext): this;

            showError(msgKey: string, msgParams: string, opt?: WithContext): this;

            showWarning(msgKey: string, msgParams: Array<string>, opt?: WithContext): this;

            showWarning(msgKey: string, msgParams: string, opt?: WithContext): this;

            replaceByHardSpace(text: string, language: string): string;

            shouldRender(nextProps, nextState, thisProps, thisState): boolean

            setHiddenValue(value: boolean, setStateCallback?: () => void): this;

            hide(setStateCallback?: () => void): this;

            hideDefault(setStateCallback?: () => void): void;

            show(setStateCallback?: () => void): this;

            showDefault(setStateCallback?: () => void): this;

            isHidden(): boolean;

            toggleHidden(setStateCallback?: () => void): this;

            toggleHiddenDefault(setStateCallback?: () => void): this;

            setDisabledValue(value: boolean, setStateCallback?: () => void): this;

            disable(setStateCallback?: () => void): this;

            disableDefault(setStateCallback?: () => void): this;

            enable(setStateCallback?: () => void): this

            enableDefault(setStateCallback?: () => void): this;

            isDisabled(): boolean;

            toggleDisabled(setStateCallback?: () => void): this;

            toggleDisabledDefault(setStateCallback?: () => void): this;

            setSelectedValue(value, setStateCallback?: () => void): this;

            select(setStateCallback?: () => void): this;

            selectDefault(setStateCallback?: () => void): this;

            deselect(setStateCallback?: () => void): this;

            deselectDefault(setStateCallback?: () => void): this

            isSelected(): boolean;

            toggleSelected(setStateCallback?: () => void): this;

            toggleSelectedDefault(setStateCallback?: () => void): this;

            buildMainAttrs(mainAttrs: object): React.HTMLAttributes<HTMLElement>;

            getHiddenClassName(className?: string): string;

            getDisabledClassName(className?: string): string;

            getSelectedClassName(className?: string): string

            getDisabledCover(): React.ReactNode

            getDisabledCoverTransparent(): React.ReactNode

            getScreenSize(): ScreenSizes

            isXs(): boolean

            isS(): boolean;

            isM(): boolean;

            isL(): boolean;

            isXl(): boolean;

            onChangeScreenSizeDefault(e, actualScreenSize: ScreenSizes): this

            onChangeScreenSize_?(e, actualScreenSize: ScreenSizes): void

            isTextInput(): boolean;

            getInput(): React.InputHTMLAttributes<HTMLInputElement>

            isValid(): boolean;

            open(setStateCallback?: () => void): this;

            openDefault(setStateCallback?: () => void): this;

            close(setStateCallback?: () => void): this;

            closeDefault(setStateCallback?: () => void): this;

            isOpen(): boolean

            isOpenDefault(): boolean;

            getFocusFeedback(): FormInputFeedbackObject

            getBlurFeedback(opt): FormInputFeedbackObject

            onValidate(opt): FormInputFeedbackObject;

            setAutoCompleteItems(items, opt?: object, setStateCallback?: () => void): this;

            onFocus(e: Event): this;

            onFocusDefault(opt: TextInputOpts): this;

            onChange(e: Event): this;

            onChangeDefault(opt: TextInputOpts): this;

            onBlur(e: Event): this

            onBlurDefault(opt: TextInputOpts): this;

            onKeyDown(e: Event, param?: (e: Event, opt: TextInputOpts) => void): this

            isInput(): boolean;

            getValue(): any;

            getValueDefault(): any;

            setValue(value: any, opts?: { shouldValidateRequired: boolean }, setStateCallback?: () => void): this;

            setValue(value: any, setStateCallback?: () => void): this;

            setValueDefault(value: any, setStateCallback?: () => void): this;

            getMessage(): string;

            getMessageDefault(): string;

            setMessage(message: LsiValue, setStateCallback?: () => void): this;

            setMessageDefault(message: LsiValue, setStateCallback?: () => void): this;

            getFeedback(): FormInputFeedback

            getFeedbackDefault(): FormInputFeedback

            setFeedback(feedback: FormInputFeedback, message?: LsiValue, value?: any, setStateCallback?: () => void): this;

            setFeedbackDefault(eedback: FormInputFeedback, message: LsiValue, value: any, setStateCallback?: () => void): this;

            setInitial(message?: LsiValue, value?: any, setStateCallback?: () => void): this;

            setInitialDefault(message?: LsiValue, value?: any, setStateCallback?: () => void): this;

            isInitial(): boolean;

            setLoading(message?: LsiValue, value?: any, setStateCallback?: () => void): this;

            setLoadingDefault(message?: LsiValue, value?: any, setStateCallback?: () => void): this;

            isLoading(): boolean;

            setSuccess(message?: LsiValue, value?: any, setStateCallback?: () => void): this;

            setSuccessDefault(message?: LsiValue, value?: any, setStateCallback?: () => void): this;

            isSuccess(): boolean;

            setWarning(message?: LsiValue, value?: any, setStateCallback?: () => void): this;

            setWarningDefault(message?: LsiValue, value?: any, setStateCallback?: () => void): this;

            isWarning(): boolean;

            setError(message?: LsiValue, value?: any, setStateCallback?: () => void): this;

            setErrorDefault(message?: LsiValue, value?: any, setStateCallback?: () => void): this;

            isError(): boolean;

            reset(setStateCallback?: () => void): this;

            resetDefault(setStateCallback?: () => void): this;

            getChangeFeedback(opt?: FormInputFeedbackOptionalObject): FormInputFeedbackObject

            getChangeFeedbackDefault(opt?: FormInputFeedbackOptionalObject): FormInputFeedbackObject

            setChangeFeedback(opt?: FormInputFeedbackObject, setStateCallback?: () => void): this;

            setChangeFeedbackDefault(opt?: FormInputFeedbackObject, setStateCallback?: () => void): void;

            isReadOnly(): boolean;

            setEditableValue(value: any, setStateCallback?: () => void): this;

            setEditableValueDefault(value: any, setStateCallback?: () => void): this;

            readOnly(setStateCallback?: () => void): this;

            readOnlyDefault(setStateCallback?: () => void): this;

            editable(setStateCallback?: () => void): this;

            editableDefault(setStateCallback?: () => void): this;

            getLabel(inputId: string): React.ReactNode

            getInputWrapper(children: React.ReactChildren, buttons?: Array<{}>): React.ReactNode // TODO

            focus(): this;

            isComputedDisabled(): boolean;

            shouldValidateRequired(): boolean;

            getColorSchema(): string

        }


        class BaseChoiceColorSchemaContentElementaryInputPureRender extends React.Component<CombinedMixins.BaseChoiceColorSchemaContentElementaryInputPureRender.Props, CombinedMixins.BaseChoiceColorSchemaContentElementaryInputPureRender.State> {
            getTagName(): string;

            getMixinRegister(): Array<object>;

            registerMixin(mixinName: string): this;

            hasMixin(mixinName: string): boolean;

            isRendered(): boolean;

            getClassName(item: string, mixinName?: string): string;

            getClassName(): object;

            getDefault(item: string, mixinName?: string): any;

            getOpt(item: string, mixinName?: string): any;

            getLimit(item: string, mixinName?: string): number;

            getLsi(item: string, mixinName?: string): LsiValue;

            getLsiComponent(item: string, mixinName?: string, params?: object): React.ReactNode;

            getLsiValue(item: string, mixinName?: string, params?: object): string;

            getLsiItem(value: LsiValue, params?: object): string;

            isRendered(): boolean;

            setAsyncState(newState: (prevState: object) => object, setStateCallback?: () => void): this;

            setAsyncState(newState: object, setStateCallback?: () => void): this;

            getId(): string;

            getName(): string;

            getTooltip(): string;

            getMainPropsToPass(mixinNames?: Array<string>): CombinedMixins.BaseChoiceColorSchemaContentElementaryInputPureRender.Props

            getMainAttrs(): React.HTMLAttributes<HTMLElement>;

            getParent(): React.ReactNode;

            getParentByType(typeFunction: string): React.ReactNode;

            checkParentTagName(parentTagName: string): React.ReactNode;

            checkParentType(parentTypeFunction: string): React.ReactNode;

            getIndex(): number;

            getFullClassName(className): string

            stringToObjectType(string: string, type: any, prefix: object): any;

            switchChildrenToBody(props: object): object;

            findDOMNode(): HTMLElement;

            showError(msgKey: string, msgParams: Array<string>, opt?: WithContext): this;

            showError(msgKey: string, msgParams: string, opt?: WithContext): this;

            showWarning(msgKey: string, msgParams: Array<string>, opt?: WithContext): this;

            showWarning(msgKey: string, msgParams: string, opt?: WithContext): this;

            replaceByHardSpace(text: string, language: string): string;

            shouldRender(nextProps, nextState, thisProps, thisState): boolean

            isValid(): boolean;

            getColorSchema(): string

            isDynamic(): boolean;

            getContent(): Uu5Content;

            expandChildProps(prevChild: React.ReactNode, childIndex: number): object;

            buildChild(childTag: string, childProps?: object, children?: React.ReactChildren): React.ReactNode;

            cloneChild(child: React.ReactNode, props: object): React.ReactNode;

            expandChildDefault(child: React.ReactNode, key?: any): React.ReactNode

            buildNodeChildren(children: React.ReactChildren, childPropsExpander: (child: React.ReactNode, index: number) => object): React.ReactChildren;

            shouldChildRender(child: React.ReactChildren): boolean;

            buildChildren(contentProps: object, childPropsExpander: (child: React.ReactNode, index: number) => object, childIndex: number): React.ReactChildren;

            buildChildrenDefault(contentProps: object, childPropsExpander: (child: React.ReactNode, index: number) => object, childIndex: number): React.ReactChildren;

            getStandardChildren(): React.ReactChildren;

            getOutlineChildren(): React.ReactChildren

            getChildren(): React.ReactChildren;

            getRenderedChildren(): React.ReactChild;

            getRenderedChildrenDefault(): React.ReactChild;

            setRenderedChildren(childrenIndexList: any): this;

            // TODO
            addRenderedChild(renderedChild, index): this;

            // TODO
            removeRenderedChild(renderedChild): this;

            // TODO
            getRenderedChildrenIdList(): any;

            // TODO
            setRenderedChildrenIdList(childrenIdList): this;

            // TODO
            addRenderedChildToIdList(renderedChild): this;

            // TODO
            removeRenderedChildFromIdList(renderedChild): this;

            // TODO
            getRenderedChildrenNameList(): any;

            // TODO
            setRenderedChildrenNameList(childrenNameList): this;

            // TODO
            addRenderedChildToNameList(renderedChild): this;

            // TODO
            removeRenderedChildFromNameList(renderedChild): this;

            getChildIndexById(childId: string): number;

            getChildIndexByIdDefault(childId: string): number;

            getRenderedChildById(childId: string): React.ReactChild;

            getRenderedChildByIdDefault(childId: string): React.ReactChild;

            getRenderedChildrenByName(childName: string): React.ReactChildren;

            getRenderedChildByName(childName: string): React.ReactChild;

            getRenderedChildByNameDefault(childName: string): React.ReactChild;

            getRenderedChildByIndex(index: number): React.ReactChild;

            getRenderedChildByIndexDefault(index: number): React.ReactChild;

            getRenderedChildByTagName(tagName: string): React.ReactChild;

            getRenderedChildByTagNameDefault(tagName: string): React.ReactChild;

            getFirstRenderedChild(): React.ReactChild;

            getFirstRenderedChildDefault(): React.ReactChild;

            getLastRenderedChild(): React.ReactChild;

            getLastRenderedChildDefault(): React.ReactChild;

            eachRenderedChild(callback: (rendredChild: React.ReactChild, index: number) => boolean): this;

            eachRenderedChildDefault(callback: (rendredChild: React.ReactChild, index: number) => boolean): this;

            registerRenderedChild(renderedChild: React.ReactChild, index: number): this;

            unregisterRenderedChild(renderedChild: React.ReactChild): this;

            // dynamic functions

            setChildren(newChildren: React.ReactChildren, setStateCallback?: () => void): this;

            setChildren(newChildren: React.ReactChildren, props?: object, setStateCallback?: () => void): this;

            setChildrenDefault(newChildren: React.ReactChildren, setStateCallback?: () => void): this;

            insertChild(child: object | React.ReactNode, opt?: { position?: number, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildDefault(child: object | React.ReactNode, opt?: { position?: number, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildBefore(child: object | React.ReactNode, opt?: { childAfterId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildBeforeDefault(child: object | React.ReactNode, opt?: { childAfterId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildAfter(child: object | React.ReactNode, opt?: { childBeforeId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildAfterDefault(child: object | React.ReactNode, opt?: { childBeforeId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            updateChild(childId: string, newProps: object, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this

            updateChildDefault(childId: string, newProps: object, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            replaceChild(childId: string, child: object | React.ReactNode, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            replaceChildDefault(childId: string, child: object | React.ReactNode, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            deleteChild(childId: string, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            deleteChildDefault(childId: string, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            clearChildren(opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            clearChildrenDefault(opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            // TODO
            setFilter(filter, setStateCallback?: () => void): this;

            resetFilter(setStateCallback?: () => void): this;

            // TODO
            setSorter(sorter, setStateCallback?: () => void): this;

            resetSorter(setStateCallback?: () => void): this;

            // TODO
            setFilterAndSorter(filter, sorter, setStateCallback?: () => void): this;

            resetFilterAndSorter(setStateCallback?: () => void): this;

            getFilteredSorterChildren(children?: React.ReactChildren): React.ReactChildren;

            setStandardMode(setStateCallback?: () => void): this;

            setOutlineMode(setStateCallback?: () => void): this;

            getMode(): string;

            isStandardMode(): boolean

            isOutlineMode(): boolean

            setHiddenValue(value: boolean, setStateCallback?: () => void): this;

            hide(setStateCallback?: () => void): this;

            hideDefault(setStateCallback?: () => void): void;

            show(setStateCallback?: () => void): this;

            showDefault(setStateCallback?: () => void): this;

            isHidden(): boolean;

            toggleHidden(setStateCallback?: () => void): this;

            toggleHiddenDefault(setStateCallback?: () => void): this;

            setDisabledValue(value: boolean, setStateCallback?: () => void): this;

            disable(setStateCallback?: () => void): this;

            disableDefault(setStateCallback?: () => void): this;

            enable(setStateCallback?: () => void): this

            enableDefault(setStateCallback?: () => void): this;

            isDisabled(): boolean;

            toggleDisabled(setStateCallback?: () => void): this;

            toggleDisabledDefault(setStateCallback?: () => void): this;

            setSelectedValue(value, setStateCallback?: () => void): this;

            select(setStateCallback?: () => void): this;

            selectDefault(setStateCallback?: () => void): this;

            deselect(setStateCallback?: () => void): this;

            deselectDefault(setStateCallback?: () => void): this

            isSelected(): boolean;

            toggleSelected(setStateCallback?: () => void): this;

            toggleSelectedDefault(setStateCallback?: () => void): this;

            buildMainAttrs(mainAttrs: object): React.HTMLAttributes<HTMLElement>;

            getHiddenClassName(className?: string): string;

            getDisabledClassName(className?: string): string;

            getSelectedClassName(className?: string): string

            getDisabledCover(): React.ReactNode

            getDisabledCoverTransparent(): React.ReactNode

            isInput(): boolean;

            getValue(): any;

            getValueDefault(): any;

            setValue(value: any, opts?: { shouldValidateRequired: boolean }, setStateCallback?: () => void): this;

            setValue(value: any, setStateCallback?: () => void): this;

            setValueDefault(value: any, setStateCallback?: () => void): this;

            getMessage(): string;

            getMessageDefault(): string;

            setMessage(message: LsiValue, setStateCallback?: () => void): this;

            setMessageDefault(message: LsiValue, setStateCallback?: () => void): this;

            getFeedback(): FormInputFeedback

            getFeedbackDefault(): FormInputFeedback

            setFeedback(feedback: FormInputFeedback, message?: LsiValue, value?: any, setStateCallback?: () => void): this;

            setFeedbackDefault(eedback: FormInputFeedback, message: LsiValue, value: any, setStateCallback?: () => void): this;

            setInitial(message?: LsiValue, value?: any, setStateCallback?: () => void): this;

            setInitialDefault(message?: LsiValue, value?: any, setStateCallback?: () => void): this;

            isInitial(): boolean;

            setLoading(message?: LsiValue, value?: any, setStateCallback?: () => void): this;

            setLoadingDefault(message?: LsiValue, value?: any, setStateCallback?: () => void): this;

            isLoading(): boolean;

            setSuccess(message?: LsiValue, value?: any, setStateCallback?: () => void): this;

            setSuccessDefault(message?: LsiValue, value?: any, setStateCallback?: () => void): this;

            isSuccess(): boolean;

            setWarning(message?: LsiValue, value?: any, setStateCallback?: () => void): this;

            setWarningDefault(message?: LsiValue, value?: any, setStateCallback?: () => void): this;

            isWarning(): boolean;

            setError(message?: LsiValue, value?: any, setStateCallback?: () => void): this;

            setErrorDefault(message?: LsiValue, value?: any, setStateCallback?: () => void): this;

            isError(): boolean;

            reset(setStateCallback?: () => void): this;

            resetDefault(setStateCallback?: () => void): this;

            getChangeFeedback(opt?: FormInputFeedbackOptionalObject): FormInputFeedbackObject

            getChangeFeedbackDefault(opt?: FormInputFeedbackOptionalObject): FormInputFeedbackObject

            setChangeFeedback(opt?: FormInputFeedbackObject, setStateCallback?: () => void): this;

            setChangeFeedbackDefault(opt?: FormInputFeedbackObject, setStateCallback?: () => void): void;

            isReadOnly(): boolean;

            setEditableValue(value: any, setStateCallback?: () => void): this;

            setEditableValueDefault(value: any, setStateCallback?: () => void): this;

            readOnly(setStateCallback?: () => void): this;

            readOnlyDefault(setStateCallback?: () => void): this;

            editable(setStateCallback?: () => void): this;

            editableDefault(setStateCallback?: () => void): this;

            getLabel(inputId: string): React.ReactNode

            getInputWrapper(children: React.ReactChildren, buttons?: Array<{}>): React.ReactNode // TODO

            focus(): this;

            isComputedDisabled(): boolean;

            shouldValidateRequired(): boolean;

        }


        class BaseElementaryFormPureRenderSection extends React.Component<CombinedMixins.BaseElementaryFormPureRenderSection.Props, CombinedMixins.BaseElementaryFormPureRenderSection.State> {
            getTagName(): string;

            getMixinRegister(): Array<object>;

            registerMixin(mixinName: string): this;

            hasMixin(mixinName: string): boolean;

            isRendered(): boolean;

            getClassName(item: string, mixinName?: string): string;

            getClassName(): object;

            getDefault(item: string, mixinName?: string): any;

            getOpt(item: string, mixinName?: string): any;

            getLimit(item: string, mixinName?: string): number;

            getLsi(item: string, mixinName?: string): LsiValue;

            getLsiComponent(item: string, mixinName?: string, params?: object): React.ReactNode;

            getLsiValue(item: string, mixinName?: string, params?: object): string;

            getLsiItem(value: LsiValue, params?: object): string;

            isRendered(): boolean;

            setAsyncState(newState: (prevState: object) => object, setStateCallback?: () => void): this;

            setAsyncState(newState: object, setStateCallback?: () => void): this;

            getId(): string;

            getName(): string;

            getTooltip(): string;

            getMainPropsToPass(mixinNames?: Array<string>): CombinedMixins.BaseElementaryFormPureRenderSection.Props

            getMainAttrs(): React.HTMLAttributes<HTMLElement>;

            getParent(): React.ReactNode;

            getParentByType(typeFunction: string): React.ReactNode;

            checkParentTagName(parentTagName: string): React.ReactNode;

            checkParentType(parentTypeFunction: string): React.ReactNode;

            getIndex(): number;

            getFullClassName(className): string

            stringToObjectType(string: string, type: any, prefix: object): any;

            switchChildrenToBody(props: object): object;

            findDOMNode(): HTMLElement;

            showError(msgKey: string, msgParams: Array<string>, opt?: WithContext): this;

            showError(msgKey: string, msgParams: string, opt?: WithContext): this;

            showWarning(msgKey: string, msgParams: Array<string>, opt?: WithContext): this;

            showWarning(msgKey: string, msgParams: string, opt?: WithContext): this;

            replaceByHardSpace(text: string, language: string): string;

            shouldRender(nextProps, nextState, thisProps, thisState): boolean

            setHiddenValue(value: boolean, setStateCallback?: () => void): this;

            hide(setStateCallback?: () => void): this;

            hideDefault(setStateCallback?: () => void): void;

            show(setStateCallback?: () => void): this;

            showDefault(setStateCallback?: () => void): this;

            isHidden(): boolean;

            toggleHidden(setStateCallback?: () => void): this;

            toggleHiddenDefault(setStateCallback?: () => void): this;

            setDisabledValue(value: boolean, setStateCallback?: () => void): this;

            disable(setStateCallback?: () => void): this;

            disableDefault(setStateCallback?: () => void): this;

            enable(setStateCallback?: () => void): this

            enableDefault(setStateCallback?: () => void): this;

            isDisabled(): boolean;

            toggleDisabled(setStateCallback?: () => void): this;

            toggleDisabledDefault(setStateCallback?: () => void): this;

            setSelectedValue(value, setStateCallback?: () => void): this;

            select(setStateCallback?: () => void): this;

            selectDefault(setStateCallback?: () => void): this;

            deselect(setStateCallback?: () => void): this;

            deselectDefault(setStateCallback?: () => void): this

            isSelected(): boolean;

            toggleSelected(setStateCallback?: () => void): this;

            toggleSelectedDefault(setStateCallback?: () => void): this;

            buildMainAttrs(mainAttrs: object): React.HTMLAttributes<HTMLElement>;

            getHiddenClassName(className?: string): string;

            getDisabledClassName(className?: string): string;

            getSelectedClassName(className?: string): string

            getDisabledCover(): React.ReactNode

            getDisabledCoverTransparent(): React.ReactNode

            setValues(values: object): void

            eachFormInput(func: (input) => boolean): Array<Mixins.Input.Mixin>

            hasFormControls(): boolean;

            eachFormControls(func: (input) => boolean): Array<Mixins.Controls.Mixin>

            isValid(): boolean;

            isValidDefault(): boolean;

            isForm(): boolean;

            registerFormInput(id: string, formInput): void;

            unregisterFormInput(id: string): void;

            registerFormControls(id: string, formControl: Mixins.Controls.Mixin): void;

            unregisterFormControls(id: string): void;

            getValues(): object;

            getInputs(): Array<Mixins.Input.Mixin>;

            getInputByName(name): React.ReactChild

            getFormChildren(fce?: () => React.ReactNode): React.ReactNode;

            getAlertBus(); // TODO

            save(values?: object): this;

            saveDefault(values?: object): this;

            saveDone(dtoOut: object): this;

            saveDoneDefault(dtoOut: object): this;

            saveFail(dtoOut: object): this;

            saveFailDefault(dtoOut: object): this;

            validate(): this;

            setPending(setStateCallback?: () => void): this;

            setReady(setStateCallback?: () => void): this;

            reset(setStateCallback?: () => void): this;

            resetDefault(setStateCallback?: () => void): this;

            cancel(): this;

            getSaveFormEvents(func?: (opt: { component: Mixins.Form.Mixin, event: Event }) => void): void

            getHeader(props?: object): React.ReactNode

            getHeaderDefault(props?: object): React.ReactNode

            getFooter(props?: object): React.ReactNode

            getFooterDefault(props?: object): React.ReactNode

            getHeaderType(headerContent?: string | object): string;

            getFooterType(footerContent?: string | object): string;

            registerRenderedHeaderChild(renderedHeaderChild: React.ReactChild): this;

            registerRenderedFooterChild(renderedFooterChild: React.ReactChild): this;

            expandHeaderProps(prevHeaderChild: object): object;

            expandFooterProps(prevFooterChild: object): object

            buildHeaderChild(header): React.ReactChild

            buildHeaderChildDefault(header): React.ReactChild

            buildFooterChild(footer): React.ReactChild

            buildFooterChildDefault(footer): React.ReactChild

            getHeaderChild(): React.ReactChild

            getFooterChild(): React.ReactChild

            getRenderedHeaderChild(): React.ReactChild

            getRenderedFooterChild(): React.ReactChild

            isDynamic(): boolean;

            getContent(): Uu5Content;

            expandChildProps(prevChild: React.ReactNode, childIndex: number): object;

            buildChild(childTag: string, childProps?: object, children?: React.ReactChildren): React.ReactNode;

            cloneChild(child: React.ReactNode, props: object): React.ReactNode;

            expandChildDefault(child: React.ReactNode, key?: any): React.ReactNode

            buildNodeChildren(children: React.ReactChildren, childPropsExpander: (child: React.ReactNode, index: number) => object): React.ReactChildren;

            shouldChildRender(child: React.ReactChildren): boolean;

            buildChildren(contentProps: object, childPropsExpander: (child: React.ReactNode, index: number) => object, childIndex: number): React.ReactChildren;

            buildChildrenDefault(contentProps: object, childPropsExpander: (child: React.ReactNode, index: number) => object, childIndex: number): React.ReactChildren;

            getStandardChildren(): React.ReactChildren;

            getOutlineChildren(): React.ReactChildren

            getChildren(): React.ReactChildren;

            getRenderedChildren(): React.ReactChild;

            getRenderedChildrenDefault(): React.ReactChild;

            setRenderedChildren(childrenIndexList: any): this;

            // TODO
            addRenderedChild(renderedChild, index): this;

            // TODO
            removeRenderedChild(renderedChild): this;

            // TODO
            getRenderedChildrenIdList(): any;

            // TODO
            setRenderedChildrenIdList(childrenIdList): this;

            // TODO
            addRenderedChildToIdList(renderedChild): this;

            // TODO
            removeRenderedChildFromIdList(renderedChild): this;

            // TODO
            getRenderedChildrenNameList(): any;

            // TODO
            setRenderedChildrenNameList(childrenNameList): this;

            // TODO
            addRenderedChildToNameList(renderedChild): this;

            // TODO
            removeRenderedChildFromNameList(renderedChild): this;

            getChildIndexById(childId: string): number;

            getChildIndexByIdDefault(childId: string): number;

            getRenderedChildById(childId: string): React.ReactChild;

            getRenderedChildByIdDefault(childId: string): React.ReactChild;

            getRenderedChildrenByName(childName: string): React.ReactChildren;

            getRenderedChildByName(childName: string): React.ReactChild;

            getRenderedChildByNameDefault(childName: string): React.ReactChild;

            getRenderedChildByIndex(index: number): React.ReactChild;

            getRenderedChildByIndexDefault(index: number): React.ReactChild;

            getRenderedChildByTagName(tagName: string): React.ReactChild;

            getRenderedChildByTagNameDefault(tagName: string): React.ReactChild;

            getFirstRenderedChild(): React.ReactChild;

            getFirstRenderedChildDefault(): React.ReactChild;

            getLastRenderedChild(): React.ReactChild;

            getLastRenderedChildDefault(): React.ReactChild;

            eachRenderedChild(callback: (rendredChild: React.ReactChild, index: number) => boolean): this;

            eachRenderedChildDefault(callback: (rendredChild: React.ReactChild, index: number) => boolean): this;

            registerRenderedChild(renderedChild: React.ReactChild, index: number): this;

            unregisterRenderedChild(renderedChild: React.ReactChild): this;

            // dynamic functions

            setChildren(newChildren: React.ReactChildren, setStateCallback?: () => void): this;

            setChildren(newChildren: React.ReactChildren, props?: object, setStateCallback?: () => void): this;

            setChildrenDefault(newChildren: React.ReactChildren, setStateCallback?: () => void): this;

            insertChild(child: object | React.ReactNode, opt?: { position?: number, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildDefault(child: object | React.ReactNode, opt?: { position?: number, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildBefore(child: object | React.ReactNode, opt?: { childAfterId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildBeforeDefault(child: object | React.ReactNode, opt?: { childAfterId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildAfter(child: object | React.ReactNode, opt?: { childBeforeId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildAfterDefault(child: object | React.ReactNode, opt?: { childBeforeId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            updateChild(childId: string, newProps: object, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this

            updateChildDefault(childId: string, newProps: object, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            replaceChild(childId: string, child: object | React.ReactNode, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            replaceChildDefault(childId: string, child: object | React.ReactNode, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            deleteChild(childId: string, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            deleteChildDefault(childId: string, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            clearChildren(opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            clearChildrenDefault(opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            // TODO
            setFilter(filter, setStateCallback?: () => void): this;

            resetFilter(setStateCallback?: () => void): this;

            // TODO
            setSorter(sorter, setStateCallback?: () => void): this;

            resetSorter(setStateCallback?: () => void): this;

            // TODO
            setFilterAndSorter(filter, sorter, setStateCallback?: () => void): this;

            resetFilterAndSorter(setStateCallback?: () => void): this;

            getFilteredSorterChildren(children?: React.ReactChildren): React.ReactChildren;

            setStandardMode(setStateCallback?: () => void): this;

            setOutlineMode(setStateCallback?: () => void): this;

            getMode(): string;

            isStandardMode(): boolean

            isOutlineMode(): boolean

            getLevel(): number;

            shouldIncreaseLevel(parentLevelComponent: React.ReactNode, props?: object): boolean

            checkLevel(props?: object): number;

        }


        class BaseColorSchemaElementaryInputPureRenderScreenSize extends React.Component<CombinedMixins.BaseColorSchemaElementaryInputPureRenderScreenSize.Props, CombinedMixins.BaseColorSchemaElementaryInputPureRenderScreenSize.State> {
            getTagName(): string;

            getMixinRegister(): Array<object>;

            registerMixin(mixinName: string): this;

            hasMixin(mixinName: string): boolean;

            isRendered(): boolean;

            getClassName(item: string, mixinName?: string): string;

            getClassName(): object;

            getDefault(item: string, mixinName?: string): any;

            getOpt(item: string, mixinName?: string): any;

            getLimit(item: string, mixinName?: string): number;

            getLsi(item: string, mixinName?: string): LsiValue;

            getLsiComponent(item: string, mixinName?: string, params?: object): React.ReactNode;

            getLsiValue(item: string, mixinName?: string, params?: object): string;

            getLsiItem(value: LsiValue, params?: object): string;

            isRendered(): boolean;

            setAsyncState(newState: (prevState: object) => object, setStateCallback?: () => void): this;

            setAsyncState(newState: object, setStateCallback?: () => void): this;

            getId(): string;

            getName(): string;

            getTooltip(): string;

            getMainPropsToPass(mixinNames?: Array<string>): CombinedMixins.BaseColorSchemaElementaryInputPureRenderScreenSize.Props

            getMainAttrs(): React.HTMLAttributes<HTMLElement>;

            getParent(): React.ReactNode;

            getParentByType(typeFunction: string): React.ReactNode;

            checkParentTagName(parentTagName: string): React.ReactNode;

            checkParentType(parentTypeFunction: string): React.ReactNode;

            getIndex(): number;

            getFullClassName(className): string

            stringToObjectType(string: string, type: any, prefix: object): any;

            switchChildrenToBody(props: object): object;

            findDOMNode(): HTMLElement;

            showError(msgKey: string, msgParams: Array<string>, opt?: WithContext): this;

            showError(msgKey: string, msgParams: string, opt?: WithContext): this;

            showWarning(msgKey: string, msgParams: Array<string>, opt?: WithContext): this;

            showWarning(msgKey: string, msgParams: string, opt?: WithContext): this;

            replaceByHardSpace(text: string, language: string): string;

            shouldRender(nextProps, nextState, thisProps, thisState): boolean

            getColorSchema(): string

            setHiddenValue(value: boolean, setStateCallback?: () => void): this;

            hide(setStateCallback?: () => void): this;

            hideDefault(setStateCallback?: () => void): void;

            show(setStateCallback?: () => void): this;

            showDefault(setStateCallback?: () => void): this;

            isHidden(): boolean;

            toggleHidden(setStateCallback?: () => void): this;

            toggleHiddenDefault(setStateCallback?: () => void): this;

            setDisabledValue(value: boolean, setStateCallback?: () => void): this;

            disable(setStateCallback?: () => void): this;

            disableDefault(setStateCallback?: () => void): this;

            enable(setStateCallback?: () => void): this

            enableDefault(setStateCallback?: () => void): this;

            isDisabled(): boolean;

            toggleDisabled(setStateCallback?: () => void): this;

            toggleDisabledDefault(setStateCallback?: () => void): this;

            setSelectedValue(value, setStateCallback?: () => void): this;

            select(setStateCallback?: () => void): this;

            selectDefault(setStateCallback?: () => void): this;

            deselect(setStateCallback?: () => void): this;

            deselectDefault(setStateCallback?: () => void): this

            isSelected(): boolean;

            toggleSelected(setStateCallback?: () => void): this;

            toggleSelectedDefault(setStateCallback?: () => void): this;

            buildMainAttrs(mainAttrs: object): React.HTMLAttributes<HTMLElement>;

            getHiddenClassName(className?: string): string;

            getDisabledClassName(className?: string): string;

            getSelectedClassName(className?: string): string

            getDisabledCover(): React.ReactNode

            getDisabledCoverTransparent(): React.ReactNode

            isInput(): boolean;

            getValue(): any;

            getValueDefault(): any;

            setValue(value: any, opts?: { shouldValidateRequired: boolean }, setStateCallback?: () => void): this;

            setValue(value: any, setStateCallback?: () => void): this;

            setValueDefault(value: any, setStateCallback?: () => void): this;

            getMessage(): string;

            getMessageDefault(): string;

            setMessage(message: LsiValue, setStateCallback?: () => void): this;

            setMessageDefault(message: LsiValue, setStateCallback?: () => void): this;

            getFeedback(): FormInputFeedback

            getFeedbackDefault(): FormInputFeedback

            setFeedback(feedback: FormInputFeedback, message?: LsiValue, value?: any, setStateCallback?: () => void): this;

            setFeedbackDefault(eedback: FormInputFeedback, message: LsiValue, value: any, setStateCallback?: () => void): this;

            setInitial(message?: LsiValue, value?: any, setStateCallback?: () => void): this;

            setInitialDefault(message?: LsiValue, value?: any, setStateCallback?: () => void): this;

            isInitial(): boolean;

            setLoading(message?: LsiValue, value?: any, setStateCallback?: () => void): this;

            setLoadingDefault(message?: LsiValue, value?: any, setStateCallback?: () => void): this;

            isLoading(): boolean;

            setSuccess(message?: LsiValue, value?: any, setStateCallback?: () => void): this;

            setSuccessDefault(message?: LsiValue, value?: any, setStateCallback?: () => void): this;

            isSuccess(): boolean;

            setWarning(message?: LsiValue, value?: any, setStateCallback?: () => void): this;

            setWarningDefault(message?: LsiValue, value?: any, setStateCallback?: () => void): this;

            isWarning(): boolean;

            setError(message?: LsiValue, value?: any, setStateCallback?: () => void): this;

            setErrorDefault(message?: LsiValue, value?: any, setStateCallback?: () => void): this;

            isError(): boolean;

            reset(setStateCallback?: () => void): this;

            resetDefault(setStateCallback?: () => void): this;

            getChangeFeedback(opt?: FormInputFeedbackOptionalObject): FormInputFeedbackObject

            getChangeFeedbackDefault(opt?: FormInputFeedbackOptionalObject): FormInputFeedbackObject

            setChangeFeedback(opt?: FormInputFeedbackObject, setStateCallback?: () => void): this;

            setChangeFeedbackDefault(opt?: FormInputFeedbackObject, setStateCallback?: () => void): void;

            isReadOnly(): boolean;

            setEditableValue(value: any, setStateCallback?: () => void): this;

            setEditableValueDefault(value: any, setStateCallback?: () => void): this;

            readOnly(setStateCallback?: () => void): this;

            readOnlyDefault(setStateCallback?: () => void): this;

            editable(setStateCallback?: () => void): this;

            editableDefault(setStateCallback?: () => void): this;

            getLabel(inputId: string): React.ReactNode

            getInputWrapper(children: React.ReactChildren, buttons?: Array<{}>): React.ReactNode // TODO

            focus(): this;

            isComputedDisabled(): boolean;

            shouldValidateRequired(): boolean;

            getScreenSize(): ScreenSizes

            isXs(): boolean

            isS(): boolean;

            isM(): boolean;

            isL(): boolean;

            isXl(): boolean;

            onChangeScreenSizeDefault(e, actualScreenSize: ScreenSizes): this

            onChangeScreenSize_?(e, actualScreenSize: ScreenSizes): void

        }


        class BaseElementaryPureRenderTextInput extends React.Component<CombinedMixins.BaseElementaryPureRenderTextInput.Props, CombinedMixins.BaseElementaryPureRenderTextInput.State> {
            getTagName(): string;

            getMixinRegister(): Array<object>;

            registerMixin(mixinName: string): this;

            hasMixin(mixinName: string): boolean;

            isRendered(): boolean;

            getClassName(item: string, mixinName?: string): string;

            getClassName(): object;

            getDefault(item: string, mixinName?: string): any;

            getOpt(item: string, mixinName?: string): any;

            getLimit(item: string, mixinName?: string): number;

            getLsi(item: string, mixinName?: string): LsiValue;

            getLsiComponent(item: string, mixinName?: string, params?: object): React.ReactNode;

            getLsiValue(item: string, mixinName?: string, params?: object): string;

            getLsiItem(value: LsiValue, params?: object): string;

            isRendered(): boolean;

            setAsyncState(newState: (prevState: object) => object, setStateCallback?: () => void): this;

            setAsyncState(newState: object, setStateCallback?: () => void): this;

            getId(): string;

            getName(): string;

            getTooltip(): string;

            getMainPropsToPass(mixinNames?: Array<string>): CombinedMixins.BaseElementaryPureRenderTextInput.Props

            getMainAttrs(): React.HTMLAttributes<HTMLElement>;

            getParent(): React.ReactNode;

            getParentByType(typeFunction: string): React.ReactNode;

            checkParentTagName(parentTagName: string): React.ReactNode;

            checkParentType(parentTypeFunction: string): React.ReactNode;

            getIndex(): number;

            getFullClassName(className): string

            stringToObjectType(string: string, type: any, prefix: object): any;

            switchChildrenToBody(props: object): object;

            findDOMNode(): HTMLElement;

            showError(msgKey: string, msgParams: Array<string>, opt?: WithContext): this;

            showError(msgKey: string, msgParams: string, opt?: WithContext): this;

            showWarning(msgKey: string, msgParams: Array<string>, opt?: WithContext): this;

            showWarning(msgKey: string, msgParams: string, opt?: WithContext): this;

            replaceByHardSpace(text: string, language: string): string;

            shouldRender(nextProps, nextState, thisProps, thisState): boolean

            setHiddenValue(value: boolean, setStateCallback?: () => void): this;

            hide(setStateCallback?: () => void): this;

            hideDefault(setStateCallback?: () => void): void;

            show(setStateCallback?: () => void): this;

            showDefault(setStateCallback?: () => void): this;

            isHidden(): boolean;

            toggleHidden(setStateCallback?: () => void): this;

            toggleHiddenDefault(setStateCallback?: () => void): this;

            setDisabledValue(value: boolean, setStateCallback?: () => void): this;

            disable(setStateCallback?: () => void): this;

            disableDefault(setStateCallback?: () => void): this;

            enable(setStateCallback?: () => void): this

            enableDefault(setStateCallback?: () => void): this;

            isDisabled(): boolean;

            toggleDisabled(setStateCallback?: () => void): this;

            toggleDisabledDefault(setStateCallback?: () => void): this;

            setSelectedValue(value, setStateCallback?: () => void): this;

            select(setStateCallback?: () => void): this;

            selectDefault(setStateCallback?: () => void): this;

            deselect(setStateCallback?: () => void): this;

            deselectDefault(setStateCallback?: () => void): this

            isSelected(): boolean;

            toggleSelected(setStateCallback?: () => void): this;

            toggleSelectedDefault(setStateCallback?: () => void): this;

            buildMainAttrs(mainAttrs: object): React.HTMLAttributes<HTMLElement>;

            getHiddenClassName(className?: string): string;

            getDisabledClassName(className?: string): string;

            getSelectedClassName(className?: string): string

            getDisabledCover(): React.ReactNode

            getDisabledCoverTransparent(): React.ReactNode

            isTextInput(): boolean;

            getInput(): React.InputHTMLAttributes<HTMLInputElement>

            isValid(): boolean;

            open(setStateCallback?: () => void): this;

            openDefault(setStateCallback?: () => void): this;

            close(setStateCallback?: () => void): this;

            closeDefault(setStateCallback?: () => void): this;

            isOpen(): boolean

            isOpenDefault(): boolean;

            getFocusFeedback(): FormInputFeedbackObject

            getBlurFeedback(opt): FormInputFeedbackObject

            onValidate(opt): FormInputFeedbackObject;

            setAutoCompleteItems(items, opt?: object, setStateCallback?: () => void): this;

            onFocus(e: Event): this;

            onFocusDefault(opt: TextInputOpts): this;

            onChange(e: Event): this;

            onChangeDefault(opt: TextInputOpts): this;

            onBlur(e: Event): this

            onBlurDefault(opt: TextInputOpts): this;

            onKeyDown(e: Event, param?: (e: Event, opt: TextInputOpts) => void): this

            isInput(): boolean;

            getValue(): any;

            getValueDefault(): any;

            setValue(value: any, opts?: { shouldValidateRequired: boolean }, setStateCallback?: () => void): this;

            setValue(value: any, setStateCallback?: () => void): this;

            setValueDefault(value: any, setStateCallback?: () => void): this;

            getMessage(): string;

            getMessageDefault(): string;

            setMessage(message: LsiValue, setStateCallback?: () => void): this;

            setMessageDefault(message: LsiValue, setStateCallback?: () => void): this;

            getFeedback(): FormInputFeedback

            getFeedbackDefault(): FormInputFeedback

            setFeedback(feedback: FormInputFeedback, message?: LsiValue, value?: any, setStateCallback?: () => void): this;

            setFeedbackDefault(eedback: FormInputFeedback, message: LsiValue, value: any, setStateCallback?: () => void): this;

            setInitial(message?: LsiValue, value?: any, setStateCallback?: () => void): this;

            setInitialDefault(message?: LsiValue, value?: any, setStateCallback?: () => void): this;

            isInitial(): boolean;

            setLoading(message?: LsiValue, value?: any, setStateCallback?: () => void): this;

            setLoadingDefault(message?: LsiValue, value?: any, setStateCallback?: () => void): this;

            isLoading(): boolean;

            setSuccess(message?: LsiValue, value?: any, setStateCallback?: () => void): this;

            setSuccessDefault(message?: LsiValue, value?: any, setStateCallback?: () => void): this;

            isSuccess(): boolean;

            setWarning(message?: LsiValue, value?: any, setStateCallback?: () => void): this;

            setWarningDefault(message?: LsiValue, value?: any, setStateCallback?: () => void): this;

            isWarning(): boolean;

            setError(message?: LsiValue, value?: any, setStateCallback?: () => void): this;

            setErrorDefault(message?: LsiValue, value?: any, setStateCallback?: () => void): this;

            isError(): boolean;

            reset(setStateCallback?: () => void): this;

            resetDefault(setStateCallback?: () => void): this;

            getChangeFeedback(opt?: FormInputFeedbackOptionalObject): FormInputFeedbackObject

            getChangeFeedbackDefault(opt?: FormInputFeedbackOptionalObject): FormInputFeedbackObject

            setChangeFeedback(opt?: FormInputFeedbackObject, setStateCallback?: () => void): this;

            setChangeFeedbackDefault(opt?: FormInputFeedbackObject, setStateCallback?: () => void): void;

            isReadOnly(): boolean;

            setEditableValue(value: any, setStateCallback?: () => void): this;

            setEditableValueDefault(value: any, setStateCallback?: () => void): this;

            readOnly(setStateCallback?: () => void): this;

            readOnlyDefault(setStateCallback?: () => void): this;

            editable(setStateCallback?: () => void): this;

            editableDefault(setStateCallback?: () => void): this;

            getLabel(inputId: string): React.ReactNode

            getInputWrapper(children: React.ReactChildren, buttons?: Array<{}>): React.ReactNode // TODO

            focus(): this;

            isComputedDisabled(): boolean;

            shouldValidateRequired(): boolean;

            getColorSchema(): string

        }


        class BaseChoiceColorSchemaContentElementaryInputPureRenderScreenSize extends React.Component<CombinedMixins.BaseChoiceColorSchemaContentElementaryInputPureRenderScreenSize.Props, CombinedMixins.BaseChoiceColorSchemaContentElementaryInputPureRenderScreenSize.State> {
            getTagName(): string;

            getMixinRegister(): Array<object>;

            registerMixin(mixinName: string): this;

            hasMixin(mixinName: string): boolean;

            isRendered(): boolean;

            getClassName(item: string, mixinName?: string): string;

            getClassName(): object;

            getDefault(item: string, mixinName?: string): any;

            getOpt(item: string, mixinName?: string): any;

            getLimit(item: string, mixinName?: string): number;

            getLsi(item: string, mixinName?: string): LsiValue;

            getLsiComponent(item: string, mixinName?: string, params?: object): React.ReactNode;

            getLsiValue(item: string, mixinName?: string, params?: object): string;

            getLsiItem(value: LsiValue, params?: object): string;

            isRendered(): boolean;

            setAsyncState(newState: (prevState: object) => object, setStateCallback?: () => void): this;

            setAsyncState(newState: object, setStateCallback?: () => void): this;

            getId(): string;

            getName(): string;

            getTooltip(): string;

            getMainPropsToPass(mixinNames?: Array<string>): CombinedMixins.BaseChoiceColorSchemaContentElementaryInputPureRenderScreenSize.Props

            getMainAttrs(): React.HTMLAttributes<HTMLElement>;

            getParent(): React.ReactNode;

            getParentByType(typeFunction: string): React.ReactNode;

            checkParentTagName(parentTagName: string): React.ReactNode;

            checkParentType(parentTypeFunction: string): React.ReactNode;

            getIndex(): number;

            getFullClassName(className): string

            stringToObjectType(string: string, type: any, prefix: object): any;

            switchChildrenToBody(props: object): object;

            findDOMNode(): HTMLElement;

            showError(msgKey: string, msgParams: Array<string>, opt?: WithContext): this;

            showError(msgKey: string, msgParams: string, opt?: WithContext): this;

            showWarning(msgKey: string, msgParams: Array<string>, opt?: WithContext): this;

            showWarning(msgKey: string, msgParams: string, opt?: WithContext): this;

            replaceByHardSpace(text: string, language: string): string;

            shouldRender(nextProps, nextState, thisProps, thisState): boolean

            isValid(): boolean;

            getColorSchema(): string

            isDynamic(): boolean;

            getContent(): Uu5Content;

            expandChildProps(prevChild: React.ReactNode, childIndex: number): object;

            buildChild(childTag: string, childProps?: object, children?: React.ReactChildren): React.ReactNode;

            cloneChild(child: React.ReactNode, props: object): React.ReactNode;

            expandChildDefault(child: React.ReactNode, key?: any): React.ReactNode

            buildNodeChildren(children: React.ReactChildren, childPropsExpander: (child: React.ReactNode, index: number) => object): React.ReactChildren;

            shouldChildRender(child: React.ReactChildren): boolean;

            buildChildren(contentProps: object, childPropsExpander: (child: React.ReactNode, index: number) => object, childIndex: number): React.ReactChildren;

            buildChildrenDefault(contentProps: object, childPropsExpander: (child: React.ReactNode, index: number) => object, childIndex: number): React.ReactChildren;

            getStandardChildren(): React.ReactChildren;

            getOutlineChildren(): React.ReactChildren

            getChildren(): React.ReactChildren;

            getRenderedChildren(): React.ReactChild;

            getRenderedChildrenDefault(): React.ReactChild;

            setRenderedChildren(childrenIndexList: any): this;

            // TODO
            addRenderedChild(renderedChild, index): this;

            // TODO
            removeRenderedChild(renderedChild): this;

            // TODO
            getRenderedChildrenIdList(): any;

            // TODO
            setRenderedChildrenIdList(childrenIdList): this;

            // TODO
            addRenderedChildToIdList(renderedChild): this;

            // TODO
            removeRenderedChildFromIdList(renderedChild): this;

            // TODO
            getRenderedChildrenNameList(): any;

            // TODO
            setRenderedChildrenNameList(childrenNameList): this;

            // TODO
            addRenderedChildToNameList(renderedChild): this;

            // TODO
            removeRenderedChildFromNameList(renderedChild): this;

            getChildIndexById(childId: string): number;

            getChildIndexByIdDefault(childId: string): number;

            getRenderedChildById(childId: string): React.ReactChild;

            getRenderedChildByIdDefault(childId: string): React.ReactChild;

            getRenderedChildrenByName(childName: string): React.ReactChildren;

            getRenderedChildByName(childName: string): React.ReactChild;

            getRenderedChildByNameDefault(childName: string): React.ReactChild;

            getRenderedChildByIndex(index: number): React.ReactChild;

            getRenderedChildByIndexDefault(index: number): React.ReactChild;

            getRenderedChildByTagName(tagName: string): React.ReactChild;

            getRenderedChildByTagNameDefault(tagName: string): React.ReactChild;

            getFirstRenderedChild(): React.ReactChild;

            getFirstRenderedChildDefault(): React.ReactChild;

            getLastRenderedChild(): React.ReactChild;

            getLastRenderedChildDefault(): React.ReactChild;

            eachRenderedChild(callback: (rendredChild: React.ReactChild, index: number) => boolean): this;

            eachRenderedChildDefault(callback: (rendredChild: React.ReactChild, index: number) => boolean): this;

            registerRenderedChild(renderedChild: React.ReactChild, index: number): this;

            unregisterRenderedChild(renderedChild: React.ReactChild): this;

            // dynamic functions

            setChildren(newChildren: React.ReactChildren, setStateCallback?: () => void): this;

            setChildren(newChildren: React.ReactChildren, props?: object, setStateCallback?: () => void): this;

            setChildrenDefault(newChildren: React.ReactChildren, setStateCallback?: () => void): this;

            insertChild(child: object | React.ReactNode, opt?: { position?: number, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildDefault(child: object | React.ReactNode, opt?: { position?: number, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildBefore(child: object | React.ReactNode, opt?: { childAfterId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildBeforeDefault(child: object | React.ReactNode, opt?: { childAfterId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildAfter(child: object | React.ReactNode, opt?: { childBeforeId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildAfterDefault(child: object | React.ReactNode, opt?: { childBeforeId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            updateChild(childId: string, newProps: object, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this

            updateChildDefault(childId: string, newProps: object, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            replaceChild(childId: string, child: object | React.ReactNode, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            replaceChildDefault(childId: string, child: object | React.ReactNode, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            deleteChild(childId: string, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            deleteChildDefault(childId: string, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            clearChildren(opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            clearChildrenDefault(opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            // TODO
            setFilter(filter, setStateCallback?: () => void): this;

            resetFilter(setStateCallback?: () => void): this;

            // TODO
            setSorter(sorter, setStateCallback?: () => void): this;

            resetSorter(setStateCallback?: () => void): this;

            // TODO
            setFilterAndSorter(filter, sorter, setStateCallback?: () => void): this;

            resetFilterAndSorter(setStateCallback?: () => void): this;

            getFilteredSorterChildren(children?: React.ReactChildren): React.ReactChildren;

            setStandardMode(setStateCallback?: () => void): this;

            setOutlineMode(setStateCallback?: () => void): this;

            getMode(): string;

            isStandardMode(): boolean

            isOutlineMode(): boolean

            setHiddenValue(value: boolean, setStateCallback?: () => void): this;

            hide(setStateCallback?: () => void): this;

            hideDefault(setStateCallback?: () => void): void;

            show(setStateCallback?: () => void): this;

            showDefault(setStateCallback?: () => void): this;

            isHidden(): boolean;

            toggleHidden(setStateCallback?: () => void): this;

            toggleHiddenDefault(setStateCallback?: () => void): this;

            setDisabledValue(value: boolean, setStateCallback?: () => void): this;

            disable(setStateCallback?: () => void): this;

            disableDefault(setStateCallback?: () => void): this;

            enable(setStateCallback?: () => void): this

            enableDefault(setStateCallback?: () => void): this;

            isDisabled(): boolean;

            toggleDisabled(setStateCallback?: () => void): this;

            toggleDisabledDefault(setStateCallback?: () => void): this;

            setSelectedValue(value, setStateCallback?: () => void): this;

            select(setStateCallback?: () => void): this;

            selectDefault(setStateCallback?: () => void): this;

            deselect(setStateCallback?: () => void): this;

            deselectDefault(setStateCallback?: () => void): this

            isSelected(): boolean;

            toggleSelected(setStateCallback?: () => void): this;

            toggleSelectedDefault(setStateCallback?: () => void): this;

            buildMainAttrs(mainAttrs: object): React.HTMLAttributes<HTMLElement>;

            getHiddenClassName(className?: string): string;

            getDisabledClassName(className?: string): string;

            getSelectedClassName(className?: string): string

            getDisabledCover(): React.ReactNode

            getDisabledCoverTransparent(): React.ReactNode

            isInput(): boolean;

            getValue(): any;

            getValueDefault(): any;

            setValue(value: any, opts?: { shouldValidateRequired: boolean }, setStateCallback?: () => void): this;

            setValue(value: any, setStateCallback?: () => void): this;

            setValueDefault(value: any, setStateCallback?: () => void): this;

            getMessage(): string;

            getMessageDefault(): string;

            setMessage(message: LsiValue, setStateCallback?: () => void): this;

            setMessageDefault(message: LsiValue, setStateCallback?: () => void): this;

            getFeedback(): FormInputFeedback

            getFeedbackDefault(): FormInputFeedback

            setFeedback(feedback: FormInputFeedback, message?: LsiValue, value?: any, setStateCallback?: () => void): this;

            setFeedbackDefault(eedback: FormInputFeedback, message: LsiValue, value: any, setStateCallback?: () => void): this;

            setInitial(message?: LsiValue, value?: any, setStateCallback?: () => void): this;

            setInitialDefault(message?: LsiValue, value?: any, setStateCallback?: () => void): this;

            isInitial(): boolean;

            setLoading(message?: LsiValue, value?: any, setStateCallback?: () => void): this;

            setLoadingDefault(message?: LsiValue, value?: any, setStateCallback?: () => void): this;

            isLoading(): boolean;

            setSuccess(message?: LsiValue, value?: any, setStateCallback?: () => void): this;

            setSuccessDefault(message?: LsiValue, value?: any, setStateCallback?: () => void): this;

            isSuccess(): boolean;

            setWarning(message?: LsiValue, value?: any, setStateCallback?: () => void): this;

            setWarningDefault(message?: LsiValue, value?: any, setStateCallback?: () => void): this;

            isWarning(): boolean;

            setError(message?: LsiValue, value?: any, setStateCallback?: () => void): this;

            setErrorDefault(message?: LsiValue, value?: any, setStateCallback?: () => void): this;

            isError(): boolean;

            reset(setStateCallback?: () => void): this;

            resetDefault(setStateCallback?: () => void): this;

            getChangeFeedback(opt?: FormInputFeedbackOptionalObject): FormInputFeedbackObject

            getChangeFeedbackDefault(opt?: FormInputFeedbackOptionalObject): FormInputFeedbackObject

            setChangeFeedback(opt?: FormInputFeedbackObject, setStateCallback?: () => void): this;

            setChangeFeedbackDefault(opt?: FormInputFeedbackObject, setStateCallback?: () => void): void;

            isReadOnly(): boolean;

            setEditableValue(value: any, setStateCallback?: () => void): this;

            setEditableValueDefault(value: any, setStateCallback?: () => void): this;

            readOnly(setStateCallback?: () => void): this;

            readOnlyDefault(setStateCallback?: () => void): this;

            editable(setStateCallback?: () => void): this;

            editableDefault(setStateCallback?: () => void): this;

            getLabel(inputId: string): React.ReactNode

            getInputWrapper(children: React.ReactChildren, buttons?: Array<{}>): React.ReactNode // TODO

            focus(): this;

            isComputedDisabled(): boolean;

            shouldValidateRequired(): boolean;

            getScreenSize(): ScreenSizes

            isXs(): boolean

            isS(): boolean;

            isM(): boolean;

            isL(): boolean;

            isXl(): boolean;

            onChangeScreenSizeDefault(e, actualScreenSize: ScreenSizes): this

            onChangeScreenSize_?(e, actualScreenSize: ScreenSizes): void

        }


        class BaseColorSchemaContentElementaryInputPureRender extends React.Component<CombinedMixins.BaseColorSchemaContentElementaryInputPureRender.Props, CombinedMixins.BaseColorSchemaContentElementaryInputPureRender.State> {
            getTagName(): string;

            getMixinRegister(): Array<object>;

            registerMixin(mixinName: string): this;

            hasMixin(mixinName: string): boolean;

            isRendered(): boolean;

            getClassName(item: string, mixinName?: string): string;

            getClassName(): object;

            getDefault(item: string, mixinName?: string): any;

            getOpt(item: string, mixinName?: string): any;

            getLimit(item: string, mixinName?: string): number;

            getLsi(item: string, mixinName?: string): LsiValue;

            getLsiComponent(item: string, mixinName?: string, params?: object): React.ReactNode;

            getLsiValue(item: string, mixinName?: string, params?: object): string;

            getLsiItem(value: LsiValue, params?: object): string;

            isRendered(): boolean;

            setAsyncState(newState: (prevState: object) => object, setStateCallback?: () => void): this;

            setAsyncState(newState: object, setStateCallback?: () => void): this;

            getId(): string;

            getName(): string;

            getTooltip(): string;

            getMainPropsToPass(mixinNames?: Array<string>): CombinedMixins.BaseColorSchemaContentElementaryInputPureRender.Props

            getMainAttrs(): React.HTMLAttributes<HTMLElement>;

            getParent(): React.ReactNode;

            getParentByType(typeFunction: string): React.ReactNode;

            checkParentTagName(parentTagName: string): React.ReactNode;

            checkParentType(parentTypeFunction: string): React.ReactNode;

            getIndex(): number;

            getFullClassName(className): string

            stringToObjectType(string: string, type: any, prefix: object): any;

            switchChildrenToBody(props: object): object;

            findDOMNode(): HTMLElement;

            showError(msgKey: string, msgParams: Array<string>, opt?: WithContext): this;

            showError(msgKey: string, msgParams: string, opt?: WithContext): this;

            showWarning(msgKey: string, msgParams: Array<string>, opt?: WithContext): this;

            showWarning(msgKey: string, msgParams: string, opt?: WithContext): this;

            replaceByHardSpace(text: string, language: string): string;

            shouldRender(nextProps, nextState, thisProps, thisState): boolean

            getColorSchema(): string

            isDynamic(): boolean;

            getContent(): Uu5Content;

            expandChildProps(prevChild: React.ReactNode, childIndex: number): object;

            buildChild(childTag: string, childProps?: object, children?: React.ReactChildren): React.ReactNode;

            cloneChild(child: React.ReactNode, props: object): React.ReactNode;

            expandChildDefault(child: React.ReactNode, key?: any): React.ReactNode

            buildNodeChildren(children: React.ReactChildren, childPropsExpander: (child: React.ReactNode, index: number) => object): React.ReactChildren;

            shouldChildRender(child: React.ReactChildren): boolean;

            buildChildren(contentProps: object, childPropsExpander: (child: React.ReactNode, index: number) => object, childIndex: number): React.ReactChildren;

            buildChildrenDefault(contentProps: object, childPropsExpander: (child: React.ReactNode, index: number) => object, childIndex: number): React.ReactChildren;

            getStandardChildren(): React.ReactChildren;

            getOutlineChildren(): React.ReactChildren

            getChildren(): React.ReactChildren;

            getRenderedChildren(): React.ReactChild;

            getRenderedChildrenDefault(): React.ReactChild;

            setRenderedChildren(childrenIndexList: any): this;

            // TODO
            addRenderedChild(renderedChild, index): this;

            // TODO
            removeRenderedChild(renderedChild): this;

            // TODO
            getRenderedChildrenIdList(): any;

            // TODO
            setRenderedChildrenIdList(childrenIdList): this;

            // TODO
            addRenderedChildToIdList(renderedChild): this;

            // TODO
            removeRenderedChildFromIdList(renderedChild): this;

            // TODO
            getRenderedChildrenNameList(): any;

            // TODO
            setRenderedChildrenNameList(childrenNameList): this;

            // TODO
            addRenderedChildToNameList(renderedChild): this;

            // TODO
            removeRenderedChildFromNameList(renderedChild): this;

            getChildIndexById(childId: string): number;

            getChildIndexByIdDefault(childId: string): number;

            getRenderedChildById(childId: string): React.ReactChild;

            getRenderedChildByIdDefault(childId: string): React.ReactChild;

            getRenderedChildrenByName(childName: string): React.ReactChildren;

            getRenderedChildByName(childName: string): React.ReactChild;

            getRenderedChildByNameDefault(childName: string): React.ReactChild;

            getRenderedChildByIndex(index: number): React.ReactChild;

            getRenderedChildByIndexDefault(index: number): React.ReactChild;

            getRenderedChildByTagName(tagName: string): React.ReactChild;

            getRenderedChildByTagNameDefault(tagName: string): React.ReactChild;

            getFirstRenderedChild(): React.ReactChild;

            getFirstRenderedChildDefault(): React.ReactChild;

            getLastRenderedChild(): React.ReactChild;

            getLastRenderedChildDefault(): React.ReactChild;

            eachRenderedChild(callback: (rendredChild: React.ReactChild, index: number) => boolean): this;

            eachRenderedChildDefault(callback: (rendredChild: React.ReactChild, index: number) => boolean): this;

            registerRenderedChild(renderedChild: React.ReactChild, index: number): this;

            unregisterRenderedChild(renderedChild: React.ReactChild): this;

            // dynamic functions

            setChildren(newChildren: React.ReactChildren, setStateCallback?: () => void): this;

            setChildren(newChildren: React.ReactChildren, props?: object, setStateCallback?: () => void): this;

            setChildrenDefault(newChildren: React.ReactChildren, setStateCallback?: () => void): this;

            insertChild(child: object | React.ReactNode, opt?: { position?: number, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildDefault(child: object | React.ReactNode, opt?: { position?: number, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildBefore(child: object | React.ReactNode, opt?: { childAfterId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildBeforeDefault(child: object | React.ReactNode, opt?: { childAfterId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildAfter(child: object | React.ReactNode, opt?: { childBeforeId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildAfterDefault(child: object | React.ReactNode, opt?: { childBeforeId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            updateChild(childId: string, newProps: object, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this

            updateChildDefault(childId: string, newProps: object, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            replaceChild(childId: string, child: object | React.ReactNode, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            replaceChildDefault(childId: string, child: object | React.ReactNode, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            deleteChild(childId: string, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            deleteChildDefault(childId: string, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            clearChildren(opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            clearChildrenDefault(opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            // TODO
            setFilter(filter, setStateCallback?: () => void): this;

            resetFilter(setStateCallback?: () => void): this;

            // TODO
            setSorter(sorter, setStateCallback?: () => void): this;

            resetSorter(setStateCallback?: () => void): this;

            // TODO
            setFilterAndSorter(filter, sorter, setStateCallback?: () => void): this;

            resetFilterAndSorter(setStateCallback?: () => void): this;

            getFilteredSorterChildren(children?: React.ReactChildren): React.ReactChildren;

            setStandardMode(setStateCallback?: () => void): this;

            setOutlineMode(setStateCallback?: () => void): this;

            getMode(): string;

            isStandardMode(): boolean

            isOutlineMode(): boolean

            setHiddenValue(value: boolean, setStateCallback?: () => void): this;

            hide(setStateCallback?: () => void): this;

            hideDefault(setStateCallback?: () => void): void;

            show(setStateCallback?: () => void): this;

            showDefault(setStateCallback?: () => void): this;

            isHidden(): boolean;

            toggleHidden(setStateCallback?: () => void): this;

            toggleHiddenDefault(setStateCallback?: () => void): this;

            setDisabledValue(value: boolean, setStateCallback?: () => void): this;

            disable(setStateCallback?: () => void): this;

            disableDefault(setStateCallback?: () => void): this;

            enable(setStateCallback?: () => void): this

            enableDefault(setStateCallback?: () => void): this;

            isDisabled(): boolean;

            toggleDisabled(setStateCallback?: () => void): this;

            toggleDisabledDefault(setStateCallback?: () => void): this;

            setSelectedValue(value, setStateCallback?: () => void): this;

            select(setStateCallback?: () => void): this;

            selectDefault(setStateCallback?: () => void): this;

            deselect(setStateCallback?: () => void): this;

            deselectDefault(setStateCallback?: () => void): this

            isSelected(): boolean;

            toggleSelected(setStateCallback?: () => void): this;

            toggleSelectedDefault(setStateCallback?: () => void): this;

            buildMainAttrs(mainAttrs: object): React.HTMLAttributes<HTMLElement>;

            getHiddenClassName(className?: string): string;

            getDisabledClassName(className?: string): string;

            getSelectedClassName(className?: string): string

            getDisabledCover(): React.ReactNode

            getDisabledCoverTransparent(): React.ReactNode

            isInput(): boolean;

            getValue(): any;

            getValueDefault(): any;

            setValue(value: any, opts?: { shouldValidateRequired: boolean }, setStateCallback?: () => void): this;

            setValue(value: any, setStateCallback?: () => void): this;

            setValueDefault(value: any, setStateCallback?: () => void): this;

            getMessage(): string;

            getMessageDefault(): string;

            setMessage(message: LsiValue, setStateCallback?: () => void): this;

            setMessageDefault(message: LsiValue, setStateCallback?: () => void): this;

            getFeedback(): FormInputFeedback

            getFeedbackDefault(): FormInputFeedback

            setFeedback(feedback: FormInputFeedback, message?: LsiValue, value?: any, setStateCallback?: () => void): this;

            setFeedbackDefault(eedback: FormInputFeedback, message: LsiValue, value: any, setStateCallback?: () => void): this;

            setInitial(message?: LsiValue, value?: any, setStateCallback?: () => void): this;

            setInitialDefault(message?: LsiValue, value?: any, setStateCallback?: () => void): this;

            isInitial(): boolean;

            setLoading(message?: LsiValue, value?: any, setStateCallback?: () => void): this;

            setLoadingDefault(message?: LsiValue, value?: any, setStateCallback?: () => void): this;

            isLoading(): boolean;

            setSuccess(message?: LsiValue, value?: any, setStateCallback?: () => void): this;

            setSuccessDefault(message?: LsiValue, value?: any, setStateCallback?: () => void): this;

            isSuccess(): boolean;

            setWarning(message?: LsiValue, value?: any, setStateCallback?: () => void): this;

            setWarningDefault(message?: LsiValue, value?: any, setStateCallback?: () => void): this;

            isWarning(): boolean;

            setError(message?: LsiValue, value?: any, setStateCallback?: () => void): this;

            setErrorDefault(message?: LsiValue, value?: any, setStateCallback?: () => void): this;

            isError(): boolean;

            reset(setStateCallback?: () => void): this;

            resetDefault(setStateCallback?: () => void): this;

            getChangeFeedback(opt?: FormInputFeedbackOptionalObject): FormInputFeedbackObject

            getChangeFeedbackDefault(opt?: FormInputFeedbackOptionalObject): FormInputFeedbackObject

            setChangeFeedback(opt?: FormInputFeedbackObject, setStateCallback?: () => void): this;

            setChangeFeedbackDefault(opt?: FormInputFeedbackObject, setStateCallback?: () => void): void;

            isReadOnly(): boolean;

            setEditableValue(value: any, setStateCallback?: () => void): this;

            setEditableValueDefault(value: any, setStateCallback?: () => void): this;

            readOnly(setStateCallback?: () => void): this;

            readOnlyDefault(setStateCallback?: () => void): this;

            editable(setStateCallback?: () => void): this;

            editableDefault(setStateCallback?: () => void): this;

            getLabel(inputId: string): React.ReactNode

            getInputWrapper(children: React.ReactChildren, buttons?: Array<{}>): React.ReactNode // TODO

            focus(): this;

            isComputedDisabled(): boolean;

            shouldValidateRequired(): boolean;

        }


        class BaseElementaryLsiPureRenderScreenSize extends React.Component<CombinedMixins.BaseElementaryLsiPureRenderScreenSize.Props, CombinedMixins.BaseElementaryLsiPureRenderScreenSize.State> {
            getTagName(): string;

            getMixinRegister(): Array<object>;

            registerMixin(mixinName: string): this;

            hasMixin(mixinName: string): boolean;

            isRendered(): boolean;

            getClassName(item: string, mixinName?: string): string;

            getClassName(): object;

            getDefault(item: string, mixinName?: string): any;

            getOpt(item: string, mixinName?: string): any;

            getLimit(item: string, mixinName?: string): number;

            getLsi(item: string, mixinName?: string): LsiValue;

            getLsiComponent(item: string, mixinName?: string, params?: object): React.ReactNode;

            getLsiValue(item: string, mixinName?: string, params?: object): string;

            getLsiItem(value: LsiValue, params?: object): string;

            isRendered(): boolean;

            setAsyncState(newState: (prevState: object) => object, setStateCallback?: () => void): this;

            setAsyncState(newState: object, setStateCallback?: () => void): this;

            getId(): string;

            getName(): string;

            getTooltip(): string;

            getMainPropsToPass(mixinNames?: Array<string>): CombinedMixins.BaseElementaryLsiPureRenderScreenSize.Props

            getMainAttrs(): React.HTMLAttributes<HTMLElement>;

            getParent(): React.ReactNode;

            getParentByType(typeFunction: string): React.ReactNode;

            checkParentTagName(parentTagName: string): React.ReactNode;

            checkParentType(parentTypeFunction: string): React.ReactNode;

            getIndex(): number;

            getFullClassName(className): string

            stringToObjectType(string: string, type: any, prefix: object): any;

            switchChildrenToBody(props: object): object;

            findDOMNode(): HTMLElement;

            showError(msgKey: string, msgParams: Array<string>, opt?: WithContext): this;

            showError(msgKey: string, msgParams: string, opt?: WithContext): this;

            showWarning(msgKey: string, msgParams: Array<string>, opt?: WithContext): this;

            showWarning(msgKey: string, msgParams: string, opt?: WithContext): this;

            replaceByHardSpace(text: string, language: string): string;

            shouldRender(nextProps, nextState, thisProps, thisState): boolean

            setHiddenValue(value: boolean, setStateCallback?: () => void): this;

            hide(setStateCallback?: () => void): this;

            hideDefault(setStateCallback?: () => void): void;

            show(setStateCallback?: () => void): this;

            showDefault(setStateCallback?: () => void): this;

            isHidden(): boolean;

            toggleHidden(setStateCallback?: () => void): this;

            toggleHiddenDefault(setStateCallback?: () => void): this;

            setDisabledValue(value: boolean, setStateCallback?: () => void): this;

            disable(setStateCallback?: () => void): this;

            disableDefault(setStateCallback?: () => void): this;

            enable(setStateCallback?: () => void): this

            enableDefault(setStateCallback?: () => void): this;

            isDisabled(): boolean;

            toggleDisabled(setStateCallback?: () => void): this;

            toggleDisabledDefault(setStateCallback?: () => void): this;

            setSelectedValue(value, setStateCallback?: () => void): this;

            select(setStateCallback?: () => void): this;

            selectDefault(setStateCallback?: () => void): this;

            deselect(setStateCallback?: () => void): this;

            deselectDefault(setStateCallback?: () => void): this

            isSelected(): boolean;

            toggleSelected(setStateCallback?: () => void): this;

            toggleSelectedDefault(setStateCallback?: () => void): this;

            buildMainAttrs(mainAttrs: object): React.HTMLAttributes<HTMLElement>;

            getHiddenClassName(className?: string): string;

            getDisabledClassName(className?: string): string;

            getSelectedClassName(className?: string): string

            getDisabledCover(): React.ReactNode

            getDisabledCoverTransparent(): React.ReactNode

            getLanguages(): Array<{ language: string, q: number }>

            getLanguage(): string

            getScreenSize(): ScreenSizes

            isXs(): boolean

            isS(): boolean;

            isM(): boolean;

            isL(): boolean;

            isXl(): boolean;

            onChangeScreenSizeDefault(e, actualScreenSize: ScreenSizes): this

            onChangeScreenSize_?(e, actualScreenSize: ScreenSizes): void

        }


// endregion
    }
}

export import Bricks = UU5.Bricks;
export import Common = UU5.Common;
export import Forms = UU5.Forms;

export default UU5;


// region Mixins
declare namespace Mixins {
    namespace Base {
        interface Props {
            id?: string,
            name?: string,
            tooltip?: string,
            className?: string,
            style?: string | React.CSSProperties,
            mainAttrs?: React.HTMLAttributes<HTMLElement>,
            parent?: object,
            ref_?: (component: any) => void, // TODO: return safe ...
            noIndex?: boolean,
            editable?: boolean,
            contentEditable?: boolean
        }

        interface State {
        }

        interface Mixin {
            getTagName(): string;

            getMixinRegister(): Array<object>;

            registerMixin(mixinName: string): this;

            hasMixin(mixinName: string): boolean;

            isRendered(): boolean;

            getClassName(item: string, mixinName?: string): string;

            getClassName(): object;

            getDefault(item: string, mixinName?: string): any;

            getOpt(item: string, mixinName?: string): any;

            getLimit(item: string, mixinName?: string): number;

            getLsi(item: string, mixinName?: string): LsiValue;

            getLsiComponent(item: string, mixinName?: string, params?: object): React.ReactNode;

            getLsiValue(item: string, mixinName?: string, params?: object): string;

            getLsiItem(value: LsiValue, params?: object): string;

            isRendered(): boolean;

            setAsyncState(newState: (prevState: object) => object, setStateCallback?: () => void): this;

            setAsyncState(newState: object, setStateCallback?: () => void): this;

            getId(): string;

            getName(): string;

            getTooltip(): string;

            getMainPropsToPass(mixinNames?: Array<string>): Props

            getMainAttrs(): React.HTMLAttributes<HTMLElement>;

            getParent(): React.ReactNode;

            getParentByType(typeFunction: string): React.ReactNode;

            checkParentTagName(parentTagName: string): React.ReactNode;

            checkParentType(parentTypeFunction: string): React.ReactNode;

            getIndex(): number;

            getFullClassName(className): string

            stringToObjectType(string: string, type: any, prefix: object): any;

            switchChildrenToBody(props: object): object;

            findDOMNode(): HTMLElement;

            showError(msgKey: string, msgParams: Array<string>, opt?: WithContext): this;

            showError(msgKey: string, msgParams: string, opt?: WithContext): this;

            showWarning(msgKey: string, msgParams: Array<string>, opt?: WithContext): this;

            showWarning(msgKey: string, msgParams: string, opt?: WithContext): this;

            replaceByHardSpace(text: string, language: string): string;

            shouldRender(nextProps, nextState, thisProps, thisState): boolean


        }
    }

    namespace Elementary {
        interface Props {
            hidden?: boolean,
            disabled?: boolean,
            selected?: boolean,
            controlled?: boolean
        }

        interface State {
            hidden: boolean,
            disabled: boolean,
            selected: symbol
        }

        interface Mixin {

            setHiddenValue(value: boolean, setStateCallback?: () => void): this;

            hide(setStateCallback?: () => void): this;

            hideDefault(setStateCallback?: () => void): void;

            show(setStateCallback?: () => void): this;

            showDefault(setStateCallback?: () => void): this;

            isHidden(): boolean;

            toggleHidden(setStateCallback?: () => void): this;

            toggleHiddenDefault(setStateCallback?: () => void): this;

            setDisabledValue(value: boolean, setStateCallback?: () => void): this;

            disable(setStateCallback?: () => void): this;

            disableDefault(setStateCallback?: () => void): this;

            enable(setStateCallback?: () => void): this

            enableDefault(setStateCallback?: () => void): this;

            isDisabled(): boolean;

            toggleDisabled(setStateCallback?: () => void): this;

            toggleDisabledDefault(setStateCallback?: () => void): this;

            setSelectedValue(value, setStateCallback?: () => void): this;

            select(setStateCallback?: () => void): this;

            selectDefault(setStateCallback?: () => void): this;

            deselect(setStateCallback?: () => void): this;

            deselectDefault(setStateCallback?: () => void): this

            isSelected(): boolean;

            toggleSelected(setStateCallback?: () => void): this;

            toggleSelectedDefault(setStateCallback?: () => void): this;

            buildMainAttrs(mainAttrs: object): React.HTMLAttributes<HTMLElement>;

            getHiddenClassName(className?: string): string;

            getDisabledClassName(className?: string): string;

            getSelectedClassName(className?: string): string

            getDisabledCover(): React.ReactNode

            getDisabledCoverTransparent(): React.ReactNode
        }
    }

    namespace Calls {
        interface Props {
            calls?: string | object
        }

        interface State {
            calls: string | object
        }

        interface Mixin {

            setCalls(calls: string | object): this;

            getCall(item: string, mixinName?: string): (dtoIn: DtoIn) => void
        }
    }

    namespace Load {
        interface Props extends Calls.Props {
            uri?: string,
            dtoOut?: object,
            reloadInterval?: number,
            refireLoad?: boolean
        }

        interface State extends Calls.State {
            loadFeedback: LoadingFeedback,
            dtoOut: object,
            errorDtoOut: object
        }

        interface Mixin extends Calls.Mixin {
            getUri(): string;

            getDtoOut(): object;

            getErrorData(): object;

            getLoadFeedback(): LoadingFeedback

            isLoading(): boolean

            isReady(): boolean

            isError(): boolean

            onLoadSuccess(dtoOut: object, setStateCallback?: () => void): this;

            onReloadSuccess(dtoOut: object, setStateCallback?: () => void): this;

            onLoadError(dtoOut: object, setStateCallback?: () => void): this;

            onReloadError(dtoOut: object, setStateCallback?: () => void): this;

            getLoadFeedbackChildren(getChildren: (dtoOut: object) => React.ReactNode): React.ReactNode;

            reload(callName?: string, dtoIn?: DtoIn): this;

            forceReload(callName?: string, dtoIn?: DtoIn): void;

            // overloading methods
            getOnLoadData_?(props?: object): object;

            getOnReloadData_?(props?: object): object;

            onLoadSuccess_?(dtoOut?: object): void;

            onReloadSuccess_?(dtoOut?: object): void;

            onLoadError_?(dtoOut?: object): void;

            onReloadError_?(dtoOut?: object): void;


        }
    }

    namespace CcrReader {
        interface Props {
        }

        interface State {
        }

        interface Mixin {

            getCcrComponentByKey(key: string): React.ReactNode;

            isCcrRegisteredByKey(key: string): boolean;

            getCcrByKeyRegister(): object
        }
    }

    namespace CcrWriter {
        interface Props extends CcrReader.Props {
            ccrKey?: string;
        }

        interface State extends CcrReader.State {
        }

        interface Mixin extends CcrReader.Mixin {
            getCcrKey(props?: object): string;
        }
    }

    namespace ColorSchema {
        interface Props {
            colorSchema?: ColorSchemas
        }

        interface State {
        }

        interface Mixin {
            getColorSchema(): string
        }
    }

    namespace Content {
        interface Props {
            content?: Uu5Content | Array<Uu5Content>,
            ignoreInnerHTML?: boolean,
            checkSpaces?: boolean,
            checkGrammar?: boolean,
            checkHighlight?: boolean,
            textCorrector?: boolean,
            dynamic?: boolean,
            mode?: 'standard' | 'outline'
        }

        interface State {
            mode: string,
            children?: Array<React.ReactNode>
            // TODO
            filter?: any
            filteredProps?: any,
            sorter?: any,
            sortedIds?: any
        }

        interface Mixin {

            isDynamic(): boolean;

            getContent(): Uu5Content;

            expandChildProps(prevChild: React.ReactNode, childIndex: number): object;

            buildChild(childTag: string, childProps?: object, children?: React.ReactChildren): React.ReactNode;

            cloneChild(child: React.ReactNode, props: object): React.ReactNode;

            expandChildDefault(child: React.ReactNode, key?: any): React.ReactNode

            buildNodeChildren(children: React.ReactChildren, childPropsExpander: (child: React.ReactNode, index: number) => object): React.ReactChildren;

            shouldChildRender(child: React.ReactChildren): boolean;

            buildChildren(contentProps: object, childPropsExpander: (child: React.ReactNode, index: number) => object, childIndex: number): React.ReactChildren;

            buildChildrenDefault(contentProps: object, childPropsExpander: (child: React.ReactNode, index: number) => object, childIndex: number): React.ReactChildren;

            getStandardChildren(): React.ReactChildren;

            getOutlineChildren(): React.ReactChildren

            getChildren(): React.ReactChildren;

            getRenderedChildren(): React.ReactChild;

            getRenderedChildrenDefault(): React.ReactChild;

            setRenderedChildren(childrenIndexList: any): this;

            // TODO
            addRenderedChild(renderedChild, index): this;

            // TODO
            removeRenderedChild(renderedChild): this;

            // TODO
            getRenderedChildrenIdList(): any;

            // TODO
            setRenderedChildrenIdList(childrenIdList): this;

            // TODO
            addRenderedChildToIdList(renderedChild): this;

            // TODO
            removeRenderedChildFromIdList(renderedChild): this;

            // TODO
            getRenderedChildrenNameList(): any;

            // TODO
            setRenderedChildrenNameList(childrenNameList): this;

            // TODO
            addRenderedChildToNameList(renderedChild): this;

            // TODO
            removeRenderedChildFromNameList(renderedChild): this;

            getChildIndexById(childId: string): number;

            getChildIndexByIdDefault(childId: string): number;

            getRenderedChildById(childId: string): React.ReactChild;

            getRenderedChildByIdDefault(childId: string): React.ReactChild;

            getRenderedChildrenByName(childName: string): React.ReactChildren;

            getRenderedChildByName(childName: string): React.ReactChild;

            getRenderedChildByNameDefault(childName: string): React.ReactChild;

            getRenderedChildByIndex(index: number): React.ReactChild;

            getRenderedChildByIndexDefault(index: number): React.ReactChild;

            getRenderedChildByTagName(tagName: string): React.ReactChild;

            getRenderedChildByTagNameDefault(tagName: string): React.ReactChild;

            getFirstRenderedChild(): React.ReactChild;

            getFirstRenderedChildDefault(): React.ReactChild;

            getLastRenderedChild(): React.ReactChild;

            getLastRenderedChildDefault(): React.ReactChild;

            eachRenderedChild(callback: (rendredChild: React.ReactChild, index: number) => boolean): this;

            eachRenderedChildDefault(callback: (rendredChild: React.ReactChild, index: number) => boolean): this;

            registerRenderedChild(renderedChild: React.ReactChild, index: number): this;

            unregisterRenderedChild(renderedChild: React.ReactChild): this;

            // dynamic functions

            setChildren(newChildren: React.ReactChildren, setStateCallback?: () => void): this;

            setChildren(newChildren: React.ReactChildren, props?: object, setStateCallback?: () => void): this;

            setChildrenDefault(newChildren: React.ReactChildren, setStateCallback?: () => void): this;

            insertChild(child: object | React.ReactNode, opt?: { position?: number, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildDefault(child: object | React.ReactNode, opt?: { position?: number, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildBefore(child: object | React.ReactNode, opt?: { childAfterId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildBeforeDefault(child: object | React.ReactNode, opt?: { childAfterId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildAfter(child: object | React.ReactNode, opt?: { childBeforeId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            insertChildAfterDefault(child: object | React.ReactNode, opt?: { childBeforeId?: string, shouldUpdate?: boolean, setStateCallback?: () => void }): this;

            updateChild(childId: string, newProps: object, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this

            updateChildDefault(childId: string, newProps: object, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            replaceChild(childId: string, child: object | React.ReactNode, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            replaceChildDefault(childId: string, child: object | React.ReactNode, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            deleteChild(childId: string, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            deleteChildDefault(childId: string, opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            clearChildren(opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            clearChildrenDefault(opt?: {
                shouldUpdate?: boolean,
                setStateCallback?: () => void
            }): this;

            // TODO
            setFilter(filter, setStateCallback?: () => void): this;

            resetFilter(setStateCallback?: () => void): this;

            // TODO
            setSorter(sorter, setStateCallback?: () => void): this;

            resetSorter(setStateCallback?: () => void): this;

            // TODO
            setFilterAndSorter(filter, sorter, setStateCallback?: () => void): this;

            resetFilterAndSorter(setStateCallback?: () => void): this;

            getFilteredSorterChildren(children?: React.ReactChildren): React.ReactChildren;

            setStandardMode(setStateCallback?: () => void): this;

            setOutlineMode(setStateCallback?: () => void): this;

            getMode(): string;

            isStandardMode(): boolean

            isOutlineMode(): boolean
        }
    }

    namespace Editable {
        interface Props {
            getEditablePropValue?: (component: this, propName: string) => void
        }

        interface State {
        }

        interface Mixin {

            startWatchingResize(key: string, resizeCallback?: (opt: {
                id: string, width: number, height: number
            }) => void): void;

            stopWatchingResize(key: string): void
        }
    }

    namespace Fragment {
        interface Props {
        }

        interface State {
        }

        interface Mixin {
            // TODO
            initComponentFragmentation(initFn, nextProps): void;

            // TODO
            setFragment(fragment): void

            // TODO
            initComponentFragmentation_(initFn, nextProps): void;

            // TODO
            setFragment_(fragment): void;
        }
    }

    namespace Identity {
        interface Props {
        }

        interface State {
            identity: object, // TODO
            identityFeedback: IdentityFeedback
        }

        interface Mixin {

            isAuthenticated(): boolean;

            isNotAuthenticated(): boolean;

            isPending(): boolean;

            getIdentityFeedback(): IdentityFeedback

            getIdentity(): object;

            setAuthenticated(isAuth: boolean, setStateCallback?: () => void): this;

            changeIdentity(setStateCallback?: () => void): this;

            onChangeIdentityDefault(session?: object): this;

            getAuthenticatedChild(getChild: () => React.ReactNode, opt?: {
                silent?: boolean,
                inline?: boolean,
                message?: string
            }): React.ReactNode
        }
    }

    namespace Level {
        interface Props {
            level?: 0 | 1 | 2 | 3 | 4 | 5 | 6
        }

        interface State {
            level: number
        }

        interface Mixin {

            getLevel(): number;

            shouldIncreaseLevel(parentLevelComponent: React.ReactNode, props?: object): boolean

            checkLevel(props?: object): number;
        }
    }

    namespace Lsi {
        interface Props {
            language?: string,
            registerLsi?: (id: string, changeLangCallback: (language: string) => void) => void,
            unregisterLsi?: (id: string, changeLangCallback: (language: string) => void) => void,
            setLanguage?: () => void,
            getLanguage?: () => string
        }

        interface State {
            language: string
        }

        interface Mixin {

            getLanguages(): Array<{ language: string, q: number }>

            getLanguage(): string
        }
    }

    namespace NestingLevel {
        interface Props {
            nestingLevel?: NestingLevels
        }

        interface State {
            nestingLevel: NestingLevels
        }

        interface Mixin {

            getNestingLevel(): NestingLevels

            getParentNestingLevel(): NestingLevels

            getNestingLevelList(): Array<NestingLevels>

            checkNestingLevel(): NestingLevels | null
        }
    }

    namespace PureRender {
        interface Props {
            pureRender?: boolean
        }

        interface State {
        }

        interface Mixin {
        }
    }

    namespace Resize {
        interface Props {
            resizeInterval?: number
        }

        interface State {
        }

        interface Mixin {
        }
    }

    namespace Route {
        interface Props {
            params?: object
        }

        interface State {
        }

        interface Mixin {
            onRouteChanged_?(prevProps?: object, prevState?: object): void;
        }
    }

    namespace ScreenSize {
        interface Props {
        }

        interface State {
            screenSize: ScreenSizes
        }

        interface Mixin {

            getScreenSize(): ScreenSizes

            isXs(): boolean

            isS(): boolean;

            isM(): boolean;

            isL(): boolean;

            isXl(): boolean;

            onChangeScreenSizeDefault(e, actualScreenSize: ScreenSizes): this

            onChangeScreenSize_?(e, actualScreenSize: ScreenSizes): void
        }
    }

    namespace Section {
        interface Props extends Content.Props, Level.Props {
            header?: Uu5Content,
            footer?: Uu5Content,
            underline?: boolean
        }

        interface State extends Content.State, Level.State {
        }

        interface Mixin extends Content.Mixin, Level.Mixin {

            getHeader(props?: object): React.ReactNode

            getHeaderDefault(props?: object): React.ReactNode

            getFooter(props?: object): React.ReactNode

            getFooterDefault(props?: object): React.ReactNode

            getHeaderType(headerContent?: string | object): string;

            getFooterType(footerContent?: string | object): string;

            registerRenderedHeaderChild(renderedHeaderChild: React.ReactChild): this;

            registerRenderedFooterChild(renderedFooterChild: React.ReactChild): this;

            expandHeaderProps(prevHeaderChild: object): object;

            expandFooterProps(prevFooterChild: object): object

            buildHeaderChild(header): React.ReactChild

            buildHeaderChildDefault(header): React.ReactChild

            buildFooterChild(footer): React.ReactChild

            buildFooterChildDefault(footer): React.ReactChild

            getHeaderChild(): React.ReactChild

            getFooterChild(): React.ReactChild

            getRenderedHeaderChild(): React.ReactChild

            getRenderedFooterChild(): React.ReactChild
        }
    }

    namespace Session {
        interface Props {
            session?: object
        }

        interface State {
        }

        interface Mixin {

            getSession(): object // TODO

            login(opt?): this;

            logout(): this;

            isSessionExpiring(): boolean;

            sessionExpiring(event): void

            sessionExtended(event): void
        }
    }

    namespace Swipe {
        interface Props {
            swiped?: SwipeDirection,
            swipeLong?: boolean
            swipeFast?: boolean
        }

        interface State {
        }

        interface Mixin {

            getSwipeLength(): number;

            getAngle(): number;

            isSwipedHorizontal(): boolean;

            isSwipedVertical(): boolean;

            isSwiped(): boolean;

            isSwipedShort(): boolean;

            isSwipedLong(): boolean;

            isSwipedSlow(): boolean;

            isSwipedFast(): boolean;

            isSwipedUp(): boolean;

            isSwipedRight(): boolean;

            isSwipedDown(): boolean;

            isSwipedLeft(): boolean;

            isSwipedUpRight(): boolean;

            isSwipedDownRight(): boolean;

            isSwipedUpLeft(): boolean;

            isSwipedDownLeft(): boolean;

            isSwipedUpShort(): boolean;

            isSwipedRightShort(): boolean;

            isSwipedDownShort(): boolean;

            isSwipedLeftShort(): boolean;

            isSwipedUpRightShort(): boolean;

            isSwipedDownRightShort(): boolean;

            isSwipedUpLeftShort(): boolean;

            isSwipedDownLeftShort(): boolean;

            isSwipedUpLong(): boolean;

            isSwipedRightLong(): boolean;

            isSwipedDownLong(): boolean;

            isSwipedLeftLong(): boolean;

            isSwipedUpRightLong(): boolean;

            isSwipedDownRightLong(): boolean;

            isSwipedUpLeftLong(): boolean;

            isSwipedDownLeftLong(): boolean;

            swipeOnTouchStart(handler: object | ((arguments?) => void), e: Event): this;

            swipeOnTouchStart(e: Event): this;

            swipeOnTouchMove(handler: object | ((arguments?) => void), e: Event): this;

            swipeOnTouchMove(e: Event): this;

            swipeOnTouchEnd(handler: object | ((arguments?) => void), e: Event): this;

            swipeOnTouchEnd(e: Event): this;

            angle(): number
        }
    }

    namespace Form {
        interface Props {
            values?: object,
            progressIndicator?: React.ReactNode
            onInit?: (opt: { component: Form.Mixin }) => void,
            onSave?: (opt: { component: Form.Mixin, values: object }) => void,
            onSaveDone?: (opt: { component: Form.Mixin, dtoOut: object }) => void,
            onSaveFail?: (opt: { component: Form.Mixin, dtoOut: object }) => void,
            onSaveByKey?: (opt: { component: Form.Mixin, event: Event }) => void,
            onValidate?: (opt: { component: Form.Mixin }) => void,
            onReset?: (opt: { component: Form.Mixin }) => void,
            onCancel?: (opt: { component: Form.Mixin }) => void,
            saveOnEnter?: boolean
        }

        interface State {
        }

        interface Mixin {
            setValues(values: object): void

            eachFormInput(func: (input) => boolean): Array<Input.Mixin>

            hasFormControls(): boolean;

            eachFormControls(func: (input) => boolean): Array<Controls.Mixin>

            isValid(): boolean;

            isValidDefault(): boolean;

            isForm(): boolean;

            registerFormInput(id: string, formInput): void;

            unregisterFormInput(id: string): void;

            registerFormControls(id: string, formControl: Controls.Mixin): void;

            unregisterFormControls(id: string): void;

            getValues(): object;

            getInputs(): Array<Input.Mixin>;

            getInputByName(name): React.ReactChild

            getFormChildren(fce?: () => React.ReactNode): React.ReactNode;

            getAlertBus(); // TODO

            save(values?: object): this;

            saveDefault(values?: object): this;

            saveDone(dtoOut: object): this;

            saveDoneDefault(dtoOut: object): this;

            saveFail(dtoOut: object): this;

            saveFailDefault(dtoOut: object): this;

            validate(): this;

            setPending(setStateCallback?: () => void): this;

            setReady(setStateCallback?: () => void): this;

            reset(setStateCallback?: () => void): this;

            resetDefault(setStateCallback?: () => void): this;

            cancel(): this;

            getSaveFormEvents(func?: (opt: { component: Form.Mixin, event: Event }) => void): void
        }
    }

    namespace Input {
        interface Props {
            label?: LsiValue,
            message?: LsiValue,
            feedback?: FormInputFeedback,
            readOnly?: boolean,
            size?: FormInputSizes
            onChange?: (opt: {
                value: any
                event: Event,
                component: Input.Mixin
            }) => void,
            onValidate?: (opt: {
                value: any
                event?: Event,
                component: Input.Mixin
            }) => void,
            onChangeFeedback?: (opt: {
                feedback: FormInputFeedback,
                message: LsiValue,
                value: any,
                callback: () => void,
                component: Input.Mixin
            }) => void,
            labelColWidth?: ResponsiveSettings,
            inputColWidth?: ResponsiveSettings,
            inputWidth?: string,
            inputAttrs?: React.HTMLAttributes<HTMLElement>
        }

        interface State {
            message: LsiValue,
            feedback: FormInputFeedback,
            value: any,
            readOnly: boolean
        }

        interface Mixin {

            isInput(): boolean;

            getValue(): any;

            getValueDefault(): any;

            setValue(value: any, opts?: { shouldValidateRequired: boolean }, setStateCallback?: () => void): this;

            setValue(value: any, setStateCallback?: () => void): this;

            setValueDefault(value: any, setStateCallback?: () => void): this;

            getMessage(): string;

            getMessageDefault(): string;

            setMessage(message: LsiValue, setStateCallback?: () => void): this;

            setMessageDefault(message: LsiValue, setStateCallback?: () => void): this;

            getFeedback(): FormInputFeedback

            getFeedbackDefault(): FormInputFeedback

            setFeedback(feedback: FormInputFeedback, message?: LsiValue, value?: any, setStateCallback?: () => void): this;

            setFeedbackDefault(eedback: FormInputFeedback, message: LsiValue, value: any, setStateCallback?: () => void): this;

            setInitial(message?: LsiValue, value?: any, setStateCallback?: () => void): this;

            setInitialDefault(message?: LsiValue, value?: any, setStateCallback?: () => void): this;

            isInitial(): boolean;

            setLoading(message?: LsiValue, value?: any, setStateCallback?: () => void): this;

            setLoadingDefault(message?: LsiValue, value?: any, setStateCallback?: () => void): this;

            isLoading(): boolean;

            setSuccess(message?: LsiValue, value?: any, setStateCallback?: () => void): this;

            setSuccessDefault(message?: LsiValue, value?: any, setStateCallback?: () => void): this;

            isSuccess(): boolean;

            setWarning(message?: LsiValue, value?: any, setStateCallback?: () => void): this;

            setWarningDefault(message?: LsiValue, value?: any, setStateCallback?: () => void): this;

            isWarning(): boolean;

            setError(message?: LsiValue, value?: any, setStateCallback?: () => void): this;

            setErrorDefault(message?: LsiValue, value?: any, setStateCallback?: () => void): this;

            isError(): boolean;

            reset(setStateCallback?: () => void): this;

            resetDefault(setStateCallback?: () => void): this;

            getChangeFeedback(opt?: FormInputFeedbackOptionalObject): FormInputFeedbackObject

            getChangeFeedbackDefault(opt?: FormInputFeedbackOptionalObject): FormInputFeedbackObject

            setChangeFeedback(opt?: FormInputFeedbackObject, setStateCallback?: () => void): this;

            setChangeFeedbackDefault(opt?: FormInputFeedbackObject, setStateCallback?: () => void): void;

            isReadOnly(): boolean;

            setEditableValue(value: any, setStateCallback?: () => void): this;

            setEditableValueDefault(value: any, setStateCallback?: () => void): this;

            readOnly(setStateCallback?: () => void): this;

            readOnlyDefault(setStateCallback?: () => void): this;

            editable(setStateCallback?: () => void): this;

            editableDefault(setStateCallback?: () => void): this;

            getLabel(inputId: string): React.ReactNode

            getInputWrapper(children: React.ReactChildren, buttons?: Array<{}>): React.ReactNode // TODO

            focus(): this;

            isComputedDisabled(): boolean;

            shouldValidateRequired(): boolean;
        }
    }

    namespace TextInput {
        interface Props extends Input.Props, ColorSchema.Props {
            placeholder?: LsiValue
            required?: boolean,
            requiredMessage?: LsiValue,
            focusMessage?: LsiValue,
            patternMessage?: LsiValue,
            autocompleteItems?: Array<{
                value?: string,
                params?: object,
                content?: Uu5Content
            }>
            onFocus?: (opt: TextInputOpts) => void,
            onBlur?: (opt: TextInputOpts) => void,
            onEnter?: (opt: TextInputOpts) => void,
            validateOnChange?: boolean,
            borderRadius?: string,
            bgStyle?: BgStyle,
            elevation?: Elevation
        }

        interface State extends Input.State, ColorSchema.State {
            autocompleteItems: Array<{
                value?: string,
                params?: object,
                content?: Uu5Content
            }>,
            foundAutocompleteItems: Array<{
                value?: string,
                params?: object,
                content?: Uu5Content
            }>,
            selectedIndex: number,
            open: boolean
        }

        interface Mixin extends Input.Mixin, ColorSchema.Mixin {
            isTextInput(): boolean;

            getInput(): React.InputHTMLAttributes<HTMLInputElement>

            isValid(): boolean;

            open(setStateCallback?: () => void): this;

            openDefault(setStateCallback?: () => void): this;

            close(setStateCallback?: () => void): this;

            closeDefault(setStateCallback?: () => void): this;

            isOpen(): boolean

            isOpenDefault(): boolean;

            getFocusFeedback(): FormInputFeedbackObject

            getBlurFeedback(opt): FormInputFeedbackObject

            onValidate(opt): FormInputFeedbackObject;

            setAutoCompleteItems(items, opt?: object, setStateCallback?: () => void): this;

            onFocus(e: Event): this;

            onFocusDefault(opt: TextInputOpts): this;

            onChange(e: Event): this;

            onChangeDefault(opt: TextInputOpts): this;

            onBlur(e: Event): this

            onBlurDefault(opt: TextInputOpts): this;

            onKeyDown(e: Event, param?: (e: Event, opt: TextInputOpts) => void): this

        }
    }

    namespace Choice {
        interface Props {
            placeholder?: LsiValue,
            required?: boolean,
            requiredMessage?: LsiValue,
            buttonHidden?: boolean,
            iconOpen?: string,
            iconClosed?: string
        }

        interface State {
        }

        interface Mixin {
            isValid(): boolean;
        }
    }

    namespace Controls {
        interface Props {
        }

        interface State {
        }

        interface Mixin {
            getForm(): Form.Mixin | null
        }
    }

    namespace Group {
        interface Props {
            value?: Array<{
                label: LsiValue,
                name?: string,
                value?: boolean,
                disabled?: boolean,
                hidden?: boolean
            }>
            required?: boolean,
            requiredMessage?: LsiValue,
            onIcon?: string,
            offIcon?: string,
            labelPosition?: "left" | "right",
            inline?: boolean,
            colWidth?: ResponsiveSettings
        }

        interface State {
        }

        interface Mixin {
            isValid(): boolean;
        }
    }

}
// endregion

// region combined mixins

// variation of mixins
declare namespace CombinedMixins {
    namespace BaseColorSchemaContentEditableElementaryNestingLevelPureRender {
        interface Props extends Mixins.Base.Props, Mixins.ColorSchema.Props, Mixins.Content.Props, Mixins.Editable.Props, Mixins.Elementary.Props, Mixins.NestingLevel.Props, Mixins.PureRender.Props {
        }

        interface State extends Mixins.Base.State, Mixins.ColorSchema.State, Mixins.Content.State, Mixins.Editable.State, Mixins.Elementary.State, Mixins.NestingLevel.State, Mixins.PureRender.State {
        }

        interface Mixin extends Mixins.Base.Mixin, Mixins.ColorSchema.Mixin, Mixins.Content.Mixin, Mixins.Editable.Mixin, Mixins.Elementary.Mixin, Mixins.NestingLevel.Mixin, Mixins.PureRender.Mixin {
        }
    }

    namespace BaseCcrWriterElementaryNestingLevelPureRender {
        interface Props extends Mixins.Base.Props, Mixins.CcrWriter.Props, Mixins.Elementary.Props, Mixins.NestingLevel.Props, Mixins.PureRender.Props {
        }

        interface State extends Mixins.Base.State, Mixins.CcrWriter.State, Mixins.Elementary.State, Mixins.NestingLevel.State, Mixins.PureRender.State {
        }

        interface Mixin extends Mixins.Base.Mixin, Mixins.CcrWriter.Mixin, Mixins.Elementary.Mixin, Mixins.NestingLevel.Mixin, Mixins.PureRender.Mixin {
        }
    }

    namespace BaseColorSchemaElementaryNestingLevelPureRenderSection {
        interface Props extends Mixins.Base.Props, Mixins.ColorSchema.Props, Mixins.Elementary.Props, Mixins.NestingLevel.Props, Mixins.PureRender.Props, Mixins.Section.Props {
        }

        interface State extends Mixins.Base.State, Mixins.ColorSchema.State, Mixins.Elementary.State, Mixins.NestingLevel.State, Mixins.PureRender.State, Mixins.Section.State {
        }

        interface Mixin extends Mixins.Base.Mixin, Mixins.ColorSchema.Mixin, Mixins.Elementary.Mixin, Mixins.NestingLevel.Mixin, Mixins.PureRender.Mixin, Mixins.Section.Mixin {
        }
    }

    namespace BaseContentIdentity {
        interface Props extends Mixins.Base.Props, Mixins.Content.Props, Mixins.Identity.Props {
        }

        interface State extends Mixins.Base.State, Mixins.Content.State, Mixins.Identity.State {
        }

        interface Mixin extends Mixins.Base.Mixin, Mixins.Content.Mixin, Mixins.Identity.Mixin {
        }
    }

    namespace BaseElementaryNestingLevelPureRender {
        interface Props extends Mixins.Base.Props, Mixins.Elementary.Props, Mixins.NestingLevel.Props, Mixins.PureRender.Props {
        }

        interface State extends Mixins.Base.State, Mixins.Elementary.State, Mixins.NestingLevel.State, Mixins.PureRender.State {
        }

        interface Mixin extends Mixins.Base.Mixin, Mixins.Elementary.Mixin, Mixins.NestingLevel.Mixin, Mixins.PureRender.Mixin {
        }
    }

    namespace BaseColorSchemaContentElementaryNestingLevelPureRender {
        interface Props extends Mixins.Base.Props, Mixins.ColorSchema.Props, Mixins.Content.Props, Mixins.Elementary.Props, Mixins.NestingLevel.Props, Mixins.PureRender.Props {
        }

        interface State extends Mixins.Base.State, Mixins.ColorSchema.State, Mixins.Content.State, Mixins.Elementary.State, Mixins.NestingLevel.State, Mixins.PureRender.State {
        }

        interface Mixin extends Mixins.Base.Mixin, Mixins.ColorSchema.Mixin, Mixins.Content.Mixin, Mixins.Elementary.Mixin, Mixins.NestingLevel.Mixin, Mixins.PureRender.Mixin {
        }
    }

    namespace BaseContentElementaryNestingLevelPureRender {
        interface Props extends Mixins.Base.Props, Mixins.Content.Props, Mixins.Elementary.Props, Mixins.NestingLevel.Props, Mixins.PureRender.Props {
        }

        interface State extends Mixins.Base.State, Mixins.Content.State, Mixins.Elementary.State, Mixins.NestingLevel.State, Mixins.PureRender.State {
        }

        interface Mixin extends Mixins.Base.Mixin, Mixins.Content.Mixin, Mixins.Elementary.Mixin, Mixins.NestingLevel.Mixin, Mixins.PureRender.Mixin {
        }
    }

    namespace BaseColorSchemaElementaryNestingLevelPureRender {
        interface Props extends Mixins.Base.Props, Mixins.ColorSchema.Props, Mixins.Elementary.Props, Mixins.NestingLevel.Props, Mixins.PureRender.Props {
        }

        interface State extends Mixins.Base.State, Mixins.ColorSchema.State, Mixins.Elementary.State, Mixins.NestingLevel.State, Mixins.PureRender.State {
        }

        interface Mixin extends Mixins.Base.Mixin, Mixins.ColorSchema.Mixin, Mixins.Elementary.Mixin, Mixins.NestingLevel.Mixin, Mixins.PureRender.Mixin {
        }
    }

    namespace BaseContentElementary {
        interface Props extends Mixins.Base.Props, Mixins.Content.Props, Mixins.Elementary.Props {
        }

        interface State extends Mixins.Base.State, Mixins.Content.State, Mixins.Elementary.State {
        }

        interface Mixin extends Mixins.Base.Mixin, Mixins.Content.Mixin, Mixins.Elementary.Mixin {
        }
    }

    namespace BaseColorSchemaContentElementarySwipe {
        interface Props extends Mixins.Base.Props, Mixins.ColorSchema.Props, Mixins.Content.Props, Mixins.Elementary.Props, Mixins.Swipe.Props {
        }

        interface State extends Mixins.Base.State, Mixins.ColorSchema.State, Mixins.Content.State, Mixins.Elementary.State, Mixins.Swipe.State {
        }

        interface Mixin extends Mixins.Base.Mixin, Mixins.ColorSchema.Mixin, Mixins.Content.Mixin, Mixins.Elementary.Mixin, Mixins.Swipe.Mixin {
        }
    }

    namespace BaseCcrWriterColorSchemaElementaryNestingLevelPureRender {
        interface Props extends Mixins.Base.Props, Mixins.CcrWriter.Props, Mixins.ColorSchema.Props, Mixins.Elementary.Props, Mixins.NestingLevel.Props, Mixins.PureRender.Props {
        }

        interface State extends Mixins.Base.State, Mixins.CcrWriter.State, Mixins.ColorSchema.State, Mixins.Elementary.State, Mixins.NestingLevel.State, Mixins.PureRender.State {
        }

        interface Mixin extends Mixins.Base.Mixin, Mixins.CcrWriter.Mixin, Mixins.ColorSchema.Mixin, Mixins.Elementary.Mixin, Mixins.NestingLevel.Mixin, Mixins.PureRender.Mixin {
        }
    }

    namespace BaseElementaryPureRender {
        interface Props extends Mixins.Base.Props, Mixins.Elementary.Props, Mixins.PureRender.Props {
        }

        interface State extends Mixins.Base.State, Mixins.Elementary.State, Mixins.PureRender.State {
        }

        interface Mixin extends Mixins.Base.Mixin, Mixins.Elementary.Mixin, Mixins.PureRender.Mixin {
        }
    }

    namespace BaseElementaryNestingLevelPureRenderSection {
        interface Props extends Mixins.Base.Props, Mixins.Elementary.Props, Mixins.NestingLevel.Props, Mixins.PureRender.Props, Mixins.Section.Props {
        }

        interface State extends Mixins.Base.State, Mixins.Elementary.State, Mixins.NestingLevel.State, Mixins.PureRender.State, Mixins.Section.State {
        }

        interface Mixin extends Mixins.Base.Mixin, Mixins.Elementary.Mixin, Mixins.NestingLevel.Mixin, Mixins.PureRender.Mixin, Mixins.Section.Mixin {
        }
    }

    namespace BaseContentElementaryPureRender {
        interface Props extends Mixins.Base.Props, Mixins.Content.Props, Mixins.Elementary.Props, Mixins.PureRender.Props {
        }

        interface State extends Mixins.Base.State, Mixins.Content.State, Mixins.Elementary.State, Mixins.PureRender.State {
        }

        interface Mixin extends Mixins.Base.Mixin, Mixins.Content.Mixin, Mixins.Elementary.Mixin, Mixins.PureRender.Mixin {
        }
    }

    namespace BaseCcrWriterElementaryNestingLevelPureRenderSection {
        interface Props extends Mixins.Base.Props, Mixins.CcrWriter.Props, Mixins.Elementary.Props, Mixins.NestingLevel.Props, Mixins.PureRender.Props, Mixins.Section.Props {
        }

        interface State extends Mixins.Base.State, Mixins.CcrWriter.State, Mixins.Elementary.State, Mixins.NestingLevel.State, Mixins.PureRender.State, Mixins.Section.State {
        }

        interface Mixin extends Mixins.Base.Mixin, Mixins.CcrWriter.Mixin, Mixins.Elementary.Mixin, Mixins.NestingLevel.Mixin, Mixins.PureRender.Mixin, Mixins.Section.Mixin {
        }
    }

    namespace BaseElementaryLsiNestingLevelPureRenderSection {
        interface Props extends Mixins.Base.Props, Mixins.Elementary.Props, Mixins.Lsi.Props, Mixins.NestingLevel.Props, Mixins.PureRender.Props, Mixins.Section.Props {
        }

        interface State extends Mixins.Base.State, Mixins.Elementary.State, Mixins.Lsi.State, Mixins.NestingLevel.State, Mixins.PureRender.State, Mixins.Section.State {
        }

        interface Mixin extends Mixins.Base.Mixin, Mixins.Elementary.Mixin, Mixins.Lsi.Mixin, Mixins.NestingLevel.Mixin, Mixins.PureRender.Mixin, Mixins.Section.Mixin {
        }
    }

    namespace Base {
        interface Props extends Mixins.Base.Props {
        }

        interface State extends Mixins.Base.State {
        }

        interface Mixin extends Mixins.Base.Mixin {
        }
    }

    namespace BaseContentElementaryLevelNestingLevelPureRender {
        interface Props extends Mixins.Base.Props, Mixins.Content.Props, Mixins.Elementary.Props, Mixins.Level.Props, Mixins.NestingLevel.Props, Mixins.PureRender.Props {
        }

        interface State extends Mixins.Base.State, Mixins.Content.State, Mixins.Elementary.State, Mixins.Level.State, Mixins.NestingLevel.State, Mixins.PureRender.State {
        }

        interface Mixin extends Mixins.Base.Mixin, Mixins.Content.Mixin, Mixins.Elementary.Mixin, Mixins.Level.Mixin, Mixins.NestingLevel.Mixin, Mixins.PureRender.Mixin {
        }
    }

    namespace BaseColorSchemaContentEditableElementaryLevelNestingLevelPureRender {
        interface Props extends Mixins.Base.Props, Mixins.ColorSchema.Props, Mixins.Content.Props, Mixins.Editable.Props, Mixins.Elementary.Props, Mixins.Level.Props, Mixins.NestingLevel.Props, Mixins.PureRender.Props {
        }

        interface State extends Mixins.Base.State, Mixins.ColorSchema.State, Mixins.Content.State, Mixins.Editable.State, Mixins.Elementary.State, Mixins.Level.State, Mixins.NestingLevel.State, Mixins.PureRender.State {
        }

        interface Mixin extends Mixins.Base.Mixin, Mixins.ColorSchema.Mixin, Mixins.Content.Mixin, Mixins.Editable.Mixin, Mixins.Elementary.Mixin, Mixins.Level.Mixin, Mixins.NestingLevel.Mixin, Mixins.PureRender.Mixin {
        }
    }

    namespace BaseElementaryLsiNestingLevelPureRender {
        interface Props extends Mixins.Base.Props, Mixins.Elementary.Props, Mixins.Lsi.Props, Mixins.NestingLevel.Props, Mixins.PureRender.Props {
        }

        interface State extends Mixins.Base.State, Mixins.Elementary.State, Mixins.Lsi.State, Mixins.NestingLevel.State, Mixins.PureRender.State {
        }

        interface Mixin extends Mixins.Base.Mixin, Mixins.Elementary.Mixin, Mixins.Lsi.Mixin, Mixins.NestingLevel.Mixin, Mixins.PureRender.Mixin {
        }
    }

    namespace BaseColorSchemaElementaryLsiNestingLevelPureRenderScreenSize {
        interface Props extends Mixins.Base.Props, Mixins.ColorSchema.Props, Mixins.Elementary.Props, Mixins.Lsi.Props, Mixins.NestingLevel.Props, Mixins.PureRender.Props, Mixins.ScreenSize.Props {
        }

        interface State extends Mixins.Base.State, Mixins.ColorSchema.State, Mixins.Elementary.State, Mixins.Lsi.State, Mixins.NestingLevel.State, Mixins.PureRender.State, Mixins.ScreenSize.State {
        }

        interface Mixin extends Mixins.Base.Mixin, Mixins.ColorSchema.Mixin, Mixins.Elementary.Mixin, Mixins.Lsi.Mixin, Mixins.NestingLevel.Mixin, Mixins.PureRender.Mixin, Mixins.ScreenSize.Mixin {
        }
    }

    namespace BaseContent {
        interface Props extends Mixins.Base.Props, Mixins.Content.Props {
        }

        interface State extends Mixins.Base.State, Mixins.Content.State {
        }

        interface Mixin extends Mixins.Base.Mixin, Mixins.Content.Mixin {
        }
    }

    namespace BaseContentElementaryLsiNestingLevelPureRender {
        interface Props extends Mixins.Base.Props, Mixins.Content.Props, Mixins.Elementary.Props, Mixins.Lsi.Props, Mixins.NestingLevel.Props, Mixins.PureRender.Props {
        }

        interface State extends Mixins.Base.State, Mixins.Content.State, Mixins.Elementary.State, Mixins.Lsi.State, Mixins.NestingLevel.State, Mixins.PureRender.State {
        }

        interface Mixin extends Mixins.Base.Mixin, Mixins.Content.Mixin, Mixins.Elementary.Mixin, Mixins.Lsi.Mixin, Mixins.NestingLevel.Mixin, Mixins.PureRender.Mixin {
        }
    }

    namespace BaseCcrReaderElementaryNestingLevelPureRenderSection {
        interface Props extends Mixins.Base.Props, Mixins.CcrReader.Props, Mixins.Elementary.Props, Mixins.NestingLevel.Props, Mixins.PureRender.Props, Mixins.Section.Props {
        }

        interface State extends Mixins.Base.State, Mixins.CcrReader.State, Mixins.Elementary.State, Mixins.NestingLevel.State, Mixins.PureRender.State, Mixins.Section.State {
        }

        interface Mixin extends Mixins.Base.Mixin, Mixins.CcrReader.Mixin, Mixins.Elementary.Mixin, Mixins.NestingLevel.Mixin, Mixins.PureRender.Mixin, Mixins.Section.Mixin {
        }
    }

    namespace BaseColorSchemaContentElementaryPureRender {
        interface Props extends Mixins.Base.Props, Mixins.ColorSchema.Props, Mixins.Content.Props, Mixins.Elementary.Props, Mixins.PureRender.Props {
        }

        interface State extends Mixins.Base.State, Mixins.ColorSchema.State, Mixins.Content.State, Mixins.Elementary.State, Mixins.PureRender.State {
        }

        interface Mixin extends Mixins.Base.Mixin, Mixins.ColorSchema.Mixin, Mixins.Content.Mixin, Mixins.Elementary.Mixin, Mixins.PureRender.Mixin {
        }
    }

    namespace BaseElementaryNestingLevelSection {
        interface Props extends Mixins.Base.Props, Mixins.Elementary.Props, Mixins.NestingLevel.Props, Mixins.Section.Props {
        }

        interface State extends Mixins.Base.State, Mixins.Elementary.State, Mixins.NestingLevel.State, Mixins.Section.State {
        }

        interface Mixin extends Mixins.Base.Mixin, Mixins.Elementary.Mixin, Mixins.NestingLevel.Mixin, Mixins.Section.Mixin {
        }
    }

    namespace BaseContentPureRender {
        interface Props extends Mixins.Base.Props, Mixins.Content.Props, Mixins.PureRender.Props {
        }

        interface State extends Mixins.Base.State, Mixins.Content.State, Mixins.PureRender.State {
        }

        interface Mixin extends Mixins.Base.Mixin, Mixins.Content.Mixin, Mixins.PureRender.Mixin {
        }
    }

    namespace BaseCcrReaderColorSchemaContentElementaryNestingLevel {
        interface Props extends Mixins.Base.Props, Mixins.CcrReader.Props, Mixins.ColorSchema.Props, Mixins.Content.Props, Mixins.Elementary.Props, Mixins.NestingLevel.Props {
        }

        interface State extends Mixins.Base.State, Mixins.CcrReader.State, Mixins.ColorSchema.State, Mixins.Content.State, Mixins.Elementary.State, Mixins.NestingLevel.State {
        }

        interface Mixin extends Mixins.Base.Mixin, Mixins.CcrReader.Mixin, Mixins.ColorSchema.Mixin, Mixins.Content.Mixin, Mixins.Elementary.Mixin, Mixins.NestingLevel.Mixin {
        }
    }

    namespace BaseContentElementaryNestingLevelPureRenderSwipe {
        interface Props extends Mixins.Base.Props, Mixins.Content.Props, Mixins.Elementary.Props, Mixins.NestingLevel.Props, Mixins.PureRender.Props, Mixins.Swipe.Props {
        }

        interface State extends Mixins.Base.State, Mixins.Content.State, Mixins.Elementary.State, Mixins.NestingLevel.State, Mixins.PureRender.State, Mixins.Swipe.State {
        }

        interface Mixin extends Mixins.Base.Mixin, Mixins.Content.Mixin, Mixins.Elementary.Mixin, Mixins.NestingLevel.Mixin, Mixins.PureRender.Mixin, Mixins.Swipe.Mixin {
        }
    }

    namespace BaseCcrWriterContentElementaryNestingLevelPureRenderScreenSize {
        interface Props extends Mixins.Base.Props, Mixins.CcrWriter.Props, Mixins.Content.Props, Mixins.Elementary.Props, Mixins.NestingLevel.Props, Mixins.PureRender.Props, Mixins.ScreenSize.Props {
        }

        interface State extends Mixins.Base.State, Mixins.CcrWriter.State, Mixins.Content.State, Mixins.Elementary.State, Mixins.NestingLevel.State, Mixins.PureRender.State, Mixins.ScreenSize.State {
        }

        interface Mixin extends Mixins.Base.Mixin, Mixins.CcrWriter.Mixin, Mixins.Content.Mixin, Mixins.Elementary.Mixin, Mixins.NestingLevel.Mixin, Mixins.PureRender.Mixin, Mixins.ScreenSize.Mixin {
        }
    }

    namespace BaseColorSchemaElementaryPureRender {
        interface Props extends Mixins.Base.Props, Mixins.ColorSchema.Props, Mixins.Elementary.Props, Mixins.PureRender.Props {
        }

        interface State extends Mixins.Base.State, Mixins.ColorSchema.State, Mixins.Elementary.State, Mixins.PureRender.State {
        }

        interface Mixin extends Mixins.Base.Mixin, Mixins.ColorSchema.Mixin, Mixins.Elementary.Mixin, Mixins.PureRender.Mixin {
        }
    }

    namespace BaseContentElementaryNestingLevel {
        interface Props extends Mixins.Base.Props, Mixins.Content.Props, Mixins.Elementary.Props, Mixins.NestingLevel.Props {
        }

        interface State extends Mixins.Base.State, Mixins.Content.State, Mixins.Elementary.State, Mixins.NestingLevel.State {
        }

        interface Mixin extends Mixins.Base.Mixin, Mixins.Content.Mixin, Mixins.Elementary.Mixin, Mixins.NestingLevel.Mixin {
        }
    }

    namespace BaseContentElementaryNestingLevelResize {
        interface Props extends Mixins.Base.Props, Mixins.Content.Props, Mixins.Elementary.Props, Mixins.NestingLevel.Props, Mixins.Resize.Props {
        }

        interface State extends Mixins.Base.State, Mixins.Content.State, Mixins.Elementary.State, Mixins.NestingLevel.State, Mixins.Resize.State {
        }

        interface Mixin extends Mixins.Base.Mixin, Mixins.Content.Mixin, Mixins.Elementary.Mixin, Mixins.NestingLevel.Mixin, Mixins.Resize.Mixin {
        }
    }

    namespace BaseContentElementaryNestingLevelScreenSize {
        interface Props extends Mixins.Base.Props, Mixins.Content.Props, Mixins.Elementary.Props, Mixins.NestingLevel.Props, Mixins.ScreenSize.Props {
        }

        interface State extends Mixins.Base.State, Mixins.Content.State, Mixins.Elementary.State, Mixins.NestingLevel.State, Mixins.ScreenSize.State {
        }

        interface Mixin extends Mixins.Base.Mixin, Mixins.Content.Mixin, Mixins.Elementary.Mixin, Mixins.NestingLevel.Mixin, Mixins.ScreenSize.Mixin {
        }
    }

    namespace BaseColorSchemaEditableElementaryNestingLevelPureRenderSection {
        interface Props extends Mixins.Base.Props, Mixins.ColorSchema.Props, Mixins.Editable.Props, Mixins.Elementary.Props, Mixins.NestingLevel.Props, Mixins.PureRender.Props, Mixins.Section.Props {
        }

        interface State extends Mixins.Base.State, Mixins.ColorSchema.State, Mixins.Editable.State, Mixins.Elementary.State, Mixins.NestingLevel.State, Mixins.PureRender.State, Mixins.Section.State {
        }

        interface Mixin extends Mixins.Base.Mixin, Mixins.ColorSchema.Mixin, Mixins.Editable.Mixin, Mixins.Elementary.Mixin, Mixins.NestingLevel.Mixin, Mixins.PureRender.Mixin, Mixins.Section.Mixin {
        }
    }

    namespace BaseElementaryPureRenderSection {
        interface Props extends Mixins.Base.Props, Mixins.Elementary.Props, Mixins.PureRender.Props, Mixins.Section.Props {
        }

        interface State extends Mixins.Base.State, Mixins.Elementary.State, Mixins.PureRender.State, Mixins.Section.State {
        }

        interface Mixin extends Mixins.Base.Mixin, Mixins.Elementary.Mixin, Mixins.PureRender.Mixin, Mixins.Section.Mixin {
        }
    }

    namespace BaseColorSchemaElementary {
        interface Props extends Mixins.Base.Props, Mixins.ColorSchema.Props, Mixins.Elementary.Props {
        }

        interface State extends Mixins.Base.State, Mixins.ColorSchema.State, Mixins.Elementary.State {
        }

        interface Mixin extends Mixins.Base.Mixin, Mixins.ColorSchema.Mixin, Mixins.Elementary.Mixin {
        }
    }

    namespace BaseColorSchemaElementaryNestingLevelResize {
        interface Props extends Mixins.Base.Props, Mixins.ColorSchema.Props, Mixins.Elementary.Props, Mixins.NestingLevel.Props, Mixins.Resize.Props {
        }

        interface State extends Mixins.Base.State, Mixins.ColorSchema.State, Mixins.Elementary.State, Mixins.NestingLevel.State, Mixins.Resize.State {
        }

        interface Mixin extends Mixins.Base.Mixin, Mixins.ColorSchema.Mixin, Mixins.Elementary.Mixin, Mixins.NestingLevel.Mixin, Mixins.Resize.Mixin {
        }
    }

    namespace BaseColorSchemaContentElementaryNestingLevelPureRenderScreenSize {
        interface Props extends Mixins.Base.Props, Mixins.ColorSchema.Props, Mixins.Content.Props, Mixins.Elementary.Props, Mixins.NestingLevel.Props, Mixins.PureRender.Props, Mixins.ScreenSize.Props {
        }

        interface State extends Mixins.Base.State, Mixins.ColorSchema.State, Mixins.Content.State, Mixins.Elementary.State, Mixins.NestingLevel.State, Mixins.PureRender.State, Mixins.ScreenSize.State {
        }

        interface Mixin extends Mixins.Base.Mixin, Mixins.ColorSchema.Mixin, Mixins.Content.Mixin, Mixins.Elementary.Mixin, Mixins.NestingLevel.Mixin, Mixins.PureRender.Mixin, Mixins.ScreenSize.Mixin {
        }
    }

    namespace BaseElementary {
        interface Props extends Mixins.Base.Props, Mixins.Elementary.Props {
        }

        interface State extends Mixins.Base.State, Mixins.Elementary.State {
        }

        interface Mixin extends Mixins.Base.Mixin, Mixins.Elementary.Mixin {
        }
    }

    namespace BaseCcrWriterElementaryPureRender {
        interface Props extends Mixins.Base.Props, Mixins.CcrWriter.Props, Mixins.Elementary.Props, Mixins.PureRender.Props {
        }

        interface State extends Mixins.Base.State, Mixins.CcrWriter.State, Mixins.Elementary.State, Mixins.PureRender.State {
        }

        interface Mixin extends Mixins.Base.Mixin, Mixins.CcrWriter.Mixin, Mixins.Elementary.Mixin, Mixins.PureRender.Mixin {
        }
    }

    namespace BaseElementaryLsiSwipe {
        interface Props extends Mixins.Base.Props, Mixins.Elementary.Props, Mixins.Lsi.Props, Mixins.Swipe.Props {
        }

        interface State extends Mixins.Base.State, Mixins.Elementary.State, Mixins.Lsi.State, Mixins.Swipe.State {
        }

        interface Mixin extends Mixins.Base.Mixin, Mixins.Elementary.Mixin, Mixins.Lsi.Mixin, Mixins.Swipe.Mixin {
        }
    }

    namespace BaseColorSchemaElementaryInputPureRender {
        interface Props extends Mixins.Base.Props, Mixins.ColorSchema.Props, Mixins.Elementary.Props, Mixins.Input.Props, Mixins.PureRender.Props {
        }

        interface State extends Mixins.Base.State, Mixins.ColorSchema.State, Mixins.Elementary.State, Mixins.Input.State, Mixins.PureRender.State {
        }

        interface Mixin extends Mixins.Base.Mixin, Mixins.ColorSchema.Mixin, Mixins.Elementary.Mixin, Mixins.Input.Mixin, Mixins.PureRender.Mixin {
        }
    }

    namespace BaseColorSchemaElementaryGroupInputPureRenderScreenSize {
        interface Props extends Mixins.Base.Props, Mixins.ColorSchema.Props, Mixins.Elementary.Props, Mixins.Group.Props, Mixins.Input.Props, Mixins.PureRender.Props, Mixins.ScreenSize.Props {
        }

        interface State extends Mixins.Base.State, Mixins.ColorSchema.State, Mixins.Elementary.State, Mixins.Group.State, Mixins.Input.State, Mixins.PureRender.State, Mixins.ScreenSize.State {
        }

        interface Mixin extends Mixins.Base.Mixin, Mixins.ColorSchema.Mixin, Mixins.Elementary.Mixin, Mixins.Group.Mixin, Mixins.Input.Mixin, Mixins.PureRender.Mixin, Mixins.ScreenSize.Mixin {
        }
    }

    namespace Controls {
        interface Props extends Mixins.Controls.Props {
        }

        interface State extends Mixins.Controls.State {
        }

        interface Mixin extends Mixins.Controls.Mixin {
        }
    }

    namespace BaseElementaryPureRenderScreenSizeTextInput {
        interface Props extends Mixins.Base.Props, Mixins.Elementary.Props, Mixins.PureRender.Props, Mixins.ScreenSize.Props, Mixins.TextInput.Props {
        }

        interface State extends Mixins.Base.State, Mixins.Elementary.State, Mixins.PureRender.State, Mixins.ScreenSize.State, Mixins.TextInput.State {
        }

        interface Mixin extends Mixins.Base.Mixin, Mixins.Elementary.Mixin, Mixins.PureRender.Mixin, Mixins.ScreenSize.Mixin, Mixins.TextInput.Mixin {
        }
    }

    namespace BaseElementaryScreenSizeTextInput {
        interface Props extends Mixins.Base.Props, Mixins.Elementary.Props, Mixins.ScreenSize.Props, Mixins.TextInput.Props {
        }

        interface State extends Mixins.Base.State, Mixins.Elementary.State, Mixins.ScreenSize.State, Mixins.TextInput.State {
        }

        interface Mixin extends Mixins.Base.Mixin, Mixins.Elementary.Mixin, Mixins.ScreenSize.Mixin, Mixins.TextInput.Mixin {
        }
    }

    namespace BaseChoiceColorSchemaContentElementaryInputPureRender {
        interface Props extends Mixins.Base.Props, Mixins.Choice.Props, Mixins.ColorSchema.Props, Mixins.Content.Props, Mixins.Elementary.Props, Mixins.Input.Props, Mixins.PureRender.Props {
        }

        interface State extends Mixins.Base.State, Mixins.Choice.State, Mixins.ColorSchema.State, Mixins.Content.State, Mixins.Elementary.State, Mixins.Input.State, Mixins.PureRender.State {
        }

        interface Mixin extends Mixins.Base.Mixin, Mixins.Choice.Mixin, Mixins.ColorSchema.Mixin, Mixins.Content.Mixin, Mixins.Elementary.Mixin, Mixins.Input.Mixin, Mixins.PureRender.Mixin {
        }
    }

    namespace BaseElementaryFormPureRenderSection {
        interface Props extends Mixins.Base.Props, Mixins.Elementary.Props, Mixins.Form.Props, Mixins.PureRender.Props, Mixins.Section.Props {
        }

        interface State extends Mixins.Base.State, Mixins.Elementary.State, Mixins.Form.State, Mixins.PureRender.State, Mixins.Section.State {
        }

        interface Mixin extends Mixins.Base.Mixin, Mixins.Elementary.Mixin, Mixins.Form.Mixin, Mixins.PureRender.Mixin, Mixins.Section.Mixin {
        }
    }

    namespace BaseColorSchemaElementaryInputPureRenderScreenSize {
        interface Props extends Mixins.Base.Props, Mixins.ColorSchema.Props, Mixins.Elementary.Props, Mixins.Input.Props, Mixins.PureRender.Props, Mixins.ScreenSize.Props {
        }

        interface State extends Mixins.Base.State, Mixins.ColorSchema.State, Mixins.Elementary.State, Mixins.Input.State, Mixins.PureRender.State, Mixins.ScreenSize.State {
        }

        interface Mixin extends Mixins.Base.Mixin, Mixins.ColorSchema.Mixin, Mixins.Elementary.Mixin, Mixins.Input.Mixin, Mixins.PureRender.Mixin, Mixins.ScreenSize.Mixin {
        }
    }

    namespace BaseElementaryPureRenderTextInput {
        interface Props extends Mixins.Base.Props, Mixins.Elementary.Props, Mixins.PureRender.Props, Mixins.TextInput.Props {
        }

        interface State extends Mixins.Base.State, Mixins.Elementary.State, Mixins.PureRender.State, Mixins.TextInput.State {
        }

        interface Mixin extends Mixins.Base.Mixin, Mixins.Elementary.Mixin, Mixins.PureRender.Mixin, Mixins.TextInput.Mixin {
        }
    }

    namespace BaseChoiceColorSchemaContentElementaryInputPureRenderScreenSize {
        interface Props extends Mixins.Base.Props, Mixins.Choice.Props, Mixins.ColorSchema.Props, Mixins.Content.Props, Mixins.Elementary.Props, Mixins.Input.Props, Mixins.PureRender.Props, Mixins.ScreenSize.Props {
        }

        interface State extends Mixins.Base.State, Mixins.Choice.State, Mixins.ColorSchema.State, Mixins.Content.State, Mixins.Elementary.State, Mixins.Input.State, Mixins.PureRender.State, Mixins.ScreenSize.State {
        }

        interface Mixin extends Mixins.Base.Mixin, Mixins.Choice.Mixin, Mixins.ColorSchema.Mixin, Mixins.Content.Mixin, Mixins.Elementary.Mixin, Mixins.Input.Mixin, Mixins.PureRender.Mixin, Mixins.ScreenSize.Mixin {
        }
    }

    namespace BaseColorSchemaContentElementaryInputPureRender {
        interface Props extends Mixins.Base.Props, Mixins.ColorSchema.Props, Mixins.Content.Props, Mixins.Elementary.Props, Mixins.Input.Props, Mixins.PureRender.Props {
        }

        interface State extends Mixins.Base.State, Mixins.ColorSchema.State, Mixins.Content.State, Mixins.Elementary.State, Mixins.Input.State, Mixins.PureRender.State {
        }

        interface Mixin extends Mixins.Base.Mixin, Mixins.ColorSchema.Mixin, Mixins.Content.Mixin, Mixins.Elementary.Mixin, Mixins.Input.Mixin, Mixins.PureRender.Mixin {
        }
    }

    namespace BaseElementaryLsiPureRenderScreenSize {
        interface Props extends Mixins.Base.Props, Mixins.Elementary.Props, Mixins.Lsi.Props, Mixins.PureRender.Props, Mixins.ScreenSize.Props {
        }

        interface State extends Mixins.Base.State, Mixins.Elementary.State, Mixins.Lsi.State, Mixins.PureRender.State, Mixins.ScreenSize.State {
        }

        interface Mixin extends Mixins.Base.Mixin, Mixins.Elementary.Mixin, Mixins.Lsi.Mixin, Mixins.PureRender.Mixin, Mixins.ScreenSize.Mixin {
        }
    }

}

// endregion

// region components


declare namespace Bricks__Abbr {

    interface Props extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Props {
    }

    interface State extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.State {
    }

}


declare namespace Bricks__Accordion {

    interface Props extends CombinedMixins.BaseColorSchemaContentEditableElementaryNestingLevelPureRender.Props {
        panels?: any;
        onClickNotCollapseOthers?: any;
        iconExpanded?: any;
        iconCollapsed?: any;
        onClick?: any;
        allowTags?: any;
        size?: any;
        iconAlign?: any;
        openClick?: any;
    }

    interface State extends CombinedMixins.BaseColorSchemaContentEditableElementaryNestingLevelPureRender.State {
    }

}


declare namespace Bricks__Address {

    interface Props extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Props {
    }

    interface State extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.State {
    }

}


declare namespace Bricks__Alert {

    interface Props extends CombinedMixins.BaseColorSchemaElementaryNestingLevelPureRenderSection.Props {
        position?: any;
        closeTimer?: any;
        closeDisabled?: any;
        block?: any;
        onClose?: any;
        onCloseAfter?: any;
        onCloseBefore?: any;
    }

    interface State extends CombinedMixins.BaseColorSchemaElementaryNestingLevelPureRenderSection.State {
    }

}


declare namespace Bricks__AlertBus {

    interface Props extends CombinedMixins.BaseCcrWriterElementaryNestingLevelPureRender.Props {
        colorSchema?: any;
        position?: any;
        closeTimer?: any;
        closeDisabled?: any;
        block?: any;
        forceRender?: any;
        onClose?: any;
    }

    interface State extends CombinedMixins.BaseCcrWriterElementaryNestingLevelPureRender.State {
    }

}


declare namespace Bricks__Authenticated {

    interface Props extends CombinedMixins.BaseContentIdentity.Props {
        authenticated?: any;
        notAuthenticated?: any;
        pending?: any;
    }

    interface State extends CombinedMixins.BaseContentIdentity.State {
    }

}


declare namespace Bricks__Backdrop {

    interface Props extends CombinedMixins.BaseElementaryNestingLevelPureRender.Props {
        onClick?: any;
        onMouseOver?: any;
        background?: any;
    }

    interface State extends CombinedMixins.BaseElementaryNestingLevelPureRender.State {
    }

}


declare namespace Bricks__Badge {

    interface Props extends CombinedMixins.BaseColorSchemaContentElementaryNestingLevelPureRender.Props {
    }

    interface State extends CombinedMixins.BaseColorSchemaContentElementaryNestingLevelPureRender.State {
    }

}


declare namespace Bricks__Block {

    interface Props extends CombinedMixins.BaseColorSchemaContentEditableElementaryNestingLevelPureRender.Props {
        background?: any;
    }

    interface State extends CombinedMixins.BaseColorSchemaContentEditableElementaryNestingLevelPureRender.State {
    }

}


declare namespace Bricks__Blockquote {

    interface Props extends CombinedMixins.BaseColorSchemaContentElementaryNestingLevelPureRender.Props {
        background?: any;
        alignment?: any;
        footer?: any;
        footerAlignment?: any;
    }

    interface State extends CombinedMixins.BaseColorSchemaContentElementaryNestingLevelPureRender.State {
    }

}


declare namespace Bricks__BlockquoteFooter {

    interface Props extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Props {
        alignment?: any;
    }

    interface State extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.State {
    }

}


declare namespace Bricks__Box {

    interface Props extends CombinedMixins.BaseColorSchemaContentElementaryNestingLevelPureRender.Props {
        infoHeader?: any;
        infoContent?: any;
        disableClick?: any;
        bgStyle?: any;
        borderRadius?: any;
        elevation?: any;
        elevationHover?: any;
    }

    interface State extends CombinedMixins.BaseColorSchemaContentElementaryNestingLevelPureRender.State {
    }

}


declare namespace Bricks__Button {

    interface Props extends CombinedMixins.BaseColorSchemaContentEditableElementaryNestingLevelPureRender.Props {
        size?: any;
        displayBlock?: any;
        pressed?: any;
        bgStyle?: any;
        onClick?: any;
        href?: any;
        target?: any;
        smoothScroll?: any;
        offset?: any;
        borderRadius?: any;
        elevation?: any;
        elevationHover?: any;
        baseline?: any;
    }

    interface State extends CombinedMixins.BaseColorSchemaContentEditableElementaryNestingLevelPureRender.State {
        pressed: any;
    }

}


declare namespace Bricks__ButtonGroup {

    interface Props extends CombinedMixins.BaseColorSchemaContentElementaryNestingLevelPureRender.Props {
        size?: any;
        vertical?: any;
        allowTags?: any;
        bgStyle?: any;
        borderRadius?: any;
        elevation?: any;
        baseline?: any;
    }

    interface State extends CombinedMixins.BaseColorSchemaContentElementaryNestingLevelPureRender.State {
    }

}


declare namespace Bricks__ButtonSwitch {

    interface Props extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Props {
        onProps?: any;
        offProps?: any;
        switchedOn?: any;
        props?: any;
    }

    interface State extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.State {
    }

}


declare namespace Bricks__ButtonToTop {

    interface Props extends CombinedMixins.BaseColorSchemaElementaryNestingLevelPureRender.Props {
        icon?: any;
        offset?: any;
        scrollDuration?: any;
        size?: any;
        bgStyle?: any;
        borderRadius?: any;
        elevation?: any;
        elevationHover?: any;
    }

    interface State extends CombinedMixins.BaseColorSchemaElementaryNestingLevelPureRender.State {
        visible: any;
    }

}


declare namespace Bricks__Camera {

    interface Props extends CombinedMixins.BaseElementaryNestingLevelPureRender.Props {
    }

    interface State extends CombinedMixins.BaseElementaryNestingLevelPureRender.State {
    }

}


declare namespace Bricks__Card {

    interface Props extends CombinedMixins.BaseColorSchemaElementaryNestingLevelPureRenderSection.Props {
        elevation?: any;
        elevationHover?: any;
        inline?: any;
        width?: any;
        minWidth?: any;
        noSpaces?: any;
        bgStyle?: any;
        borderRadius?: any;
    }

    interface State extends CombinedMixins.BaseColorSchemaElementaryNestingLevelPureRenderSection.State {
    }

}


declare namespace Bricks__Carousel {

    interface Props extends CombinedMixins.BaseColorSchemaContentElementarySwipe.Props {
        hideControls?: any;
        hideIndicators?: any;
        activeIndex?: any;
        nextIcon?: any;
        prevIcon?: any;
        displayedItems?: any;
        type?: any;
        interval?: any;
        stepByOne?: any;
        allowTags?: any;
    }

    interface State extends CombinedMixins.BaseColorSchemaContentElementarySwipe.State {
        activeIndex: any;
        rowHeight: any;
        renderedChildren: any;
    }

}


declare namespace Bricks__CarouselItem {

    interface Props extends CombinedMixins.BaseContentElementary.Props {
    }

    interface State extends CombinedMixins.BaseContentElementary.State {
    }

}


declare namespace Bricks__ClickConfirm {

    interface Props extends CombinedMixins.BaseCcrWriterColorSchemaElementaryNestingLevelPureRender.Props {
    }

    interface State extends CombinedMixins.BaseCcrWriterColorSchemaElementaryNestingLevelPureRender.State {
    }

}


declare namespace Bricks__Code {

    interface Props extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Props {
    }

    interface State extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.State {
    }

}


declare namespace Bricks__CodePreview {

    interface Props extends CombinedMixins.BaseElementaryPureRender.Props {
        tagName?: any;
        props?: any;
        uu5string?: any;
    }

    interface State extends CombinedMixins.BaseElementaryPureRender.State {
        props: any;
        uu5string: any;
    }

}


declare namespace Bricks__Column {

    interface Props extends CombinedMixins.BaseElementaryNestingLevelPureRenderSection.Props {
        noSpacing?: any;
        width?: any;
        colWidth?: any;
    }

    interface State extends CombinedMixins.BaseElementaryNestingLevelPureRenderSection.State {
    }

}


declare namespace Bricks__Console {

    interface Props extends CombinedMixins.BaseElementaryNestingLevelPureRender.Props {
    }

    interface State extends CombinedMixins.BaseElementaryNestingLevelPureRender.State {
        content: any;
    }

}


declare namespace Bricks__Container {

    interface Props extends CombinedMixins.BaseElementaryNestingLevelPureRenderSection.Props {
        noSpacing?: any;
    }

    interface State extends CombinedMixins.BaseElementaryNestingLevelPureRenderSection.State {
    }

}


declare namespace Bricks__ContextMenu {

    interface Props extends CombinedMixins.BaseCcrWriterElementaryNestingLevelPureRenderSection.Props {
        shown?: any;
        forceRender?: any;
        parentElement?: any;
        allowTags?: any;
    }

    interface State extends CombinedMixins.BaseCcrWriterElementaryNestingLevelPureRenderSection.State {
    }

}


declare namespace Bricks__ContextMenuItem {

    interface Props extends CombinedMixins.BaseContentElementaryPureRender.Props {
        label?: any;
        href?: any;
        onClick?: any;
        smoothScroll?: any;
        offset?: any;
        target?: any;
        icon?: any;
        space?: any;
        header?: any;
        divider?: any;
        allowTags?: any;
    }

    interface State extends CombinedMixins.BaseContentElementaryPureRender.State {
    }

}


declare namespace Bricks__CookieBar {

    interface Props extends CombinedMixins.BaseColorSchemaContentElementaryNestingLevelPureRender.Props {
        infoText?: any;
        infoHref?: any;
        infoTarget?: any;
        fixed?: any;
        onClose?: any;
        expireDays?: any;
        cookieKey?: any;
        cookieValue?: any;
    }

    interface State extends CombinedMixins.BaseColorSchemaContentElementaryNestingLevelPureRender.State {
    }

}


declare namespace Bricks__CookiesInfo {

    interface Props extends CombinedMixins.BaseElementaryNestingLevelPureRender.Props {
        data?: any;
        headerLevel?: any;
        chapterLevel?: any;
    }

    interface State extends CombinedMixins.BaseElementaryNestingLevelPureRender.State {
    }

}


declare namespace Bricks__DataTable {

    interface Props extends CombinedMixins.BaseElementaryLsiNestingLevelPureRenderSection.Props {
        striped?: any;
        bordered?: any;
        hover?: any;
        condensed?: any;
        headerRow?: any;
        footerRow?: any;
        rows?: any;
    }

    interface State extends CombinedMixins.BaseElementaryLsiNestingLevelPureRenderSection.State {
    }

}


declare namespace Bricks__DateTime {

    interface Props extends CombinedMixins.BaseElementaryNestingLevelPureRender.Props {
        value?: any;
        format?: any;
        country?: any;
        timeZone?: any;
        onChange?: any;
        dateOnly?: any;
        timeOnly?: any;
        secondsDisabled?: any;
    }

    interface State extends CombinedMixins.BaseElementaryNestingLevelPureRender.State {
        format: any;
        country: any;
        timeZone: any;
    }

}


declare namespace Bricks__Dd {

    interface Props extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Props {
    }

    interface State extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.State {
    }

}


declare namespace Bricks__Del {

    interface Props extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Props {
    }

    interface State extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.State {
    }

}


declare namespace Bricks__Dl {

    interface Props extends CombinedMixins.BaseElementaryNestingLevelPureRenderSection.Props {
        allowTags?: any;
    }

    interface State extends CombinedMixins.BaseElementaryNestingLevelPureRenderSection.State {
    }

}


declare namespace Bricks__DraggableItem {

    interface Props extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Props {
        x?: any;
        y?: any;
        onMoveStart?: any;
        onMove?: any;
        onMoveEnd?: any;
    }

    interface State extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.State {
        x: any;
        y: any;
    }

}


declare namespace Bricks__Dropdown {

    interface Props extends CombinedMixins.BaseColorSchemaContentEditableElementaryNestingLevelPureRender.Props {
        label?: any;
        size?: any;
        onClick?: any;
        bgStyle?: any;
        iconOpen?: any;
        iconClosed?: any;
        iconHidden?: any;
        items?: any;
        pullRight?: any;
        dropup?: any;
        split?: any;
        smoothScroll?: any;
        offset?: any;
        closedOnLeave?: any;
        openOnHover?: any;
        allowTags?: any;
        disableBackdrop?: any;
        menuClassName?: any;
        borderRadius?: any;
        elevation?: any;
        elevationHover?: any;
        buttonProps?: any;
        splitButtonProps?: any;
        baseline?: any;
    }

    interface State extends CombinedMixins.BaseColorSchemaContentEditableElementaryNestingLevelPureRender.State {
        open: any;
        pullRight: any;
        block: any;
    }

}


declare namespace Bricks__DropdownItem {

    interface Props extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Props {
        header?: any;
        divider?: any;
        label?: any;
        href?: any;
        onClick?: any;
        smoothScroll?: any;
        offset?: any;
        target?: any;
        dropup?: any;
        linkProps?: any;
    }

    interface State extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.State {
    }

}


declare namespace Bricks__Dt {

    interface Props extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Props {
    }

    interface State extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.State {
    }

}


declare namespace Bricks__Em {

    interface Props extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Props {
    }

    interface State extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.State {
    }

}


declare namespace Bricks__FileViewer {

    interface Props extends CombinedMixins.BaseElementaryNestingLevelPureRender.Props {
        src?: any;
        parameters?: any;
        numbered?: any;
        trimmed?: any;
        blockKey?: any;
        blockStart?: any;
        blockEnd?: any;
    }

    interface State extends CombinedMixins.BaseElementaryNestingLevelPureRender.State {
    }

}


declare namespace Bricks__Footer {

    interface Props extends CombinedMixins.BaseContentElementaryLevelNestingLevelPureRender.Props {
    }

    interface State extends CombinedMixins.BaseContentElementaryLevelNestingLevelPureRender.State {
    }

}


declare namespace Bricks__GoogleMap {

    interface Props extends CombinedMixins.BaseElementaryNestingLevelPureRender.Props {
        mapType?: any;
        mapRef?: any;
        latitude?: any;
        longitude?: any;
        markers?: any;
        zoom?: any;
        disableZoom?: any;
        draggable?: any;
        disableDefaultUI?: any;
        googleApiKey?: any;
        height?: any;
        width?: any;
        mapStyle?: any;
    }

    interface State extends CombinedMixins.BaseElementaryNestingLevelPureRender.State {
    }

}


declare namespace Bricks__Header {

    interface Props extends CombinedMixins.BaseColorSchemaContentEditableElementaryLevelNestingLevelPureRender.Props {
        underline?: any;
    }

    interface State extends CombinedMixins.BaseColorSchemaContentEditableElementaryLevelNestingLevelPureRender.State {
    }

}


declare namespace Bricks__Heading {

    interface Props extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Props {
        fixed?: any;
        fixedOnScroll?: any;
        hideOnScroll?: any;
        hideOnScrollOffset?: any;
        onScrollToFixed?: any;
        onScrollToBlocked?: any;
        spaceHolder?: any;
    }

    interface State extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.State {
        fixed: any;
        hideOnScrollHidden: any;
    }

}


declare namespace Bricks__HomeScreen {

    interface Props extends CombinedMixins.BaseElementaryLsiNestingLevelPureRender.Props {
        appID?: any;
        skipFirstVisit?: any;
        startDelay?: any;
        lifespan?: any;
        displayPace?: any;
        maxDisplayCount?: any;
        message?: any;
        detectHomescreen?: any;
    }

    interface State extends CombinedMixins.BaseElementaryLsiNestingLevelPureRender.State {
    }

}


declare namespace Bricks__Icon {

    interface Props extends CombinedMixins.BaseElementaryNestingLevelPureRender.Props {
        icon?: any;
        clickable?: any;
        src?: any;
        authenticate?: any;
    }

    interface State extends CombinedMixins.BaseElementaryNestingLevelPureRender.State {
        preloading: any;
        response: any;
    }

}


declare namespace Bricks__Iframe {

    interface Props extends CombinedMixins.BaseElementaryNestingLevelPureRender.Props {
        src?: any;
        resize?: any;
        height?: any;
        syncTimeout?: any;
        inline?: any;
        iframeAttrs?: any;
    }

    interface State extends CombinedMixins.BaseElementaryNestingLevelPureRender.State {
        loading: any;
        height: any;
        width: any;
        visible: any;
    }

}


declare namespace Bricks__Image {

    interface Props extends CombinedMixins.BaseElementaryNestingLevelPureRender.Props {
        type?: any;
        src?: any;
        responsive?: any;
        alt?: any;
        authenticate?: any;
        borderRadius?: any;
        elevation?: any;
    }

    interface State extends CombinedMixins.BaseElementaryNestingLevelPureRender.State {
        preloading: any;
        preloadedUri: any;
    }

}


declare namespace Bricks__Ins {

    interface Props extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Props {
    }

    interface State extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.State {
    }

}


declare namespace Bricks__Jumbotron {

    interface Props extends CombinedMixins.BaseColorSchemaContentElementaryNestingLevelPureRender.Props {
        bgStyle?: any;
        borderRadius?: any;
        elevation?: any;
    }

    interface State extends CombinedMixins.BaseColorSchemaContentElementaryNestingLevelPureRender.State {
    }

}


declare namespace Bricks__Kbd {

    interface Props extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Props {
    }

    interface State extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.State {
    }

}


declare namespace Bricks__Label {

    interface Props extends CombinedMixins.BaseColorSchemaContentElementaryNestingLevelPureRender.Props {
        bgStyle?: any;
        borderRadius?: any;
        elevation?: any;
        elevationHover?: any;
        icon?: any;
        iconAlign?: any;
        iconOnClick?: any;
        onClick?: any;
    }

    interface State extends CombinedMixins.BaseColorSchemaContentElementaryNestingLevelPureRender.State {
    }

}


declare namespace Bricks__LanguageSelector {

    interface Props extends CombinedMixins.BaseColorSchemaElementaryLsiNestingLevelPureRenderScreenSize.Props {
        headerMode?: any;
        bodyMode?: any;
        displayedLanguages?: any;
        languages?: any;
        defaultLanguage?: any;
        size?: any;
        bgStyle?: any;
        pullRight?: any;
        dropup?: any;
        borderRadius?: any;
        elevation?: any;
        elevationHover?: any;
        baseline?: any;
    }

    interface State extends CombinedMixins.BaseColorSchemaElementaryLsiNestingLevelPureRenderScreenSize.State {
        languages: any;
    }

}


declare namespace Bricks__Lead {

    interface Props extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Props {
    }

    interface State extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.State {
    }

}


declare namespace Bricks__Li {

    interface Props extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Props {
        markerIcon?: any;
        iconColorSchema?: any;
        icon?: any;
    }

    interface State extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.State {
    }

}


declare namespace Bricks__Line {

    interface Props extends CombinedMixins.BaseColorSchemaElementaryNestingLevelPureRender.Props {
        size?: any;
        borderRadius?: any;
        vertical?: any;
    }

    interface State extends CombinedMixins.BaseColorSchemaElementaryNestingLevelPureRender.State {
    }

}


declare namespace Bricks__Link {

    interface Props extends CombinedMixins.BaseColorSchemaContentElementaryNestingLevelPureRender.Props {
        href?: any;
        onClick?: any;
        onCtrlClick?: any;
        onWheelClick?: any;
        smoothScroll?: any;
        offset?: any;
        target?: any;
        download?: any;
    }

    interface State extends CombinedMixins.BaseColorSchemaContentElementaryNestingLevelPureRender.State {
    }

}


declare namespace Bricks__LinkBootstrap {

    interface Props extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Props {
    }

    interface State extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.State {
    }

}


declare namespace Bricks__LinkBusinessTerritory {

    interface Props extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Props {
    }

    interface State extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.State {
    }

}


declare namespace Bricks__LinkCSS {

    interface Props extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Props {
    }

    interface State extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.State {
    }

}


declare namespace Bricks__LinkDocker {

    interface Props extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Props {
    }

    interface State extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.State {
    }

}


declare namespace Bricks__LinkHTML5 {

    interface Props extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Props {
    }

    interface State extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.State {
    }

}


declare namespace Bricks__LinkJavaScript {

    interface Props extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Props {
    }

    interface State extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.State {
    }

}


declare namespace Bricks__LinkJQuery {

    interface Props extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Props {
    }

    interface State extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.State {
    }

}


declare namespace Bricks__LinkMaterialDesign {

    interface Props extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Props {
    }

    interface State extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.State {
    }

}


declare namespace Bricks__LinkMongoDB {

    interface Props extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Props {
    }

    interface State extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.State {
    }

}


declare namespace Bricks__LinkMSAzure {

    interface Props extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Props {
    }

    interface State extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.State {
    }

}


declare namespace Bricks__LinkMyTerritory {

    interface Props extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Props {
    }

    interface State extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.State {
    }

}


declare namespace Bricks__LinkPlus4U {

    interface Props extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Props {
    }

    interface State extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.State {
    }

}


declare namespace Bricks__LinkPuma {

    interface Props extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Props {
    }

    interface State extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.State {
    }

}


declare namespace Bricks__LinkReact {

    interface Props extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Props {
    }

    interface State extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.State {
    }

}


declare namespace Bricks__LinkRuby {

    interface Props extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Props {
    }

    interface State extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.State {
    }

}


declare namespace Bricks__LinkUAF {

    interface Props extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Props {
    }

    interface State extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.State {
    }

}


declare namespace Bricks__LinkUnicorn {

    interface Props extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Props {
    }

    interface State extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.State {
    }

}


declare namespace Bricks__LinkUnicornApproach {

    interface Props extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Props {
    }

    interface State extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.State {
    }

}


declare namespace Bricks__LinkUnicornCollege {

    interface Props extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Props {
    }

    interface State extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.State {
    }

}


declare namespace Bricks__LinkUnicornSystems {

    interface Props extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Props {
    }

    interface State extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.State {
    }

}


declare namespace Bricks__LinkUnicornUniverse {

    interface Props extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Props {
    }

    interface State extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.State {
    }

}


declare namespace Bricks__LinkUU5 {

    interface Props extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Props {
    }

    interface State extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.State {
    }

}


declare namespace Bricks__LinkUu5CodeKit {

    interface Props extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Props {
    }

    interface State extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.State {
    }

}


declare namespace Bricks__LinkUu5LibraryRegistry {

    interface Props extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Props {
    }

    interface State extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.State {
    }

}


declare namespace Bricks__LinkUuApp {

    interface Props extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Props {
    }

    interface State extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.State {
    }

}


declare namespace Bricks__LinkUuAppServer {

    interface Props extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Props {
    }

    interface State extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.State {
    }

}


declare namespace Bricks__LinkUuAppServerJava {

    interface Props extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Props {
    }

    interface State extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.State {
    }

}


declare namespace Bricks__LinkUuBmlDraw {

    interface Props extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Props {
    }

    interface State extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.State {
    }

}


declare namespace Bricks__LinkUuBookKit {

    interface Props extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Props {
    }

    interface State extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.State {
    }

}


declare namespace Bricks__LinkUuBT {

    interface Props extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Props {
    }

    interface State extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.State {
    }

}


declare namespace Bricks__LinkUuCloud {

    interface Props extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Props {
    }

    interface State extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.State {
    }

}


declare namespace Bricks__LinkUuDocKit {

    interface Props extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Props {
    }

    interface State extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.State {
    }

}


declare namespace Bricks__LinkUuKnowledgeBase {

    interface Props extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Props {
    }

    interface State extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.State {
    }

}


declare namespace Bricks__LinkUuMT {

    interface Props extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Props {
    }

    interface State extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.State {
    }

}


declare namespace Bricks__LinkUuOIDC {

    interface Props extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Props {
    }

    interface State extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.State {
    }

}


declare namespace Bricks__LinkUuP {

    interface Props extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Props {
    }

    interface State extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.State {
    }

}


declare namespace Bricks__LinkUuPlus4U5 {

    interface Props extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Props {
    }

    interface State extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.State {
    }

}


declare namespace Bricks__LinkW3Schools {

    interface Props extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Props {
    }

    interface State extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.State {
    }

}


declare namespace Bricks__Loader {

    interface Props extends CombinedMixins.Base.Props {
        uri?: any;
        method?: any;
        data?: any;
        headers?: any;
        onLoad?: any;
        loading?: any;
        error?: any;
        reloadInterval?: any;
    }

    interface State extends CombinedMixins.Base.State {
    }

}


declare namespace Bricks__Loading {

    interface Props extends CombinedMixins.BaseColorSchemaContentElementaryNestingLevelPureRender.Props {
        inline?: any;
    }

    interface State extends CombinedMixins.BaseColorSchemaContentElementaryNestingLevelPureRender.State {
    }

}


declare namespace Bricks__Lsi {

    interface Props extends CombinedMixins.BaseContentElementaryLsiNestingLevelPureRender.Props {
        lsi?: any;
        allowTags?: any;
        params?: any;
    }

    interface State extends CombinedMixins.BaseContentElementaryLsiNestingLevelPureRender.State {
    }

}


declare namespace Bricks__LsiContext {

    interface Props extends CombinedMixins.BaseContent.Props {
        localLsi?: any;
    }

    interface State extends CombinedMixins.BaseContent.State {
        providerValue: any;
    }

}


declare namespace Bricks__LsiItem {

    interface Props extends CombinedMixins.BaseContentElementaryPureRender.Props {
        language?: any;
    }

    interface State extends CombinedMixins.BaseContentElementaryPureRender.State {
    }

}


declare namespace Bricks__Mark {

    interface Props extends CombinedMixins.BaseColorSchemaContentElementaryNestingLevelPureRender.Props {
    }

    interface State extends CombinedMixins.BaseColorSchemaContentElementaryNestingLevelPureRender.State {
    }

}


declare namespace Bricks__Modal {

    interface Props extends CombinedMixins.BaseCcrReaderElementaryNestingLevelPureRenderSection.Props {
        size?: any;
        shown?: any;
        sticky?: any;
        stickyBackground?: any;
        scrollableBackground?: any;
        forceRender?: any;
        onClose?: any;
    }

    interface State extends CombinedMixins.BaseCcrReaderElementaryNestingLevelPureRenderSection.State {
        header: any;
        content: any;
        footer: any;
        className: any;
        size: any;
        sticky: any;
        stickyBackground: any;
        scrollableBackground: any;
        onClose: any;
    }

}


declare namespace Bricks__ModalBody {

    interface Props extends CombinedMixins.BaseContentElementaryPureRender.Props {
    }

    interface State extends CombinedMixins.BaseContentElementaryPureRender.State {
    }

}


declare namespace Bricks__ModalFooter {

    interface Props extends CombinedMixins.BaseContentElementaryPureRender.Props {
    }

    interface State extends CombinedMixins.BaseContentElementaryPureRender.State {
    }

}


declare namespace Bricks__ModalHeader {

    interface Props extends CombinedMixins.BaseContentElementaryPureRender.Props {
        _sticky?: any;
        _onClose?: any;
    }

    interface State extends CombinedMixins.BaseContentElementaryPureRender.State {
    }

}


declare namespace Bricks__NavBar {

    interface Props extends CombinedMixins.BaseColorSchemaContentElementaryNestingLevelPureRender.Props {
        fixed?: any;
        smoothScroll?: any;
        offset?: any;
        open?: any;
        alwaysOpen?: any;
        iconOpen?: any;
        iconClosed?: any;
        onOpen?: any;
        onClose?: any;
        size?: any;
        elevation?: any;
    }

    interface State extends CombinedMixins.BaseColorSchemaContentElementaryNestingLevelPureRender.State {
        height: any;
        offset: any;
        expanded: any;
    }

}


declare namespace Bricks__NavBarHeader {

    interface Props extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Props {
        _icon?: any;
        _size?: any;
        _hamburger?: any;
        _onOpen?: any;
        _onClose?: any;
    }

    interface State extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.State {
    }

}


declare namespace Bricks__NavBarNav {

    interface Props extends CombinedMixins.BaseContentElementaryPureRender.Props {
        aligned?: any;
        smoothScroll?: any;
        offset?: any;
        allowTags?: any;
        _size?: any;
    }

    interface State extends CombinedMixins.BaseContentElementaryPureRender.State {
    }

}


declare namespace Bricks__NavBarNavItem {

    interface Props extends CombinedMixins.BaseColorSchemaContentElementaryPureRender.Props {
        onClick?: any;
        _size?: any;
    }

    interface State extends CombinedMixins.BaseColorSchemaContentElementaryPureRender.State {
    }

}


declare namespace Bricks__Newspaper {

    interface Props extends CombinedMixins.BaseColorSchemaElementaryNestingLevelPureRenderSection.Props {
        columnsCount?: any;
    }

    interface State extends CombinedMixins.BaseColorSchemaElementaryNestingLevelPureRenderSection.State {
    }

}


declare namespace Bricks__Number {

    interface Props extends CombinedMixins.BaseElementaryNestingLevelPureRender.Props {
        value?: any;
        onChange?: any;
        thousandSeparator?: any;
        decimalSeparator?: any;
        minDecimalLength?: any;
        maxDecimalLength?: any;
        rounded?: any;
    }

    interface State extends CombinedMixins.BaseElementaryNestingLevelPureRender.State {
    }

}


declare namespace Bricks__Ol {

    interface Props extends CombinedMixins.BaseElementaryNestingLevelSection.Props {
        allowTags?: any;
        type?: any;
    }

    interface State extends CombinedMixins.BaseElementaryNestingLevelSection.State {
    }

}


declare namespace Bricks__P {

    interface Props extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Props {
    }

    interface State extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.State {
    }

}


declare namespace Bricks__Page {

    interface Props extends CombinedMixins.BaseCcrWriterContentElementaryNestingLevelPureRenderScreenSize.Props {
        type?: any;
        fullPage?: any;
        topWrapperProps?: any;
        bottomWrapperProps?: any;
        leftWrapperProps?: any;
        rightWrapperProps?: any;
        contentWrapperProps?: any;
        appLayerWrapperProps?: any;
        systemLayerWrapperProps?: any;
        switchElevationTopBottom?: any;
        switchElevationLeftRight?: any;
        isLeftOpen?: any;
        isRightOpen?: any;
        top?: any;
        bottom?: any;
        left?: any;
        leftOpen?: any;
        leftClosed?: any;
        right?: any;
        rightOpen?: any;
        rightClosed?: any;
        alertBus?: any;
        modal?: any;
        appLayerContent?: any;
        systemLayerContent?: any;
        leftWidth?: any;
        rightWidth?: any;
        leftSwipe?: any;
        rightSwipe?: any;
        topFixed?: any;
        topFixedHeight?: any;
        bottomFixed?: any;
        bottomFixedHeight?: any;
        leftFixed?: any;
        rightFixed?: any;
        leftRelative?: any;
        rightRelative?: any;
    }

    interface State extends CombinedMixins.BaseCcrWriterContentElementaryNestingLevelPureRenderScreenSize.State {
        widths: any;
    }

}


declare namespace Bricks__PageBottom {

    interface Props extends CombinedMixins.BaseContentPureRender.Props {
        fixed?: any;
        fixedHeight?: any;
        topId?: any;
    }

    interface State extends CombinedMixins.BaseContentPureRender.State {
        isInInitialPosition: any;
        onScrollHidden: any;
        transform: any;
    }

}


declare namespace Bricks__PageColumn {

    interface Props extends CombinedMixins.BaseElementaryPureRender.Props {
        width?: any;
        minWidth?: any;
        maxWidth?: any;
        right?: any;
        button?: any;
        open?: any;
        block?: any;
        openContent?: any;
        closedContent?: any;
        elevation?: any;
        topId?: any;
        fixed?: any;
        topFixed?: any;
        topFixedHeight?: any;
        bottomFixed?: any;
        bottomFixedHeight?: any;
        overlayTop?: any;
        overlayBottom?: any;
        relative?: any;
        onUpdate?: any;
        bottomId?: any;
        contentId?: any;
    }

    interface State extends CombinedMixins.BaseElementaryPureRender.State {
        style: any;
        open: any;
        topHidden: any;
        bottomHidden: any;
        topFixed: any;
        bottomFixed: any;
        topHeight: any;
        bottomHeight: any;
        animateTop: any;
        animateBottom: any;
    }

}


declare namespace Bricks__PageMenuButton {

    interface Props extends CombinedMixins.BaseCcrReaderColorSchemaContentElementaryNestingLevel.Props {
        menu?: any;
        onClick?: any;
        pageKey?: any;
        size?: any;
        displayBlock?: any;
        pressed?: any;
        bgStyle?: any;
        borderRadius?: any;
        elevation?: any;
        elevationHover?: any;
    }

    interface State extends CombinedMixins.BaseCcrReaderColorSchemaContentElementaryNestingLevel.State {
    }

}


declare namespace Bricks__PageSwiper {

    interface Props extends CombinedMixins.BaseContentElementaryNestingLevelPureRenderSwipe.Props {
        leftSwipe?: any;
        rightSwipe?: any;
    }

    interface State extends CombinedMixins.BaseContentElementaryNestingLevelPureRenderSwipe.State {
    }

}


declare namespace Bricks__PageTop {

    interface Props extends CombinedMixins.BaseContentPureRender.Props {
        fixed?: any;
        fixedHeight?: any;
        bottomId?: any;
        leftFixed?: any;
        rightFixed?: any;
    }

    interface State extends CombinedMixins.BaseContentPureRender.State {
        initialPosition: any;
        onScrollHidden: any;
        transform: any;
        animate: any;
    }

}


declare namespace Bricks__Pager {

    interface Props extends CombinedMixins.BaseColorSchemaElementaryNestingLevelPureRender.Props {
        leftLink?: any;
        rightLink?: any;
        upLink?: any;
        downLink?: any;
        size?: any;
        bgStyle?: any;
        borderRadius?: any;
        background?: any;
    }

    interface State extends CombinedMixins.BaseColorSchemaElementaryNestingLevelPureRender.State {
    }

}


declare namespace Bricks__Pagination {

    interface Props extends CombinedMixins.BaseColorSchemaElementaryNestingLevelPureRender.Props {
        items?: any;
        activeIndex?: any;
        range?: any;
        prevIcon?: any;
        prevLabel?: any;
        nextIcon?: any;
        nextLabel?: any;
        firstIcon?: any;
        firstLabel?: any;
        lastIcon?: any;
        lastLabel?: any;
        size?: any;
        onChange?: any;
        onChanged?: any;
        bgStyle?: any;
        colorSchemaInactive?: any;
        borderRadius?: any;
    }

    interface State extends CombinedMixins.BaseColorSchemaElementaryNestingLevelPureRender.State {
        activeIndex: any;
    }

}


declare namespace Bricks__Panel {

    interface Props extends CombinedMixins.BaseColorSchemaElementaryNestingLevelPureRenderSection.Props {
        expanded?: any;
        alwaysExpanded?: any;
        iconExpanded?: any;
        iconCollapsed?: any;
        onClick?: any;
        disableHeaderClick?: any;
        size?: any;
        bgStyle?: any;
        bgStyleHeader?: any;
        bgStyleContent?: any;
        colorSchemaHeader?: any;
        colorSchemaContent?: any;
        borderRadius?: any;
        elevation?: any;
        iconAlign?: any;
        openClick?: any;
    }

    interface State extends CombinedMixins.BaseColorSchemaElementaryNestingLevelPureRenderSection.State {
        expanded: any;
    }

}


declare namespace Bricks__PanelBody {

    interface Props extends CombinedMixins.BaseColorSchemaContentElementaryPureRender.Props {
        _expanded?: any;
        bgStyle?: any;
    }

    interface State extends CombinedMixins.BaseColorSchemaContentElementaryPureRender.State {
    }

}


declare namespace Bricks__PanelHeader {

    interface Props extends CombinedMixins.BaseColorSchemaContentElementaryPureRender.Props {
        _icon?: any;
        _onClick?: any;
        _disableHeaderClick?: any;
        iconAlign?: any;
        openClick?: any;
        bgStyle?: any;
    }

    interface State extends CombinedMixins.BaseColorSchemaContentElementaryPureRender.State {
    }

}


declare namespace Bricks__Paragraph {

    interface Props extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Props {
    }

    interface State extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.State {
    }

}


declare namespace Bricks__Popover {

    interface Props extends CombinedMixins.BaseCcrWriterElementaryNestingLevelPureRenderSection.Props {
        shown?: any;
        forceRender?: any;
        fitHeightToViewport?: any;
    }

    interface State extends CombinedMixins.BaseCcrWriterElementaryNestingLevelPureRenderSection.State {
        header: any;
        content: any;
        footer: any;
        className: any;
        bodyClassName: any;
        pageX: any;
        pageY: any;
        width: any;
        maxHeight: any;
        disableBackdrop: any;
        position: any;
        removeHeight: any;
        display: any;
    }

}


declare namespace Bricks__Pre {

    interface Props extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Props {
    }

    interface State extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.State {
    }

}


declare namespace Bricks__ProgressBar {

    interface Props extends CombinedMixins.BaseColorSchemaContentElementaryNestingLevelPureRender.Props {
        progress?: any;
        striped?: any;
        animated?: any;
        allowTags?: any;
        size?: any;
    }

    interface State extends CombinedMixins.BaseColorSchemaContentElementaryNestingLevelPureRender.State {
    }

}


declare namespace Bricks__ProgressBarCover {

    interface Props extends CombinedMixins.BaseElementaryPureRender.Props {
    }

    interface State extends CombinedMixins.BaseElementaryPureRender.State {
    }

}


declare namespace Bricks__ProgressBarItem {

    interface Props extends CombinedMixins.BaseColorSchemaContentElementaryNestingLevelPureRender.Props {
        progress?: any;
        striped?: any;
        animated?: any;
    }

    interface State extends CombinedMixins.BaseColorSchemaContentElementaryNestingLevelPureRender.State {
    }

}


declare namespace Bricks__ProgressBus {

    interface Props extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Props {
        position?: any;
        verticalPosition?: any;
        alertPosition?: any;
    }

    interface State extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.State {
    }

}


declare namespace Bricks__Rating {

    interface Props extends CombinedMixins.BaseColorSchemaElementaryPureRender.Props {
        count?: any;
        value?: any;
        onClick?: any;
        icon?: any;
        size?: any;
    }

    interface State extends CombinedMixins.BaseColorSchemaElementaryPureRender.State {
    }

}


declare namespace Bricks__Resize {

    interface Props extends CombinedMixins.BaseContentElementaryNestingLevelResize.Props {
        height?: any;
    }

    interface State extends CombinedMixins.BaseContentElementaryNestingLevelResize.State {
        width: any;
        height: any;
    }

}


declare namespace Bricks__ResizeItem {

    interface Props extends CombinedMixins.BaseContentElementaryNestingLevel.Props {
        max?: any;
    }

    interface State extends CombinedMixins.BaseContentElementaryNestingLevel.State {
    }

}


declare namespace Bricks__ResizeObserver {

    interface Props extends CombinedMixins.Base.Props {
        onResize?: any;
    }

    interface State extends CombinedMixins.Base.State {
    }

}


declare namespace Bricks__Row {

    interface Props extends CombinedMixins.BaseElementaryNestingLevelPureRenderSection.Props {
        noSpacing?: any;
        display?: any;
    }

    interface State extends CombinedMixins.BaseElementaryNestingLevelPureRenderSection.State {
    }

}


declare namespace Bricks__S {

    interface Props extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Props {
    }

    interface State extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.State {
    }

}


declare namespace Bricks__Samp {

    interface Props extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Props {
    }

    interface State extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.State {
    }

}


declare namespace Bricks__ScreenSize {

    interface Props extends CombinedMixins.BaseContentElementaryNestingLevelScreenSize.Props {
        screenSize?: any;
    }

    interface State extends CombinedMixins.BaseContentElementaryNestingLevelScreenSize.State {
    }

}


declare namespace Bricks__ScreenSizeItem {

    interface Props extends CombinedMixins.BaseContentElementaryNestingLevel.Props {
        screenSize?: any;
    }

    interface State extends CombinedMixins.BaseContentElementaryNestingLevel.State {
    }

}


declare namespace Bricks__ScrollArea {

    interface Props extends CombinedMixins.BaseContent.Props {
        customScrollbar?: any;
        reserveSpace?: any;
        hideOnBlur?: any;
        onDisplayBar?: any;
        onHideBar?: any;
        initialScrollTop?: any;
    }

    interface State extends CombinedMixins.BaseContent.State {
        hasScrollbar: any;
    }

}


declare namespace Bricks__Section {

    interface Props extends CombinedMixins.BaseColorSchemaEditableElementaryNestingLevelPureRenderSection.Props {
    }

    interface State extends CombinedMixins.BaseColorSchemaEditableElementaryNestingLevelPureRenderSection.State {
    }

}


declare namespace Bricks__Slider {

    interface Props extends CombinedMixins.BaseColorSchemaContentElementaryNestingLevelPureRender.Props {
        vertical?: any;
        min?: any;
        max?: any;
        step?: any;
        value?: any;
        onChange?: any;
        onChanged?: any;
        size?: any;
        allowTags?: any;
    }

    interface State extends CombinedMixins.BaseColorSchemaContentElementaryNestingLevelPureRender.State {
        active: any;
        activePointer: any;
    }

}


declare namespace Bricks__SliderItem {

    interface Props extends CombinedMixins.BaseContentElementary.Props {
        value?: any;
        _min?: any;
        _max?: any;
        _step?: any;
        _getStyle?: any;
        _checkValue?: any;
    }

    interface State extends CombinedMixins.BaseContentElementary.State {
        value: any;
    }

}


declare namespace Bricks__Small {

    interface Props extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Props {
    }

    interface State extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.State {
    }

}


declare namespace Bricks__Span {

    interface Props extends CombinedMixins.BaseContentElementaryPureRender.Props {
    }

    interface State extends CombinedMixins.BaseContentElementaryPureRender.State {
    }

}


declare namespace Bricks__Spreadsheet {

    interface Props extends CombinedMixins.BaseElementaryPureRenderSection.Props {
        striped?: any;
        bordered?: any;
        hover?: any;
        condensed?: any;
        cols?: any;
        rows?: any;
        cells?: any;
    }

    interface State extends CombinedMixins.BaseElementaryPureRenderSection.State {
    }

}


declare namespace Bricks__Stepper {

    interface Props extends CombinedMixins.BaseColorSchemaElementaryNestingLevelResize.Props {
        size?: any;
        orientation?: any;
        onClick?: any;
        elevation?: any;
        topVisitedStep?: any;
        currentStep?: any;
        hideText?: any;
        alignment?: any;
        itemProps?: any;
    }

    interface State extends CombinedMixins.BaseColorSchemaElementaryNestingLevelResize.State {
        firstRender: any;
    }

}


declare namespace Bricks__StepperItem {

    interface Props extends CombinedMixins.BaseColorSchemaElementary.Props {
        size?: any;
        onClick?: any;
        borderRadius?: any;
        bgStyle?: any;
        elevation?: any;
        topVisitedStep?: any;
        currentStep?: any;
        index?: any;
    }

    interface State extends CombinedMixins.BaseColorSchemaElementary.State {
    }

}


declare namespace Bricks__Strong {

    interface Props extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Props {
    }

    interface State extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.State {
    }

}


declare namespace Bricks__Swiper {

    interface Props extends CombinedMixins.BaseContentElementaryNestingLevelPureRenderSwipe.Props {
        leftMenuOpen?: any;
        rightMenuOpen?: any;
        onSwipeOpenLeftMenu?: any;
        onSwipeCloseLeftMenu?: any;
        onSwipeOpenRightMenu?: any;
        onSwipeCloseRightMenu?: any;
        allowBodyTags?: any;
        allowMenuTags?: any;
    }

    interface State extends CombinedMixins.BaseContentElementaryNestingLevelPureRenderSwipe.State {
    }

}


declare namespace Bricks__SwiperBody {

    interface Props extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Props {
    }

    interface State extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.State {
    }

}


declare namespace Bricks__SwiperMenu {

    interface Props extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Props {
        pullRight?: any;
        _open?: any;
    }

    interface State extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.State {
    }

}


declare namespace Bricks__Switch {

    interface Props extends CombinedMixins.BaseColorSchemaElementaryPureRender.Props {
        switchedOn?: any;
        size?: any;
        offIcon?: any;
        onIcon?: any;
        onChange?: any;
        loading?: any;
        colorSchemaOff?: any;
    }

    interface State extends CombinedMixins.BaseColorSchemaElementaryPureRender.State {
        switchedOn: any;
    }

}


declare namespace Bricks__Table {

    interface Props extends CombinedMixins.BaseColorSchemaElementaryNestingLevelPureRenderSection.Props {
        striped?: any;
        bordered?: any;
        hover?: any;
        condensed?: any;
        responsive?: any;
        allowTags?: any;
    }

    interface State extends CombinedMixins.BaseColorSchemaElementaryNestingLevelPureRenderSection.State {
    }

}


declare namespace Bricks__TableCol {

    interface Props extends CombinedMixins.BaseColorSchemaElementaryNestingLevelPureRender.Props {
        span?: any;
    }

    interface State extends CombinedMixins.BaseColorSchemaElementaryNestingLevelPureRender.State {
    }

}


declare namespace Bricks__TableColGroup {

    interface Props extends CombinedMixins.BaseColorSchemaContentElementaryNestingLevelPureRender.Props {
        allowTags?: any;
    }

    interface State extends CombinedMixins.BaseColorSchemaContentElementaryNestingLevelPureRender.State {
    }

}


declare namespace Bricks__TableTbody {

    interface Props extends CombinedMixins.BaseColorSchemaContentElementaryNestingLevelPureRender.Props {
        allowTags?: any;
    }

    interface State extends CombinedMixins.BaseColorSchemaContentElementaryNestingLevelPureRender.State {
    }

}


declare namespace Bricks__TableTd {

    interface Props extends CombinedMixins.BaseColorSchemaContentElementaryNestingLevelPureRender.Props {
        colSpan?: any;
        rowSpan?: any;
    }

    interface State extends CombinedMixins.BaseColorSchemaContentElementaryNestingLevelPureRender.State {
    }

}


declare namespace Bricks__TableTfoot {

    interface Props extends CombinedMixins.BaseColorSchemaContentElementaryNestingLevelPureRender.Props {
        allowTags?: any;
    }

    interface State extends CombinedMixins.BaseColorSchemaContentElementaryNestingLevelPureRender.State {
    }

}


declare namespace Bricks__TableTh {

    interface Props extends CombinedMixins.BaseColorSchemaContentElementaryNestingLevelPureRender.Props {
        colSpan?: any;
        rowSpan?: any;
    }

    interface State extends CombinedMixins.BaseColorSchemaContentElementaryNestingLevelPureRender.State {
    }

}


declare namespace Bricks__TableThead {

    interface Props extends CombinedMixins.BaseColorSchemaContentElementaryNestingLevelPureRender.Props {
        allowTags?: any;
    }

    interface State extends CombinedMixins.BaseColorSchemaContentElementaryNestingLevelPureRender.State {
    }

}


declare namespace Bricks__TableTr {

    interface Props extends CombinedMixins.BaseColorSchemaContentElementaryNestingLevelPureRender.Props {
        allowTags?: any;
    }

    interface State extends CombinedMixins.BaseColorSchemaContentElementaryNestingLevelPureRender.State {
    }

}


declare namespace Bricks__Tabs {

    interface Props extends CombinedMixins.BaseColorSchemaContentElementaryNestingLevelPureRenderScreenSize.Props {
        type?: any;
        stacked?: any;
        justified?: any;
        fade?: any;
        activeName?: any;
        allowTags?: any;
        size?: any;
        onChange?: any;
        borderRadius?: any;
        elevation?: any;
        elevationHover?: any;
        underline?: any;
        lineProps?: any;
    }

    interface State extends CombinedMixins.BaseColorSchemaContentElementaryNestingLevelPureRenderScreenSize.State {
        activeName: any;
        stacked: any;
    }

}


declare namespace Bricks__TabsItem {

    interface Props extends CombinedMixins.BaseElementaryNestingLevelPureRenderSection.Props {
        _fade?: any;
        _active?: any;
    }

    interface State extends CombinedMixins.BaseElementaryNestingLevelPureRenderSection.State {
    }

}


declare namespace Bricks__Text {

    interface Props extends CombinedMixins.BaseColorSchemaContentElementaryNestingLevelPureRender.Props {
    }

    interface State extends CombinedMixins.BaseColorSchemaContentElementaryNestingLevelPureRender.State {
    }

}


declare namespace Bricks__Todo {

    interface Props extends CombinedMixins.BaseElementaryNestingLevelSection.Props {
        props?: any;
    }

    interface State extends CombinedMixins.BaseElementaryNestingLevelSection.State {
    }

}


declare namespace Bricks__TouchIcon {

    interface Props extends CombinedMixins.BaseColorSchemaContentEditableElementaryNestingLevelPureRender.Props {
        icon?: any;
        href?: any;
        target?: any;
        onClick?: any;
        bgStyle?: any;
    }

    interface State extends CombinedMixins.BaseColorSchemaContentEditableElementaryNestingLevelPureRender.State {
    }

}


declare namespace Bricks__Tree {

    interface Props extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Props {
        items?: any;
        iconExpanded?: any;
        iconCollapsed?: any;
        size?: any;
        allowTags?: any;
    }

    interface State extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.State {
    }

}


declare namespace Bricks__TreeItem {

    interface Props extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Props {
        label?: any;
        items?: any;
        iconExpanded?: any;
        iconCollapsed?: any;
        expanded?: any;
    }

    interface State extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.State {
    }

}


declare namespace Bricks__TreeList {

    interface Props extends CombinedMixins.BaseContentElementaryPureRender.Props {
        items?: any;
        iconExpanded?: any;
        iconCollapsed?: any;
    }

    interface State extends CombinedMixins.BaseContentElementaryPureRender.State {
    }

}


declare namespace Bricks__U {

    interface Props extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Props {
    }

    interface State extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.State {
    }

}


declare namespace Bricks__Ul {

    interface Props extends CombinedMixins.BaseElementaryNestingLevelSection.Props {
        allowTags?: any;
        type?: any;
        markerIcon?: any;
        iconColorSchema?: any;
        icon?: any;
    }

    interface State extends CombinedMixins.BaseElementaryNestingLevelSection.State {
    }

}


declare namespace Bricks__UpdateWrapper {

    interface Props extends CombinedMixins.BaseContentPureRender.Props {
        preventRender?: any;
    }

    interface State extends CombinedMixins.BaseContentPureRender.State {
    }

}


declare namespace Bricks__Var {

    interface Props extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Props {
    }

    interface State extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.State {
    }

}


declare namespace Bricks__Video {

    interface Props extends CombinedMixins.BaseElementaryNestingLevelPureRender.Props {
        autoPlay?: any;
        disableControls?: any;
        loop?: any;
        poster?: any;
        preload?: any;
        src?: any;
        muted?: any;
        type?: any;
    }

    interface State extends CombinedMixins.BaseElementaryNestingLevelPureRender.State {
    }

}


declare namespace Bricks__VirtualList {

    interface Props extends CombinedMixins.BaseElementary.Props {
        data?: any;
        height?: any;
        width?: any;
        boxPadding?: any;
        item?: any;
        itemHeight?: any;
        itemWidth?: any;
        overscanRowCount?: any;
        initialScrollTop?: any;
    }

    interface State extends CombinedMixins.BaseElementary.State {
        offset: any;
        width: any;
        height: any;
        loading: any;
    }

}


declare namespace Bricks__Well {

    interface Props extends CombinedMixins.BaseColorSchemaContentElementaryNestingLevelPureRender.Props {
        bgStyle?: any;
        borderRadius?: any;
        elevation?: any;
    }

    interface State extends CombinedMixins.BaseColorSchemaContentElementaryNestingLevelPureRender.State {
    }

}


declare namespace Bricks__YoutubeVideo {

    interface Props extends CombinedMixins.BaseElementaryNestingLevelPureRender.Props {
        autoplay?: any;
        disableControls?: any;
        loop?: any;
        disableInfo?: any;
        src?: any;
        disableRelatedVideos?: any;
        size?: any;
        disableFullscreen?: any;
    }

    interface State extends CombinedMixins.BaseElementaryNestingLevelPureRender.State {
    }

}


declare namespace Common__Div {

    interface Props extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Props {
    }

    interface State extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.State {
    }

}


declare namespace Common__Error {

    interface Props extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.Props {
        errorData?: any;
        errorDataSpace?: any;
        error?: any;
        silent?: any;
        inline?: any;
        moreInfo?: any;
        errorInfo?: any;
    }

    interface State extends CombinedMixins.BaseContentElementaryNestingLevelPureRender.State {
        errorDetails: any;
    }

}


declare namespace Common__Help {

    interface Props extends CombinedMixins.BaseContentElementaryPureRender.Props {
        tagName?: any;
        target?: any;
    }

    interface State extends CombinedMixins.BaseContentElementaryPureRender.State {
        errorDetails: any;
        responseLink: any;
    }

}


declare namespace Common__NotFoundTag {

    interface Props extends CombinedMixins.BaseElementaryPureRender.Props {
        tagName?: any;
    }

    interface State extends CombinedMixins.BaseElementaryPureRender.State {
    }

}


declare namespace Common__Outline {

    interface Props extends CombinedMixins.BaseElementaryPureRender.Props {
        element?: any;
    }

    interface State extends CombinedMixins.BaseElementaryPureRender.State {
    }

}


declare namespace Common__OutlineModal {

    interface Props extends CombinedMixins.BaseElementaryPureRender.Props {
    }

    interface State extends CombinedMixins.BaseElementaryPureRender.State {
    }

}


declare namespace Common__Router {

    interface Props extends CombinedMixins.BaseCcrWriterElementaryPureRender.Props {
        basePath?: any;
        route?: any;
        notFoundRoute?: any;
        routes?: any;
        urlBuilder?: any;
    }

    interface State extends CombinedMixins.BaseCcrWriterElementaryPureRender.State {
        route: any;
        requestedRoute: any;
    }

}


declare namespace Common__TagPlaceholder {

    interface Props extends CombinedMixins.BaseElementary.Props {
        tagName?: any;
        props?: any;
        content?: any;
    }

    interface State extends CombinedMixins.BaseElementary.State {
        component: any;
    }

}


declare namespace Common__TextCorrector {

    interface Props extends CombinedMixins.BaseContent.Props {
        checkGrammar?: any;
        checkHighlight?: any;
        checkSpaces?: any;
        textCorrector?: any;
        language?: any;
    }

    interface State extends CombinedMixins.BaseContent.State {
    }

}


declare namespace Common__TextCorrectorContextConsumer {

    interface Props extends CombinedMixins.BaseElementaryPureRender.Props {
    }

    interface State extends CombinedMixins.BaseElementaryPureRender.State {
        text: any;
    }

}


declare namespace Forms__Calendar {

    interface Props extends CombinedMixins.BaseElementaryLsiSwipe.Props {
        date?: any;
        dateFrom?: any;
        dateTo?: any;
        minSelection?: any;
        onChange?: any;
    }

    interface State extends CombinedMixins.BaseElementaryLsiSwipe.State {
    }

}


declare namespace Forms__Checkbox {

    interface Props extends CombinedMixins.BaseColorSchemaElementaryInputPureRender.Props {
        value?: any;
        onIcon?: any;
        offIcon?: any;
        labelPosition?: any;
        _radio?: any;
        type?: any;
    }

    interface State extends CombinedMixins.BaseColorSchemaElementaryInputPureRender.State {
    }

}


declare namespace Forms__Checkboxes {

    interface Props extends CombinedMixins.BaseColorSchemaElementaryGroupInputPureRenderScreenSize.Props {
        type?: any;
    }

    interface State extends CombinedMixins.BaseColorSchemaElementaryGroupInputPureRenderScreenSize.State {
    }

}


declare namespace Forms__Controls {

    interface Props extends CombinedMixins.Controls.Props {
        buttonSubmitProps?: any;
        buttonCancelProps?: any;
        buttonResetProps?: any;
        buttonValidateProps?: any;
        buttonReset?: any;
        buttonValidate?: any;
    }

    interface State extends CombinedMixins.Controls.State {
    }

}


declare namespace Forms__Datepicker {

    interface Props extends CombinedMixins.BaseElementaryPureRenderScreenSizeTextInput.Props {
        value?: any;
        dateFrom?: any;
        dateTo?: any;
        iconOpen?: any;
        iconClosed?: any;
        format?: any;
        country?: any;
        nanMessage?: any;
        beforeRangeMessage?: any;
        afterRangeMessage?: any;
        parseDate?: any;
        disableBackdrop?: any;
        valueType?: any;
        openToContent?: any;
        hideFormatPlaceholder?: any;
        icon?: any;
    }

    interface State extends CombinedMixins.BaseElementaryPureRenderScreenSizeTextInput.State {
        format: any;
        country: any;
    }

}


declare namespace Forms__Datetimepicker {

    interface Props extends CombinedMixins.BaseElementaryScreenSizeTextInput.Props {
        value?: any;
        dateFrom?: any;
        dateTo?: any;
        format?: any;
        timeFormat?: any;
        country?: any;
        nanMessage?: any;
        beforeRangeMessage?: any;
        afterRangeMessage?: any;
        parseDate?: any;
        placeholderTime?: any;
        dateIcon?: any;
        timeIcon?: any;
        seconds?: any;
        valueType?: any;
        openToContent?: any;
        timePickerType?: any;
        timeStep?: any;
        hideFormatPlaceholder?: any;
    }

    interface State extends CombinedMixins.BaseElementaryScreenSizeTextInput.State {
        calendarOpen: any;
        timeOpen: any;
        format: any;
        country: any;
        dateString: any;
        timeString: any;
    }

}


declare namespace Forms__File {

    interface Props extends CombinedMixins.BaseChoiceColorSchemaContentElementaryInputPureRender.Props {
        value?: any;
        multiple?: any;
        closeIcon?: any;
        selectedIcon?: any;
        borderRadius?: any;
        bgStyle?: any;
        elevation?: any;
        icon?: any;
    }

    interface State extends CombinedMixins.BaseChoiceColorSchemaContentElementaryInputPureRender.State {
    }

}


declare namespace Forms__Form {

    interface Props extends CombinedMixins.BaseElementaryFormPureRenderSection.Props {
    }

    interface State extends CombinedMixins.BaseElementaryFormPureRenderSection.State {
    }

}


declare namespace Forms__Forms {

    interface Props {
    }

    interface State {
    }

}


declare namespace Forms__Iconpicker {

    interface Props extends CombinedMixins.BaseColorSchemaElementaryInputPureRenderScreenSize.Props {
        disableBackdrop?: any;
        categories?: any;
        selectedCategory?: any;
        placeholder?: any;
        required?: any;
        requiredMessage?: any;
        value?: any;
        borderRadius?: any;
        bgStyle?: any;
        elevation?: any;
        openToContent?: any;
    }

    interface State extends CombinedMixins.BaseColorSchemaElementaryInputPureRenderScreenSize.State {
        open: any;
        loading: any;
        error: any;
        selectedCategory: any;
        icons: any;
        searchString: any;
        scrollPosition: any;
    }

}


declare namespace Forms__Number {

    interface Props extends CombinedMixins.BaseElementaryPureRenderTextInput.Props {
        value?: any;
        step?: any;
        min?: any;
        max?: any;
        decimals?: any;
        decimalSeparator?: any;
        thousandSeparator?: any;
        rounded?: any;
        nanMessage?: any;
        lowerMessage?: any;
        upperMessage?: any;
        buttonHidden?: any;
    }

    interface State extends CombinedMixins.BaseElementaryPureRenderTextInput.State {
    }

}


declare namespace Forms__PropsForm {

    interface Props extends CombinedMixins.BaseElementaryPureRenderSection.Props {
        props?: any;
        onSave?: any;
        onCancel?: any;
        labelColWidth?: any;
        inputColWidth?: any;
        tagName?: any;
        uu5string?: any;
    }

    interface State extends CombinedMixins.BaseElementaryPureRenderSection.State {
    }

}


declare namespace Forms__Radios {

    interface Props extends CombinedMixins.BaseColorSchemaElementaryGroupInputPureRenderScreenSize.Props {
    }

    interface State extends CombinedMixins.BaseColorSchemaElementaryGroupInputPureRenderScreenSize.State {
    }

}


declare namespace Forms__Select {

    interface Props extends CombinedMixins.BaseChoiceColorSchemaContentElementaryInputPureRenderScreenSize.Props {
        value?: any;
        multiple?: any;
        selectAllEnabled?: any;
        allowTags?: any;
        disableBackdrop?: any;
        borderRadius?: any;
        bgStyle?: any;
        elevation?: any;
        openToContent?: any;
    }

    interface State extends CombinedMixins.BaseChoiceColorSchemaContentElementaryInputPureRenderScreenSize.State {
        open: any;
    }

}


declare namespace Forms__SelectOption {

    interface Props extends CombinedMixins.BaseContentElementaryPureRender.Props {
        value?: any;
        selectedContent?: any;
        onClick?: any;
    }

    interface State extends CombinedMixins.BaseContentElementaryPureRender.State {
    }

}


declare namespace Forms__Slider {

    interface Props extends CombinedMixins.BaseColorSchemaContentElementaryInputPureRender.Props {
        min?: any;
        max?: any;
        step?: any;
        value?: any;
        onChange?: any;
        onChanged?: any;
    }

    interface State extends CombinedMixins.BaseColorSchemaContentElementaryInputPureRender.State {
    }

}


declare namespace Forms__Text {

    interface Props extends CombinedMixins.BaseElementaryPureRenderTextInput.Props {
        value?: any;
        password?: any;
        pattern?: any;
    }

    interface State extends CombinedMixins.BaseElementaryPureRenderTextInput.State {
    }

}


declare namespace Forms__TextArea {

    interface Props extends CombinedMixins.BaseElementaryPureRenderTextInput.Props {
        value?: any;
        rows?: any;
        autoResize?: any;
        maxRows?: any;
    }

    interface State extends CombinedMixins.BaseElementaryPureRenderTextInput.State {
    }

}


declare namespace Forms__TextButton {

    interface Props extends CombinedMixins.BaseElementaryPureRenderTextInput.Props {
        value?: any;
        buttons?: any;
        pattern?: any;
        actionOnEnter?: any;
    }

    interface State extends CombinedMixins.BaseElementaryPureRenderTextInput.State {
    }

}


declare namespace Forms__TextIcon {

    interface Props extends CombinedMixins.BaseElementaryPureRenderTextInput.Props {
        value?: any;
        password?: any;
        icon?: any;
        iconPosition?: any;
        onClick?: any;
        pattern?: any;
        actionOnEnter?: any;
    }

    interface State extends CombinedMixins.BaseElementaryPureRenderTextInput.State {
    }

}


declare namespace Forms__Time {

    interface Props extends CombinedMixins.BaseElementaryLsiPureRenderScreenSize.Props {
        value?: any;
        format?: any;
        onChange?: any;
        seconds?: any;
        step?: any;
        type?: any;
    }

    interface State extends CombinedMixins.BaseElementaryLsiPureRenderScreenSize.State {
    }

}


declare namespace Forms__Timepicker {

    interface Props extends CombinedMixins.BaseElementaryPureRenderScreenSizeTextInput.Props {
        value?: any;
        iconOpen?: any;
        iconClosed?: any;
        format?: any;
        nanMessage?: any;
        seconds?: any;
        valueType?: any;
        openToContent?: any;
        step?: any;
        pickerType?: any;
    }

    interface State extends CombinedMixins.BaseElementaryPureRenderScreenSizeTextInput.State {
    }

}


// endregion