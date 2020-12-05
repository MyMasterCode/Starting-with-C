
﻿/*
 * Type definitions for Cytoscape.js 2.4.2
 * Project: http://js.cytoscape.org/
 * Definitions by:  Fabian Schmidt
 *
 * Translation from Objects in help to Typescript interface.
 * cy   --> Cy.Instance
 * the core
 * ele  --> Cy.CollectionFirst
 * a collection of a single element (node or edge)
 * eles --> Cy.Collection
 * a collection of one or more elements (nodes and edges)
 * node --> Cy.CollectionFirstNode
 * a collection of a single node
 * nodes -> Cy.CollectionNodes
 * a collection of one or more nodes
 * edge --> Cy.CollectionFirstEdge
 * a collection of a single edge
 * edges -> Cy.CollectionEdges
 * a collection of one or more edges
 *
 * The library makes a diferrence between input and output parameter due to the dynamic behaviour of the Cytoscape library.
 * For a input parameter it will always expect:
 * - Cy.Collection
 *    The input can be any element (node and edge) collection.
 * - Cy.CollectionNodes
 *      The input must be a node collection.
 *  - Cy.CollectionEdges
 *     The input must be a edge collection.
 * - Cy.CollectionFirst
 *     The input must be a single element.
 *  - Cy.CollectionFirstNode
 *     The inut must be a single node.
 *  - Cy.CollectionFirstEdge
 *      The input must be a single edge.
 *
 * For a output of a function it will always give:
 *  - Cy.CollectionElements
 *      The output is a collection of node and edge elements OR single element.
 *  - Cy.CollectionEdges
 *      The output is a collection of edge elements OR single edge.
 *  - Cy.CollectionNodes
 *      The output is a collection of node elements OR single node.
 */

declare module Cy {
    /**
     * See http://js.cytoscape.org/#selectors for details about writing selectors.
     */
    type Selector = string;

    /**
     * Possbile values are 'additive' or 'single'.
     */
    type SelectionType = string;

    /**
     * Possible values are 'nodes' or 'edges'.
     */
    type ElementGroup = string;

    /**
     * Possible values are 'x' or 'y'.
     */
    type PositionDimension = string;

    /**
     * Usually temp or nonserialisable data can be stored.
     */
    type Scratchpad = any;

    interface CollectionElements extends CollectionEdges, CollectionNodes, CollectionFirstElement {
        //Intentionally empty.
    }

    interface CollectionEdges extends Collection, CollectionFirstEdge,
        CollectionEdgesTraversing {
    }

    interface CollectionNodes extends Collection, CollectionFirstNode,
        CollectionNodesMetadata, CollectionNodesPosition, CollectionNodesTraversing, CollectionNodesCompound {
    }

    interface Collection extends CollectionFirst,
        CollectionManipulation, CollectionEvents, CollectionData, CollectionPosition, CollectionLayout, CollectionSelection, CollectionStyle, CollectionAnimation, CollectionComparision, CollectionIteration, CollectionBuildingUnion, CollectionAlgorithms {
    }

    interface CollectionFirstElement extends CollectionFirstEdge, CollectionFirstNode {
        //Intentionally empty.
    }

    interface CollectionFirstEdge extends CollectionFirst,
        CollectionFirstEdgeData, CollectionFirstEdgeTraversing {
    }

    interface CollectionFirstNode extends CollectionFirst,
        CollectionFirstNodeMetadata, CollectionFirstNodePosition, CollectionFirstNodeCompound {
    }

    interface CollectionFirst extends CollectionFirstManipulation, CollectionFirstData, CollectionFirstPosition, CollectionFirstSelection, CollectionFirstStyle, CollectionFirtsAnimation {
    }

    interface CollectionManipulation {
        /**
         * Remove the elements from the graph.
         */
        remove(): CollectionElements;

        /**
         * Put removed elements back into the graph.
         */
        restore(): CollectionElements;

        /**
         * Get a new edgeNodeCollection containing clones (i.e. copies) of the elements in the calling edgeNodeCollection.
         */
        clone(): CollectionElements;

        /**
         * Get a new edgeNodeCollection containing clones (i.e. copies) of the elements in the calling edgeNodeCollection.
         */
        copy(): CollectionElements;

        /**
         * Effectively move edges to different nodes. The modified (actually new) elements are returned.
         */
        move(location: { source?: string, target?: string }): CollectionEdges;

        /**
         * Effectively move nodes to different parent node. The modified (actually new) elements are returned.
         */
        move(location: { parent: string }): CollectionNodes;
    }

    interface CollectionEvents {
        //TODO: http://js.cytoscape.org/#collection/events
    }

    interface CollectionData {
        //http://js.cytoscape.org/#collection/data

        //    The following fields are immutable:
        //id: The id field is used to uniquely identify an element in the graph.
        //source & target : These fields define an edge's relationship to nodes, and this relationship can not be changed after creation.
        //parent: The parent field defines the parent (compound) node.

        /**
         * Remove developer-defined data associated with the elements.
         */
        removeData(): CollectionElements;

        /**
         * Remove developer-defined data associated with the elements.
         *
         * @param names A space-separated list of fields to delete.
         */
        removeData(names: string): CollectionElements;

        /**
         * Remove developer-defined data associated with the elements.
         */
        removeAttr(): CollectionElements;

        /**
         * Remove developer-defined data associated with the elements.
         *
         * @param names A space-separated list of fields to delete.
         */
        removeAttr(names: string): CollectionElements;

        /**
         * Get an array of the plain JavaScript object representation of all elements in the edgeNodeCollection.
         */
        jsons(): string[];
    }

    interface CollectionNodesMetadata {
        //http://js.cytoscape.org/#collection/metadata

        /**
         * Get the maximum degree of the nodes in the edgeNodeCollection.
         *
         * For a node, the degree is the number of edge connections it has. Each time a node is referenced as source or target of an edge in the graph, that counts as an edge connection.
         *
         * For a set of nodes, the the total degree is the total number of edge connections to nodes in the set.
         *
         * @param includeLoops A boolean, indicating whether loops are to be included in degree calculations.
         */
        maxDegree(includeLoops: boolean): number;

        /**
         * Get the minimum indegree of the nodes in the edgeNodeCollection.
         *
         * For a node, the indegree is the number of incoming edge connections it has. Each time a node is referred to as target of an edge in the graph, that counts as an incoming edge connection.
         *
         * For a set of nodes, the the total degree is the total number of edge connections to nodes in the set.
         *
         * @param includeLoops A boolean, indicating whether loops are to be included in degree calculations.
         */
        minIndegree(includeLoops: boolean): number;

        /**
         * Get the maximum indegree of the nodes in the edgeNodeCollection.
         *
         * For a node, the indegree is the number of incoming edge connections it has. Each time a node is referred to as target of an edge in the graph, that counts as an incoming edge connection.
         *
         * For a set of nodes, the the total degree is the total number of edge connections to nodes in the set.
         *
         * @param includeLoops A boolean, indicating whether loops are to be included in degree calculations.
         */
        maxIndegree(includeLoops: boolean): number;

        /**
         * Get the minimum outdegree of the nodes in the edgeNodeCollection.
         *
         * For a node, the outdegree is the number of outgoing edge connections it has. Each time a node is referred to as source of an edge in the graph, that counts as an outgoing edge connection.
         *
         * For a set of nodes, the the total degree is the total number of edge connections to nodes in the set.
         *
         * @param includeLoops A boolean, indicating whether loops are to be included in degree calculations.
         */
        minOutdegree(includeLoops: boolean): number;

        /**
         * Get the maximum outdegree of the nodes in the edgeNodeCollection.
         *
         * For a node, the outdegree is the number of outgoing edge connections it has. Each time a node is referred to as source of an edge in the graph, that counts as an outgoing edge connection.
         *
         * For a set of nodes, the the total degree is the total number of edge connections to nodes in the set.
         *
         * @param includeLoops A boolean, indicating whether loops are to be included in degree calculations.
         */
        maxOutdegree(includeLoops: boolean): number;
    }

    interface CollectionPosition {
        //http://js.cytoscape.org/#collection/position--dimensions

        /**
         * Get the bounding box of the elements in model coordinates.
         *
         * @param options An object containing options for the function.
         */
        boundingBox(options: BoundingBoxOptions): { x1: number, x2: number, y1: number, y2: number, w: number, h: number };

        /**
         * Get the bounding box of the elements in model coordinates.
         *
         * @param options An object containing options for the function.
         */
        boundingbox(options: BoundingBoxOptions): { x1: number, x2: number, y1: number, y2: number, w: number, h: number };

        /**
         * Get the bounding box of the elements in rendered coordinates.
         *
         * @param options An object containing options for the function.
         */
        renderedBoundingBox(options: BoundingBoxOptions): { x1: number, x2: number, y1: number, y2: number, w: number, h: number };

        /**
         * Get the bounding box of the elements in rendered coordinates.
         *
         * @param options An object containing options for the function.
         */
        renderedBoundingbox(options: BoundingBoxOptions): { x1: number, x2: number, y1: number, y2: number, w: number, h: number };
    }

    interface CollectionNodesPosition {
        //http://js.cytoscape.org/#collection/position--dimensions

        /**
         * Set the positions functionally.
         *
         * @param callback A callback function that returns the position to set for each element.
         * i - The index of the element when iterating over the elements in the edgeNodeCollection.
         * ele - The element being iterated over for which the function should return a position to set.
         */
        positions(callback: (i: number, ele: CollectionNodes) => Position): CollectionNodes;

        /**
         * Set positions for all nodes based on a single position object.
         *
         * @param pos An object specifying name-value pairs representing dimensions to set.
         */
        positions(pos: Position): CollectionNodes;

        /**
         * Set the positions functionally.
         *
         * @param callback A callback function that returns the position to set for each element.
         * i - The index of the element when iterating over the elements in the edgeNodeCollection.
         * ele - The element being iterated over for which the function should return a position to set.
         */
        modelPositions(callback: (i: number, ele: CollectionNodes) => Position): CollectionNodes;

        /**
         * Set positions for all nodes based on a single position object.
         *
         * @param pos An object specifying name-value pairs representing dimensions to set.
         */
        modelPositions(pos: Position): CollectionNodes;

        /**
         * Set the positions functionally.
         *
         * @param callback A callback function that returns the position to set for each element.
         * i - The index of the element when iterating over the elements in the edgeNodeCollection.
         * ele - The element being iterated over for which the function should return a position to set.
         */
        points(callback: (i: number, ele: CollectionNodes) => Position): CollectionNodes;

        /**
         * Set positions for all nodes based on a single position object.
         *
         * @param pos An object specifying name-value pairs representing dimensions to set.
         */
        points(pos: Position): CollectionNodes;

        /**
         * Allow the user to grab the nodes.
         */
        grabify(): CollectionNodes;

        /**
         * Disallow the user to grab the nodes.
         */
        ungrabify(): CollectionNodes;

        /**
         * Lock the nodes such that their positions can not be changed.
         */
        lock(): CollectionNodes;

        /**
         * Unlock the nodes such that their positions can be changed.
         */
        unlock(): CollectionNodes;
    }

    interface CollectionLayout {
        // http://js.cytoscape.org/#collection/layout

        /**
         * Run a layout on the elements in the calling edgeNodeCollection, algorithmically positioning the nodes.
         * This function is useful for running a layout on a subset of the elements in the graph.
         *
         * @param options The layout options.
         */
        layout(options: LayoutOptions): CollectionElements;

        /**
         * Get a new layout, which can be used to algorithmically position the nodes in the edgeNodeCollection.
         * This function is useful for running a layout on a subset of the elements in the graph, perhaps in parallel to other layouts.
         *
         * You must specify options.name with the name of the layout you wish to use.
         *
         * Note: that you must call layout.run() in order for it to affect the graph.
         *
         * @param options The layout options.
         */
        makeLayout(options: LayoutOptions): LayoutInstance;

        /**
         * Get a new layout, which can be used to algorithmically position the nodes in the edgeNodeCollection.
         * This function is useful for running a layout on a subset of the elements in the graph, perhaps in parallel to other layouts.
         *
         * You must specify options.name with the name of the layout you wish to use.
         *
         * Note: that you must call layout.run() in order for it to affect the graph.
         *
         * @param options The layout options.
         */
        createLayout(options: LayoutOptions): LayoutInstance;
    }

    interface CollectionSelection {
        // http://js.cytoscape.org/#collection/selection

        /**
         * Make the elements selected (NB other elements outside the edgeNodeCollection are not affected).
         */
        select(): CollectionElements;

        /**
         * Make the elements not selected (NB other elements outside the edgeNodeCollection are not affected).
         */
        unselect(): CollectionElements;

        /**
         * Make the elements not selected (NB other elements outside the edgeNodeCollection are not affected).
         */
        deselect(): CollectionElements;

        /**
         * Make the selection states of the elements mutable.
         */
        selectify(): CollectionElements;

        /**
         * Make the selection states of the elements immutable.
         */
        unselectify(): CollectionElements;
    }

    interface CollectionStyle {
        // http://js.cytoscape.org/#collection/style

        /**
         * Add classes to elements.
         *
         * @param classes A space-separated list of class names to add to the elements.
         */
        addClass(classes: string): CollectionElements;

        /**
         * Remove classes from elements.
         *
         * @param classes A space-separated list of class names to remove from the elements.
         */
        removeClass(classes: string): CollectionElements;

        /**
         * Toggle whether the elements have the specified classes.
         *
         * @param classes A space-separated list of class names to toggle on the elements.
         * @param toggle [optional] Instead of automatically toggling, adds the classes on truthy values or removes them on falsey values.
         */
        toggleClass(classes: string, toggle?: boolean): CollectionElements;

        /**
         * Add classes to the elements, and then remove the classes after a specified duration.
         *
         * @param classes A space-separated list of class names to flash on the elements.
         * @param duration [optional] The duration in milliseconds that the classes should be added on the elements. After the duration, the classes are removed.
         */
        flashClass(classes: string, duration?: number): CollectionElements;


        /**
         * Get a name-value pair object containing visual style properties and their values for the element.
         */
        style(): Css.ElementCss;

        /**
         * Get a particular style property value.
         *
         * @param name The name of the visual style property to get.
         */
        style(name: string): Css.ElementCss;

        /**
         * Get a name-value pair object containing visual style properties and their values for the element.
         */
        css(): Css.ElementCss;

        /**
         * Get a particular style property value.
         *
         * @param name The name of the visual style property to get.
         */
        css(name: string): Css.ElementCss;

        /**
         * Get a name-value pair object containing visual style properties and their values for the element.
         */
        bypass(): Css.ElementCss;

        /**
         * Get a particular style property value.
         *
         * @param name The name of the visual style property to get.
         */
        bypass(name: string): Css.ElementCss;


        /**
         * Set the specified visual style property for the elements.
         *
         * You should use this function very sparingly, because it overrides the style of an element, despite the state and classes that it has. In general, it's much better to specify a better stylesheet at initialisation that reflects your application state rather than programmatically modifying style.
         *
         * If you would like to remove a particular overridden style property, set null to it.
         *
         * @param name The name of the property to set.
         * @param value The value to set to the visual style property.
         */
        style(name: string, value: string): CollectionElements;

        /**
         * Set several visual style properties at once for the elements.
         *
         * You should use this function very sparingly, because it overrides the style of an element, despite the state and classes that it has. In general, it's much better to specify a better stylesheet at initialisation that reflects your application state rather than programmatically modifying style.
         *
         * If you would like to remove a particular overridden style property, set null to it.
         *
         * @param props An object with name-value pairs representing properties to set on the elements.
         */
        style(props: Css.ElementCss): CollectionElements;

        /**
         * Set the specified visual style property for the elements.
         *
         * You should use this function very sparingly, because it overrides the style of an element, despite the state and classes that it has. In general, it's much better to specify a better stylesheet at initialisation that reflects your application state rather than programmatically modifying style.
         *
         * If you would like to remove a particular overridden style property, set null to it.
         *
         * @param name The name of the property to set.
         * @param value The value to set to the visual style property.
         */
        css(name: string, value: string): CollectionElements;

        /**
         * Set several visual style properties at once for the elements.
         *
         * You should use this function very sparingly, because it overrides the style of an element, despite the state and classes that it has. In general, it's much better to specify a better stylesheet at initialisation that reflects your application state rather than programmatically modifying style.
         *
         * If you would like to remove a particular overridden style property, set null to it.
         *
         * @param props An object with name-value pairs representing properties to set on the elements.
         */
        css(props: Css.ElementCss): CollectionElements;

        /**
         * Set the specified visual style property for the elements.
         *
         * You should use this function very sparingly, because it overrides the style of an element, despite the state and classes that it has. In general, it's much better to specify a better stylesheet at initialisation that reflects your application state rather than programmatically modifying style.
         *
         * If you would like to remove a particular overridden style property, set null to it.
         *
         * @param name The name of the property to set.
         * @param value The value to set to the visual style property.
         */
        bypass(name: string, value: string): CollectionElements;

        /**
         * Set several visual style properties at once for the elements.
         *
         * You should use this function very sparingly, because it overrides the style of an element, despite the state and classes that it has. In general, it's much better to specify a better stylesheet at initialisation that reflects your application state rather than programmatically modifying style.
         *
         * If you would like to remove a particular overridden style property, set null to it.
         *
         * @param props An object with name-value pairs representing properties to set on the elements.
         */
        bypass(props: Css.ElementCss): CollectionElements;

        /**
         * Removes all overridden style of the elements.
         */
        removeStyle(): CollectionElements;

        /**
         * Removes particular overridden style properties of the elements.
         *
         * @param names A space-separated list of property names for which overridden styles will be removed.
         */
        removeStyle(names: string): CollectionElements;

        /**
         * Removes all overridden style of the elements.
         */
        removeCss(): CollectionElements;

        /**
         * Removes particular overridden style properties of the elements.
         *
         * @param names A space-separated list of property names for which overridden styles will be removed.
         */
        removeCss(names: string): CollectionElements;

        /**
         * Removes all overridden style of the elements.
         */
        removeBypass(): CollectionElements;

        /**
         * Removes particular overridden style properties of the elements.
         *
         * @param names A space-separated list of property names for which overridden styles will be removed.
         */
        removeBypass(names: string): CollectionElements;
    }

    interface CollectionAnimation {
        // http://js.cytoscape.org/#collection/animation

        /**
         * Animate the elements.
         *
         * Note that you can specify only one of position and renderedPosition: You can not animate to two positions at once.
         *
         * @param anis An object containing the details of the animation.
         * position - A position to which the elements will be animated.
         * renderedPosition - A rendered position to which the elements will be  animated.
         * style - An object containing name-value pairs of style properties to animate.
         * @param options An object containing animation options.
         * duration - The duration of the animation in milliseconds.
         * queue - A boolean indicating whether to queue the animation.
         * complete - A function to call when the animation is done.
         * step - A function to call each time the animation steps.
         */
        animate(anis: {
            postion?: Position,
            renderedPosition?: Position,
            style?: Css.ElementCss
        }, options?: {
            duration?: number,
            queue?: boolean,
            complete?: () => void,
            step?: () => void
        }): CollectionElements;

        /**
         * Add a delay between animations for the elements.
         *
         * @param duration How long the delay should be in milliseconds.
         * @param complete A function to call when the delay is complete.
         */
        delay(duration: number, complete?: () => void): CollectionElements;

        /**
         * Stop all animations that are currently running.
         *
         * @param clearQueue A boolean, indicating whether the queue of animations should be emptied.
         * @param jumpToEnd A boolean, indicating whether the currently-running animations should jump to their ends rather than just stopping midway.
         */
        stop(clearQueue?: boolean, jumpToEnd?: boolean): CollectionElements;

        /**
         * Remove all queued animations for the elements.
         */
        clearQueue(): CollectionElements;
    }

    interface CollectionComparision {
        // http://js.cytoscape.org/#collection/comparison

        /**
         * Determine whether this edgeNodeCollection contains exactly the same elements as another edgeNodeCollection.
         *
         * @param eles The other elements to compare to.
         */
        same(eles: Collection): boolean;

        /**
         * Determine whether this edgeNodeCollection contains any of the same elements as another edgeNodeCollection.
         *
         * @param eles The other elements to compare to.
         */
        anySame(eles: Collection): boolean;

        /**
         * Determine whether all elements in the specified edgeNodeCollection are in the neighbourhood of the calling edgeNodeCollection.
         *
         * @param eles The other elements to compare to.
         */
        allAreNeighbors(eles: Collection): boolean;

        /**
         * Determine whether all elements in the specified edgeNodeCollection are in the neighbourhood of the calling edgeNodeCollection.
         *
         * @param eles The other elements to compare to.
         */
        allAreNeighbours(eles: Collection): boolean;

        /**
         * Determine whether any element in this edgeNodeCollection matches a selector.
         *
         * @param selector The selector to match against.
         */
        is(selector: Selector): boolean;

        /**
         * Determine whether all elements in the edgeNodeCollection match a selector.
         * @param selector The selector to match against.
         */
        allAre(selector: Selector): boolean;

        /**
         * Determine whether any element in this edgeNodeCollection satisfies the specified test function.
         *
         * @param test The test function that returns truthy values for elements that satisfy the test and falsey values for elements that do not satisfy the test.
         * ele - The current element.
         * i - The index of the current element.
         * eles - The edgeNodeCollection of elements being tested.
         * @param thisArg [optional] The value for this within the test function.
         */
        some(test: (ele: CollectionElements, i: number, eles: CollectionElements) => boolean, thisArg?: any): boolean;

        /**
         * Determine whether all elements in this edgeNodeCollection satisfy the specified test function.
         *
         * @param test The test function that returns truthy values for elements that satisfy the test and falsey values for elements that do not satisfy the test.
         * ele - The current element.
         * i - The index of the current element.
         * eles - The edgeNodeCollection of elements being tested.
         * @param thisArg [optional] The value for this within the test function.
         */
        every(test: (ele: CollectionElements, i: number, eles: CollectionElements) => boolean, thisArg?: any): boolean;
    }

    interface CollectionIteration {
        // http://js.cytoscape.org/#collection/iteration

        /**
         * Get the number of elements in the edgeNodeCollection.
         */
        length: number;

        /**
         * Get the number of elements in the edgeNodeCollection.
         */
        size(): number;

        /**
         * Get whether the edgeNodeCollection is empty, meaning it has no elements.
         */
        empty(): boolean;

        /**
         * Get whether the edgeNodeCollection is nonempty, meaning it has elements.
         */
        nonempty(): boolean;

        /**
         * Iterate over the elements in the edgeNodeCollection.
         *
         * Note that although this function is convenient in some cases, it is less efficient than making your own loop.
         *
         * @param each The function executed each iteration.
         * i - The index of the element in the edgeNodeCollection.
         * ele - The element at the current index.
         */
        each(each: (i: number, ele: CollectionElements) => void);

        /**
         * Iterate over the elements in the edgeNodeCollection using an implementation like the native array function namesake.
         *
         * This function behaves like Array.prototype.forEach() with minor changes for convenience:
         * You can exit the iteration early by returning false in the iterating function. The Array.prototype.forEach() implementation does not support this, but it is included anyway on account of its utility.
         *
         * @param each The function executed each iteration.
         * ele - The current element.
         * i - The index of the current element.
         * eles - The edgeNodeCollection of elements being iterated.
         * @param thisArg [optional] The value for this within the iterating function.
         */
        forEach(each: (ele: CollectionElements, i: number, eles: CollectionElements) => void | boolean, thisArg?: any);

        /**
         * Get an element at a particular index in the edgeNodeCollection.
         *
         * You may use eles[i] in place of eles.eq(i) as a more performant alternative.
         *
         * @param index The index of the element to get.
         */
        eq(index: number): CollectionElements;

        /**
         * Get an element at a particular index in the edgeNodeCollection.
         *
         * @param index The index of the element to get.
         */
        [index: number]: CollectionElements;

        /**
         * Get the first element in the edgeNodeCollection.
         */
        first(): CollectionElements;

        /**
         * Get the last element in the edgeNodeCollection.
         */
        last(): CollectionElements;

        /**
         * Get a subset of the elements in the edgeNodeCollection based on specified indices.
         *
         * @param start [optional] An integer that specifies where to start the selection. The first element has an index of 0. Use negative numbers to select from the end of an array.
         * @param end [optional] An integer that specifies where to end the selection. If omitted, all elements from the start position and to the end of the array will be selected. Use negative numbers to select from the end of an array.
         */
        slice(start?: number, end?: number): CollectionElements;
    }

    interface CollectionBuildingUnion {
        /**
         * Get a new collection, resulting from adding the collection with another one
         *
         * @param eles The elements to add.
         */
        (eles: Collection): CollectionElements;

        /**
         * Get a new collection, resulting from adding the collection with another one
         *
         * @param elesArray An array of elements to add.
         */
        (elesArray: Collection[]): CollectionElements;

        /**
         * Get a new collection, resulting from adding the collection with another one
         *
         * @param selector Elements in the graph matching this selector are added.
         */
        (selector: Selector): CollectionElements;
    }

    interface CollectionBuildingDifference {
        /**
         * Get a new collection, resulting from the collection without some specified elements.
         *
         * @param eles The elements that will not be in the resultant collection.
         */
        (eles: Collection): CollectionElements;

        /**
         * Get a new collection, resulting from the collection without some specified elements.
         *
         * @param selector Elements from the calling collection matching this selector will not be in the resultant collection.
         */
        (selector: Selector): CollectionElements;
    }

    interface CollectionBuildingIntersection {
        /**
         * Get the elements in both this collection and another specified collection.
         *
         * @param eles The elements to intersect with.
         */
        (eles: Collection): CollectionElements;

        /**
         * Get the elements in both this collection and another specified collection.
         *
         * @param selector A selector representing the elements to intersect with. All elements in the graph matching the selector are used as the passed collection.
         */
        (selector: Selector): CollectionElements;
    }

    interface CollectionSymmetricDifference {
        /**
         * Get the elements that are in the calling collection or the passed collection but not in both.
         *
         * @param eles The elements to apply the symmetric difference with.
         */
        (eles: Collection): CollectionElements;

        /**
         * Get the elements that are in the calling collection or the passed collection but not in both.
         *
         * @param selector A selector representing the elements to apply the symmetric difference with. All elements in the graph matching the selector are used as the passed collection.
         */
        (selector: Selector): CollectionElements;
    }

    interface CollectionBuildingUnion {
        // http://js.cytoscape.org/#collection/building--filtering

        union: CollectionBuildingUnion;
        //[index: "u"]: CollectionBuildingUnion;
        add: CollectionBuildingUnion;
        //[index: "+"]: CollectionBuildingUnion;
        or: CollectionBuildingUnion;
        //[index: "|"]: CollectionBuildingUnion;

        difference: CollectionBuildingDifference;
        //[index: "\\"]: CollectionBuildingDifference;
        not: CollectionBuildingDifference;
        intersection: CollectionBuildingIntersection;

        //[index: "-"]: CollectionBuildingDifference;
        intersect: CollectionBuildingIntersection;
        and: CollectionBuildingIntersection;
        symmetricDifference: CollectionSymmetricDifference;
        symdiff: CollectionSymmetricDifference;
        xor: CollectionSymmetricDifference;

        //[index: "!"]: CollectionBuildingDifference;
        relativeComplement(): CollectionBuildingDifference;
        //[index: "n"]: CollectionBuildingIntersection;
        //[index: "&"]: CollectionBuildingIntersection;
        //[index: "."]: CollectionBuildingIntersection;

        /**
         * Get all elements in the graph that are not in the calling edgeNodeCollection.
         */
        absoluteComplement(): CollectionElements;

        /**
         * Get all elements in the graph that are not in the calling edgeNodeCollection.
         */
        abscomp(): CollectionElements;

        /**
         * Get all elements in the graph that are not in the calling edgeNodeCollection.
         */
        complement(): CollectionElements;
        //[index: "^"]: CollectionSymmetricDifference;
        //[index: "(+)"]: CollectionSymmetricDifference;
        //[index: "(-)"]: CollectionSymmetricDifference;

        //[index: string]: CollectionBuildingDifference |CollectionBuildingUnion | CollectionBuildingIntersection | CollectionSymmetricDifference;

        /**
         * Perform a traditional left/right diff on the two collections.
         *
         * @param eles The elements on the right side of the diff.
         */
        diff(eles: Collection): CollectionElements;

        /**
         * Perform a traditional left/right diff on the two collections.
         *
         * @param selector A selector representing the elements on the right side of the diff. All elements in the graph matching the selector are used as the passed edgeNodeCollection.
         * @return This function returns a plain object of the form { left, right, both } where
         * left - is the set of elements only in the calling (i.e. left) edgeNodeCollection,
         * right - is the set of elements only in the passed (i.e. right) edgeNodeCollection, and
         * both - is the set of elements in both collections.
         */
        diff(selector: Selector): {
            left: CollectionElements,
            right: CollectionElements,
            both: CollectionElements
        };

        /**
         * Get a new edgeNodeCollection containing elements that are accepted by the specified filter.
         *
         * @param selector The selector to match against.
         */
        filter(selector: Selector): CollectionElements;

        /**
         * Get a new edgeNodeCollection containing elements that are accepted by the specified filter.
         *
         * @filter selector The filter function that returns true for elements to include.
         * i - The index of the current element being considered.
         * ele - The element being considered.
         */
        filter(filter: (i: number, ele: CollectionElements) => boolean): CollectionElements;

        /**
         * Get the nodes that match the specified selector.
         *
         * @param selector The selector to match against.
         */
        nodes(selector: Selector): CollectionNodes;

        /**
         * Get the edges that match the specified selector.
         *
         * @param selector The selector to match against.
         */
        edges(selector: Selector): CollectionEdges;

        /**
         * Get a new edgeNodeCollection containing elements that are accepted by the specified filter, using an implementation like the standard array namesake.
         *
         * @param filter The filter function that returns truthy values for elements to include and falsey values for elements to exclude.
         * ele - The current element.
         * i - The index of the current element.
         * eles - The edgeNodeCollection of elements being filtered.
         * @param thisArg [optional] The value for this within the iterating function.
         */
        filterFn(filter: (ele: CollectionElements, i: number, eles: CollectionElements) => boolean, thisArg?: any): CollectionElements;

        /**
         * Get a new edgeNodeCollection containing elements that are accepted by the specified filter, using an implementation like the standard array namesake.
         *
         * @param filter The filter function that returns truthy values for elements to include and falsey values for elements to exclude.
         * ele - The current element.
         * i - The index of the current element.
         * eles - The edgeNodeCollection of elements being filtered.
         * @param thisArg [optional] The value for this within the iterating function.
         */
        fnFilter(filter: (ele: CollectionElements, i: number, eles: CollectionElements) => boolean, thisArg?: any): CollectionElements;

        /**
         * Get a new edgeNodeCollection containing elements that are accepted by the specified filter, using an implementation like the standard array namesake.
         *
         * @param filter The filter function that returns truthy values for elements to include and falsey values for elements to exclude.
         * ele - The current element.
         * i - The index of the current element.
         * eles - The edgeNodeCollection of elements being filtered.
         * @param thisArg [optional] The value for this within the iterating function.
         */
        stdFilter(filter: (ele: CollectionElements, i: number, eles: CollectionElements) => boolean, thisArg?: any): CollectionElements;

        /**
         * Get a new edgeNodeCollection containing the elements sorted by the specified comparison function.
         *
         * @param sort The sorting comparison function that returns a negative number for ele1 before ele2, 0 for ele1 same as ele2, or a positive number for ele1 after ele2.
         */
        sort(sort: (ele1: CollectionElements, ele2: CollectionElements) => number): CollectionElements;

        /**
         * Get an array containing values mapped from the edgeNodeCollection.
         *
         * @param fn The function that returns the mapped value for each element.
         * ele - The current element.
         * i - The index of the current element.
         * eles - The edgeNodeCollection of elements being mapped.
         * @param thisArg [optional] The value for this within the iterating function.
         */
        map(fn: (ele: CollectionElements, i: number, eles: CollectionElements) => any, thisArg?: any): any[];

        /**
         * Find a minimum value in a edgeNodeCollection.
         *
         * @param fn The function that returns the value to compare for each element.
         * ele - The current element.
         * i - The index of the current element.
         * eles - The edgeNodeCollection of elements being mapped.
         * @param thisArg [optional] The value for this within the iterating function.
         */
        min(fn: (ele: CollectionElements, i: number, eles: CollectionElements) => any, thisArg?: any): {
            /**
             * The minimum value found.
             */
            value: any,
            /**
             * The element that corresponds to the minimum value.
             */
            ele: CollectionElements
        };

        /**
         * Find a maximum value and the corresponding element.
         *
         * @param fn The function that returns the value to compare for each element.
         * ele - The current element.
         * i - The index of the current element.
         * eles - The edgeNodeCollection of elements being mapped.
         * @param thisArg [optional] The value for this within the iterating function.
         */
        max(fn: (ele: CollectionElements, i: number, eles: CollectionElements) => any, thisArg?: any): {
            /**
             * The maximum value found.
             */
            value: any,
            /**
             * The element that corresponds to the maximum value.
             */
            ele: CollectionElements
        };
    }

    interface CollectionTraversing {
        // http://js.cytoscape.org/#collection/traversing

        /**
         * Get the open neighbourhood of the elements.
         *
         * The neighbourhood returned by this function is a bit different than the traditional definition of a "neighbourhood": This returned neighbourhood includes the edges connecting the edgeNodeCollection to the neighbourhood. This gives you more flexibility.
         * An open neighbourhood is one that does not include the original set of elements. If unspecified, a neighbourhood is open by default.
         *
         * @param selector [optional] An optional selector that is used to filter the resultant edgeNodeCollection.
         */
        neighborhood(selector?: Selector): CollectionElements;

        /**
         * Get the open neighbourhood of the elements.
         *
         * The neighbourhood returned by this function is a bit different than the traditional definition of a "neighbourhood": This returned neighbourhood includes the edges connecting the edgeNodeCollection to the neighbourhood. This gives you more flexibility.
         * An open neighbourhood is one that does not include the original set of elements. If unspecified, a neighbourhood is open by default.
         *
         * @param selector [optional] An optional selector that is used to filter the resultant edgeNodeCollection.
         */
        openNeighborhood(selector?: Selector): CollectionElements;

        /**
         * Get the closed neighbourhood of the elements.
         *
         * The neighbourhood returned by this function is a bit different than the traditional definition of a "neighbourhood": This returned neighbourhood includes the edges connecting the edgeNodeCollection to the neighbourhood. This gives you more flexibility.
         * A closed neighbourhood is one that does include the original set of elements.
         *
         * @param selector [optional] An optional selector that is used to filter the resultant edgeNodeCollection.
         */
        closedNeighborhood(selector?: Selector): CollectionElements;
    }

    interface CollectionEdgesTraversing {
        // http://js.cytoscape.org/#collection/traversing

        /**
         * Get the nodes connected to the edges in the edgeNodeCollection
         *
         * @param selector [optional] An optional selector that is used to filter the resultant edgeNodeCollection.
         */
        connectedNodes(selector?: Selector): CollectionNodes;

        /**
         * Get source nodes connected to the edges in the edgeNodeCollection.
         *
         * @param selector [optional] An optional selector that is used to filter the resultant edgeNodeCollection.
         */
        sources(selector?: Selector): CollectionNodes;

        /**
         * Get target nodes connected to the edges in the edgeNodeCollection.
         *
         * @param selector [optional] An optional selector that is used to filter the resultant edgeNodeCollection.
         */
        targets(selector?: Selector): CollectionNodes;

        /**
         * Get edges parallel to those in the edgeNodeCollection.
         *
         * Two edges are said to be parallel if they connect the same two nodes. Any two parallel edges may connect nodes in the same direction, in which case the edges share the same source and target. They may alternatively connect nodes in the opposite direction, in which case the source and target are reversed in the second edge.
         * That is:
         * - edge1.source().id() === edge2.source().id()
         *   && edge1.target().id() === edge2.target().id()
         * OR
         * - edge1.source().id() === edge2.target().id()
         *   && edge1.target().id() === edge2.source().id()
         *
         * @param selector [optional] An optional selector that is used to filter the resultant edgeNodeCollection.
         */
        parallelEdges(selector?: Selector): CollectionEdges;

        /**
         * Get edges codirected to those in the edgeNodeCollection.
         *
         * Two edges are said to be codirected if they connect the same two nodes in the same direction: The edges have the same source and target.
         * That is:
         * - edge1.source().id() === edge2.source().id()
         *   && edge1.target().id() === edge2.target().id()

         * @param selector [optional] An optional selector that is used to filter the resultant edgeNodeCollection.
         */
        codirectedEdges(selector?: Selector): CollectionEdges;
    }

    interface CollectionNodesTraversing {
        // http://js.cytoscape.org/#collection/traversing

        /**
         * Get the edges connecting the edgeNodeCollection to another edgeNodeCollection. Direction of the edges does not matter.
         *
         * @param eles The other edgeNodeCollection.
         */
        edgesWith(eles: Collection): CollectionEdges;

        /**
         * Get the edges connecting the edgeNodeCollection to another edgeNodeCollection. Direction of the edges does not matter.
         *
         * @param selector The other edgeNodeCollection, specified as a selector which is matched against all elements in the graph.
         */
        edgesWith(selector: Selector): CollectionEdges;

        /**
         * Get the edges coming from the edgeNodeCollection (i.e. the source) going to another edgeNodeCollection (i.e. the target).
         *
         * @param eles The other edgeNodeCollection.
         */
        edgesTo(eles: Collection): CollectionEdges;

        /**
         * Get the edges coming from the edgeNodeCollection (i.e. the source) going to another edgeNodeCollection (i.e. the target).
         *
         * @param selector The other edgeNodeCollection, specified as a selector which is matched against all elements in the graph.
         */
        edgesTo(selector: Selector): CollectionEdges;

        /**
         * Get the edges connected to the nodes in the edgeNodeCollection.
         *
         * @param selector [optional] An optional selector that is used to filter the resultant edgeNodeCollection.
         */
        connectedEdges(selector?: Selector): CollectionEdges;

        /**
         * From the set of calling nodes, get the nodes which are leaves (i.e. no outgoing edges, as in a directed acyclic graph).
         *
         * @param selector [optional] An optional selector that is used to filter the resultant edgeNodeCollection.
         */
        leaves(selector?: Selector): CollectionNodes;

        /**
         * Get edges (and their targets) coming out of the nodes in the edgeNodeCollection.
         *
         * @param selector [optional] An optional selector that is used to filter the resultant edgeNodeCollection.
         */
        outgoers(selector?: Selector): CollectionEdges;

        /**
         * Recursively get edges (and their targets) coming out of the nodes in the edgeNodeCollection (i.e. the outgoers, the outgoers' outgoers, ...).
         *
         * @param selector [optional] An optional selector that is used to filter the resultant edgeNodeCollection.
         */
        successors(selector?: Selector): CollectionEdges;

        /**
         * Get edges (and their sources) coming into the nodes in the edgeNodeCollection.
         *
         * @param selector [optional] An optional selector that is used to filter the resultant edgeNodeCollection.
         */
        incomers(selector?: Selector): CollectionEdges;

        /**
         * Recursively get edges (and their sources) coming into the nodes in the edgeNodeCollection (i.e. the incomers, the incomers' incomers, ...).
         *
         * @param selector [optional] An optional selector that is used to filter the resultant edgeNodeCollection.
         */
        predecessors(selector?: Selector): CollectionEdges;
    }

    interface SearchBreadthFirstOptions {
        /**
         * The root nodes (selector or edgeNodeCollection) to start the search from.
         */
        roots: Selector | Collection;
        /**
         * A handler function that is called when a node is visited in the search. The handler returns true when it finds the desired node, and it returns false to cancel the search.
         * i - The index indicating this node is the ith visited node.
         * depth - How many edge hops away this node is from the root nodes.
         * v - The current node.
         * e - The edge connecting the previous node to the current node.
         * u - The previous node.
         */
        visit?: (i: number, depth: number, v: CollectionNodes, e: CollectionEdges, u: CollectionNodes) => boolean;
        /**
         * A boolean indicating whether the algorithm should only go along edges from source to target (default false).
         */
        directed?: boolean;
    }

    interface SearchBreadthFirstResult {
        /**
         * The path of the search.
         * - The path returned includes edges such that if path[i] is a node, then path[i - 1] is the edge used to get to that node.
         */
        path: CollectionElements;
        /**
         * The node found by the search
         * - If no node was found, then found is empty.
         * - If your handler function returns false, then the only the path up to that point is returned.
         */
        found: CollectionNodes;
    }

    interface SearchDijkstraOptions {
        /**
         * The root node (selector or edgeNodeCollection) where the algorithm starts.
         */
        root: Selector | Collection;

        /**
         * A function that returns the positive numeric weight for this edge.
         *
         * If no weight function is defined, a constant weight of 1 is used for each edge.
         */
        weight?: (edge: CollectionEdges) => number;

        /**
         * A boolean indicating whether the algorithm should only go along edges from source to target (default false).
         */
        directed?: boolean;
    }

    interface SearchDijkstraResult {
        /**
         * Returns the distance from the source node to node.
         */
        distanceTo: (node: CollectionFirstNode) => number;

        /**
         * Returns a edgeNodeCollection containing the shortest path from the source node to node.
         * The path starts with the source node and includes the edges between the nodes in the path such that if pathTo(node)[i] is an edge, then pathTo(node)[i-1] is the previous node in the path and pathTo(node)[i+1] is the next node in the path.
         */
        pathTo: (node: CollectionFirstNode) => Collection;
    }

    interface SearchAStarOptions {
    }

    interface SearchAStarResult {
    }

    interface CollectionAlgorithms {
        // http://js.cytoscape.org/#collection/algorithms

        /**
         * Perform a breadth-first search within the elements in the edgeNodeCollection.
         *
         * Note that this function performs a breadth-first search on only the subset of the graph in the calling edgeNodeCollection.
         */
        breadthFirstSearch(options: SearchBreadthFirstOptions): SearchBreadthFirstResult;

        /**
         * Perform a breadth-first search within the elements in the edgeNodeCollection.
         *
         * Note that this function performs a breadth-first search on only the subset of the graph in the calling edgeNodeCollection.
         *
         * @param roots The root nodes (selector or edgeNodeCollection) to start the search from.
         * @param visit [optional] A handler function that is called when a node is visited in the search. The handler returns true when it finds the desired node, and it returns false to cancel the search.
         * i - The index indicating this node is the ith visited node.
         * depth - How many edge hops away this node is from the root nodes.
         * v - The current node.
         * e - The edge connecting the previous node to the current node.
         * u - The previous node.
         * @param directed [optional] A boolean indicating whether the search should only go along edges from source to target (default false).
         */
        breadthFirstSearch(roots: Selector | Collection,
                           visit?: (i: number, depth: number, v: CollectionNodes, e: CollectionEdges, u: CollectionNodes) => boolean,
                           directed?: boolean): SearchBreadthFirstResult;

        /**
         * Perform a breadth-first search within the elements in the edgeNodeCollection.
         *
         * Note that this function performs a breadth-first search on only the subset of the graph in the calling edgeNodeCollection.
         */
        bfs(options: SearchBreadthFirstOptions): SearchBreadthFirstResult;

        /**
         * Perform a breadth-first search within the elements in the edgeNodeCollection.
         *
         * Note that this function performs a breadth-first search on only the subset of the graph in the calling edgeNodeCollection.
         *
         * @param roots The root nodes (selector or edgeNodeCollection) to start the search from.
         * @param visit [optional] A handler function that is called when a node is visited in the search. The handler returns true when it finds the desired node, and it returns false to cancel the search.
         * i - The index indicating this node is the ith visited node.
         * depth - How many edge hops away this node is from the root nodes.
         * v - The current node.
         * e - The edge connecting the previous node to the current node.
         * u - The previous node.
         * @param directed [optional] A boolean indicating whether the search should only go along edges from source to target (default false).
         */
        bfs(roots: Selector | Collection,
            visit?: (i: number, depth: number, v: CollectionNodes, e: CollectionEdges, u: CollectionNodes) => boolean,
            directed?: boolean): SearchBreadthFirstResult;

        /**
         * Perform a depth-first search within the elements in the edgeNodeCollection.
         *
         * Note that this function performs a depth-first search on only the subset of the graph in the calling edgeNodeCollection.
         */
        depthFirstSearch(options: SearchBreadthFirstOptions): SearchBreadthFirstResult;

        /**
         * Perform a depth-first search within the elements in the edgeNodeCollection.
         *
         * Note that this function performs a depth-first search on only the subset of the graph in the calling edgeNodeCollection.
         *
         * @param roots The root nodes (selector or edgeNodeCollection) to start the search from.
         * @param visit [optional] A handler function that is called when a node is visited in the search. The handler returns true when it finds the desired node, and it returns false to cancel the search.
         * i - The index indicating this node is the ith visited node.
         * depth - How many edge hops away this node is from the root nodes.
         * v - The current node.
         * e - The edge connecting the previous node to the current node.
         * u - The previous node.
         * @param directed [optional] A boolean indicating whether the search should only go along edges from source to target (default false).
         */
        depthFirstSearch(roots: Selector | Collection,
                         visit?: (i: number, depth: number, v: CollectionNodes, e: CollectionEdges, u: CollectionNodes) => boolean,
                         directed?: boolean): SearchBreadthFirstResult;

        /**
         * Perform a depth-first search within the elements in the edgeNodeCollection.
         *
         * Note that this function performs a depth-first search on only the subset of the graph in the calling edgeNodeCollection.
         */
        dfs(options: SearchBreadthFirstOptions): SearchBreadthFirstResult;

        /**
         * Perform a depth-first search within the elements in the edgeNodeCollection.
         *
         * Note that this function performs a depth-first search on only the subset of the graph in the calling edgeNodeCollection.
         *
         * @param roots The root nodes (selector or edgeNodeCollection) to start the search from.
         * @param visit [optional] A handler function that is called when a node is visited in the search. The handler returns true when it finds the desired node, and it returns false to cancel the search.
         * i - The index indicating this node is the ith visited node.
         * depth - How many edge hops away this node is from the root nodes.
         * v - The current node.
         * e - The edge connecting the previous node to the current node.
         * u - The previous node.
         * @param directed [optional] A boolean indicating whether the search should only go along edges from source to target (default false).
         */
        dfs(roots: Selector | Collection,
            visit?: (i: number, depth: number, v: CollectionNodes, e: CollectionEdges, u: CollectionNodes) => boolean,
            directed?: boolean): SearchBreadthFirstResult;

        /**
         * Perform Dijkstra's algorithm on the elements in the edgeNodeCollection. This finds the shortest paths to all other nodes in the edgeNodeCollection from the root node.
         *
         * Note that this function performs Dijkstra's algorithm on only the subset of the graph in the calling edgeNodeCollection.
         */
        dijkstra(options: SearchDijkstraOptions): SearchDijkstraResult;

        /**
         * Perform Dijkstra's algorithm on the elements in the edgeNodeCollection. This finds the shortest paths to all other nodes in the edgeNodeCollection from the root node.
         *
         * Note that this function performs Dijkstra's algorithm on only the subset of the graph in the calling edgeNodeCollection.
         *
         * @param root The root node (selector or edgeNodeCollection) where the algorithm starts.
         * @param weight [optional] A function that returns the positive numeric weight for this edge.
         * If no weight function is defined, a constant weight of 1 is used for each edge.
         * @param directed [optional] A boolean indicating whether the algorithm should only go along edges from source to target (default false).
         */
        dijkstra(root: Selector | Collection,
                 weight?: (edge: CollectionEdges) => number,
                 directed?: boolean): SearchDijkstraResult;


        //TODO: continue here: http://js.cytoscape.org/#collection/algorithms/eles.dijkstra
    }

    interface CollectionNodesCompound {
        // http://js.cytoscape.org/#collection/compound-nodes

        /**
         * Get the compound parent node of each node in the edgeNodeCollection.
         *
         * @param selector [optional] A selector used to filter the resultant edgeNodeCollection.
         */
        parent(selector?: Selector): CollectionNodes;

        /**
         * Get all compound ancestor nodes (i.e. parents, parents' parents, etc.) of each node in the edgeNodeCollection.
         *
         * @param selector [optional] A selector used to filter the resultant edgeNodeCollection.
         */
        parents(selector?: Selector): CollectionNodes;

        /**
         * Get all compound ancestor nodes (i.e. parents, parents' parents, etc.) of each node in the edgeNodeCollection.
         *
         * @param selector [optional] A selector used to filter the resultant edgeNodeCollection.
         */
        ancestors(selector?: Selector): CollectionNodes;

        /**
         * Get all compound ancestors common to all the nodes in the edgeNodeCollection, starting with the closest and getting progressively farther.
         *
         * You can get the closest common ancestor via
         *   nodes.commonAncestors().first()
         * and the farthest via
         *   nodes.commonAncestors().last()
         * , because the common ancestors are in descending order of closeness.
         *
         * @param selector [optional] A selector used to filter the resultant edgeNodeCollection
         */
        commonAncestors(selector?: Selector): CollectionNodes;

        /**
         * Get all orphan (i.e. has no compound parent) nodes in the calling edgeNodeCollection.
         *
         * @param selector [optional] A selector used to filter the resultant edgeNodeCollection.
         */
        orphans(selector?: Selector): CollectionNodes;

        /**
         * Get all nonorphan (i.e. has a compound parent) nodes in the calling edgeNodeCollection.
         *
         * @param selector [optional] A selector used to filter the resultant edgeNodeCollection.
         */
        nonorphans(selector?: Selector): CollectionNodes;

        /**
         * Get all compound child (i.e. direct descendant) nodes of each node in the edgeNodeCollection.
         *
         * @param selector [optional] A selector used to filter the resultant edgeNodeCollection.
         */
        children(selector?: Selector): CollectionNodes;

        /**
         * Get all compound descendant (i.e. children, children's children, etc.) nodes of each node in the edgeNodeCollection.
         *
         * @param selector [optional] A selector used to filter the resultant edgeNodeCollection.
         */
        descendants(selector?: Selector): CollectionNodes;

        /**
         * Get all sibling (i.e. same compound parent) nodes of each node in the edgeNodeCollection.
         *
         * @param selector [optional] A selector used to filter the resultant edgeNodeCollection.
         */
        siblings(selector?: Selector): CollectionNodes;
    }

    interface CollectionFirstManipulation {
        /**
         * Get whether the element has been removed from the graph.
         */
        removed(): boolean;

        /**
         * Get whether the element is inside the graph (i.e. not removed).
         */
        inside(): boolean;
    }

    interface CollectionFirstData {
        //http://js.cytoscape.org/#collection/data

        /**
         * Get all data for the element.
         */
        data(): any;

        /**
         * Get a particular data field for the element.
         */
        data(name: string): any;

        /**
         * Set a particular data field for the element.
         */
        data(name: string, value: any);

        /**
         * Update multiple data fields at once via an object.
         */
        data(obj: any);

        /**
         * Get the entire scratchpad object for the element, where temporary or non-JSON data can be stored. App-level scratchpad data should use namespaces prefixed with underscore, like '_foo'.
         */
        scratch(): Scratchpad;

        /**
         * Get the scratchpad at a particular namespace, where temporary or non-JSON data can be stored. App-level scratchpad data should use namespaces prefixed with underscore, like '_foo'.
         *
         * @param namespace A namespace string.
         */
        scratch(namespace: string): Scratchpad;

        /**
         * Set the scratchpad at a particular namespace, where temporary or non-JSON data can be stored. App-level scratchpad data should use namespaces prefixed with underscore, like '_foo'.
         *
         * @param namespace A namespace string.
         * @param value The value to set at the specified namespace.
         */
        scratch(namespace: string, value: any): Scratchpad;

        /**
         * Remove scratchpad data. You should remove scratchpad data only at your own namespaces.
         *
         * @param namespace A namespace string.
         */
        removeScratch(namespace: string);

        /**
         * A shortcut to get the ID of an element.
         */
        id(): string;

        /**
         * Get the element's plain JavaScript object representation.
         */
        json(): string;

        /**
         * Get the group string that defines the type of the element.
         *
         * The group strings are 'nodes' for nodes and 'edges' for edges. In general, you should be using ele.isEdge() and ele.isNode() instead of ele.group().
         */
        group(): ElementGroup;

        /**
         * Get whether the element is a node.
         */
        isNode(): boolean;

        /**
         * Get whether the element is an edge.
         */
        isEdge(): boolean;
    }

    interface CollectionFirstEdgeData {
        //http://js.cytoscape.org/#collection/data

        /**
         * Get whether the edge is a loop (i.e. source same as target).
         */
        isLoop(): boolean;

        /**
         * Get whether the edge is simple (i.e. source different than target).
         */
        isSimple(): boolean;
    }

    interface CollectionFirstNodeMetadata {
        //http://js.cytoscape.org/#collection/metadata

        /**
         * Get the degree of a node.
         *
         * For a node, the degree is the number of edge connections it has. Each time a node is referenced as source or target of an edge in the graph, that counts as an edge connection.
         *
         * @param includeLoops A boolean, indicating whether loops are to be included in degree calculations.
         */
        degree(includeLoops: boolean): number;

        /**
         * Get the indegree of a node.
         *
         * For a node, the indegree is the number of incoming edge connections it has. Each time a node is referred to as target of an edge in the graph, that counts as an incoming edge connection.
         *
         * @param includeLoops A boolean, indicating whether loops are to be included in degree calculations.
         */
        indegree(includeLoops: boolean): number;

        /***
         * Get the outdegree of a node.
         *
         * For a node, the outdegree is the number of outgoing edge connections it has. Each time a node is referred to as source of an edge in the graph, that counts as an outgoing edge connection.
         *
         * @param includeLoops A boolean, indicating whether loops are to be included in degree calculations.
         */
        outdegree(includeLoops: boolean): number;
    }

    interface CollectionFirstNodePosition {
        //http://js.cytoscape.org/#collection/position--dimensions

        /**
         * Get the (model) position of a node.
         */
        position(): Position;

        /**
         * Get the value of a specified position dimension.
         *
         * @param dimension The position dimension to get.
         */
        position(dimension: PositionDimension): Position;

        /**
         * Set the value of a specified position dimension.
         *
         * @param dimension The position dimension to set.
         * @param value The value to set to the dimension.
         */
        position(dimension: PositionDimension, value: number): CollectionNodes;

        /**
         * Set the position using name-value pairs in the specified object.
         *
         * @param pos An object specifying name-value pairs representing dimensions to set.
         */
        position(pos: Position): CollectionNodes;

        /**
         * Get the (model) position of a node.
         */
        modelPosition(): Position;

        /**
         * Get the value of a specified position dimension.
         *
         * @param dimension The position dimension to get.
         */
        modelPosition(dimension: PositionDimension): Position;

        /**
         * Set the value of a specified position dimension.
         *
         * @param dimension The position dimension to set.
         * @param value The value to set to the dimension.
         */
        modelPosition(dimension: PositionDimension, value: number): CollectionNodes;

        /**
         * Set the position using name-value pairs in the specified object.
         *
         * @param pos An object specifying name-value pairs representing dimensions to set.
         */
        modelPosition(pos: Position): CollectionNodes;

        /**
         * Get the (model) position of a node.
         */
        point(): Position;

        /**
         * Get the value of a specified position dimension.
         *
         * @param dimension The position dimension to get.
         */
        point(dimension: PositionDimension): Position;

        /**
         * Set the value of a specified position dimension.
         *
         * @param dimension The position dimension to set.
         * @param value The value to set to the dimension.
         */
        point(dimension: PositionDimension, value: number): CollectionNodes;

        /**
         * Set the position using name-value pairs in the specified object.
         *
         * @param pos An object specifying name-value pairs representing dimensions to set.
         */
        point(pos: Position): CollectionNodes;

        /**
         * Get the rendered (on-screen) position of a node.
         */
        renderedPosition(): Position;

        /**
         * Get the value of a specified rendered posisition dimension.
         *
         * @param dimension The position dimension to get.
         */
        renderedPosition(dimension: PositionDimension): number;

        /**
         * Set the value of a specified rendered posisition dimension.
         *
         * @param dimension The position dimension to get.
         * @param value The value to set to the dimension.
         */
        renderedPosition(dimension: PositionDimension, value: number): CollectionNodes;

        /**
         * Set the rendered position using name-value pairs in the specified object.
         *
         * @param pos An object specifying name-value pairs representing dimensions to set.
         */
        renderedPosition(pos: Position): CollectionNodes;

        /**
         * Get the rendered (on-screen) position of a node.
         */
        renderedPoint(): Position;

        /**
         * Get the rendered (on-screen) position of a node.
         *
         * @param dimension The position dimension to get.
         */
        renderedPoint(dimension: PositionDimension): number;

        /**
         * Set the value of a specified rendered posisition dimension.
         *
         * @param dimension The position dimension to get.
         * @param value The value to set to the dimension.
         */
        renderedPoint(dimension: PositionDimension, value: number): CollectionNodes;

        /**
         * Set the rendered position using name-value pairs in the specified object.
         *
         * @param pos An object specifying name-value pairs representing dimensions to set.
         */
        renderedPoint(pos: Position): CollectionNodes;

        /**
         * Get the position of a node, relative to its compound parent.
         */
        relativePosition(): Position;

        /**
         * Get the position of a node, relative to its compound parent.
         *
         * @param dimension The position dimension to get.
         */
        relativePosition(dimension: PositionDimension): number;

        /**
         * Set the value of a specified relative posisition dimension.
         *
         * @param dimension The position dimension to get.
         * @param value The value to set to the dimension.
         */
        relativePosition(dimension: PositionDimension, value: number): CollectionNodes;

        /**
         * Set the relative position using name-value pairs in the specified object.
         *
         * @param pos An object specifying name-value pairs representing dimensions to set.
         */
        relativePosition(pos: Position): CollectionNodes;

        /**
         * Get the position of a node, relative to its compound parent.
         */
        relativePoint(): Position;

        /**
         * Get the position of a node, relative to its compound parent.
         *
         * @param dimension The position dimension to get.
         */
        relativePoint(dimension: PositionDimension): number;

        /**
         * Set the value of a specified relative posisition dimension.
         *
         * @param dimension The position dimension to get.
         * @param value The value to set to the dimension.
         */
        relativePoint(dimension: PositionDimension, value: number): CollectionNodes;

        /**
         * Set the relative position using name-value pairs in the specified object.
         *
         * @param pos An object specifying name-value pairs representing dimensions to set.
         */
        relativePoint(pos: Position): CollectionNodes;
    }

    interface CollectionFirstPosition {
        //http://js.cytoscape.org/#collection/position--dimensions

        /**
         * Get the width of the element.
         */
        width(): number;

        /**
         * Get the outer width of the element (includes width & border).
         */
        outerWidth(): number;

        /**
         * Get the width of the element in rendered dimensions.
         */
        renderedWidth(): number;

        /**
         * Get the outer width of the element (includes width & border) in rendered dimensions.
         */
        renderedOuterWidth(): number;

        /**
         * Get the height of the element.
         */
        height(): number;

        /**
         * Get the outer height of the element (includes height & border).
         */
        outerHeight(): number;

        /**
         * Get the height of the element in rendered dimensions.
         */
        renderedHeight(): number;

        /**
         * Get the outer height of the element (includes height & border) in rendered dimensions.
         */
        renderedOuterHeight(): number;

        /**
         * Gets whether the element is active (e.g. on user tap, grab, etc).
         */
        active(): boolean;
    }

    interface CollectionFirstSelection {
        // http://js.cytoscape.org/#collection/selection

        /**
         * Get whether the element is selected.
         */
        selected(): boolean;

        /**
         * Get whether the element's selection state is mutable.
         */
        selectable(): boolean;
    }

    interface CollectionFirstStyle {
        // http://js.cytoscape.org/#collection/style

        /**
         * Get whether an element has a particular class.
         *
         * @param className The name of the class to test for.
         */
        hasClass(className: string): boolean;

        ///**
        //* Get a name-value pair object containing visual style properties and their values for the element.
        //*/
        //style(): Css.ElementCss;
        ///**
        // * Get a particular style property value.
        // *
        // * @param name The name of the visual style property to get.
        // */
        //style(name: string): Css.ElementCss;

        ///**
        // * Get a name-value pair object containing visual style properties and their values for the element.
        // */
        //css(): Css.ElementCss;
        ///**
        // * Get a particular style property value.
        // *
        // * @param name The name of the visual style property to get.
        // */
        //css(name: string): Css.ElementCss;

        ///**
        // * Get a name-value pair object containing visual style properties and their values for the element.
        // */
        //bypass(): Css.ElementCss;
        ///**
        // * Get a particular style property value.
        // *
        // * @param name The name of the visual style property to get.
        // */
        //bypass(name: string): Css.ElementCss;

        /**
         * Get a name-value pair object containing rendered visual style properties and their values for the element.
         */
        renderedStyle(): Css.ElementCss;

        /**
         * Get a particular rendered style property value.
         *
         * @param name The name of the visual style property to get.
         */
        renderedStyle(name: string): Css.ElementCss;

        /**
         * Get a name-value pair object containing rendered visual style properties and their values for the element.
         */
        renderedCss(): Css.ElementCss;

        /**
         * Get a particular rendered style property value.
         *
         * @param name The name of the visual style property to get.
         */
        renderedCss(name: string): Css.ElementCss;

        /**
         * Get whether the element is visible.
         */
        visible(): boolean;

        /**
         * Get whether the element is hidden.
         */
        hidden(): boolean;

        /**
         * Get the effective opacity of the element (i.e. on-screen opacity), which takes into consideration parent node opacity.
         */
        effectiveOpacity(): number;

        /**
         * Get whether the element's effective opacity is completely transparent, which takes into consideration parent node opacity.
         */
        transparent(): boolean;
    }

    interface CollectionFirtsAnimation {
        // http://js.cytoscape.org/#collection/animation

        /**
         * Get whether the element is currently being animated.
         */
        animated(): boolean;
    }

    interface CollectionFirstEdgeTraversing {
        // http://js.cytoscape.org/#collection/traversing

        /**
         * Get source node of this edge.
         *
         * @param selector [optional] An optional selector that is used to filter the resultant edgeNodeCollection.
         */
        source(selector?: Selector): CollectionNodes;

        /**
         * Get target node of this edge.
         *
         * @param selector [optional] An optional selector that is used to filter the resultant edgeNodeCollection.
         */
        target(selector?: Selector): CollectionNodes;
    }

    interface CollectionFirstNodeCompound {
        // http://js.cytoscape.org/#collection/compound-nodes

        /**
         * Get whether the node is a compound parent (i.e. a node containing one or more child nodes)
         */
        isParent(): boolean;

        /**
         * Get whether the node is a compound child (i.e. contained within a node)
         */
        isChild(): boolean;
    }

    interface ElementsDefinition {
        nodes: NodeDefinition[];
        edges: EdgeDefinition[];
    }

    interface ElementDefinition {
        group?: ElementGroup;
        data: NodeDataDefinition | EdgeDataDefinition;
        /**
         * Scratchpad data (usually temp or nonserialisable data)
         */
        scatch?: Scratchpad;
        /**
         * The model position of the node (optional on init, mandatory after)
         */
        position?: Position;
        /**
         * can alternatively specify position in rendered on-screen pixels
         */
        renderedPosition?: Position;
        /**
         * Whether the element is selected (default false)
         */
        selected?: boolean;
        /**
         * Whether the selection state is mutable (default true)
         */
        selectable?: boolean;