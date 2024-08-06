import ELK from 'elkjs/lib/elk.bundled.js';
import { ElkNode, ElkExtendedEdge, LayoutOptions } from 'elkjs/lib/elk-api';
import { Node, Edge } from "reactflow";
import { CSSProperties } from "react"


export const elkOptions = {
   "elk.algorithm": "mrtree",
   "elk.layered.spacing.nodeNodeBetweenLayers": "80",
   "elk.spacing.nodeNode": "80",
   "elk.layered.wrapping.strategy": "0",
   "elk.separateConnectedComponents": "false",
   "elk.nodeLabels.placement": "0",
};

const elk = new ELK();

export enum SUBGRAPHID {
   ELEMENTS = 'elements',
   TEMPLATES = 'templates'
}

export const intermediateData = {
   "element": {
      "element-c0ee619d-dfe8-40ac-85e9-e93986fe1bd1": {
         "name": "driveWheels",
         "typeId": "type-eb04ca9a-96b3-4712-b73d-f76e642acd33",
         "componentOf": "type-96773373-515e-4e2a-8a05-c036c401f36e",
         "assign": {},
         "symptom": {},
         "namespace": "WORLD",
         "modelFileLocation": {
            "fileType": "elementtype"
         }
      },
      "element-2e20767a-ddb6-4032-bf21-60ac526b84a0": {
         "name": "transmission",
         "typeId": "type-56004b5c-6a64-4b9c-a4d2-eb6ab41e9189",
         "componentOf": "type-96773373-515e-4e2a-8a05-c036c401f36e",
         "assign": {},
         "symptom": {},
         "namespace": "WORLD",
         "modelFileLocation": {
            "fileType": "elementtype"
         }
      },
      "element-08520fb9-74fe-451e-aa2b-367f9f8e90a5": {
         "name": "driveshaft",
         "typeId": "type-1a56cc7b-f300-4b59-b3e6-36efef5f7799",
         "componentOf": "type-96773373-515e-4e2a-8a05-c036c401f36e",
         "assign": {},
         "symptom": {},
         "namespace": "WORLD",
         "modelFileLocation": {
            "fileType": "elementtype"
         }
      },
      "element-628975f9-18b2-45d7-843e-13ddb8bf7c07": {
         "name": "rearDifferential",
         "typeId": "type-64d6b067-7246-49fb-a081-05c52eadafd8",
         "componentOf": "type-96773373-515e-4e2a-8a05-c036c401f36e",
         "assign": {},
         "symptom": {},
         "namespace": "WORLD",
         "modelFileLocation": {
            "fileType": "elementtype"
         }
      },
      "element-5fdcf358-4ffb-499a-b910-a74360e2a244": {
         "name": "engine",
         "typeId": "type-13d3f49a-8f52-4d7d-8bb7-49695ca2e00f",
         "componentOf": "type-076b1ab2-a18d-4827-bb10-517d26e654da",
         "assign": {},
         "symptom": {},
         "namespace": "WORLD",
         "modelFileLocation": {
            "fileType": "elementtype"
         }
      },
      "element-519b58b5-5406-47be-8ea4-38e6f6585712": {
         "name": "drivetrain",
         "typeId": "type-96773373-515e-4e2a-8a05-c036c401f36e",
         "componentOf": "type-076b1ab2-a18d-4827-bb10-517d26e654da",
         "assign": {},
         "symptom": {},
         "namespace": "WORLD",
         "modelFileLocation": {
            "fileType": "elementtype"
         }
      },
      "element-ab836a4c-ee61-4032-8b9a-dba873ce7350": {
         "name": "driver",
         "typeId": "type-9ffa6b70-08af-428d-9060-50916d64a013",
         "componentOf": "type-076b1ab2-a18d-4827-bb10-517d26e654da",
         "assign": {},
         "symptom": {},
         "namespace": "WORLD",
         "modelFileLocation": {
            "fileType": "elementtype"
         }
      },
      "element-0a0beae8-8310-46c3-a45d-719581e7faa3": {
         "name": "myFooVehicle",
         "typeId": "type-076b1ab2-a18d-4827-bb10-517d26e654da",
         "componentOf": "WORLD",
         "assign": {},
         "symptom": {},
         "namespace": "WORLD",
         "modelFileLocation": {
            "fileType": "elementtype"
         }
      }
   },
   "elementType": {
      "type-9ffa6b70-08af-428d-9060-50916d64a013": {
         "name": "Driver",
         "baseTypeId": "",
         "component": [],
         "elementReference": {},
         "assign": {},
         "symptom": {
            "symptom-b45ccfbe-c9f9-48ff-8827-b622d8e48772": {
               "name": "noGo",
               "when": [],
               "implies": []
            },
            "symptom-b0878406-79a9-477c-a57d-7fcc5b049703": {
               "name": "engineNoTorque",
               "when": [],
               "implies": []
            },
            "symptom-0b2bb986-3773-42b2-819d-d666d3d210c2": {
               "name": "engineRpmNonzero",
               "when": [],
               "implies": []
            },
            "symptom-d163b781-90a5-4351-bae1-1992fa561a44": {
               "name": "noThrottle",
               "when": [],
               "implies": []
            },
            "symptom-120b1d95-c696-4a3a-9222-e9692d811ef7": {
               "name": "nonzeroThrottle",
               "when": [],
               "implies": []
            },
            "symptom-ab13edc1-9cc0-4110-96c9-e37a20fec620": {
               "name": "driveTrainFailure",
               "when": [],
               "implies": []
            },
            "symptom-2b9d2e5f-ff88-4ff6-b4d8-e4208e586425": {
               "name": "parkingBrakeOff",
               "when": [],
               "implies": []
            }
         },
         "namespace": "WORLD",
         "modelFileLocation": {
            "fileType": "elementtype"
         }
      },
      "type-13d3f49a-8f52-4d7d-8bb7-49695ca2e00f": {
         "name": "Engine",
         "baseTypeId": "",
         "component": [],
         "elementReference": {},
         "assign": {},
         "symptom": {
            "symptom-daf49bf0-8237-4e84-a620-f8ccc109365e": {
               "name": "failure",
               "when": [],
               "implies": [],
               "rootCauseName": "failure",
               "probability": 0.9
            }
         },
         "namespace": "WORLD",
         "modelFileLocation": {
            "fileType": "elementtype"
         }
      },
      "type-56004b5c-6a64-4b9c-a4d2-eb6ab41e9189": {
         "name": "Transmission",
         "baseTypeId": "",
         "component": [],
         "elementReference": {
            "ref-580c313c-c319-4f28-8bc4-6ede297ac790": {
               "name": "ds",
               "typeId": "type-1a56cc7b-f300-4b59-b3e6-36efef5f7799"
            }
         },
         "assign": {},
         "symptom": {
            "symptom-0f31466d-eb4a-454b-ad94-7523b3b90a55": {
               "name": "noTorque",
               "when": [],
               "implies": [
                  {
                     "targetId": "type-1a56cc7b-f300-4b59-b3e6-36efef5f7799",
                     "symptomId": "symptom-909ffe95-17a3-482d-bd70-2a7a8623e270"
                  }
               ]
            },
            "symptom-bc5c3a05-88e8-41c2-b7a9-0f292eade997": {
               "name": "failure",
               "when": [],
               "implies": [
                  {
                     "targetId": "type-1a56cc7b-f300-4b59-b3e6-36efef5f7799",
                     "symptomId": "symptom-909ffe95-17a3-482d-bd70-2a7a8623e270"
                  }
               ],
               "rootCauseName": "transmissionFailure",
               "probability": 0.9
            }
         },
         "namespace": "WORLD",
         "modelFileLocation": {
            "fileType": "elementtype"
         }
      },
      "type-1a56cc7b-f300-4b59-b3e6-36efef5f7799": {
         "name": "Driveshaft",
         "baseTypeId": "",
         "component": [],
         "elementReference": {
            "ref-e8624abd-00c7-4ede-9227-8026b631a992": {
               "name": "rd",
               "typeId": "type-64d6b067-7246-49fb-a081-05c52eadafd8"
            }
         },
         "assign": {},
         "symptom": {
            "symptom-909ffe95-17a3-482d-bd70-2a7a8623e270": {
               "name": "noTorque",
               "when": [],
               "implies": [
                  {
                     "targetId": "type-64d6b067-7246-49fb-a081-05c52eadafd8",
                     "symptomId": "symptom-19dc43d0-507e-4610-9295-3a352488b862"
                  }
               ]
            },
            "symptom-d4c37989-bda2-40ac-befe-d3c20b8c0391": {
               "name": "failure",
               "when": [],
               "implies": [
                  {
                     "targetId": "type-64d6b067-7246-49fb-a081-05c52eadafd8",
                     "symptomId": "symptom-19dc43d0-507e-4610-9295-3a352488b862"
                  }
               ],
               "rootCauseName": "driveshaftFailure",
               "probability": 0.9
            }
         },
         "namespace": "WORLD",
         "modelFileLocation": {
            "fileType": "elementtype"
         }
      },
      "type-64d6b067-7246-49fb-a081-05c52eadafd8": {
         "name": "RearDifferential",
         "baseTypeId": "",
         "component": [],
         "elementReference": {
            "ref-e6242469-1bb7-4cfc-befc-84a7acb6b711": {
               "name": "dw",
               "typeId": "type-eb04ca9a-96b3-4712-b73d-f76e642acd33"
            }
         },
         "assign": {},
         "symptom": {
            "symptom-19dc43d0-507e-4610-9295-3a352488b862": {
               "name": "noTorque",
               "when": [],
               "implies": [
                  {
                     "targetId": "type-eb04ca9a-96b3-4712-b73d-f76e642acd33",
                     "symptomId": "symptom-568d1dc8-49a0-4775-a31f-9df32bbb1c20"
                  }
               ]
            },
            "symptom-3951b9cb-b44f-43c7-9b68-e44e8305f8b7": {
               "name": "failure",
               "when": [],
               "implies": [
                  {
                     "targetId": "type-eb04ca9a-96b3-4712-b73d-f76e642acd33",
                     "symptomId": "symptom-568d1dc8-49a0-4775-a31f-9df32bbb1c20"
                  }
               ],
               "rootCauseName": "rearDifferentialFailure",
               "probability": 0.9
            }
         },
         "namespace": "WORLD",
         "modelFileLocation": {
            "fileType": "elementtype"
         }
      },
      "type-eb04ca9a-96b3-4712-b73d-f76e642acd33": {
         "name": "DriveWheels",
         "baseTypeId": "",
         "component": [],
         "elementReference": {},
         "assign": {},
         "symptom": {
            "symptom-568d1dc8-49a0-4775-a31f-9df32bbb1c20": {
               "name": "noTorque",
               "when": [],
               "implies": []
            }
         },
         "namespace": "WORLD",
         "modelFileLocation": {
            "fileType": "elementtype"
         }
      },
      "type-96773373-515e-4e2a-8a05-c036c401f36e": {
         "name": "Drivetrain",
         "baseTypeId": "",
         "component": [
            "element-c0ee619d-dfe8-40ac-85e9-e93986fe1bd1",
            "element-2e20767a-ddb6-4032-bf21-60ac526b84a0",
            "element-08520fb9-74fe-451e-aa2b-367f9f8e90a5",
            "element-628975f9-18b2-45d7-843e-13ddb8bf7c07"
         ],
         "elementReference": {},
         "assign": {
            "assign-59999034-0131-4b68-a0c4-b1454a5cf353": {
               "sourceElementId": "element-08520fb9-74fe-451e-aa2b-367f9f8e90a5",
               "sourceReferenceId": "ref-e8624abd-00c7-4ede-9227-8026b631a992",
               "targetElementId": "element-628975f9-18b2-45d7-843e-13ddb8bf7c07"
            },
            "assign-96dedc95-83e9-471c-bf2d-6385fb89b8c7": {
               "sourceElementId": "element-2e20767a-ddb6-4032-bf21-60ac526b84a0",
               "sourceReferenceId": "ref-580c313c-c319-4f28-8bc4-6ede297ac790",
               "targetElementId": "element-08520fb9-74fe-451e-aa2b-367f9f8e90a5"
            },
            "assign-e536750e-7c7c-44fb-8327-9c2a1bd4c2d2": {
               "sourceElementId": "element-628975f9-18b2-45d7-843e-13ddb8bf7c07",
               "sourceReferenceId": "ref-e6242469-1bb7-4cfc-befc-84a7acb6b711",
               "targetElementId": "element-c0ee619d-dfe8-40ac-85e9-e93986fe1bd1"
            }
         },
         "symptom": {
            "symptom-0c067a41-41cd-4b1f-87b1-9ceb34e0455f": {
               "name": "transmissionFailure",
               "when": [
                  {
                     "targetId": "element-2e20767a-ddb6-4032-bf21-60ac526b84a0",
                     "symptomId": "symptom-bc5c3a05-88e8-41c2-b7a9-0f292eade997"
                  }
               ],
               "implies": []
            },
            "symptom-614bbe5f-694f-439c-be3b-c89dd402dc91": {
               "name": "driveShaftFailure",
               "when": [
                  {
                     "targetId": "element-08520fb9-74fe-451e-aa2b-367f9f8e90a5",
                     "symptomId": "symptom-d4c37989-bda2-40ac-befe-d3c20b8c0391"
                  }
               ],
               "implies": []
            },
            "symptom-8afe0fd2-3605-4f2a-97e9-93ba79367ac8": {
               "name": "rearDifferentialFailure",
               "when": [
                  {
                     "targetId": "element-628975f9-18b2-45d7-843e-13ddb8bf7c07",
                     "symptomId": "symptom-3951b9cb-b44f-43c7-9b68-e44e8305f8b7"
                  }
               ],
               "implies": []
            }
         },
         "namespace": "WORLD",
         "modelFileLocation": {
            "fileType": "elementtype"
         }
      },
      "type-076b1ab2-a18d-4827-bb10-517d26e654da": {
         "name": "FooVehicle",
         "baseTypeId": "",
         "component": [
            "element-5fdcf358-4ffb-499a-b910-a74360e2a244",
            "element-519b58b5-5406-47be-8ea4-38e6f6585712",
            "element-ab836a4c-ee61-4032-8b9a-dba873ce7350"
         ],
         "elementReference": {},
         "assign": {},
         "symptom": {
            "symptom-e0458361-5598-4c9f-921c-9c125625d2ef": {
               "name": "engineFailure",
               "when": [
                  {
                     "targetId": "element-5fdcf358-4ffb-499a-b910-a74360e2a244",
                     "symptomId": "symptom-daf49bf0-8237-4e84-a620-f8ccc109365e"
                  }
               ],
               "implies": [
                  {
                     "targetId": "element-ab836a4c-ee61-4032-8b9a-dba873ce7350",
                     "symptomId": "symptom-b45ccfbe-c9f9-48ff-8827-b622d8e48772"
                  },
                  {
                     "targetId": "element-ab836a4c-ee61-4032-8b9a-dba873ce7350",
                     "symptomId": "symptom-b0878406-79a9-477c-a57d-7fcc5b049703"
                  }
               ]
            },
            "symptom-be55e01a-23b0-47d7-b40c-9af67759322e": {
               "name": "drivetrainFailure",
               "when": [
                  {
                     "targetId": "element-519b58b5-5406-47be-8ea4-38e6f6585712",
                     "symptomId": "symptom-0c067a41-41cd-4b1f-87b1-9ceb34e0455f"
                  },
                  {
                     "targetId": "element-519b58b5-5406-47be-8ea4-38e6f6585712",
                     "symptomId": "symptom-614bbe5f-694f-439c-be3b-c89dd402dc91"
                  },
                  {
                     "targetId": "element-519b58b5-5406-47be-8ea4-38e6f6585712",
                     "symptomId": "symptom-8afe0fd2-3605-4f2a-97e9-93ba79367ac8"
                  }
               ],
               "implies": [
                  {
                     "targetId": "element-ab836a4c-ee61-4032-8b9a-dba873ce7350",
                     "symptomId": "symptom-b45ccfbe-c9f9-48ff-8827-b622d8e48772"
                  },
                  {
                     "targetId": "element-ab836a4c-ee61-4032-8b9a-dba873ce7350",
                     "symptomId": "symptom-b0878406-79a9-477c-a57d-7fcc5b049703"
                  },
                  {
                     "targetId": "element-ab836a4c-ee61-4032-8b9a-dba873ce7350",
                     "symptomId": "symptom-2b9d2e5f-ff88-4ff6-b4d8-e4208e586425"
                  },
                  {
                     "targetId": "element-ab836a4c-ee61-4032-8b9a-dba873ce7350",
                     "symptomId": "symptom-120b1d95-c696-4a3a-9222-e9692d811ef7"
                  }
               ]
            }
         },
         "namespace": "WORLD",
         "modelFileLocation": {
            "fileType": "elementtype"
         }
      }
   }
};

export interface RFNodeData {
   label: string,
   element: string[],
   style: CSSProperties
}

export interface SymptomDetails {
   id: string,
   name: string,
   rootCauseName?: string,
   probability: number
}

export interface ElementTypeNode {
   id: string,
   label?: string,
   position?: {x: number, y: number},
   height?: number,
   parentNode?: string,
   symptoms?: SymptomDetails[],
   components?: string[]
}

export enum NodeTypes {
   DEFAULT = 'customNode',
   HEX = 'customHex',
   ROOTCAUSE = 'customRootCause',
   SYMPTOM = 'Symptom',
   RC = 'RootCause',
   IMPACT = 'Impact',
   OVAL = 'customOval',
   PARENT = 'customParent'
}

export interface RCFGraphNode {
   id: string,
   label?: string,
   element?: string | string[],
   type?: string,
   height?: number,
   style?: CSSProperties,
   startBracket?: string,
   endBracket?: string
}

export interface RCFGraphEdge {
   source: string,
   target: string,
   label?: string,
   type?: string,
   sourceHandle?: string,
   targetHandle?: string
}

export class ELKGraph {

   initialPosition = { x: 0, y: 0 }

   /**
   * Get reactflow nodes given elements
   * @param {RCFGraphNode[]} nodes
   * @param {string} parentNode
   * @returns {Node[]}
   */
   getElementNodes = (elements: Map<string, Object>, elementTypes: Map<string, Object>, parentNode: string): Node[] => {
      const elementNodes: Node[] = [];
      elements.forEach((value, key) => {
         if (value.componentOf === 'WORLD') {
            let elementTypeName = elementTypes.get(value.typeId).name
            elementNodes.push(
               {
                  id: key,
                  data: {
                     label: value.name+':'+elementTypeName,
                     element: value.element,
                     style: { backgroundColor: '#F16913' }
                  },
                  position: this.initialPosition,
                  height: 40,
                  parentNode,
               }
            )
         }
      });
      return elementNodes;
   }

   /**
   * Get reactflow nodes given elements
   * @param {RCFGraphNode[]} nodes
   * @param {string} parentNode
   * @returns {Node[]}
   */
   getElementTypeNodes = (elementTypes: Map<string, Object>, parentNode: string): ElementTypeNode[] => {
      const elementTypeNodes: ElementTypeNode[] = [];
      elementTypes.forEach((value, key) => {
         var node = <ElementTypeNode>{}
         node.id = key
         node.label = value.name
         node.position = this.initialPosition
         node.height = 40
         node.parentNode = parentNode
         node.symptoms = []
         // Check whether symptom is present in the elementType
         // If yes, add them as the children to the node
         if (JSON.stringify(value.symptom) != '{}') {
            const symptomMap = new Map(Object.entries(value.symptom))
            // console.log("symptom map is: " + JSON.stringify([...symptomMap.entries()]))
            symptomMap.forEach((value, key) => {
               var symptomDetail = <SymptomDetails>{}
               symptomDetail.id = key
               symptomDetail.name = value.name
               node.symptoms.push(symptomDetail)
            });
         }
         // console.log("node is: " + JSON.stringify(node))
         elementTypeNodes.push(node)
      });
      return elementTypeNodes;
   }

   /**
   * Get reactflow edges given CustomEdges
   * @param {RCFGraphEdge[]} edges
   * @returns {Edge[]}
   */
   getRFEdges = (edges: RCFGraphEdge[]): Edge[] => {
      const rfEdges: Edge[] = [];
      edges.forEach((edge) => {
      rfEdges.push(
         {
            id: edge.source.concat(edge.target),
            source: edge.source,
            target: edge.target,
            sourceHandle: edge.sourceHandle,
            targetHandle: edge.targetHandle,
            label: edge.label,
            type: edge.type
         }
      )
      })
      return rfEdges;
   }

   /**
   * Get final graph from elkgraph
   * @returns {Promise<{nodes: Node[], edges: Edge[]}>}
   */
   getFinalGraph = async () : Promise<{nodes: Node[], edges: Edge[]}> => {

      const intermediateDataMap = new Map(Object.entries(intermediateData))
      const elements = intermediateDataMap.get('element')
      const elementMap = new Map(Object.entries(elements))
      const elementTypes = intermediateDataMap.get('elementType')
      const elementTypesMap = new Map(Object.entries(elementTypes))

      const elementNodes = this.getElementNodes(elementMap, elementTypesMap, SUBGRAPHID.ELEMENTS);
      const elementTypesNodes = this.getElementTypeNodes(elementTypesMap, SUBGRAPHID.TEMPLATES);

      // const elementTypeEdges = this.getRFEdges(this.rcfGraph.elementTypeEdges);
      // const elementEdges = this.getRFEdges(this.rcfGraph.elementEdges);
      const elementTypeEdges = []
      const elementEdges = []

      // const elementTypeChild = this.createElkChild(elementTypesNodes,
      //    elementTypeEdges, SUBGRAPHID.TEMPLATES,
      //    { 'elk.direction': 'DOWN', ...elkOptions });
      const elementTypeChild = this.createElementTypeElkChild(elementTypesNodes,
         SUBGRAPHID.TEMPLATES, { 'algorithm': 'layered' });
      // console.log("elementTypeChild is: "+JSON.stringify(elementTypeChild, null, 4))
      // const elementTypeChild = this.createElkChild(elementTypeNodes,
      //    elementEdges, SUBGRAPHID.ELEMENTS,
      //    { 'algorithm': 'layered' });
      const elementChild = this.createElkChild(elementNodes,
         elementEdges, SUBGRAPHID.ELEMENTS,
         { 'algorithm': 'layered' });

      const commonEdges = this.getRFEdges([]);

      let rootElkChildren: ElkNode[] = [];

      if (elementTypeChild) {
         rootElkChildren.push(elementTypeChild);
         // tmpEdges.push(
         //    {
         //       id: 'RCFImp',
         //       source: SUBGRAPHID.RCF,
         //       target: SUBGRAPHID.IMPACT
         //    }
         // )
      }

      if (elementChild) {
         rootElkChildren.push(elementChild);
      }

      const rootElkGraph = await this.getRootElkGraph(rootElkChildren,
      // commonEdges.concat([]), { 'elk.direction': 'DOWN', ...elkOptions });
      commonEdges.concat([]), { 'algorithm': 'layered' });
      console.log("RootElkGraph is: "+JSON.stringify(rootElkGraph, null, 4))

      const nodes = this.getLayoutedElements(rootElkGraph, elementNodes, elementTypesNodes);
      const edges = elementTypeEdges.concat(elementEdges).concat(commonEdges);
      return { nodes, edges };
   }

   getChildNodes = (symptoms: SymptomDetails[], width: number = 60, height: number = 60): ElkNode[] => {
      const elkNodes: ElkNode[] = [];
      symptoms.forEach((symptom) => {
      elkNodes.push(
         {
            id: symptom.id,
            width: width,
            height: height,
            labels: [{ text: symptom.name }]
         }
      )
      });
      return elkNodes;
   }

   createElementTypeElkChild = (nodes: ElementTypeNode[], graphId: string,
      options: LayoutOptions = { 'algorithm': 'layered' }): ElkNode | undefined => {
      if (nodes.length === 0) {
         return;
      }
      const elementTypeNodes: ElkNode[] = [];
      nodes.forEach((node) => {
         const childNodes = this.getChildNodes(node.symptoms);
         const graph = {
               id: node.id,
               layoutOptions: options,
               children: childNodes,
               labels: [{ text: node.label }]
            }
         elementTypeNodes.push(graph)
      });
      const graph: ElkNode = {
         id: graphId,
         layoutOptions: options,
         children: elementTypeNodes,
         labels: [{ text: graphId }]
      };
      return graph
   }

   /**
   * Create elk subgraph
   * @param {Node[]} nodes
   * @param {Edge[]} edges
   * @param {string} graphId
   * @param {LayoutOptions} options
   * @returns {ElkNode | undefined}
   */
   createElkChild = (nodes: Node[], edges: Edge[], graphId: string,
      options: LayoutOptions = {}): ElkNode | undefined => {
      if (nodes.length === 0) {
         return;
      }
      const elkEdges: ElkExtendedEdge[] = this.getElkEdges(edges);
      const elkNodes: ElkNode[] = this.getElkNodes(nodes);
      const graph: ElkNode = {
         id: graphId,
         layoutOptions: options,
         children: elkNodes,
         edges: elkEdges,
         labels: [{ text: graphId }]
      };
      return graph
   }

   /**
   * Get elk nodes given reactflow nodes
   * @param {Node[]} nodes
   * @param {number} [width=150]
   * @param {number} [height=40]
   * @returns {ElkNode[]}
   */
   getElkNodes = (nodes: Node[], width: number = 160, height: number = 60): ElkNode[] => {
      const elkNodes: ElkNode[] = [];
      nodes.forEach((node) => {
      elkNodes.push(
         {
            id: node.id,
            width: width,
            height: node.height ?? height,
            labels: [{ text: node.data.label }]
         }
      )
      });
      return elkNodes;
   }

   /**
   * Get elk edges given reactflow edges
   * @param {Edge[]} edges - array of reactflow edges
   * @returns {ElkExtendedEdge[]}
   */
   getElkEdges = (edges: Edge[]): ElkExtendedEdge[] => {
      const rootElkEdges: ElkExtendedEdge[] = [];
      edges.forEach((edge) => {
         rootElkEdges.push(
            {
               id: edge.source.concat(edge.target),
               sources: [edge.source],
               targets: [edge.target]
            }
         )
      })
      return rootElkEdges;
   }

   /**
   * Get ElkNode from id
   * @param {ElkNode[] | undefined} nodes
   * @param {string} nodeId
   * @returns {ElkNode | undefined} - ElkNode if found else undefined
   */
   getNodeFromId = (nodes: ElkNode[] | undefined, nodeId: string): ElkNode | undefined => {
      if (!nodes) {
         return;
      }
      for (const node of nodes) {
         if (node.id === nodeId) {
            return node;
         }
      }
   }

   /**
   * Get a reactflow node from elk node
   * @param {ElkNode} elkNode
   * @param {object} data
   * @param {CSSProperties | undefined} style
   * @param {string | undefined} type
   * @param {string | undefined} parent
   * @returns {Node} - reactflow node
   */
   getNodeFromElkNode = (elkNode: ElkNode, data: object, style: CSSProperties | undefined = undefined,
      type: string | undefined = undefined, parent: string | undefined = undefined): Node => {

      const node: Node = {
         id: elkNode.id,
         position: {
            x: elkNode.x ? elkNode.x : 0,
            y: elkNode.y ? elkNode.y : 0
         },
         data,
         // style: { width: elkNode.width, height: elkNode.height, ...style },
         style: { width: elkNode.width, height: parent? undefined : elkNode.height, ...style },
         parentNode: parent,
         type
      }
      return node;
   }

   /**
   * Populate reactflow nodes using ElkNode properties
   * @param {ElkNode[]} elkNodes
   * @param {Node[]} rfNodes
   * @returns {Node[]} - array of reactflow nodes
   */
   populateNodes = (elkNodes: ElkNode[], rfNodes: Node[]): Node[] => {
      let nodes: Node[] = [];
      rfNodes.forEach((node) => {
      const elkNode = this.getNodeFromId(elkNodes, node.id);
      if (elkNode) {
         nodes.push(this.getNodeFromElkNode(elkNode, node.data, node.style, node.type, node.parentNode))
      }
      return node;
      });
      return nodes;
   }


   /**
   * Get sub graph nodes of elkgraph
   * @param {ElkNode | undefined} subgraph
   * @param {string} subGraphLabel
   * @param {Node[]} childNodes
   * @param {CSSProperties} groupStyle
   * @returns {Node[]} - array of ReactFlow Nodes
   */
   getSubGraphNodes = (subgraph: ElkNode | undefined, subGraphLabel: string,
      childNodes: Node[], groupStyle: CSSProperties): Node[] => {
      let nodes: Node[] = [];
      if (subgraph) {
         // Width correction
         subgraph.width = subgraph.width ? subgraph.width + 15 : 0;
         subgraph.height = subgraph.height ? subgraph.height + 40 : 0;
         nodes.push(this.getNodeFromElkNode(subgraph, { label: subGraphLabel }, groupStyle, NodeTypes.PARENT));
         if (subgraph.children) {
            nodes = nodes.concat(this.populateNodes(subgraph.children, childNodes));
         }
      }
      // console.log("Nodes are: "+JSON.stringify(nodes, null, 4))
      return nodes;
   }


   /**
   * Get layouted elements of elkgraph
   * @param {ElkNode} rootElkGraph
   * @param {Node[]} symptomNodes
   * @param {Node[]} rcfNodes
   * @param {Node[]} impactNodes
   * @returns {Node[]} - array for Node objects
   */
   getLayoutedElements = (rootElkGraph: ElkNode, elementNodes: Node[],
      elementTypeNodes: Node[]): Node[] => {
      let nodes: Node[] = [];
      const elementNode = this.getNodeFromId(rootElkGraph.children, SUBGRAPHID.ELEMENTS);
      // console.log("Element Node collection is: "+JSON.stringify(elementNode, null, 4))
      const elementTypeNode = this.getNodeFromId(rootElkGraph.children, SUBGRAPHID.TEMPLATES);
      // console.log("Element Type Node collection is: "+JSON.stringify(elementTypeNode, null, 4))
      let groupStyle: CSSProperties = { backgroundColor: 'rgba(255, 255, 255, 0.2)',
      border: '1px solid black' };
      nodes = this.getSubGraphNodes(elementNode, 'Elements', elementNodes, {...groupStyle,translate: '0 -10px'});
      nodes = nodes.concat(this.getSubGraphNodes(elementTypeNode, 'Templates',
      elementTypeNodes, {...groupStyle,translate: '20 -30px'}));
      return nodes;
   }


   /**
   * Get layouted graph from sub graphs of elkgraph
   * @param {ElkNode[]} rootElkChildren
   * @param {Edge[]} edges
   * @param {LayoutOptions} options - graph layout options
   * @returns {Promise<ElkNode>} - layouted ElkNode
   */
   getRootElkGraph = async (rootElkChildren: ElkNode[], edges: Edge[],
      options: LayoutOptions = {})
      : Promise<ElkNode> => {
      const rootElkEdges: ElkExtendedEdge[] = this.getElkEdges(edges);
      const graph: ElkNode = {
         id: 'root',
         layoutOptions: options,
         children: rootElkChildren,
         edges: rootElkEdges,
      };

      const rootElkGraph = await elk.layout(graph);
      return rootElkGraph
   }
}