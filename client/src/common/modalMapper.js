import WaterEditor from "components/Water/components/WaterEditor";
import WaterExtEditor from "components/WaterExt/components/WaterEditor";
import ElectricityEditor from "components/Electricity/ElectricityEditor";

const modalContentMapper = {
	WATER_EDITOR: 'WATER_EDITOR',
	ELECTRO_EDITOR: 'ELECTRO_EDITOR',
	WATER_EXT_EDITOR: 'WATER_EXT_EDITOR',
};

const modalContentComponents = {
	WATER_EDITOR: WaterEditor,
	ELECTRO_EDITOR: ElectricityEditor,
	WATER_EXT_EDITOR: WaterExtEditor
};

export { modalContentMapper, modalContentComponents}