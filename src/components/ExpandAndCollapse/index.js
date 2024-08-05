import React, { useCallback, useEffect, useRef, useState, useLayoutEffect } from 'react';
import ReactFlow, {
   Panel,
   useNodesState,
   useEdgesState,
   addEdge,
   ReactFlowProvider,
   MarkerType,
   useReactFlow
} from 'reactflow';
import 'reactflow/dist/style.css';
import ELK from 'elkjs/lib/elk.bundled.js';


import './index.css';

const elk = new ELK();

const elkOptions = {
   'elk.algorithm': 'layered',
   'elk.layered.spacing.nodeNodeBetweenLayers': '100',
   'elk.spacing.nodeNode': '80',
};

const initialNodes = [
      {
         id: '1',
         name : 'Model V1',
         children: [
            {
                  id: '2',
                  name : 'namespace A',
                  parent: '1',
                  children : [
                     {
                        id: '3',
                        name: 'elementType',
                        parent: '2',
                        children: [
                              {
                                 id: '4',
                                 parent: '3',
                                 name: 'Car',
                                 children: [
                                    // {
                                    //    id: '5',
                                    //    parent: '4',
                                    //    name: 'd1',
                                    //    children: []
                                    // },
                                    // {
                                    //    id: '6',
                                    //    parent: '4',
                                    //    name: 'd2',
                                    //    children: []
                                    // },
                                 ]
                              }
                        ]
                     },
                     {
                        id: '5',
                        name: 'element',
                        parent: '2',
                        children: [
                           {
                              id: '6',
                              parent: '5',
                              name: 'car: Car',
                              children: [
                                 // {
                                 //    id: '5',
                                 //    parent: '4',
                                 //    name: 'd1',
                                 //    children: []
                                 // },
                                 // {
                                 //    id: '6',
                                 //    parent: '4',
                                 //    name: 'd2',
                                 //    children: []
                                 // },
                              ]
                           }
                        ]
                     }
                  ]
            },
            {
                  id: '7',
                  name : 'namespace B',
                  parent: '1',
                  children : [
                     {
                        id: '8',
                        name: 'elementType',
                        parent: '7',
                        children: [
                              {
                                 id: '9',
                                 parent: '8',
                                 name: 'Car',
                                 children: []
                              }
                        ]
                     },
                     {
                        id: '10',
                        name: 'element',
                        parent: '7',
                        children: [
                           {
                              id: '11',
                              parent: '10',
                              name: 'anotherCar: AnotherCar',
                              children: []
                           }
                        ]
                     }
                  ]
            },
            // {
            //       id: '10',
            //       name : 'h',
            //       parent: '1',
            //       children : [
            //          {
            //             id: '11',
            //             name: 'i',
            //             parent: '10',
            //             children: [
            //                   {
            //                      id: '12',
            //                      parent: '11',
            //                      name: 'j',
            //                      children: []
            //                   }
            //             ]
            //          }
            //       ]
            // },
            // {
            //       id: '13',
            //       name : 'k',
            //       parent: '1',
            //       children: [
            //          {
            //             id: '14',
            //             parent: '13',
            //             name: 'l',
            //             children: [
            //                {
            //                   id: '15',
            //                   parent: '14',
            //                   name: 'm',
            //                   children: []
            //                }
            //             ]
            //          }
            //       ]
            // }
         ]
      }
]

const initialEdges = [
   {
      id: 'edges-e5-7',
      source: '0',
      target: '1',
      label: '+',
      labelBgPadding: [8, 4],
      labelBgBorderRadius: 4,
      labelBgStyle: { fill: '#FFCC00', color: '#fff', fillOpacity: 0.7 },
      markerEnd: {
         type: MarkerType.Arrow,
      },
      type: 'smoothstep',
      animated: true
   }
]

// let id = 1;
// const getId = () => `${id++}`;

const getLayoutedElements = (nodes, edges, options = {}) => {
   const isHorizontal = options?.['elk.direction'] === 'RIGHT';
   const graph = {
      id: 'root',
      layoutOptions: options,
      children: nodes.map((node) => ({
         ...node,
         // Adjust the target and source handle positions based on the layout
         // direction.
         targetPosition: isHorizontal ? 'left' : 'top',
         sourcePosition: isHorizontal ? 'right' : 'bottom',

         // Hardcode a width and height for elk to use when layouting.
         width: 150,
         height: 50,
      })),
      edges: edges,
   };

   return elk
      .layout(graph)
      .then((layoutedGraph) => ({
         nodes: layoutedGraph.children.map((node) => ({
            ...node,
            // React Flow expects a position property on the node instead of `x`
            // and `y` fields.
            position: { x: node.x, y: node.y },
         })),

         edges: layoutedGraph.edges,
      }))
      .catch(console.error);
};

const fitViewOptions = {
   padding: 1,
};

function LayoutFlow() {
   const [nodes, setNodes, onNodesChange] = useNodesState([]);
   const [edges, setEdges, onEdgesChange] = useEdgesState([initialEdges]);
   const { fitView } = useReactFlow();
   const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);

   // const onConnect = useCallback(
   //    (params) => setEdges((eds) => addEdge(params, eds)),
   //    [],
   // );
   const onLayout = useCallback(
      ({ direction, useInitialNodes = false }) => {
         const opts = { 'elk.direction': direction, ...elkOptions };
         const ns = useInitialNodes ? initialNodes : nodes;
         const es = useInitialNodes ? initialEdges : edges;

         getLayoutedElements(ns, es, opts).then(
            ({ nodes: layoutedNodes, edges: layoutedEdges }) => {
               setNodes(layoutedNodes);
               setEdges(layoutedEdges);

               window.requestAnimationFrame(() => fitView());
            },
         );
      },
      [nodes, edges],
   );

   // Calculate the initial layout on mount.
   useLayoutEffect(() => {
      onLayout({ direction: 'DOWN', useInitialNodes: true });
   }, []);

   return (
      <ReactFlow
         nodes={nodes}
         edges={edges}
         onConnect={onConnect}
         onNodesChange={onNodesChange}
         onEdgesChange={onEdgesChange}
         fitView
      >
         <Panel position="top-right">
            <button onClick={() => onLayout({ direction: 'DOWN' })}>
               vertical layout
            </button>

            <button onClick={() => onLayout({ direction: 'RIGHT' })}>
               horizontal layout
            </button>
         </Panel>
      </ReactFlow>
   );
}

const ExpandAndCollapse = (props) => {
   const reactFlowWrapper = useRef(null);
   const [nodes, setNodes, onNodesChange] = useNodesState([]);
   const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
   const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);

   useEffect(()=>{
      setNodes([...initialNodes.map((item)=>{
         return {
            id: item.id,
            // type: item?.children?.length ? 'default': 'input',
            type: 'input',
            data: { label: item.name, children: item.children },
            position: { x: 0, y: 0 },
            sourcePosition: 'right',
            targetPosition: 'left'
         }
      })])
   },[])

   const handleNodeClick = (e, data) => {
      const findChildren = nodes.filter((item)=>item?.data?.parent===data.id)
      if(!findChildren.length){
         console.log("Going inside the if condition")
         const itemChildren = [...data.data.children.map((item, i)=>{
            return {
                  id: item.id,
                  type: item?.children?.length ? 'default': 'output',
                  data: { label: item.name, children: item.children, parent: item.parent },
                  position: { x: data.position.x+200, y:  i===0? data.position.y : data.position.y+i*100 },
                  sourcePosition: 'right',
                  targetPosition: 'left'
            }
         })]
         console.log("Children are: "+itemChildren)
         setEdges([
            ...edges,
            ...itemChildren.map((item)=>{
                  return {
                     id: String(parseInt(Math.random(100000000)*1000000)),
                     source: item?.data?.parent,
                     target: item?.id,
                     markerEnd: {
                        type: MarkerType.ArrowClosed,
                     },
                  }
            })
         ])
         setNodes(nodes.concat(itemChildren))
      }else{
         console.log("Going inside the else condition")
         console.log("Length is: "+findChildren.length)
         setNodes([
            ...nodes.filter((item)=>item?.data?.parent!==data.id)
         ])
         setEdges([
            ...edges.filter((item)=>data.id!==item.source)
         ])
      }
   }


   return (
      <div className="wrapper" ref={reactFlowWrapper}>
      <ReactFlow
         nodes={nodes}
         edges={edges}
         onNodesChange={onNodesChange}
         onEdgesChange={onEdgesChange}
         onConnect={onConnect}
         onNodeClick={handleNodeClick}
         fitView
         maxZoom={0.9}
         defaultViewport={{x:1, y:1, zoom:0.5}}
         fitViewOptions={fitViewOptions}
      />
      </div>
   );
};

export default () => (
   <ReactFlowProvider>
      <ExpandAndCollapse />
      {/* <LayoutFlow /> */}
   </ReactFlowProvider>
);