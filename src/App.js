import { NodeTypes, RFNodeData, ELKGraph } from './components/ModelGraph/nodes-edges.ts'
import React, { useEffect } from 'react';
import {
   ReactFlow,
   Node,
   Edge,
   ReactFlowProvider,
   useNodesState,
   useEdgesState,
   Handle,
   Position,
   MarkerType,
   useReactFlow
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

const handleStyle = {
   opacity: 0
}

let layoutedNodes: Node[] = [];
let layoutedEdges: Edge[] = [];

function CustomReactFlowNode({ data }: { data: RFNodeData }) {
   return (
      <>
         <Handle type="target" position={Position.Top} id="t" className='rf-handle rf-handle-top' />
         <Handle type="source" position={Position.Right} id="r" className='rf-handle rf-handle-right' />
         <Handle type="source" position={Position.Bottom} id="b" className='rf-handle rf-handle-bottom' />
         <Handle type="target" position={Position.Left} id="l" className='rf-handle rf-handle-left' />
         <div className="react-flow__node-default" style={data.style}>
            {data.label}
         </div>
      </>
   );
}

function CustomParentNode({ data }: { data: RFNodeData }) {
   return (
      <>
         <Handle type="target" position={Position.Top} id="t" className='rf-handle rf-handle-top' />
         <Handle type="source" position={Position.Right} id="r" className='rf-handle rf-handle-right' />
         <Handle type="source" position={Position.Bottom} id="b" className='rf-handle rf-handle-bottom' />
         <Handle type="target" position={Position.Left} id="l" className='rf-handle rf-handle-left' />
         <div className="react-flow__node" style={data.style}>
            {data.label}
         </div>
      </>
   );
}

function RootCauseNode({ data }: { data: RFNodeData }) {
   return (
      <>
         <Handle type="target" position={Position.Top} id="t" className='rf-handle rf-handle-top' />
         <Handle type="source" position={Position.Right} id="r" className='rf-handle rf-handle-right' />
         <Handle type="source" position={Position.Bottom} id="b" className='rf-handle rf-handle-bottom' />
         <Handle type="target" position={Position.Left} id="l" className='rf-handle rf-handle-left' />
         <div className="rc-node react-flow__node-default">
            <div className='custom-rc' style={{ backgroundColor: data.style?.backgroundColor }}>
               {data.label}
            </div>
            {data.element.map((ele: string) => {
               return (<div key={ele} className='rc-element'>
                  {ele}
               </div>);
            })}
         </div>
      </>
   );
}

function SymptomNode({ data }: { data: RFNodeData }) {
   return (
      <>
         <Handle id="t" type="target" position={Position.Top} style={{ top: '0px', ...handleStyle }} />
         <Handle
            type="source"
            position={Position.Right}
            id="r"
            style={{ right: '0px', ...handleStyle }}
         />
         <Handle type="source" position={Position.Bottom} id="b" style={{ bottom: '0px', ...handleStyle }} />
         <Handle type="target" position={Position.Left} id="l" style={{ left: '0px', ...handleStyle }} />
         <div className="symptom-node react-flow__node-default">
            {data.element.map((ele: string) => {
               return (<div key={ele} className='symptom-element'>
                  {ele}
               </div>);
            })}
            <div className='custom-symptom' style={{ backgroundColor: data.style?.backgroundColor }}>
               {data.label}
            </div>
         </div>
      </>
   );
}

function ImpactNode({ data }: { data: RFNodeData }) {
   return (
      <>
         <Handle type="target" position={Position.Top} id="t" className='rf-handle rf-handle-top' />
         <Handle type="source" position={Position.Right} id="r" className='rf-handle rf-handle-right' />
         <Handle type="source" position={Position.Bottom} id="b" className='rf-handle rf-handle-bottom' />
         <Handle type="target" position={Position.Left} id="l" className='rf-handle rf-handle-left' />
         <div className="react-flow__node-default impact-node">
            {data.element.map((ele: string) => {
               return (<div key={ele} className='impact-element'>
                  {ele}
               </div>);
            })}
            <div className='custom-impact' style={{ backgroundColor: data.style?.backgroundColor }}>
               {data.label}
            </div>
         </div>
      </>
   );
}

const nodeTypes = {
   [NodeTypes.DEFAULT]: CustomReactFlowNode,
   [NodeTypes.PARENT]: CustomParentNode,
   [NodeTypes.RC]: RootCauseNode,
   [NodeTypes.SYMPTOM]: SymptomNode,
   [NodeTypes.IMPACT]: ImpactNode
};

export function ReactFlowFitView() {
   const reactFlow = useReactFlow();
   // Auto fitView on graph update
   setTimeout(() => reactFlow.fitView(), 0);

   return (
      null
   );
}

function RCFGraphElk() {
   const [nodes, setNodes, onNodesChange] = useNodesState(layoutedNodes);
   const [edges, setEdges, onEdgesChange] = useEdgesState(layoutedEdges);

   useEffect(() => {
      const elkGraph = new ELKGraph();
      elkGraph.getFinalGraph().then(({ nodes, edges }) => {
         setNodes(nodes);
         setEdges(edges);
      });
   }, [setNodes, setEdges]);

   return (
      <div style={{ height: '80vh', width: '80vw', border: '2px solid' }}>
         <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            nodeTypes={nodeTypes}
            nodesDraggable={false}
            defaultEdgeOptions={defaultEdgeOptions}
            proOptions={{ hideAttribution: true }}
         >
            <ReactFlowFitView />
         </ReactFlow>
      </div>
   );
}

const defaultEdgeOptions = {
   markerEnd: {
      type: MarkerType.ArrowClosed,
      color: '#0'
   },
   style: {
      strokeWidth: 2
   }
}

function App() {
   return (
      <ReactFlowProvider>
         < RCFGraphElk />
      </ReactFlowProvider>
   );

}
export default App;