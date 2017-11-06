import WaterEditor from "components/Water/components/WaterEditor";
import ElectricityEditor from "components/Electricity/ElectricityEditor";

const modalContentMapper = {
	WATER_EDITOR: 'WATER_EDITOR',
	ELECTRO_EDITOR: 'ELECTRO_EDITOR'
};

const modalContentComponents = {
	WATER_EDITOR: WaterEditor,
	ELECTRO_EDITOR: ElectricityEditor
};

export { modalContentMapper, modalContentComponents}