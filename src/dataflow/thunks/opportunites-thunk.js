import { getAllOpportunitesMiddleware } from '../middlewares/opportunites-middlewares';

// const thumbnailBase = `${process.env.REACT_APP_UPLOAD_THUMBNAIL}`;

// eslint-disable-next-line import/prefer-default-export
export const getAllOpportunitiesThunk = () => (
	async (dispatch) => {
		try {
			const response = await getAllOpportunitesMiddleware();

			const data = {};

			// response.forEach((item) => {
			// 	data[item.item_id] = {
			// 		oportunityId: 'Test8',
			// 		favorite: false,
			// 		fit: 'Test8',
			// 		category: 'Test8',
			// 		titleDescription: 'Test8',
			// 		deadLineInitial: '18/06/19',
			// 		deadLineLastOne: '28/08/19',

			// 	};
			// });

			console.log('response', response.data.hits.hits);
		} catch (err) {
			console.log(err);
		}
	}
);


// export const uploadAvatar = info => (
// 	axios.put(
// 		`${thumbnailBase}?key=users/${info.logo.name}`,
// 		info.logo.preview,
// 		{
// 			headers: {
// 				'Content-Type': `${info.logo.type}`,
// 				Authorization: info.token,
// 			},
// 		},
// 	)
// );





// {
// 	"took": 19,
// 	"timed_out": false,
// 	"_shards": {
// 			"total": 5,
// 			"successful": 5,
// 			"skipped": 0,
// 			"failed": 0
// 	},
// 	"hits": {
// 			"total": {
// 					"value": 21,
// 					"relation": "eq"
// 			},
// 			"max_score": 4.658954,
// 			"hits": [            
// 					{
// 							"_index": "pne-licitacoes",
// 							"_type": "licitacao",
// 							"_id": "7002675575",
// 							"_score": 4.658954,
// 							"_source": {
// 									"DOU_NUM": "",
// 									"PQ_VENDOR_LIST_HOUR": "00:00:00",
// 									"OPPORT_DESCR": "COMPLEMENTO ESCOPO CARTEIRA DIESEL RPBC",
// 									"IS_PREQUALI": "",
// 									"END_DATE": "2019-10-30",
// 									"ITEMS": [
// 											{
// 													"ITEM_PROCESS_TYP": "OUTL",
// 													"UNIT": "UA",
// 													"QUANTITY": 1.0,
// 													"NUM_MATERIAL": "",
// 													"ITEM_DESC": "CONSTRUÇÃO CIVIL E MONT.INDUSTRIAL-C/MAT",
// 													"EXLIN": "8001",
// 													"FAMILY": "99005530",
// 													"ITEM_NUM": "0000009001",
// 													"ITEM_NOTES": [],
// 													"FAMILY_DESCR": "",
// 													"DELIV_DATE": "2019-08-05",
// 													"GROUPING_LEVEL": "L",
// 													"FAMILY_CLASSIF": "99005530"
// 											},
// 											{
// 													"ITEM_PROCESS_TYP": "SERVICE",
// 													"UNIT": "UN",
// 													"QUANTITY": 1.0,
// 													"NUM_MATERIAL": "70000058",
// 													"ITEM_DESC": "EPC COMPLEM ESCOPO DIESEL RPBC",
// 													"EXLIN": "8001.AA",
// 													"FAMILY": "99005530",
// 													"ITEM_NUM": "0000000001",
// 													"ITEM_NOTES": [],
// 													"FAMILY_DESCR": "",
// 													"DELIV_DATE": "2019-08-05",
// 													"GROUPING_LEVEL": "",
// 													"FAMILY_CLASSIF": "99005530"
// 											}
// 									],
// 									"AUC_START_TIME": "00:00:00",
// 									"STATUS_DESC": "Publicado",
// 									"PQ_VENDOR_LIST_DATE": "0000-00-00",
// 									"STATUS": "I1011",
// 									"POSTING_DATE": "2019-07-31",
// 									"ANEXOS": [
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 10",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297C8867E6E6A71",
// 													"FILE_NAME": "Anexo IX - Pacote 10.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 09",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297C4B715A96A6E",
// 													"FILE_NAME": "Anexo IX - Pacote 09.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 08",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297C2836B522A6E",
// 													"FILE_NAME": "Anexo IX - Pacote 08.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 07",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297BFDBB0D2AA69",
// 													"FILE_NAME": "Anexo IX - Pacote 07.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 06",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297BD32CD25AA69",
// 													"FILE_NAME": "Anexo IX - Pacote 06.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 05",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297BA3B1EC86A68",
// 													"FILE_NAME": "Anexo IX - Pacote 05.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 04",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297B7344B696A67",
// 													"FILE_NAME": "Anexo IX - Pacote 04.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 03",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297B308E367EA1B",
// 													"FILE_NAME": "Anexo IX - Pacote 03.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 02",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297AFEE0549EA19",
// 													"FILE_NAME": "Anexo IX - Pacote 02.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 01",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297AD74182FCA15",
// 													"FILE_NAME": "Anexo IX - Pacote 01.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 20",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297FFF181DF2BB6",
// 													"FILE_NAME": "Anexo IX - Pacote 20.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 19",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297FDE9CF68EBB1",
// 													"FILE_NAME": "Anexo IX - Pacote 19.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 18",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297F920D2712BAB",
// 													"FILE_NAME": "Anexo IX - Pacote 18.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 17",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297F6737255ABA7",
// 													"FILE_NAME": "Anexo IX - Pacote 17.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 16",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297F4908993EB5C",
// 													"FILE_NAME": "Anexo IX - Pacote 16.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 15",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297F1867536AB59",
// 													"FILE_NAME": "Anexo IX - Pacote 15.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 14A",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297EE39E0FE2B4C",
// 													"FILE_NAME": "Anexo IX - Pacote 14A.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 14",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297EC0D637CEB48",
// 													"FILE_NAME": "Anexo IX - Pacote 14.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 13",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297E552DD342B30",
// 													"FILE_NAME": "Anexo IX - Pacote 13.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 12",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297DEDF9A71EADD",
// 													"FILE_NAME": "Anexo IX - Pacote 12.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 11",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297D7B15D34EAD2",
// 													"FILE_NAME": "Anexo IX - Pacote 11.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo K - DFP",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2985B05FB606D5E",
// 													"FILE_NAME": "AdendoK_DFP_ INDUSTRIAL_portugu_s_Ver.2 Rev.7.xlsm"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo L - Requisitos para Habilitacao",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2985FE1B4536D61",
// 													"FILE_NAME": "AdendoL_Requisitos_para_Habilitacao.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo M - INSTRUCOES MEMORIA DE CALCULO",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2986448AD54AD66",
// 													"FILE_NAME": "AdendoM - INSTRUCOES_PARA_MEMORIA_DE_CALCULO.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo N - Declaração Dispensa de Visita Tecnica",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29869661DD0ADBB",
// 													"FILE_NAME": "AdendoN_Declaracao Dispensa de Visita Tecnica.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo J - Planilha de preços - C - SobrComiss",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2985840BC162D5B",
// 													"FILE_NAME": "AdendoJ - Planilha de precos - C - SobrComiss revD.xlsx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo J - Planilha preços -B- Planilha Preços - Prest Serviços",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29855965FC2AD54",
// 													"FILE_NAME": "AdendoJ - Planilha de precos - B - Planilha Precos - Prestacao de Servicos RevB.xls"
// 											},
// 											{
// 													"DESCRIPTION": "Edital",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29826EBB1CCAC77",
// 													"FILE_NAME": "Edital Licitacao.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo B - Atestado de Visita Técnica",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2982A602C6BAC7C",
// 													"FILE_NAME": "AdendoB_Atestado de Visita Tecnica.doc"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo C - AtendimentoaoCE_GC_PRS",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2982D41EEE16C84",
// 													"FILE_NAME": "AdendoC_AtendimentoaoCE_GC_PRS.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo D - Elaboracao Independente de Proposta",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29830B045542C87",
// 													"FILE_NAME": "AdendoD_ElaboracaoIndependentedeProposta.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo E - Previa de Conformidade",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29833682F502C8A",
// 													"FILE_NAME": "AdendoE_PreviadeConformidade.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo F - Relacao Familiar Impedimento Servicos",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29836989D02EC8C",
// 													"FILE_NAME": "AdendoF_RelacaoFamiliar_Impedimento_Servicos.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo G - Declaracao de Atendimento aos Requisitos do Edital",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2983A70EE02ECE0",
// 													"FILE_NAME": "AdendoG_DeclaracaodeAtendimentoaosRequisitosdoEdita.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo H - Impedimentos Art38",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2983D76AA9CECE5",
// 													"FILE_NAME": "AdendoH_Impedimentos_Art38.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo I -  Impedimentos Art44",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29840CC5EACACE6",
// 													"FILE_NAME": "AdendoI_Impedimentos_Art44.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo J - Planilha de preços - A - Resumo Geral",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2985007396EAD45",
// 													"FILE_NAME": "AdendoJ - Planilha de precos - A - Resumo Geral_Rev C.xls"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo 3 B - Adendo L - TEC-SMS",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B298A2CE7CA3EE95",
// 													"FILE_NAME": "Anexo 3 B - Adendo L - CEP TEC-SMS.DOCX"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo 3 A - Adendo L - CRITÉRIO TÉCNICO",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2989CBFC2A9EE91",
// 													"FILE_NAME": "Anexo 3 A -Adendo L - 99005530_CRITERIO TECNICO_Tecnico.DOCX"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo 2 - Adendo L - CRITÉRIO ECONÔMICO",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29899FCD362AE8A",
// 													"FILE_NAME": "Anexo 2 - Adendo L - CEP - CRITERIO ECONOMICO_V3_Economico.DOCX"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo 1 - Adendo L - CRITÉRIO LEGAL",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2989585D267EE87",
// 													"FILE_NAME": "Anexo 1 - Adendo L -CEP - CRITERIO LEGAL_V2_Legal.DOCX"
// 											}
// 									],
// 									"DOU_PUBL_DATE": "2019-08-28",
// 									"END_HOUR": "12:00:00",
// 									"SUB_STATUS": "",
// 									"REGIONS": [
// 											{
// 													"COUNTRY": "BR",
// 													"REGION_DESCRIPTION": "São Paulo",
// 													"REGION": "SP"
// 											}
// 									],
// 									"DISPUTE_MODE": "02",
// 									"IS_EQUALIZED": "",
// 									"START_HOUR": "12:00:00",
// 									"COMPANY_DESC": "Petróleo Brasileiro S. A.",
// 									"LIMIT_IN_DAYS": 90,
// 									"OPPORT_TYPE": "LIDT",
// 									"DESC_DETAIL": "",
// 									"START_DATE": "2019-10-25",
// 									"COMPANY": "1000",
// 									"HAS_PREQUALIFIED": "",
// 									"AUC_START_DATE": "0000-00-00",
// 									"NAT_COVERAGE": "N",
// 									"OPPORT_NUM": "7002675575",
// 									"OPEN_HOUR": "12:00:00",
// 									"OPEN_DATE": "2019-10-30"
// 							}
// 					}            
// 					{
// 							"_index": "pne-licitacoes",
// 							"_type": "licitacao",
// 							"_id": "7002675575",
// 							"_score": 4.658954,
// 							"_source": {
// 									"DOU_NUM": "",
// 									"PQ_VENDOR_LIST_HOUR": "00:00:00",
// 									"OPPORT_DESCR": "COMPLEMENTO ESCOPO CARTEIRA DIESEL RPBC",
// 									"IS_PREQUALI": "",
// 									"END_DATE": "2019-10-30",
// 									"ITEMS": [
// 											{
// 													"ITEM_PROCESS_TYP": "OUTL",
// 													"UNIT": "UA",
// 													"QUANTITY": 1.0,
// 													"NUM_MATERIAL": "",
// 													"ITEM_DESC": "CONSTRUÇÃO CIVIL E MONT.INDUSTRIAL-C/MAT",
// 													"EXLIN": "8001",
// 													"FAMILY": "99005530",
// 													"ITEM_NUM": "0000009001",
// 													"ITEM_NOTES": [],
// 													"FAMILY_DESCR": "",
// 													"DELIV_DATE": "2019-08-05",
// 													"GROUPING_LEVEL": "L",
// 													"FAMILY_CLASSIF": "99005530"
// 											},
// 											{
// 													"ITEM_PROCESS_TYP": "SERVICE",
// 													"UNIT": "UN",
// 													"QUANTITY": 1.0,
// 													"NUM_MATERIAL": "70000058",
// 													"ITEM_DESC": "EPC COMPLEM ESCOPO DIESEL RPBC",
// 													"EXLIN": "8001.AA",
// 													"FAMILY": "99005530",
// 													"ITEM_NUM": "0000000001",
// 													"ITEM_NOTES": [],
// 													"FAMILY_DESCR": "",
// 													"DELIV_DATE": "2019-08-05",
// 													"GROUPING_LEVEL": "",
// 													"FAMILY_CLASSIF": "99005530"
// 											}
// 									],
// 									"AUC_START_TIME": "00:00:00",
// 									"STATUS_DESC": "Publicado",
// 									"PQ_VENDOR_LIST_DATE": "0000-00-00",
// 									"STATUS": "I1011",
// 									"POSTING_DATE": "2019-07-31",
// 									"ANEXOS": [
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 10",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297C8867E6E6A71",
// 													"FILE_NAME": "Anexo IX - Pacote 10.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 09",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297C4B715A96A6E",
// 													"FILE_NAME": "Anexo IX - Pacote 09.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 08",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297C2836B522A6E",
// 													"FILE_NAME": "Anexo IX - Pacote 08.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 07",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297BFDBB0D2AA69",
// 													"FILE_NAME": "Anexo IX - Pacote 07.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 06",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297BD32CD25AA69",
// 													"FILE_NAME": "Anexo IX - Pacote 06.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 05",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297BA3B1EC86A68",
// 													"FILE_NAME": "Anexo IX - Pacote 05.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 04",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297B7344B696A67",
// 													"FILE_NAME": "Anexo IX - Pacote 04.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 03",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297B308E367EA1B",
// 													"FILE_NAME": "Anexo IX - Pacote 03.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 02",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297AFEE0549EA19",
// 													"FILE_NAME": "Anexo IX - Pacote 02.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 01",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297AD74182FCA15",
// 													"FILE_NAME": "Anexo IX - Pacote 01.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 20",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297FFF181DF2BB6",
// 													"FILE_NAME": "Anexo IX - Pacote 20.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 19",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297FDE9CF68EBB1",
// 													"FILE_NAME": "Anexo IX - Pacote 19.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 18",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297F920D2712BAB",
// 													"FILE_NAME": "Anexo IX - Pacote 18.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 17",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297F6737255ABA7",
// 													"FILE_NAME": "Anexo IX - Pacote 17.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 16",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297F4908993EB5C",
// 													"FILE_NAME": "Anexo IX - Pacote 16.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 15",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297F1867536AB59",
// 													"FILE_NAME": "Anexo IX - Pacote 15.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 14A",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297EE39E0FE2B4C",
// 													"FILE_NAME": "Anexo IX - Pacote 14A.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 14",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297EC0D637CEB48",
// 													"FILE_NAME": "Anexo IX - Pacote 14.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 13",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297E552DD342B30",
// 													"FILE_NAME": "Anexo IX - Pacote 13.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 12",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297DEDF9A71EADD",
// 													"FILE_NAME": "Anexo IX - Pacote 12.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 11",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297D7B15D34EAD2",
// 													"FILE_NAME": "Anexo IX - Pacote 11.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo K - DFP",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2985B05FB606D5E",
// 													"FILE_NAME": "AdendoK_DFP_ INDUSTRIAL_portugu_s_Ver.2 Rev.7.xlsm"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo L - Requisitos para Habilitacao",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2985FE1B4536D61",
// 													"FILE_NAME": "AdendoL_Requisitos_para_Habilitacao.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo M - INSTRUCOES MEMORIA DE CALCULO",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2986448AD54AD66",
// 													"FILE_NAME": "AdendoM - INSTRUCOES_PARA_MEMORIA_DE_CALCULO.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo N - Declaração Dispensa de Visita Tecnica",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29869661DD0ADBB",
// 													"FILE_NAME": "AdendoN_Declaracao Dispensa de Visita Tecnica.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo J - Planilha de preços - C - SobrComiss",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2985840BC162D5B",
// 													"FILE_NAME": "AdendoJ - Planilha de precos - C - SobrComiss revD.xlsx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo J - Planilha preços -B- Planilha Preços - Prest Serviços",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29855965FC2AD54",
// 													"FILE_NAME": "AdendoJ - Planilha de precos - B - Planilha Precos - Prestacao de Servicos RevB.xls"
// 											},
// 											{
// 													"DESCRIPTION": "Edital",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29826EBB1CCAC77",
// 													"FILE_NAME": "Edital Licitacao.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo B - Atestado de Visita Técnica",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2982A602C6BAC7C",
// 													"FILE_NAME": "AdendoB_Atestado de Visita Tecnica.doc"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo C - AtendimentoaoCE_GC_PRS",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2982D41EEE16C84",
// 													"FILE_NAME": "AdendoC_AtendimentoaoCE_GC_PRS.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo D - Elaboracao Independente de Proposta",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29830B045542C87",
// 													"FILE_NAME": "AdendoD_ElaboracaoIndependentedeProposta.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo E - Previa de Conformidade",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29833682F502C8A",
// 													"FILE_NAME": "AdendoE_PreviadeConformidade.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo F - Relacao Familiar Impedimento Servicos",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29836989D02EC8C",
// 													"FILE_NAME": "AdendoF_RelacaoFamiliar_Impedimento_Servicos.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo G - Declaracao de Atendimento aos Requisitos do Edital",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2983A70EE02ECE0",
// 													"FILE_NAME": "AdendoG_DeclaracaodeAtendimentoaosRequisitosdoEdita.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo H - Impedimentos Art38",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2983D76AA9CECE5",
// 													"FILE_NAME": "AdendoH_Impedimentos_Art38.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo I -  Impedimentos Art44",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29840CC5EACACE6",
// 													"FILE_NAME": "AdendoI_Impedimentos_Art44.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo J - Planilha de preços - A - Resumo Geral",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2985007396EAD45",
// 													"FILE_NAME": "AdendoJ - Planilha de precos - A - Resumo Geral_Rev C.xls"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo 3 B - Adendo L - TEC-SMS",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B298A2CE7CA3EE95",
// 													"FILE_NAME": "Anexo 3 B - Adendo L - CEP TEC-SMS.DOCX"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo 3 A - Adendo L - CRITÉRIO TÉCNICO",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2989CBFC2A9EE91",
// 													"FILE_NAME": "Anexo 3 A -Adendo L - 99005530_CRITERIO TECNICO_Tecnico.DOCX"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo 2 - Adendo L - CRITÉRIO ECONÔMICO",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29899FCD362AE8A",
// 													"FILE_NAME": "Anexo 2 - Adendo L - CEP - CRITERIO ECONOMICO_V3_Economico.DOCX"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo 1 - Adendo L - CRITÉRIO LEGAL",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2989585D267EE87",
// 													"FILE_NAME": "Anexo 1 - Adendo L -CEP - CRITERIO LEGAL_V2_Legal.DOCX"
// 											}
// 									],
// 									"DOU_PUBL_DATE": "2019-08-28",
// 									"END_HOUR": "12:00:00",
// 									"SUB_STATUS": "",
// 									"REGIONS": [
// 											{
// 													"COUNTRY": "BR",
// 													"REGION_DESCRIPTION": "São Paulo",
// 													"REGION": "SP"
// 											}
// 									],
// 									"DISPUTE_MODE": "02",
// 									"IS_EQUALIZED": "",
// 									"START_HOUR": "12:00:00",
// 									"COMPANY_DESC": "Petróleo Brasileiro S. A.",
// 									"LIMIT_IN_DAYS": 90,
// 									"OPPORT_TYPE": "LIDT",
// 									"DESC_DETAIL": "",
// 									"START_DATE": "2019-10-25",
// 									"COMPANY": "1000",
// 									"HAS_PREQUALIFIED": "",
// 									"AUC_START_DATE": "0000-00-00",
// 									"NAT_COVERAGE": "N",
// 									"OPPORT_NUM": "7002675575",
// 									"OPEN_HOUR": "12:00:00",
// 									"OPEN_DATE": "2019-10-30"
// 							}
// 					}            
// 					{
// 							"_index": "pne-licitacoes",
// 							"_type": "licitacao",
// 							"_id": "7002675575",
// 							"_score": 4.658954,
// 							"_source": {
// 									"DOU_NUM": "",
// 									"PQ_VENDOR_LIST_HOUR": "00:00:00",
// 									"OPPORT_DESCR": "COMPLEMENTO ESCOPO CARTEIRA DIESEL RPBC",
// 									"IS_PREQUALI": "",
// 									"END_DATE": "2019-10-30",
// 									"ITEMS": [
// 											{
// 													"ITEM_PROCESS_TYP": "OUTL",
// 													"UNIT": "UA",
// 													"QUANTITY": 1.0,
// 													"NUM_MATERIAL": "",
// 													"ITEM_DESC": "CONSTRUÇÃO CIVIL E MONT.INDUSTRIAL-C/MAT",
// 													"EXLIN": "8001",
// 													"FAMILY": "99005530",
// 													"ITEM_NUM": "0000009001",
// 													"ITEM_NOTES": [],
// 													"FAMILY_DESCR": "",
// 													"DELIV_DATE": "2019-08-05",
// 													"GROUPING_LEVEL": "L",
// 													"FAMILY_CLASSIF": "99005530"
// 											},
// 											{
// 													"ITEM_PROCESS_TYP": "SERVICE",
// 													"UNIT": "UN",
// 													"QUANTITY": 1.0,
// 													"NUM_MATERIAL": "70000058",
// 													"ITEM_DESC": "EPC COMPLEM ESCOPO DIESEL RPBC",
// 													"EXLIN": "8001.AA",
// 													"FAMILY": "99005530",
// 													"ITEM_NUM": "0000000001",
// 													"ITEM_NOTES": [],
// 													"FAMILY_DESCR": "",
// 													"DELIV_DATE": "2019-08-05",
// 													"GROUPING_LEVEL": "",
// 													"FAMILY_CLASSIF": "99005530"
// 											}
// 									],
// 									"AUC_START_TIME": "00:00:00",
// 									"STATUS_DESC": "Publicado",
// 									"PQ_VENDOR_LIST_DATE": "0000-00-00",
// 									"STATUS": "I1011",
// 									"POSTING_DATE": "2019-07-31",
// 									"ANEXOS": [
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 10",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297C8867E6E6A71",
// 													"FILE_NAME": "Anexo IX - Pacote 10.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 09",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297C4B715A96A6E",
// 													"FILE_NAME": "Anexo IX - Pacote 09.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 08",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297C2836B522A6E",
// 													"FILE_NAME": "Anexo IX - Pacote 08.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 07",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297BFDBB0D2AA69",
// 													"FILE_NAME": "Anexo IX - Pacote 07.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 06",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297BD32CD25AA69",
// 													"FILE_NAME": "Anexo IX - Pacote 06.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 05",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297BA3B1EC86A68",
// 													"FILE_NAME": "Anexo IX - Pacote 05.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 04",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297B7344B696A67",
// 													"FILE_NAME": "Anexo IX - Pacote 04.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 03",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297B308E367EA1B",
// 													"FILE_NAME": "Anexo IX - Pacote 03.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 02",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297AFEE0549EA19",
// 													"FILE_NAME": "Anexo IX - Pacote 02.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 01",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297AD74182FCA15",
// 													"FILE_NAME": "Anexo IX - Pacote 01.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 20",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297FFF181DF2BB6",
// 													"FILE_NAME": "Anexo IX - Pacote 20.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 19",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297FDE9CF68EBB1",
// 													"FILE_NAME": "Anexo IX - Pacote 19.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 18",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297F920D2712BAB",
// 													"FILE_NAME": "Anexo IX - Pacote 18.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 17",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297F6737255ABA7",
// 													"FILE_NAME": "Anexo IX - Pacote 17.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 16",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297F4908993EB5C",
// 													"FILE_NAME": "Anexo IX - Pacote 16.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 15",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297F1867536AB59",
// 													"FILE_NAME": "Anexo IX - Pacote 15.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 14A",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297EE39E0FE2B4C",
// 													"FILE_NAME": "Anexo IX - Pacote 14A.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 14",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297EC0D637CEB48",
// 													"FILE_NAME": "Anexo IX - Pacote 14.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 13",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297E552DD342B30",
// 													"FILE_NAME": "Anexo IX - Pacote 13.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 12",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297DEDF9A71EADD",
// 													"FILE_NAME": "Anexo IX - Pacote 12.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 11",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297D7B15D34EAD2",
// 													"FILE_NAME": "Anexo IX - Pacote 11.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo K - DFP",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2985B05FB606D5E",
// 													"FILE_NAME": "AdendoK_DFP_ INDUSTRIAL_portugu_s_Ver.2 Rev.7.xlsm"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo L - Requisitos para Habilitacao",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2985FE1B4536D61",
// 													"FILE_NAME": "AdendoL_Requisitos_para_Habilitacao.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo M - INSTRUCOES MEMORIA DE CALCULO",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2986448AD54AD66",
// 													"FILE_NAME": "AdendoM - INSTRUCOES_PARA_MEMORIA_DE_CALCULO.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo N - Declaração Dispensa de Visita Tecnica",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29869661DD0ADBB",
// 													"FILE_NAME": "AdendoN_Declaracao Dispensa de Visita Tecnica.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo J - Planilha de preços - C - SobrComiss",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2985840BC162D5B",
// 													"FILE_NAME": "AdendoJ - Planilha de precos - C - SobrComiss revD.xlsx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo J - Planilha preços -B- Planilha Preços - Prest Serviços",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29855965FC2AD54",
// 													"FILE_NAME": "AdendoJ - Planilha de precos - B - Planilha Precos - Prestacao de Servicos RevB.xls"
// 											},
// 											{
// 													"DESCRIPTION": "Edital",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29826EBB1CCAC77",
// 													"FILE_NAME": "Edital Licitacao.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo B - Atestado de Visita Técnica",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2982A602C6BAC7C",
// 													"FILE_NAME": "AdendoB_Atestado de Visita Tecnica.doc"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo C - AtendimentoaoCE_GC_PRS",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2982D41EEE16C84",
// 													"FILE_NAME": "AdendoC_AtendimentoaoCE_GC_PRS.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo D - Elaboracao Independente de Proposta",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29830B045542C87",
// 													"FILE_NAME": "AdendoD_ElaboracaoIndependentedeProposta.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo E - Previa de Conformidade",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29833682F502C8A",
// 													"FILE_NAME": "AdendoE_PreviadeConformidade.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo F - Relacao Familiar Impedimento Servicos",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29836989D02EC8C",
// 													"FILE_NAME": "AdendoF_RelacaoFamiliar_Impedimento_Servicos.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo G - Declaracao de Atendimento aos Requisitos do Edital",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2983A70EE02ECE0",
// 													"FILE_NAME": "AdendoG_DeclaracaodeAtendimentoaosRequisitosdoEdita.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo H - Impedimentos Art38",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2983D76AA9CECE5",
// 													"FILE_NAME": "AdendoH_Impedimentos_Art38.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo I -  Impedimentos Art44",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29840CC5EACACE6",
// 													"FILE_NAME": "AdendoI_Impedimentos_Art44.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo J - Planilha de preços - A - Resumo Geral",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2985007396EAD45",
// 													"FILE_NAME": "AdendoJ - Planilha de precos - A - Resumo Geral_Rev C.xls"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo 3 B - Adendo L - TEC-SMS",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B298A2CE7CA3EE95",
// 													"FILE_NAME": "Anexo 3 B - Adendo L - CEP TEC-SMS.DOCX"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo 3 A - Adendo L - CRITÉRIO TÉCNICO",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2989CBFC2A9EE91",
// 													"FILE_NAME": "Anexo 3 A -Adendo L - 99005530_CRITERIO TECNICO_Tecnico.DOCX"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo 2 - Adendo L - CRITÉRIO ECONÔMICO",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29899FCD362AE8A",
// 													"FILE_NAME": "Anexo 2 - Adendo L - CEP - CRITERIO ECONOMICO_V3_Economico.DOCX"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo 1 - Adendo L - CRITÉRIO LEGAL",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2989585D267EE87",
// 													"FILE_NAME": "Anexo 1 - Adendo L -CEP - CRITERIO LEGAL_V2_Legal.DOCX"
// 											}
// 									],
// 									"DOU_PUBL_DATE": "2019-08-28",
// 									"END_HOUR": "12:00:00",
// 									"SUB_STATUS": "",
// 									"REGIONS": [
// 											{
// 													"COUNTRY": "BR",
// 													"REGION_DESCRIPTION": "São Paulo",
// 													"REGION": "SP"
// 											}
// 									],
// 									"DISPUTE_MODE": "02",
// 									"IS_EQUALIZED": "",
// 									"START_HOUR": "12:00:00",
// 									"COMPANY_DESC": "Petróleo Brasileiro S. A.",
// 									"LIMIT_IN_DAYS": 90,
// 									"OPPORT_TYPE": "LIDT",
// 									"DESC_DETAIL": "",
// 									"START_DATE": "2019-10-25",
// 									"COMPANY": "1000",
// 									"HAS_PREQUALIFIED": "",
// 									"AUC_START_DATE": "0000-00-00",
// 									"NAT_COVERAGE": "N",
// 									"OPPORT_NUM": "7002675575",
// 									"OPEN_HOUR": "12:00:00",
// 									"OPEN_DATE": "2019-10-30"
// 							}
// 					}            
// 					{
// 							"_index": "pne-licitacoes",
// 							"_type": "licitacao",
// 							"_id": "7002675575",
// 							"_score": 4.658954,
// 							"_source": {
// 									"DOU_NUM": "",
// 									"PQ_VENDOR_LIST_HOUR": "00:00:00",
// 									"OPPORT_DESCR": "COMPLEMENTO ESCOPO CARTEIRA DIESEL RPBC",
// 									"IS_PREQUALI": "",
// 									"END_DATE": "2019-10-30",
// 									"ITEMS": [
// 											{
// 													"ITEM_PROCESS_TYP": "OUTL",
// 													"UNIT": "UA",
// 													"QUANTITY": 1.0,
// 													"NUM_MATERIAL": "",
// 													"ITEM_DESC": "CONSTRUÇÃO CIVIL E MONT.INDUSTRIAL-C/MAT",
// 													"EXLIN": "8001",
// 													"FAMILY": "99005530",
// 													"ITEM_NUM": "0000009001",
// 													"ITEM_NOTES": [],
// 													"FAMILY_DESCR": "",
// 													"DELIV_DATE": "2019-08-05",
// 													"GROUPING_LEVEL": "L",
// 													"FAMILY_CLASSIF": "99005530"
// 											},
// 											{
// 													"ITEM_PROCESS_TYP": "SERVICE",
// 													"UNIT": "UN",
// 													"QUANTITY": 1.0,
// 													"NUM_MATERIAL": "70000058",
// 													"ITEM_DESC": "EPC COMPLEM ESCOPO DIESEL RPBC",
// 													"EXLIN": "8001.AA",
// 													"FAMILY": "99005530",
// 													"ITEM_NUM": "0000000001",
// 													"ITEM_NOTES": [],
// 													"FAMILY_DESCR": "",
// 													"DELIV_DATE": "2019-08-05",
// 													"GROUPING_LEVEL": "",
// 													"FAMILY_CLASSIF": "99005530"
// 											}
// 									],
// 									"AUC_START_TIME": "00:00:00",
// 									"STATUS_DESC": "Publicado",
// 									"PQ_VENDOR_LIST_DATE": "0000-00-00",
// 									"STATUS": "I1011",
// 									"POSTING_DATE": "2019-07-31",
// 									"ANEXOS": [
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 10",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297C8867E6E6A71",
// 													"FILE_NAME": "Anexo IX - Pacote 10.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 09",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297C4B715A96A6E",
// 													"FILE_NAME": "Anexo IX - Pacote 09.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 08",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297C2836B522A6E",
// 													"FILE_NAME": "Anexo IX - Pacote 08.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 07",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297BFDBB0D2AA69",
// 													"FILE_NAME": "Anexo IX - Pacote 07.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 06",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297BD32CD25AA69",
// 													"FILE_NAME": "Anexo IX - Pacote 06.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 05",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297BA3B1EC86A68",
// 													"FILE_NAME": "Anexo IX - Pacote 05.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 04",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297B7344B696A67",
// 													"FILE_NAME": "Anexo IX - Pacote 04.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 03",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297B308E367EA1B",
// 													"FILE_NAME": "Anexo IX - Pacote 03.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 02",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297AFEE0549EA19",
// 													"FILE_NAME": "Anexo IX - Pacote 02.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 01",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297AD74182FCA15",
// 													"FILE_NAME": "Anexo IX - Pacote 01.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 20",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297FFF181DF2BB6",
// 													"FILE_NAME": "Anexo IX - Pacote 20.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 19",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297FDE9CF68EBB1",
// 													"FILE_NAME": "Anexo IX - Pacote 19.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 18",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297F920D2712BAB",
// 													"FILE_NAME": "Anexo IX - Pacote 18.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 17",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297F6737255ABA7",
// 													"FILE_NAME": "Anexo IX - Pacote 17.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 16",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297F4908993EB5C",
// 													"FILE_NAME": "Anexo IX - Pacote 16.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 15",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297F1867536AB59",
// 													"FILE_NAME": "Anexo IX - Pacote 15.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 14A",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297EE39E0FE2B4C",
// 													"FILE_NAME": "Anexo IX - Pacote 14A.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 14",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297EC0D637CEB48",
// 													"FILE_NAME": "Anexo IX - Pacote 14.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 13",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297E552DD342B30",
// 													"FILE_NAME": "Anexo IX - Pacote 13.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 12",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297DEDF9A71EADD",
// 													"FILE_NAME": "Anexo IX - Pacote 12.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 11",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297D7B15D34EAD2",
// 													"FILE_NAME": "Anexo IX - Pacote 11.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo K - DFP",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2985B05FB606D5E",
// 													"FILE_NAME": "AdendoK_DFP_ INDUSTRIAL_portugu_s_Ver.2 Rev.7.xlsm"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo L - Requisitos para Habilitacao",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2985FE1B4536D61",
// 													"FILE_NAME": "AdendoL_Requisitos_para_Habilitacao.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo M - INSTRUCOES MEMORIA DE CALCULO",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2986448AD54AD66",
// 													"FILE_NAME": "AdendoM - INSTRUCOES_PARA_MEMORIA_DE_CALCULO.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo N - Declaração Dispensa de Visita Tecnica",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29869661DD0ADBB",
// 													"FILE_NAME": "AdendoN_Declaracao Dispensa de Visita Tecnica.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo J - Planilha de preços - C - SobrComiss",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2985840BC162D5B",
// 													"FILE_NAME": "AdendoJ - Planilha de precos - C - SobrComiss revD.xlsx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo J - Planilha preços -B- Planilha Preços - Prest Serviços",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29855965FC2AD54",
// 													"FILE_NAME": "AdendoJ - Planilha de precos - B - Planilha Precos - Prestacao de Servicos RevB.xls"
// 											},
// 											{
// 													"DESCRIPTION": "Edital",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29826EBB1CCAC77",
// 													"FILE_NAME": "Edital Licitacao.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo B - Atestado de Visita Técnica",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2982A602C6BAC7C",
// 													"FILE_NAME": "AdendoB_Atestado de Visita Tecnica.doc"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo C - AtendimentoaoCE_GC_PRS",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2982D41EEE16C84",
// 													"FILE_NAME": "AdendoC_AtendimentoaoCE_GC_PRS.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo D - Elaboracao Independente de Proposta",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29830B045542C87",
// 													"FILE_NAME": "AdendoD_ElaboracaoIndependentedeProposta.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo E - Previa de Conformidade",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29833682F502C8A",
// 													"FILE_NAME": "AdendoE_PreviadeConformidade.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo F - Relacao Familiar Impedimento Servicos",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29836989D02EC8C",
// 													"FILE_NAME": "AdendoF_RelacaoFamiliar_Impedimento_Servicos.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo G - Declaracao de Atendimento aos Requisitos do Edital",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2983A70EE02ECE0",
// 													"FILE_NAME": "AdendoG_DeclaracaodeAtendimentoaosRequisitosdoEdita.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo H - Impedimentos Art38",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2983D76AA9CECE5",
// 													"FILE_NAME": "AdendoH_Impedimentos_Art38.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo I -  Impedimentos Art44",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29840CC5EACACE6",
// 													"FILE_NAME": "AdendoI_Impedimentos_Art44.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo J - Planilha de preços - A - Resumo Geral",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2985007396EAD45",
// 													"FILE_NAME": "AdendoJ - Planilha de precos - A - Resumo Geral_Rev C.xls"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo 3 B - Adendo L - TEC-SMS",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B298A2CE7CA3EE95",
// 													"FILE_NAME": "Anexo 3 B - Adendo L - CEP TEC-SMS.DOCX"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo 3 A - Adendo L - CRITÉRIO TÉCNICO",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2989CBFC2A9EE91",
// 													"FILE_NAME": "Anexo 3 A -Adendo L - 99005530_CRITERIO TECNICO_Tecnico.DOCX"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo 2 - Adendo L - CRITÉRIO ECONÔMICO",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29899FCD362AE8A",
// 													"FILE_NAME": "Anexo 2 - Adendo L - CEP - CRITERIO ECONOMICO_V3_Economico.DOCX"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo 1 - Adendo L - CRITÉRIO LEGAL",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2989585D267EE87",
// 													"FILE_NAME": "Anexo 1 - Adendo L -CEP - CRITERIO LEGAL_V2_Legal.DOCX"
// 											}
// 									],
// 									"DOU_PUBL_DATE": "2019-08-28",
// 									"END_HOUR": "12:00:00",
// 									"SUB_STATUS": "",
// 									"REGIONS": [
// 											{
// 													"COUNTRY": "BR",
// 													"REGION_DESCRIPTION": "São Paulo",
// 													"REGION": "SP"
// 											}
// 									],
// 									"DISPUTE_MODE": "02",
// 									"IS_EQUALIZED": "",
// 									"START_HOUR": "12:00:00",
// 									"COMPANY_DESC": "Petróleo Brasileiro S. A.",
// 									"LIMIT_IN_DAYS": 90,
// 									"OPPORT_TYPE": "LIDT",
// 									"DESC_DETAIL": "",
// 									"START_DATE": "2019-10-25",
// 									"COMPANY": "1000",
// 									"HAS_PREQUALIFIED": "",
// 									"AUC_START_DATE": "0000-00-00",
// 									"NAT_COVERAGE": "N",
// 									"OPPORT_NUM": "7002675575",
// 									"OPEN_HOUR": "12:00:00",
// 									"OPEN_DATE": "2019-10-30"
// 							}
// 					}            
// 					{
// 							"_index": "pne-licitacoes",
// 							"_type": "licitacao",
// 							"_id": "7002675575",
// 							"_score": 4.658954,
// 							"_source": {
// 									"DOU_NUM": "",
// 									"PQ_VENDOR_LIST_HOUR": "00:00:00",
// 									"OPPORT_DESCR": "COMPLEMENTO ESCOPO CARTEIRA DIESEL RPBC",
// 									"IS_PREQUALI": "",
// 									"END_DATE": "2019-10-30",
// 									"ITEMS": [
// 											{
// 													"ITEM_PROCESS_TYP": "OUTL",
// 													"UNIT": "UA",
// 													"QUANTITY": 1.0,
// 													"NUM_MATERIAL": "",
// 													"ITEM_DESC": "CONSTRUÇÃO CIVIL E MONT.INDUSTRIAL-C/MAT",
// 													"EXLIN": "8001",
// 													"FAMILY": "99005530",
// 													"ITEM_NUM": "0000009001",
// 													"ITEM_NOTES": [],
// 													"FAMILY_DESCR": "",
// 													"DELIV_DATE": "2019-08-05",
// 													"GROUPING_LEVEL": "L",
// 													"FAMILY_CLASSIF": "99005530"
// 											},
// 											{
// 													"ITEM_PROCESS_TYP": "SERVICE",
// 													"UNIT": "UN",
// 													"QUANTITY": 1.0,
// 													"NUM_MATERIAL": "70000058",
// 													"ITEM_DESC": "EPC COMPLEM ESCOPO DIESEL RPBC",
// 													"EXLIN": "8001.AA",
// 													"FAMILY": "99005530",
// 													"ITEM_NUM": "0000000001",
// 													"ITEM_NOTES": [],
// 													"FAMILY_DESCR": "",
// 													"DELIV_DATE": "2019-08-05",
// 													"GROUPING_LEVEL": "",
// 													"FAMILY_CLASSIF": "99005530"
// 											}
// 									],
// 									"AUC_START_TIME": "00:00:00",
// 									"STATUS_DESC": "Publicado",
// 									"PQ_VENDOR_LIST_DATE": "0000-00-00",
// 									"STATUS": "I1011",
// 									"POSTING_DATE": "2019-07-31",
// 									"ANEXOS": [
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 10",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297C8867E6E6A71",
// 													"FILE_NAME": "Anexo IX - Pacote 10.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 09",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297C4B715A96A6E",
// 													"FILE_NAME": "Anexo IX - Pacote 09.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 08",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297C2836B522A6E",
// 													"FILE_NAME": "Anexo IX - Pacote 08.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 07",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297BFDBB0D2AA69",
// 													"FILE_NAME": "Anexo IX - Pacote 07.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 06",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297BD32CD25AA69",
// 													"FILE_NAME": "Anexo IX - Pacote 06.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 05",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297BA3B1EC86A68",
// 													"FILE_NAME": "Anexo IX - Pacote 05.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 04",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297B7344B696A67",
// 													"FILE_NAME": "Anexo IX - Pacote 04.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 03",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297B308E367EA1B",
// 													"FILE_NAME": "Anexo IX - Pacote 03.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 02",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297AFEE0549EA19",
// 													"FILE_NAME": "Anexo IX - Pacote 02.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 01",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297AD74182FCA15",
// 													"FILE_NAME": "Anexo IX - Pacote 01.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 20",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297FFF181DF2BB6",
// 													"FILE_NAME": "Anexo IX - Pacote 20.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 19",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297FDE9CF68EBB1",
// 													"FILE_NAME": "Anexo IX - Pacote 19.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 18",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297F920D2712BAB",
// 													"FILE_NAME": "Anexo IX - Pacote 18.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 17",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297F6737255ABA7",
// 													"FILE_NAME": "Anexo IX - Pacote 17.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 16",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297F4908993EB5C",
// 													"FILE_NAME": "Anexo IX - Pacote 16.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 15",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297F1867536AB59",
// 													"FILE_NAME": "Anexo IX - Pacote 15.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 14A",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297EE39E0FE2B4C",
// 													"FILE_NAME": "Anexo IX - Pacote 14A.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 14",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297EC0D637CEB48",
// 													"FILE_NAME": "Anexo IX - Pacote 14.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 13",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297E552DD342B30",
// 													"FILE_NAME": "Anexo IX - Pacote 13.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 12",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297DEDF9A71EADD",
// 													"FILE_NAME": "Anexo IX - Pacote 12.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 11",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297D7B15D34EAD2",
// 													"FILE_NAME": "Anexo IX - Pacote 11.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo K - DFP",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2985B05FB606D5E",
// 													"FILE_NAME": "AdendoK_DFP_ INDUSTRIAL_portugu_s_Ver.2 Rev.7.xlsm"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo L - Requisitos para Habilitacao",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2985FE1B4536D61",
// 													"FILE_NAME": "AdendoL_Requisitos_para_Habilitacao.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo M - INSTRUCOES MEMORIA DE CALCULO",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2986448AD54AD66",
// 													"FILE_NAME": "AdendoM - INSTRUCOES_PARA_MEMORIA_DE_CALCULO.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo N - Declaração Dispensa de Visita Tecnica",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29869661DD0ADBB",
// 													"FILE_NAME": "AdendoN_Declaracao Dispensa de Visita Tecnica.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo J - Planilha de preços - C - SobrComiss",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2985840BC162D5B",
// 													"FILE_NAME": "AdendoJ - Planilha de precos - C - SobrComiss revD.xlsx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo J - Planilha preços -B- Planilha Preços - Prest Serviços",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29855965FC2AD54",
// 													"FILE_NAME": "AdendoJ - Planilha de precos - B - Planilha Precos - Prestacao de Servicos RevB.xls"
// 											},
// 											{
// 													"DESCRIPTION": "Edital",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29826EBB1CCAC77",
// 													"FILE_NAME": "Edital Licitacao.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo B - Atestado de Visita Técnica",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2982A602C6BAC7C",
// 													"FILE_NAME": "AdendoB_Atestado de Visita Tecnica.doc"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo C - AtendimentoaoCE_GC_PRS",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2982D41EEE16C84",
// 													"FILE_NAME": "AdendoC_AtendimentoaoCE_GC_PRS.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo D - Elaboracao Independente de Proposta",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29830B045542C87",
// 													"FILE_NAME": "AdendoD_ElaboracaoIndependentedeProposta.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo E - Previa de Conformidade",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29833682F502C8A",
// 													"FILE_NAME": "AdendoE_PreviadeConformidade.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo F - Relacao Familiar Impedimento Servicos",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29836989D02EC8C",
// 													"FILE_NAME": "AdendoF_RelacaoFamiliar_Impedimento_Servicos.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo G - Declaracao de Atendimento aos Requisitos do Edital",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2983A70EE02ECE0",
// 													"FILE_NAME": "AdendoG_DeclaracaodeAtendimentoaosRequisitosdoEdita.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo H - Impedimentos Art38",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2983D76AA9CECE5",
// 													"FILE_NAME": "AdendoH_Impedimentos_Art38.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo I -  Impedimentos Art44",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29840CC5EACACE6",
// 													"FILE_NAME": "AdendoI_Impedimentos_Art44.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo J - Planilha de preços - A - Resumo Geral",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2985007396EAD45",
// 													"FILE_NAME": "AdendoJ - Planilha de precos - A - Resumo Geral_Rev C.xls"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo 3 B - Adendo L - TEC-SMS",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B298A2CE7CA3EE95",
// 													"FILE_NAME": "Anexo 3 B - Adendo L - CEP TEC-SMS.DOCX"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo 3 A - Adendo L - CRITÉRIO TÉCNICO",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2989CBFC2A9EE91",
// 													"FILE_NAME": "Anexo 3 A -Adendo L - 99005530_CRITERIO TECNICO_Tecnico.DOCX"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo 2 - Adendo L - CRITÉRIO ECONÔMICO",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29899FCD362AE8A",
// 													"FILE_NAME": "Anexo 2 - Adendo L - CEP - CRITERIO ECONOMICO_V3_Economico.DOCX"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo 1 - Adendo L - CRITÉRIO LEGAL",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2989585D267EE87",
// 													"FILE_NAME": "Anexo 1 - Adendo L -CEP - CRITERIO LEGAL_V2_Legal.DOCX"
// 											}
// 									],
// 									"DOU_PUBL_DATE": "2019-08-28",
// 									"END_HOUR": "12:00:00",
// 									"SUB_STATUS": "",
// 									"REGIONS": [
// 											{
// 													"COUNTRY": "BR",
// 													"REGION_DESCRIPTION": "São Paulo",
// 													"REGION": "SP"
// 											}
// 									],
// 									"DISPUTE_MODE": "02",
// 									"IS_EQUALIZED": "",
// 									"START_HOUR": "12:00:00",
// 									"COMPANY_DESC": "Petróleo Brasileiro S. A.",
// 									"LIMIT_IN_DAYS": 90,
// 									"OPPORT_TYPE": "LIDT",
// 									"DESC_DETAIL": "",
// 									"START_DATE": "2019-10-25",
// 									"COMPANY": "1000",
// 									"HAS_PREQUALIFIED": "",
// 									"AUC_START_DATE": "0000-00-00",
// 									"NAT_COVERAGE": "N",
// 									"OPPORT_NUM": "7002675575",
// 									"OPEN_HOUR": "12:00:00",
// 									"OPEN_DATE": "2019-10-30"
// 							}
// 					}            
// 					{
// 							"_index": "pne-licitacoes",
// 							"_type": "licitacao",
// 							"_id": "7002675575",
// 							"_score": 4.658954,
// 							"_source": {
// 									"DOU_NUM": "",
// 									"PQ_VENDOR_LIST_HOUR": "00:00:00",
// 									"OPPORT_DESCR": "COMPLEMENTO ESCOPO CARTEIRA DIESEL RPBC",
// 									"IS_PREQUALI": "",
// 									"END_DATE": "2019-10-30",
// 									"ITEMS": [
// 											{
// 													"ITEM_PROCESS_TYP": "OUTL",
// 													"UNIT": "UA",
// 													"QUANTITY": 1.0,
// 													"NUM_MATERIAL": "",
// 													"ITEM_DESC": "CONSTRUÇÃO CIVIL E MONT.INDUSTRIAL-C/MAT",
// 													"EXLIN": "8001",
// 													"FAMILY": "99005530",
// 													"ITEM_NUM": "0000009001",
// 													"ITEM_NOTES": [],
// 													"FAMILY_DESCR": "",
// 													"DELIV_DATE": "2019-08-05",
// 													"GROUPING_LEVEL": "L",
// 													"FAMILY_CLASSIF": "99005530"
// 											},
// 											{
// 													"ITEM_PROCESS_TYP": "SERVICE",
// 													"UNIT": "UN",
// 													"QUANTITY": 1.0,
// 													"NUM_MATERIAL": "70000058",
// 													"ITEM_DESC": "EPC COMPLEM ESCOPO DIESEL RPBC",
// 													"EXLIN": "8001.AA",
// 													"FAMILY": "99005530",
// 													"ITEM_NUM": "0000000001",
// 													"ITEM_NOTES": [],
// 													"FAMILY_DESCR": "",
// 													"DELIV_DATE": "2019-08-05",
// 													"GROUPING_LEVEL": "",
// 													"FAMILY_CLASSIF": "99005530"
// 											}
// 									],
// 									"AUC_START_TIME": "00:00:00",
// 									"STATUS_DESC": "Publicado",
// 									"PQ_VENDOR_LIST_DATE": "0000-00-00",
// 									"STATUS": "I1011",
// 									"POSTING_DATE": "2019-07-31",
// 									"ANEXOS": [
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 10",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297C8867E6E6A71",
// 													"FILE_NAME": "Anexo IX - Pacote 10.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 09",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297C4B715A96A6E",
// 													"FILE_NAME": "Anexo IX - Pacote 09.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 08",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297C2836B522A6E",
// 													"FILE_NAME": "Anexo IX - Pacote 08.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 07",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297BFDBB0D2AA69",
// 													"FILE_NAME": "Anexo IX - Pacote 07.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 06",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297BD32CD25AA69",
// 													"FILE_NAME": "Anexo IX - Pacote 06.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 05",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297BA3B1EC86A68",
// 													"FILE_NAME": "Anexo IX - Pacote 05.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 04",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297B7344B696A67",
// 													"FILE_NAME": "Anexo IX - Pacote 04.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 03",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297B308E367EA1B",
// 													"FILE_NAME": "Anexo IX - Pacote 03.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 02",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297AFEE0549EA19",
// 													"FILE_NAME": "Anexo IX - Pacote 02.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 01",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297AD74182FCA15",
// 													"FILE_NAME": "Anexo IX - Pacote 01.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 20",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297FFF181DF2BB6",
// 													"FILE_NAME": "Anexo IX - Pacote 20.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 19",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297FDE9CF68EBB1",
// 													"FILE_NAME": "Anexo IX - Pacote 19.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 18",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297F920D2712BAB",
// 													"FILE_NAME": "Anexo IX - Pacote 18.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 17",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297F6737255ABA7",
// 													"FILE_NAME": "Anexo IX - Pacote 17.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 16",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297F4908993EB5C",
// 													"FILE_NAME": "Anexo IX - Pacote 16.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 15",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297F1867536AB59",
// 													"FILE_NAME": "Anexo IX - Pacote 15.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 14A",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297EE39E0FE2B4C",
// 													"FILE_NAME": "Anexo IX - Pacote 14A.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 14",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297EC0D637CEB48",
// 													"FILE_NAME": "Anexo IX - Pacote 14.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 13",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297E552DD342B30",
// 													"FILE_NAME": "Anexo IX - Pacote 13.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 12",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297DEDF9A71EADD",
// 													"FILE_NAME": "Anexo IX - Pacote 12.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 11",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297D7B15D34EAD2",
// 													"FILE_NAME": "Anexo IX - Pacote 11.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo K - DFP",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2985B05FB606D5E",
// 													"FILE_NAME": "AdendoK_DFP_ INDUSTRIAL_portugu_s_Ver.2 Rev.7.xlsm"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo L - Requisitos para Habilitacao",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2985FE1B4536D61",
// 													"FILE_NAME": "AdendoL_Requisitos_para_Habilitacao.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo M - INSTRUCOES MEMORIA DE CALCULO",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2986448AD54AD66",
// 													"FILE_NAME": "AdendoM - INSTRUCOES_PARA_MEMORIA_DE_CALCULO.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo N - Declaração Dispensa de Visita Tecnica",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29869661DD0ADBB",
// 													"FILE_NAME": "AdendoN_Declaracao Dispensa de Visita Tecnica.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo J - Planilha de preços - C - SobrComiss",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2985840BC162D5B",
// 													"FILE_NAME": "AdendoJ - Planilha de precos - C - SobrComiss revD.xlsx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo J - Planilha preços -B- Planilha Preços - Prest Serviços",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29855965FC2AD54",
// 													"FILE_NAME": "AdendoJ - Planilha de precos - B - Planilha Precos - Prestacao de Servicos RevB.xls"
// 											},
// 											{
// 													"DESCRIPTION": "Edital",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29826EBB1CCAC77",
// 													"FILE_NAME": "Edital Licitacao.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo B - Atestado de Visita Técnica",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2982A602C6BAC7C",
// 													"FILE_NAME": "AdendoB_Atestado de Visita Tecnica.doc"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo C - AtendimentoaoCE_GC_PRS",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2982D41EEE16C84",
// 													"FILE_NAME": "AdendoC_AtendimentoaoCE_GC_PRS.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo D - Elaboracao Independente de Proposta",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29830B045542C87",
// 													"FILE_NAME": "AdendoD_ElaboracaoIndependentedeProposta.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo E - Previa de Conformidade",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29833682F502C8A",
// 													"FILE_NAME": "AdendoE_PreviadeConformidade.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo F - Relacao Familiar Impedimento Servicos",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29836989D02EC8C",
// 													"FILE_NAME": "AdendoF_RelacaoFamiliar_Impedimento_Servicos.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo G - Declaracao de Atendimento aos Requisitos do Edital",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2983A70EE02ECE0",
// 													"FILE_NAME": "AdendoG_DeclaracaodeAtendimentoaosRequisitosdoEdita.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo H - Impedimentos Art38",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2983D76AA9CECE5",
// 													"FILE_NAME": "AdendoH_Impedimentos_Art38.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo I -  Impedimentos Art44",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29840CC5EACACE6",
// 													"FILE_NAME": "AdendoI_Impedimentos_Art44.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo J - Planilha de preços - A - Resumo Geral",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2985007396EAD45",
// 													"FILE_NAME": "AdendoJ - Planilha de precos - A - Resumo Geral_Rev C.xls"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo 3 B - Adendo L - TEC-SMS",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B298A2CE7CA3EE95",
// 													"FILE_NAME": "Anexo 3 B - Adendo L - CEP TEC-SMS.DOCX"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo 3 A - Adendo L - CRITÉRIO TÉCNICO",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2989CBFC2A9EE91",
// 													"FILE_NAME": "Anexo 3 A -Adendo L - 99005530_CRITERIO TECNICO_Tecnico.DOCX"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo 2 - Adendo L - CRITÉRIO ECONÔMICO",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29899FCD362AE8A",
// 													"FILE_NAME": "Anexo 2 - Adendo L - CEP - CRITERIO ECONOMICO_V3_Economico.DOCX"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo 1 - Adendo L - CRITÉRIO LEGAL",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2989585D267EE87",
// 													"FILE_NAME": "Anexo 1 - Adendo L -CEP - CRITERIO LEGAL_V2_Legal.DOCX"
// 											}
// 									],
// 									"DOU_PUBL_DATE": "2019-08-28",
// 									"END_HOUR": "12:00:00",
// 									"SUB_STATUS": "",
// 									"REGIONS": [
// 											{
// 													"COUNTRY": "BR",
// 													"REGION_DESCRIPTION": "São Paulo",
// 													"REGION": "SP"
// 											}
// 									],
// 									"DISPUTE_MODE": "02",
// 									"IS_EQUALIZED": "",
// 									"START_HOUR": "12:00:00",
// 									"COMPANY_DESC": "Petróleo Brasileiro S. A.",
// 									"LIMIT_IN_DAYS": 90,
// 									"OPPORT_TYPE": "LIDT",
// 									"DESC_DETAIL": "",
// 									"START_DATE": "2019-10-25",
// 									"COMPANY": "1000",
// 									"HAS_PREQUALIFIED": "",
// 									"AUC_START_DATE": "0000-00-00",
// 									"NAT_COVERAGE": "N",
// 									"OPPORT_NUM": "7002675575",
// 									"OPEN_HOUR": "12:00:00",
// 									"OPEN_DATE": "2019-10-30"
// 							}
// 					}            
// 					{
// 							"_index": "pne-licitacoes",
// 							"_type": "licitacao",
// 							"_id": "7002675575",
// 							"_score": 4.658954,
// 							"_source": {
// 									"DOU_NUM": "",
// 									"PQ_VENDOR_LIST_HOUR": "00:00:00",
// 									"OPPORT_DESCR": "COMPLEMENTO ESCOPO CARTEIRA DIESEL RPBC",
// 									"IS_PREQUALI": "",
// 									"END_DATE": "2019-10-30",
// 									"ITEMS": [
// 											{
// 													"ITEM_PROCESS_TYP": "OUTL",
// 													"UNIT": "UA",
// 													"QUANTITY": 1.0,
// 													"NUM_MATERIAL": "",
// 													"ITEM_DESC": "CONSTRUÇÃO CIVIL E MONT.INDUSTRIAL-C/MAT",
// 													"EXLIN": "8001",
// 													"FAMILY": "99005530",
// 													"ITEM_NUM": "0000009001",
// 													"ITEM_NOTES": [],
// 													"FAMILY_DESCR": "",
// 													"DELIV_DATE": "2019-08-05",
// 													"GROUPING_LEVEL": "L",
// 													"FAMILY_CLASSIF": "99005530"
// 											},
// 											{
// 													"ITEM_PROCESS_TYP": "SERVICE",
// 													"UNIT": "UN",
// 													"QUANTITY": 1.0,
// 													"NUM_MATERIAL": "70000058",
// 													"ITEM_DESC": "EPC COMPLEM ESCOPO DIESEL RPBC",
// 													"EXLIN": "8001.AA",
// 													"FAMILY": "99005530",
// 													"ITEM_NUM": "0000000001",
// 													"ITEM_NOTES": [],
// 													"FAMILY_DESCR": "",
// 													"DELIV_DATE": "2019-08-05",
// 													"GROUPING_LEVEL": "",
// 													"FAMILY_CLASSIF": "99005530"
// 											}
// 									],
// 									"AUC_START_TIME": "00:00:00",
// 									"STATUS_DESC": "Publicado",
// 									"PQ_VENDOR_LIST_DATE": "0000-00-00",
// 									"STATUS": "I1011",
// 									"POSTING_DATE": "2019-07-31",
// 									"ANEXOS": [
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 10",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297C8867E6E6A71",
// 													"FILE_NAME": "Anexo IX - Pacote 10.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 09",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297C4B715A96A6E",
// 													"FILE_NAME": "Anexo IX - Pacote 09.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 08",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297C2836B522A6E",
// 													"FILE_NAME": "Anexo IX - Pacote 08.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 07",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297BFDBB0D2AA69",
// 													"FILE_NAME": "Anexo IX - Pacote 07.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 06",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297BD32CD25AA69",
// 													"FILE_NAME": "Anexo IX - Pacote 06.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 05",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297BA3B1EC86A68",
// 													"FILE_NAME": "Anexo IX - Pacote 05.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 04",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297B7344B696A67",
// 													"FILE_NAME": "Anexo IX - Pacote 04.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 03",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297B308E367EA1B",
// 													"FILE_NAME": "Anexo IX - Pacote 03.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 02",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297AFEE0549EA19",
// 													"FILE_NAME": "Anexo IX - Pacote 02.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 01",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297AD74182FCA15",
// 													"FILE_NAME": "Anexo IX - Pacote 01.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 20",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297FFF181DF2BB6",
// 													"FILE_NAME": "Anexo IX - Pacote 20.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 19",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297FDE9CF68EBB1",
// 													"FILE_NAME": "Anexo IX - Pacote 19.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 18",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297F920D2712BAB",
// 													"FILE_NAME": "Anexo IX - Pacote 18.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 17",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297F6737255ABA7",
// 													"FILE_NAME": "Anexo IX - Pacote 17.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 16",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297F4908993EB5C",
// 													"FILE_NAME": "Anexo IX - Pacote 16.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 15",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297F1867536AB59",
// 													"FILE_NAME": "Anexo IX - Pacote 15.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 14A",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297EE39E0FE2B4C",
// 													"FILE_NAME": "Anexo IX - Pacote 14A.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 14",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297EC0D637CEB48",
// 													"FILE_NAME": "Anexo IX - Pacote 14.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 13",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297E552DD342B30",
// 													"FILE_NAME": "Anexo IX - Pacote 13.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 12",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297DEDF9A71EADD",
// 													"FILE_NAME": "Anexo IX - Pacote 12.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 11",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297D7B15D34EAD2",
// 													"FILE_NAME": "Anexo IX - Pacote 11.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo K - DFP",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2985B05FB606D5E",
// 													"FILE_NAME": "AdendoK_DFP_ INDUSTRIAL_portugu_s_Ver.2 Rev.7.xlsm"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo L - Requisitos para Habilitacao",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2985FE1B4536D61",
// 													"FILE_NAME": "AdendoL_Requisitos_para_Habilitacao.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo M - INSTRUCOES MEMORIA DE CALCULO",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2986448AD54AD66",
// 													"FILE_NAME": "AdendoM - INSTRUCOES_PARA_MEMORIA_DE_CALCULO.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo N - Declaração Dispensa de Visita Tecnica",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29869661DD0ADBB",
// 													"FILE_NAME": "AdendoN_Declaracao Dispensa de Visita Tecnica.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo J - Planilha de preços - C - SobrComiss",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2985840BC162D5B",
// 													"FILE_NAME": "AdendoJ - Planilha de precos - C - SobrComiss revD.xlsx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo J - Planilha preços -B- Planilha Preços - Prest Serviços",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29855965FC2AD54",
// 													"FILE_NAME": "AdendoJ - Planilha de precos - B - Planilha Precos - Prestacao de Servicos RevB.xls"
// 											},
// 											{
// 													"DESCRIPTION": "Edital",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29826EBB1CCAC77",
// 													"FILE_NAME": "Edital Licitacao.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo B - Atestado de Visita Técnica",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2982A602C6BAC7C",
// 													"FILE_NAME": "AdendoB_Atestado de Visita Tecnica.doc"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo C - AtendimentoaoCE_GC_PRS",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2982D41EEE16C84",
// 													"FILE_NAME": "AdendoC_AtendimentoaoCE_GC_PRS.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo D - Elaboracao Independente de Proposta",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29830B045542C87",
// 													"FILE_NAME": "AdendoD_ElaboracaoIndependentedeProposta.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo E - Previa de Conformidade",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29833682F502C8A",
// 													"FILE_NAME": "AdendoE_PreviadeConformidade.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo F - Relacao Familiar Impedimento Servicos",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29836989D02EC8C",
// 													"FILE_NAME": "AdendoF_RelacaoFamiliar_Impedimento_Servicos.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo G - Declaracao de Atendimento aos Requisitos do Edital",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2983A70EE02ECE0",
// 													"FILE_NAME": "AdendoG_DeclaracaodeAtendimentoaosRequisitosdoEdita.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo H - Impedimentos Art38",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2983D76AA9CECE5",
// 													"FILE_NAME": "AdendoH_Impedimentos_Art38.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo I -  Impedimentos Art44",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29840CC5EACACE6",
// 													"FILE_NAME": "AdendoI_Impedimentos_Art44.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo J - Planilha de preços - A - Resumo Geral",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2985007396EAD45",
// 													"FILE_NAME": "AdendoJ - Planilha de precos - A - Resumo Geral_Rev C.xls"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo 3 B - Adendo L - TEC-SMS",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B298A2CE7CA3EE95",
// 													"FILE_NAME": "Anexo 3 B - Adendo L - CEP TEC-SMS.DOCX"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo 3 A - Adendo L - CRITÉRIO TÉCNICO",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2989CBFC2A9EE91",
// 													"FILE_NAME": "Anexo 3 A -Adendo L - 99005530_CRITERIO TECNICO_Tecnico.DOCX"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo 2 - Adendo L - CRITÉRIO ECONÔMICO",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29899FCD362AE8A",
// 													"FILE_NAME": "Anexo 2 - Adendo L - CEP - CRITERIO ECONOMICO_V3_Economico.DOCX"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo 1 - Adendo L - CRITÉRIO LEGAL",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2989585D267EE87",
// 													"FILE_NAME": "Anexo 1 - Adendo L -CEP - CRITERIO LEGAL_V2_Legal.DOCX"
// 											}
// 									],
// 									"DOU_PUBL_DATE": "2019-08-28",
// 									"END_HOUR": "12:00:00",
// 									"SUB_STATUS": "",
// 									"REGIONS": [
// 											{
// 													"COUNTRY": "BR",
// 													"REGION_DESCRIPTION": "São Paulo",
// 													"REGION": "SP"
// 											}
// 									],
// 									"DISPUTE_MODE": "02",
// 									"IS_EQUALIZED": "",
// 									"START_HOUR": "12:00:00",
// 									"COMPANY_DESC": "Petróleo Brasileiro S. A.",
// 									"LIMIT_IN_DAYS": 90,
// 									"OPPORT_TYPE": "LIDT",
// 									"DESC_DETAIL": "",
// 									"START_DATE": "2019-10-25",
// 									"COMPANY": "1000",
// 									"HAS_PREQUALIFIED": "",
// 									"AUC_START_DATE": "0000-00-00",
// 									"NAT_COVERAGE": "N",
// 									"OPPORT_NUM": "7002675575",
// 									"OPEN_HOUR": "12:00:00",
// 									"OPEN_DATE": "2019-10-30"
// 							}
// 					}            
// 					{
// 							"_index": "pne-licitacoes",
// 							"_type": "licitacao",
// 							"_id": "7002675575",
// 							"_score": 4.658954,
// 							"_source": {
// 									"DOU_NUM": "",
// 									"PQ_VENDOR_LIST_HOUR": "00:00:00",
// 									"OPPORT_DESCR": "COMPLEMENTO ESCOPO CARTEIRA DIESEL RPBC",
// 									"IS_PREQUALI": "",
// 									"END_DATE": "2019-10-30",
// 									"ITEMS": [
// 											{
// 													"ITEM_PROCESS_TYP": "OUTL",
// 													"UNIT": "UA",
// 													"QUANTITY": 1.0,
// 													"NUM_MATERIAL": "",
// 													"ITEM_DESC": "CONSTRUÇÃO CIVIL E MONT.INDUSTRIAL-C/MAT",
// 													"EXLIN": "8001",
// 													"FAMILY": "99005530",
// 													"ITEM_NUM": "0000009001",
// 													"ITEM_NOTES": [],
// 													"FAMILY_DESCR": "",
// 													"DELIV_DATE": "2019-08-05",
// 													"GROUPING_LEVEL": "L",
// 													"FAMILY_CLASSIF": "99005530"
// 											},
// 											{
// 													"ITEM_PROCESS_TYP": "SERVICE",
// 													"UNIT": "UN",
// 													"QUANTITY": 1.0,
// 													"NUM_MATERIAL": "70000058",
// 													"ITEM_DESC": "EPC COMPLEM ESCOPO DIESEL RPBC",
// 													"EXLIN": "8001.AA",
// 													"FAMILY": "99005530",
// 													"ITEM_NUM": "0000000001",
// 													"ITEM_NOTES": [],
// 													"FAMILY_DESCR": "",
// 													"DELIV_DATE": "2019-08-05",
// 													"GROUPING_LEVEL": "",
// 													"FAMILY_CLASSIF": "99005530"
// 											}
// 									],
// 									"AUC_START_TIME": "00:00:00",
// 									"STATUS_DESC": "Publicado",
// 									"PQ_VENDOR_LIST_DATE": "0000-00-00",
// 									"STATUS": "I1011",
// 									"POSTING_DATE": "2019-07-31",
// 									"ANEXOS": [
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 10",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297C8867E6E6A71",
// 													"FILE_NAME": "Anexo IX - Pacote 10.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 09",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297C4B715A96A6E",
// 													"FILE_NAME": "Anexo IX - Pacote 09.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 08",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297C2836B522A6E",
// 													"FILE_NAME": "Anexo IX - Pacote 08.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 07",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297BFDBB0D2AA69",
// 													"FILE_NAME": "Anexo IX - Pacote 07.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 06",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297BD32CD25AA69",
// 													"FILE_NAME": "Anexo IX - Pacote 06.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 05",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297BA3B1EC86A68",
// 													"FILE_NAME": "Anexo IX - Pacote 05.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 04",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297B7344B696A67",
// 													"FILE_NAME": "Anexo IX - Pacote 04.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 03",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297B308E367EA1B",
// 													"FILE_NAME": "Anexo IX - Pacote 03.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 02",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297AFEE0549EA19",
// 													"FILE_NAME": "Anexo IX - Pacote 02.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 01",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297AD74182FCA15",
// 													"FILE_NAME": "Anexo IX - Pacote 01.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 20",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297FFF181DF2BB6",
// 													"FILE_NAME": "Anexo IX - Pacote 20.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 19",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297FDE9CF68EBB1",
// 													"FILE_NAME": "Anexo IX - Pacote 19.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 18",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297F920D2712BAB",
// 													"FILE_NAME": "Anexo IX - Pacote 18.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 17",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297F6737255ABA7",
// 													"FILE_NAME": "Anexo IX - Pacote 17.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 16",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297F4908993EB5C",
// 													"FILE_NAME": "Anexo IX - Pacote 16.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 15",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297F1867536AB59",
// 													"FILE_NAME": "Anexo IX - Pacote 15.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 14A",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297EE39E0FE2B4C",
// 													"FILE_NAME": "Anexo IX - Pacote 14A.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 14",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297EC0D637CEB48",
// 													"FILE_NAME": "Anexo IX - Pacote 14.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 13",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297E552DD342B30",
// 													"FILE_NAME": "Anexo IX - Pacote 13.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 12",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297DEDF9A71EADD",
// 													"FILE_NAME": "Anexo IX - Pacote 12.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 11",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297D7B15D34EAD2",
// 													"FILE_NAME": "Anexo IX - Pacote 11.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo K - DFP",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2985B05FB606D5E",
// 													"FILE_NAME": "AdendoK_DFP_ INDUSTRIAL_portugu_s_Ver.2 Rev.7.xlsm"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo L - Requisitos para Habilitacao",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2985FE1B4536D61",
// 													"FILE_NAME": "AdendoL_Requisitos_para_Habilitacao.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo M - INSTRUCOES MEMORIA DE CALCULO",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2986448AD54AD66",
// 													"FILE_NAME": "AdendoM - INSTRUCOES_PARA_MEMORIA_DE_CALCULO.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo N - Declaração Dispensa de Visita Tecnica",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29869661DD0ADBB",
// 													"FILE_NAME": "AdendoN_Declaracao Dispensa de Visita Tecnica.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo J - Planilha de preços - C - SobrComiss",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2985840BC162D5B",
// 													"FILE_NAME": "AdendoJ - Planilha de precos - C - SobrComiss revD.xlsx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo J - Planilha preços -B- Planilha Preços - Prest Serviços",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29855965FC2AD54",
// 													"FILE_NAME": "AdendoJ - Planilha de precos - B - Planilha Precos - Prestacao de Servicos RevB.xls"
// 											},
// 											{
// 													"DESCRIPTION": "Edital",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29826EBB1CCAC77",
// 													"FILE_NAME": "Edital Licitacao.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo B - Atestado de Visita Técnica",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2982A602C6BAC7C",
// 													"FILE_NAME": "AdendoB_Atestado de Visita Tecnica.doc"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo C - AtendimentoaoCE_GC_PRS",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2982D41EEE16C84",
// 													"FILE_NAME": "AdendoC_AtendimentoaoCE_GC_PRS.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo D - Elaboracao Independente de Proposta",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29830B045542C87",
// 													"FILE_NAME": "AdendoD_ElaboracaoIndependentedeProposta.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo E - Previa de Conformidade",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29833682F502C8A",
// 													"FILE_NAME": "AdendoE_PreviadeConformidade.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo F - Relacao Familiar Impedimento Servicos",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29836989D02EC8C",
// 													"FILE_NAME": "AdendoF_RelacaoFamiliar_Impedimento_Servicos.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo G - Declaracao de Atendimento aos Requisitos do Edital",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2983A70EE02ECE0",
// 													"FILE_NAME": "AdendoG_DeclaracaodeAtendimentoaosRequisitosdoEdita.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo H - Impedimentos Art38",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2983D76AA9CECE5",
// 													"FILE_NAME": "AdendoH_Impedimentos_Art38.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo I -  Impedimentos Art44",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29840CC5EACACE6",
// 													"FILE_NAME": "AdendoI_Impedimentos_Art44.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo J - Planilha de preços - A - Resumo Geral",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2985007396EAD45",
// 													"FILE_NAME": "AdendoJ - Planilha de precos - A - Resumo Geral_Rev C.xls"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo 3 B - Adendo L - TEC-SMS",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B298A2CE7CA3EE95",
// 													"FILE_NAME": "Anexo 3 B - Adendo L - CEP TEC-SMS.DOCX"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo 3 A - Adendo L - CRITÉRIO TÉCNICO",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2989CBFC2A9EE91",
// 													"FILE_NAME": "Anexo 3 A -Adendo L - 99005530_CRITERIO TECNICO_Tecnico.DOCX"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo 2 - Adendo L - CRITÉRIO ECONÔMICO",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29899FCD362AE8A",
// 													"FILE_NAME": "Anexo 2 - Adendo L - CEP - CRITERIO ECONOMICO_V3_Economico.DOCX"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo 1 - Adendo L - CRITÉRIO LEGAL",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2989585D267EE87",
// 													"FILE_NAME": "Anexo 1 - Adendo L -CEP - CRITERIO LEGAL_V2_Legal.DOCX"
// 											}
// 									],
// 									"DOU_PUBL_DATE": "2019-08-28",
// 									"END_HOUR": "12:00:00",
// 									"SUB_STATUS": "",
// 									"REGIONS": [
// 											{
// 													"COUNTRY": "BR",
// 													"REGION_DESCRIPTION": "São Paulo",
// 													"REGION": "SP"
// 											}
// 									],
// 									"DISPUTE_MODE": "02",
// 									"IS_EQUALIZED": "",
// 									"START_HOUR": "12:00:00",
// 									"COMPANY_DESC": "Petróleo Brasileiro S. A.",
// 									"LIMIT_IN_DAYS": 90,
// 									"OPPORT_TYPE": "LIDT",
// 									"DESC_DETAIL": "",
// 									"START_DATE": "2019-10-25",
// 									"COMPANY": "1000",
// 									"HAS_PREQUALIFIED": "",
// 									"AUC_START_DATE": "0000-00-00",
// 									"NAT_COVERAGE": "N",
// 									"OPPORT_NUM": "7002675575",
// 									"OPEN_HOUR": "12:00:00",
// 									"OPEN_DATE": "2019-10-30"
// 							}
// 					}            
// 					{
// 							"_index": "pne-licitacoes",
// 							"_type": "licitacao",
// 							"_id": "7002675575",
// 							"_score": 4.658954,
// 							"_source": {
// 									"DOU_NUM": "",
// 									"PQ_VENDOR_LIST_HOUR": "00:00:00",
// 									"OPPORT_DESCR": "COMPLEMENTO ESCOPO CARTEIRA DIESEL RPBC",
// 									"IS_PREQUALI": "",
// 									"END_DATE": "2019-10-30",
// 									"ITEMS": [
// 											{
// 													"ITEM_PROCESS_TYP": "OUTL",
// 													"UNIT": "UA",
// 													"QUANTITY": 1.0,
// 													"NUM_MATERIAL": "",
// 													"ITEM_DESC": "CONSTRUÇÃO CIVIL E MONT.INDUSTRIAL-C/MAT",
// 													"EXLIN": "8001",
// 													"FAMILY": "99005530",
// 													"ITEM_NUM": "0000009001",
// 													"ITEM_NOTES": [],
// 													"FAMILY_DESCR": "",
// 													"DELIV_DATE": "2019-08-05",
// 													"GROUPING_LEVEL": "L",
// 													"FAMILY_CLASSIF": "99005530"
// 											},
// 											{
// 													"ITEM_PROCESS_TYP": "SERVICE",
// 													"UNIT": "UN",
// 													"QUANTITY": 1.0,
// 													"NUM_MATERIAL": "70000058",
// 													"ITEM_DESC": "EPC COMPLEM ESCOPO DIESEL RPBC",
// 													"EXLIN": "8001.AA",
// 													"FAMILY": "99005530",
// 													"ITEM_NUM": "0000000001",
// 													"ITEM_NOTES": [],
// 													"FAMILY_DESCR": "",
// 													"DELIV_DATE": "2019-08-05",
// 													"GROUPING_LEVEL": "",
// 													"FAMILY_CLASSIF": "99005530"
// 											}
// 									],
// 									"AUC_START_TIME": "00:00:00",
// 									"STATUS_DESC": "Publicado",
// 									"PQ_VENDOR_LIST_DATE": "0000-00-00",
// 									"STATUS": "I1011",
// 									"POSTING_DATE": "2019-07-31",
// 									"ANEXOS": [
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 10",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297C8867E6E6A71",
// 													"FILE_NAME": "Anexo IX - Pacote 10.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 09",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297C4B715A96A6E",
// 													"FILE_NAME": "Anexo IX - Pacote 09.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 08",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297C2836B522A6E",
// 													"FILE_NAME": "Anexo IX - Pacote 08.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 07",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297BFDBB0D2AA69",
// 													"FILE_NAME": "Anexo IX - Pacote 07.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 06",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297BD32CD25AA69",
// 													"FILE_NAME": "Anexo IX - Pacote 06.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 05",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297BA3B1EC86A68",
// 													"FILE_NAME": "Anexo IX - Pacote 05.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 04",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297B7344B696A67",
// 													"FILE_NAME": "Anexo IX - Pacote 04.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 03",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297B308E367EA1B",
// 													"FILE_NAME": "Anexo IX - Pacote 03.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 02",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297AFEE0549EA19",
// 													"FILE_NAME": "Anexo IX - Pacote 02.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 01",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297AD74182FCA15",
// 													"FILE_NAME": "Anexo IX - Pacote 01.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 20",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297FFF181DF2BB6",
// 													"FILE_NAME": "Anexo IX - Pacote 20.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 19",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297FDE9CF68EBB1",
// 													"FILE_NAME": "Anexo IX - Pacote 19.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 18",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297F920D2712BAB",
// 													"FILE_NAME": "Anexo IX - Pacote 18.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 17",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297F6737255ABA7",
// 													"FILE_NAME": "Anexo IX - Pacote 17.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 16",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297F4908993EB5C",
// 													"FILE_NAME": "Anexo IX - Pacote 16.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 15",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297F1867536AB59",
// 													"FILE_NAME": "Anexo IX - Pacote 15.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 14A",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297EE39E0FE2B4C",
// 													"FILE_NAME": "Anexo IX - Pacote 14A.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 14",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297EC0D637CEB48",
// 													"FILE_NAME": "Anexo IX - Pacote 14.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 13",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297E552DD342B30",
// 													"FILE_NAME": "Anexo IX - Pacote 13.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 12",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297DEDF9A71EADD",
// 													"FILE_NAME": "Anexo IX - Pacote 12.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 11",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297D7B15D34EAD2",
// 													"FILE_NAME": "Anexo IX - Pacote 11.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo K - DFP",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2985B05FB606D5E",
// 													"FILE_NAME": "AdendoK_DFP_ INDUSTRIAL_portugu_s_Ver.2 Rev.7.xlsm"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo L - Requisitos para Habilitacao",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2985FE1B4536D61",
// 													"FILE_NAME": "AdendoL_Requisitos_para_Habilitacao.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo M - INSTRUCOES MEMORIA DE CALCULO",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2986448AD54AD66",
// 													"FILE_NAME": "AdendoM - INSTRUCOES_PARA_MEMORIA_DE_CALCULO.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo N - Declaração Dispensa de Visita Tecnica",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29869661DD0ADBB",
// 													"FILE_NAME": "AdendoN_Declaracao Dispensa de Visita Tecnica.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo J - Planilha de preços - C - SobrComiss",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2985840BC162D5B",
// 													"FILE_NAME": "AdendoJ - Planilha de precos - C - SobrComiss revD.xlsx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo J - Planilha preços -B- Planilha Preços - Prest Serviços",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29855965FC2AD54",
// 													"FILE_NAME": "AdendoJ - Planilha de precos - B - Planilha Precos - Prestacao de Servicos RevB.xls"
// 											},
// 											{
// 													"DESCRIPTION": "Edital",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29826EBB1CCAC77",
// 													"FILE_NAME": "Edital Licitacao.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo B - Atestado de Visita Técnica",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2982A602C6BAC7C",
// 													"FILE_NAME": "AdendoB_Atestado de Visita Tecnica.doc"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo C - AtendimentoaoCE_GC_PRS",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2982D41EEE16C84",
// 													"FILE_NAME": "AdendoC_AtendimentoaoCE_GC_PRS.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo D - Elaboracao Independente de Proposta",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29830B045542C87",
// 													"FILE_NAME": "AdendoD_ElaboracaoIndependentedeProposta.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo E - Previa de Conformidade",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29833682F502C8A",
// 													"FILE_NAME": "AdendoE_PreviadeConformidade.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo F - Relacao Familiar Impedimento Servicos",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29836989D02EC8C",
// 													"FILE_NAME": "AdendoF_RelacaoFamiliar_Impedimento_Servicos.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo G - Declaracao de Atendimento aos Requisitos do Edital",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2983A70EE02ECE0",
// 													"FILE_NAME": "AdendoG_DeclaracaodeAtendimentoaosRequisitosdoEdita.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo H - Impedimentos Art38",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2983D76AA9CECE5",
// 													"FILE_NAME": "AdendoH_Impedimentos_Art38.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo I -  Impedimentos Art44",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29840CC5EACACE6",
// 													"FILE_NAME": "AdendoI_Impedimentos_Art44.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo J - Planilha de preços - A - Resumo Geral",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2985007396EAD45",
// 													"FILE_NAME": "AdendoJ - Planilha de precos - A - Resumo Geral_Rev C.xls"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo 3 B - Adendo L - TEC-SMS",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B298A2CE7CA3EE95",
// 													"FILE_NAME": "Anexo 3 B - Adendo L - CEP TEC-SMS.DOCX"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo 3 A - Adendo L - CRITÉRIO TÉCNICO",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2989CBFC2A9EE91",
// 													"FILE_NAME": "Anexo 3 A -Adendo L - 99005530_CRITERIO TECNICO_Tecnico.DOCX"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo 2 - Adendo L - CRITÉRIO ECONÔMICO",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29899FCD362AE8A",
// 													"FILE_NAME": "Anexo 2 - Adendo L - CEP - CRITERIO ECONOMICO_V3_Economico.DOCX"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo 1 - Adendo L - CRITÉRIO LEGAL",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2989585D267EE87",
// 													"FILE_NAME": "Anexo 1 - Adendo L -CEP - CRITERIO LEGAL_V2_Legal.DOCX"
// 											}
// 									],
// 									"DOU_PUBL_DATE": "2019-08-28",
// 									"END_HOUR": "12:00:00",
// 									"SUB_STATUS": "",
// 									"REGIONS": [
// 											{
// 													"COUNTRY": "BR",
// 													"REGION_DESCRIPTION": "São Paulo",
// 													"REGION": "SP"
// 											}
// 									],
// 									"DISPUTE_MODE": "02",
// 									"IS_EQUALIZED": "",
// 									"START_HOUR": "12:00:00",
// 									"COMPANY_DESC": "Petróleo Brasileiro S. A.",
// 									"LIMIT_IN_DAYS": 90,
// 									"OPPORT_TYPE": "LIDT",
// 									"DESC_DETAIL": "",
// 									"START_DATE": "2019-10-25",
// 									"COMPANY": "1000",
// 									"HAS_PREQUALIFIED": "",
// 									"AUC_START_DATE": "0000-00-00",
// 									"NAT_COVERAGE": "N",
// 									"OPPORT_NUM": "7002675575",
// 									"OPEN_HOUR": "12:00:00",
// 									"OPEN_DATE": "2019-10-30"
// 							}
// 					}            
// 					{
// 							"_index": "pne-licitacoes",
// 							"_type": "licitacao",
// 							"_id": "7002675575",
// 							"_score": 4.658954,
// 							"_source": {
// 									"DOU_NUM": "",
// 									"PQ_VENDOR_LIST_HOUR": "00:00:00",
// 									"OPPORT_DESCR": "COMPLEMENTO ESCOPO CARTEIRA DIESEL RPBC",
// 									"IS_PREQUALI": "",
// 									"END_DATE": "2019-10-30",
// 									"ITEMS": [
// 											{
// 													"ITEM_PROCESS_TYP": "OUTL",
// 													"UNIT": "UA",
// 													"QUANTITY": 1.0,
// 													"NUM_MATERIAL": "",
// 													"ITEM_DESC": "CONSTRUÇÃO CIVIL E MONT.INDUSTRIAL-C/MAT",
// 													"EXLIN": "8001",
// 													"FAMILY": "99005530",
// 													"ITEM_NUM": "0000009001",
// 													"ITEM_NOTES": [],
// 													"FAMILY_DESCR": "",
// 													"DELIV_DATE": "2019-08-05",
// 													"GROUPING_LEVEL": "L",
// 													"FAMILY_CLASSIF": "99005530"
// 											},
// 											{
// 													"ITEM_PROCESS_TYP": "SERVICE",
// 													"UNIT": "UN",
// 													"QUANTITY": 1.0,
// 													"NUM_MATERIAL": "70000058",
// 													"ITEM_DESC": "EPC COMPLEM ESCOPO DIESEL RPBC",
// 													"EXLIN": "8001.AA",
// 													"FAMILY": "99005530",
// 													"ITEM_NUM": "0000000001",
// 													"ITEM_NOTES": [],
// 													"FAMILY_DESCR": "",
// 													"DELIV_DATE": "2019-08-05",
// 													"GROUPING_LEVEL": "",
// 													"FAMILY_CLASSIF": "99005530"
// 											}
// 									],
// 									"AUC_START_TIME": "00:00:00",
// 									"STATUS_DESC": "Publicado",
// 									"PQ_VENDOR_LIST_DATE": "0000-00-00",
// 									"STATUS": "I1011",
// 									"POSTING_DATE": "2019-07-31",
// 									"ANEXOS": [
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 10",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297C8867E6E6A71",
// 													"FILE_NAME": "Anexo IX - Pacote 10.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 09",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297C4B715A96A6E",
// 													"FILE_NAME": "Anexo IX - Pacote 09.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 08",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297C2836B522A6E",
// 													"FILE_NAME": "Anexo IX - Pacote 08.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 07",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297BFDBB0D2AA69",
// 													"FILE_NAME": "Anexo IX - Pacote 07.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 06",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297BD32CD25AA69",
// 													"FILE_NAME": "Anexo IX - Pacote 06.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 05",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297BA3B1EC86A68",
// 													"FILE_NAME": "Anexo IX - Pacote 05.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 04",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297B7344B696A67",
// 													"FILE_NAME": "Anexo IX - Pacote 04.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 03",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297B308E367EA1B",
// 													"FILE_NAME": "Anexo IX - Pacote 03.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 02",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297AFEE0549EA19",
// 													"FILE_NAME": "Anexo IX - Pacote 02.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 01",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297AD74182FCA15",
// 													"FILE_NAME": "Anexo IX - Pacote 01.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 20",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297FFF181DF2BB6",
// 													"FILE_NAME": "Anexo IX - Pacote 20.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 19",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297FDE9CF68EBB1",
// 													"FILE_NAME": "Anexo IX - Pacote 19.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 18",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297F920D2712BAB",
// 													"FILE_NAME": "Anexo IX - Pacote 18.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 17",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297F6737255ABA7",
// 													"FILE_NAME": "Anexo IX - Pacote 17.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 16",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297F4908993EB5C",
// 													"FILE_NAME": "Anexo IX - Pacote 16.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 15",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297F1867536AB59",
// 													"FILE_NAME": "Anexo IX - Pacote 15.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 14A",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297EE39E0FE2B4C",
// 													"FILE_NAME": "Anexo IX - Pacote 14A.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 14",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297EC0D637CEB48",
// 													"FILE_NAME": "Anexo IX - Pacote 14.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 13",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297E552DD342B30",
// 													"FILE_NAME": "Anexo IX - Pacote 13.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 12",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297DEDF9A71EADD",
// 													"FILE_NAME": "Anexo IX - Pacote 12.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 11",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297D7B15D34EAD2",
// 													"FILE_NAME": "Anexo IX - Pacote 11.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo K - DFP",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2985B05FB606D5E",
// 													"FILE_NAME": "AdendoK_DFP_ INDUSTRIAL_portugu_s_Ver.2 Rev.7.xlsm"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo L - Requisitos para Habilitacao",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2985FE1B4536D61",
// 													"FILE_NAME": "AdendoL_Requisitos_para_Habilitacao.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo M - INSTRUCOES MEMORIA DE CALCULO",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2986448AD54AD66",
// 													"FILE_NAME": "AdendoM - INSTRUCOES_PARA_MEMORIA_DE_CALCULO.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo N - Declaração Dispensa de Visita Tecnica",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29869661DD0ADBB",
// 													"FILE_NAME": "AdendoN_Declaracao Dispensa de Visita Tecnica.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo J - Planilha de preços - C - SobrComiss",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2985840BC162D5B",
// 													"FILE_NAME": "AdendoJ - Planilha de precos - C - SobrComiss revD.xlsx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo J - Planilha preços -B- Planilha Preços - Prest Serviços",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29855965FC2AD54",
// 													"FILE_NAME": "AdendoJ - Planilha de precos - B - Planilha Precos - Prestacao de Servicos RevB.xls"
// 											},
// 											{
// 													"DESCRIPTION": "Edital",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29826EBB1CCAC77",
// 													"FILE_NAME": "Edital Licitacao.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo B - Atestado de Visita Técnica",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2982A602C6BAC7C",
// 													"FILE_NAME": "AdendoB_Atestado de Visita Tecnica.doc"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo C - AtendimentoaoCE_GC_PRS",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2982D41EEE16C84",
// 													"FILE_NAME": "AdendoC_AtendimentoaoCE_GC_PRS.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo D - Elaboracao Independente de Proposta",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29830B045542C87",
// 													"FILE_NAME": "AdendoD_ElaboracaoIndependentedeProposta.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo E - Previa de Conformidade",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29833682F502C8A",
// 													"FILE_NAME": "AdendoE_PreviadeConformidade.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo F - Relacao Familiar Impedimento Servicos",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29836989D02EC8C",
// 													"FILE_NAME": "AdendoF_RelacaoFamiliar_Impedimento_Servicos.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo G - Declaracao de Atendimento aos Requisitos do Edital",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2983A70EE02ECE0",
// 													"FILE_NAME": "AdendoG_DeclaracaodeAtendimentoaosRequisitosdoEdita.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo H - Impedimentos Art38",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2983D76AA9CECE5",
// 													"FILE_NAME": "AdendoH_Impedimentos_Art38.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo I -  Impedimentos Art44",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29840CC5EACACE6",
// 													"FILE_NAME": "AdendoI_Impedimentos_Art44.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo J - Planilha de preços - A - Resumo Geral",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2985007396EAD45",
// 													"FILE_NAME": "AdendoJ - Planilha de precos - A - Resumo Geral_Rev C.xls"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo 3 B - Adendo L - TEC-SMS",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B298A2CE7CA3EE95",
// 													"FILE_NAME": "Anexo 3 B - Adendo L - CEP TEC-SMS.DOCX"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo 3 A - Adendo L - CRITÉRIO TÉCNICO",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2989CBFC2A9EE91",
// 													"FILE_NAME": "Anexo 3 A -Adendo L - 99005530_CRITERIO TECNICO_Tecnico.DOCX"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo 2 - Adendo L - CRITÉRIO ECONÔMICO",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29899FCD362AE8A",
// 													"FILE_NAME": "Anexo 2 - Adendo L - CEP - CRITERIO ECONOMICO_V3_Economico.DOCX"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo 1 - Adendo L - CRITÉRIO LEGAL",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2989585D267EE87",
// 													"FILE_NAME": "Anexo 1 - Adendo L -CEP - CRITERIO LEGAL_V2_Legal.DOCX"
// 											}
// 									],
// 									"DOU_PUBL_DATE": "2019-08-28",
// 									"END_HOUR": "12:00:00",
// 									"SUB_STATUS": "",
// 									"REGIONS": [
// 											{
// 													"COUNTRY": "BR",
// 													"REGION_DESCRIPTION": "São Paulo",
// 													"REGION": "SP"
// 											}
// 									],
// 									"DISPUTE_MODE": "02",
// 									"IS_EQUALIZED": "",
// 									"START_HOUR": "12:00:00",
// 									"COMPANY_DESC": "Petróleo Brasileiro S. A.",
// 									"LIMIT_IN_DAYS": 90,
// 									"OPPORT_TYPE": "LIDT",
// 									"DESC_DETAIL": "",
// 									"START_DATE": "2019-10-25",
// 									"COMPANY": "1000",
// 									"HAS_PREQUALIFIED": "",
// 									"AUC_START_DATE": "0000-00-00",
// 									"NAT_COVERAGE": "N",
// 									"OPPORT_NUM": "7002675575",
// 									"OPEN_HOUR": "12:00:00",
// 									"OPEN_DATE": "2019-10-30"
// 							}
// 					}            
// 					{
// 							"_index": "pne-licitacoes",
// 							"_type": "licitacao",
// 							"_id": "7002675575",
// 							"_score": 4.658954,
// 							"_source": {
// 									"DOU_NUM": "",
// 									"PQ_VENDOR_LIST_HOUR": "00:00:00",
// 									"OPPORT_DESCR": "COMPLEMENTO ESCOPO CARTEIRA DIESEL RPBC",
// 									"IS_PREQUALI": "",
// 									"END_DATE": "2019-10-30",
// 									"ITEMS": [
// 											{
// 													"ITEM_PROCESS_TYP": "OUTL",
// 													"UNIT": "UA",
// 													"QUANTITY": 1.0,
// 													"NUM_MATERIAL": "",
// 													"ITEM_DESC": "CONSTRUÇÃO CIVIL E MONT.INDUSTRIAL-C/MAT",
// 													"EXLIN": "8001",
// 													"FAMILY": "99005530",
// 													"ITEM_NUM": "0000009001",
// 													"ITEM_NOTES": [],
// 													"FAMILY_DESCR": "",
// 													"DELIV_DATE": "2019-08-05",
// 													"GROUPING_LEVEL": "L",
// 													"FAMILY_CLASSIF": "99005530"
// 											},
// 											{
// 													"ITEM_PROCESS_TYP": "SERVICE",
// 													"UNIT": "UN",
// 													"QUANTITY": 1.0,
// 													"NUM_MATERIAL": "70000058",
// 													"ITEM_DESC": "EPC COMPLEM ESCOPO DIESEL RPBC",
// 													"EXLIN": "8001.AA",
// 													"FAMILY": "99005530",
// 													"ITEM_NUM": "0000000001",
// 													"ITEM_NOTES": [],
// 													"FAMILY_DESCR": "",
// 													"DELIV_DATE": "2019-08-05",
// 													"GROUPING_LEVEL": "",
// 													"FAMILY_CLASSIF": "99005530"
// 											}
// 									],
// 									"AUC_START_TIME": "00:00:00",
// 									"STATUS_DESC": "Publicado",
// 									"PQ_VENDOR_LIST_DATE": "0000-00-00",
// 									"STATUS": "I1011",
// 									"POSTING_DATE": "2019-07-31",
// 									"ANEXOS": [
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 10",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297C8867E6E6A71",
// 													"FILE_NAME": "Anexo IX - Pacote 10.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 09",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297C4B715A96A6E",
// 													"FILE_NAME": "Anexo IX - Pacote 09.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 08",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297C2836B522A6E",
// 													"FILE_NAME": "Anexo IX - Pacote 08.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 07",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297BFDBB0D2AA69",
// 													"FILE_NAME": "Anexo IX - Pacote 07.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 06",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297BD32CD25AA69",
// 													"FILE_NAME": "Anexo IX - Pacote 06.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 05",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297BA3B1EC86A68",
// 													"FILE_NAME": "Anexo IX - Pacote 05.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 04",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297B7344B696A67",
// 													"FILE_NAME": "Anexo IX - Pacote 04.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 03",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297B308E367EA1B",
// 													"FILE_NAME": "Anexo IX - Pacote 03.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 02",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297AFEE0549EA19",
// 													"FILE_NAME": "Anexo IX - Pacote 02.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 01",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297AD74182FCA15",
// 													"FILE_NAME": "Anexo IX - Pacote 01.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 20",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297FFF181DF2BB6",
// 													"FILE_NAME": "Anexo IX - Pacote 20.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 19",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297FDE9CF68EBB1",
// 													"FILE_NAME": "Anexo IX - Pacote 19.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 18",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297F920D2712BAB",
// 													"FILE_NAME": "Anexo IX - Pacote 18.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 17",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297F6737255ABA7",
// 													"FILE_NAME": "Anexo IX - Pacote 17.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 16",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297F4908993EB5C",
// 													"FILE_NAME": "Anexo IX - Pacote 16.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 15",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297F1867536AB59",
// 													"FILE_NAME": "Anexo IX - Pacote 15.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 14A",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297EE39E0FE2B4C",
// 													"FILE_NAME": "Anexo IX - Pacote 14A.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 14",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297EC0D637CEB48",
// 													"FILE_NAME": "Anexo IX - Pacote 14.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 13",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297E552DD342B30",
// 													"FILE_NAME": "Anexo IX - Pacote 13.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 12",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297DEDF9A71EADD",
// 													"FILE_NAME": "Anexo IX - Pacote 12.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 11",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297D7B15D34EAD2",
// 													"FILE_NAME": "Anexo IX - Pacote 11.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo K - DFP",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2985B05FB606D5E",
// 													"FILE_NAME": "AdendoK_DFP_ INDUSTRIAL_portugu_s_Ver.2 Rev.7.xlsm"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo L - Requisitos para Habilitacao",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2985FE1B4536D61",
// 													"FILE_NAME": "AdendoL_Requisitos_para_Habilitacao.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo M - INSTRUCOES MEMORIA DE CALCULO",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2986448AD54AD66",
// 													"FILE_NAME": "AdendoM - INSTRUCOES_PARA_MEMORIA_DE_CALCULO.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo N - Declaração Dispensa de Visita Tecnica",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29869661DD0ADBB",
// 													"FILE_NAME": "AdendoN_Declaracao Dispensa de Visita Tecnica.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo J - Planilha de preços - C - SobrComiss",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2985840BC162D5B",
// 													"FILE_NAME": "AdendoJ - Planilha de precos - C - SobrComiss revD.xlsx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo J - Planilha preços -B- Planilha Preços - Prest Serviços",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29855965FC2AD54",
// 													"FILE_NAME": "AdendoJ - Planilha de precos - B - Planilha Precos - Prestacao de Servicos RevB.xls"
// 											},
// 											{
// 													"DESCRIPTION": "Edital",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29826EBB1CCAC77",
// 													"FILE_NAME": "Edital Licitacao.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo B - Atestado de Visita Técnica",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2982A602C6BAC7C",
// 													"FILE_NAME": "AdendoB_Atestado de Visita Tecnica.doc"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo C - AtendimentoaoCE_GC_PRS",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2982D41EEE16C84",
// 													"FILE_NAME": "AdendoC_AtendimentoaoCE_GC_PRS.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo D - Elaboracao Independente de Proposta",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29830B045542C87",
// 													"FILE_NAME": "AdendoD_ElaboracaoIndependentedeProposta.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo E - Previa de Conformidade",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29833682F502C8A",
// 													"FILE_NAME": "AdendoE_PreviadeConformidade.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo F - Relacao Familiar Impedimento Servicos",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29836989D02EC8C",
// 													"FILE_NAME": "AdendoF_RelacaoFamiliar_Impedimento_Servicos.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo G - Declaracao de Atendimento aos Requisitos do Edital",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2983A70EE02ECE0",
// 													"FILE_NAME": "AdendoG_DeclaracaodeAtendimentoaosRequisitosdoEdita.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo H - Impedimentos Art38",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2983D76AA9CECE5",
// 													"FILE_NAME": "AdendoH_Impedimentos_Art38.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo I -  Impedimentos Art44",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29840CC5EACACE6",
// 													"FILE_NAME": "AdendoI_Impedimentos_Art44.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo J - Planilha de preços - A - Resumo Geral",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2985007396EAD45",
// 													"FILE_NAME": "AdendoJ - Planilha de precos - A - Resumo Geral_Rev C.xls"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo 3 B - Adendo L - TEC-SMS",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B298A2CE7CA3EE95",
// 													"FILE_NAME": "Anexo 3 B - Adendo L - CEP TEC-SMS.DOCX"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo 3 A - Adendo L - CRITÉRIO TÉCNICO",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2989CBFC2A9EE91",
// 													"FILE_NAME": "Anexo 3 A -Adendo L - 99005530_CRITERIO TECNICO_Tecnico.DOCX"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo 2 - Adendo L - CRITÉRIO ECONÔMICO",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29899FCD362AE8A",
// 													"FILE_NAME": "Anexo 2 - Adendo L - CEP - CRITERIO ECONOMICO_V3_Economico.DOCX"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo 1 - Adendo L - CRITÉRIO LEGAL",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2989585D267EE87",
// 													"FILE_NAME": "Anexo 1 - Adendo L -CEP - CRITERIO LEGAL_V2_Legal.DOCX"
// 											}
// 									],
// 									"DOU_PUBL_DATE": "2019-08-28",
// 									"END_HOUR": "12:00:00",
// 									"SUB_STATUS": "",
// 									"REGIONS": [
// 											{
// 													"COUNTRY": "BR",
// 													"REGION_DESCRIPTION": "São Paulo",
// 													"REGION": "SP"
// 											}
// 									],
// 									"DISPUTE_MODE": "02",
// 									"IS_EQUALIZED": "",
// 									"START_HOUR": "12:00:00",
// 									"COMPANY_DESC": "Petróleo Brasileiro S. A.",
// 									"LIMIT_IN_DAYS": 90,
// 									"OPPORT_TYPE": "LIDT",
// 									"DESC_DETAIL": "",
// 									"START_DATE": "2019-10-25",
// 									"COMPANY": "1000",
// 									"HAS_PREQUALIFIED": "",
// 									"AUC_START_DATE": "0000-00-00",
// 									"NAT_COVERAGE": "N",
// 									"OPPORT_NUM": "7002675575",
// 									"OPEN_HOUR": "12:00:00",
// 									"OPEN_DATE": "2019-10-30"
// 							}
// 					}            
// 					{
// 							"_index": "pne-licitacoes",
// 							"_type": "licitacao",
// 							"_id": "7002675575",
// 							"_score": 4.658954,
// 							"_source": {
// 									"DOU_NUM": "",
// 									"PQ_VENDOR_LIST_HOUR": "00:00:00",
// 									"OPPORT_DESCR": "COMPLEMENTO ESCOPO CARTEIRA DIESEL RPBC",
// 									"IS_PREQUALI": "",
// 									"END_DATE": "2019-10-30",
// 									"ITEMS": [
// 											{
// 													"ITEM_PROCESS_TYP": "OUTL",
// 													"UNIT": "UA",
// 													"QUANTITY": 1.0,
// 													"NUM_MATERIAL": "",
// 													"ITEM_DESC": "CONSTRUÇÃO CIVIL E MONT.INDUSTRIAL-C/MAT",
// 													"EXLIN": "8001",
// 													"FAMILY": "99005530",
// 													"ITEM_NUM": "0000009001",
// 													"ITEM_NOTES": [],
// 													"FAMILY_DESCR": "",
// 													"DELIV_DATE": "2019-08-05",
// 													"GROUPING_LEVEL": "L",
// 													"FAMILY_CLASSIF": "99005530"
// 											},
// 											{
// 													"ITEM_PROCESS_TYP": "SERVICE",
// 													"UNIT": "UN",
// 													"QUANTITY": 1.0,
// 													"NUM_MATERIAL": "70000058",
// 													"ITEM_DESC": "EPC COMPLEM ESCOPO DIESEL RPBC",
// 													"EXLIN": "8001.AA",
// 													"FAMILY": "99005530",
// 													"ITEM_NUM": "0000000001",
// 													"ITEM_NOTES": [],
// 													"FAMILY_DESCR": "",
// 													"DELIV_DATE": "2019-08-05",
// 													"GROUPING_LEVEL": "",
// 													"FAMILY_CLASSIF": "99005530"
// 											}
// 									],
// 									"AUC_START_TIME": "00:00:00",
// 									"STATUS_DESC": "Publicado",
// 									"PQ_VENDOR_LIST_DATE": "0000-00-00",
// 									"STATUS": "I1011",
// 									"POSTING_DATE": "2019-07-31",
// 									"ANEXOS": [
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 10",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297C8867E6E6A71",
// 													"FILE_NAME": "Anexo IX - Pacote 10.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 09",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297C4B715A96A6E",
// 													"FILE_NAME": "Anexo IX - Pacote 09.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 08",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297C2836B522A6E",
// 													"FILE_NAME": "Anexo IX - Pacote 08.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 07",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297BFDBB0D2AA69",
// 													"FILE_NAME": "Anexo IX - Pacote 07.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 06",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297BD32CD25AA69",
// 													"FILE_NAME": "Anexo IX - Pacote 06.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 05",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297BA3B1EC86A68",
// 													"FILE_NAME": "Anexo IX - Pacote 05.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 04",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297B7344B696A67",
// 													"FILE_NAME": "Anexo IX - Pacote 04.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 03",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297B308E367EA1B",
// 													"FILE_NAME": "Anexo IX - Pacote 03.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 02",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297AFEE0549EA19",
// 													"FILE_NAME": "Anexo IX - Pacote 02.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 01",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297AD74182FCA15",
// 													"FILE_NAME": "Anexo IX - Pacote 01.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 20",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297FFF181DF2BB6",
// 													"FILE_NAME": "Anexo IX - Pacote 20.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 19",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297FDE9CF68EBB1",
// 													"FILE_NAME": "Anexo IX - Pacote 19.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 18",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297F920D2712BAB",
// 													"FILE_NAME": "Anexo IX - Pacote 18.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 17",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297F6737255ABA7",
// 													"FILE_NAME": "Anexo IX - Pacote 17.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 16",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297F4908993EB5C",
// 													"FILE_NAME": "Anexo IX - Pacote 16.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 15",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297F1867536AB59",
// 													"FILE_NAME": "Anexo IX - Pacote 15.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 14A",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297EE39E0FE2B4C",
// 													"FILE_NAME": "Anexo IX - Pacote 14A.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 14",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297EC0D637CEB48",
// 													"FILE_NAME": "Anexo IX - Pacote 14.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 13",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297E552DD342B30",
// 													"FILE_NAME": "Anexo IX - Pacote 13.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 12",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297DEDF9A71EADD",
// 													"FILE_NAME": "Anexo IX - Pacote 12.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 11",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297D7B15D34EAD2",
// 													"FILE_NAME": "Anexo IX - Pacote 11.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo K - DFP",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2985B05FB606D5E",
// 													"FILE_NAME": "AdendoK_DFP_ INDUSTRIAL_portugu_s_Ver.2 Rev.7.xlsm"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo L - Requisitos para Habilitacao",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2985FE1B4536D61",
// 													"FILE_NAME": "AdendoL_Requisitos_para_Habilitacao.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo M - INSTRUCOES MEMORIA DE CALCULO",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2986448AD54AD66",
// 													"FILE_NAME": "AdendoM - INSTRUCOES_PARA_MEMORIA_DE_CALCULO.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo N - Declaração Dispensa de Visita Tecnica",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29869661DD0ADBB",
// 													"FILE_NAME": "AdendoN_Declaracao Dispensa de Visita Tecnica.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo J - Planilha de preços - C - SobrComiss",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2985840BC162D5B",
// 													"FILE_NAME": "AdendoJ - Planilha de precos - C - SobrComiss revD.xlsx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo J - Planilha preços -B- Planilha Preços - Prest Serviços",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29855965FC2AD54",
// 													"FILE_NAME": "AdendoJ - Planilha de precos - B - Planilha Precos - Prestacao de Servicos RevB.xls"
// 											},
// 											{
// 													"DESCRIPTION": "Edital",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29826EBB1CCAC77",
// 													"FILE_NAME": "Edital Licitacao.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo B - Atestado de Visita Técnica",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2982A602C6BAC7C",
// 													"FILE_NAME": "AdendoB_Atestado de Visita Tecnica.doc"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo C - AtendimentoaoCE_GC_PRS",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2982D41EEE16C84",
// 													"FILE_NAME": "AdendoC_AtendimentoaoCE_GC_PRS.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo D - Elaboracao Independente de Proposta",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29830B045542C87",
// 													"FILE_NAME": "AdendoD_ElaboracaoIndependentedeProposta.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo E - Previa de Conformidade",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29833682F502C8A",
// 													"FILE_NAME": "AdendoE_PreviadeConformidade.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo F - Relacao Familiar Impedimento Servicos",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29836989D02EC8C",
// 													"FILE_NAME": "AdendoF_RelacaoFamiliar_Impedimento_Servicos.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo G - Declaracao de Atendimento aos Requisitos do Edital",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2983A70EE02ECE0",
// 													"FILE_NAME": "AdendoG_DeclaracaodeAtendimentoaosRequisitosdoEdita.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo H - Impedimentos Art38",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2983D76AA9CECE5",
// 													"FILE_NAME": "AdendoH_Impedimentos_Art38.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo I -  Impedimentos Art44",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29840CC5EACACE6",
// 													"FILE_NAME": "AdendoI_Impedimentos_Art44.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo J - Planilha de preços - A - Resumo Geral",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2985007396EAD45",
// 													"FILE_NAME": "AdendoJ - Planilha de precos - A - Resumo Geral_Rev C.xls"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo 3 B - Adendo L - TEC-SMS",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B298A2CE7CA3EE95",
// 													"FILE_NAME": "Anexo 3 B - Adendo L - CEP TEC-SMS.DOCX"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo 3 A - Adendo L - CRITÉRIO TÉCNICO",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2989CBFC2A9EE91",
// 													"FILE_NAME": "Anexo 3 A -Adendo L - 99005530_CRITERIO TECNICO_Tecnico.DOCX"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo 2 - Adendo L - CRITÉRIO ECONÔMICO",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29899FCD362AE8A",
// 													"FILE_NAME": "Anexo 2 - Adendo L - CEP - CRITERIO ECONOMICO_V3_Economico.DOCX"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo 1 - Adendo L - CRITÉRIO LEGAL",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2989585D267EE87",
// 													"FILE_NAME": "Anexo 1 - Adendo L -CEP - CRITERIO LEGAL_V2_Legal.DOCX"
// 											}
// 									],
// 									"DOU_PUBL_DATE": "2019-08-28",
// 									"END_HOUR": "12:00:00",
// 									"SUB_STATUS": "",
// 									"REGIONS": [
// 											{
// 													"COUNTRY": "BR",
// 													"REGION_DESCRIPTION": "São Paulo",
// 													"REGION": "SP"
// 											}
// 									],
// 									"DISPUTE_MODE": "02",
// 									"IS_EQUALIZED": "",
// 									"START_HOUR": "12:00:00",
// 									"COMPANY_DESC": "Petróleo Brasileiro S. A.",
// 									"LIMIT_IN_DAYS": 90,
// 									"OPPORT_TYPE": "LIDT",
// 									"DESC_DETAIL": "",
// 									"START_DATE": "2019-10-25",
// 									"COMPANY": "1000",
// 									"HAS_PREQUALIFIED": "",
// 									"AUC_START_DATE": "0000-00-00",
// 									"NAT_COVERAGE": "N",
// 									"OPPORT_NUM": "7002675575",
// 									"OPEN_HOUR": "12:00:00",
// 									"OPEN_DATE": "2019-10-30"
// 							}
// 					}            
// 					{
// 							"_index": "pne-licitacoes",
// 							"_type": "licitacao",
// 							"_id": "7002675575",
// 							"_score": 4.658954,
// 							"_source": {
// 									"DOU_NUM": "",
// 									"PQ_VENDOR_LIST_HOUR": "00:00:00",
// 									"OPPORT_DESCR": "COMPLEMENTO ESCOPO CARTEIRA DIESEL RPBC",
// 									"IS_PREQUALI": "",
// 									"END_DATE": "2019-10-30",
// 									"ITEMS": [
// 											{
// 													"ITEM_PROCESS_TYP": "OUTL",
// 													"UNIT": "UA",
// 													"QUANTITY": 1.0,
// 													"NUM_MATERIAL": "",
// 													"ITEM_DESC": "CONSTRUÇÃO CIVIL E MONT.INDUSTRIAL-C/MAT",
// 													"EXLIN": "8001",
// 													"FAMILY": "99005530",
// 													"ITEM_NUM": "0000009001",
// 													"ITEM_NOTES": [],
// 													"FAMILY_DESCR": "",
// 													"DELIV_DATE": "2019-08-05",
// 													"GROUPING_LEVEL": "L",
// 													"FAMILY_CLASSIF": "99005530"
// 											},
// 											{
// 													"ITEM_PROCESS_TYP": "SERVICE",
// 													"UNIT": "UN",
// 													"QUANTITY": 1.0,
// 													"NUM_MATERIAL": "70000058",
// 													"ITEM_DESC": "EPC COMPLEM ESCOPO DIESEL RPBC",
// 													"EXLIN": "8001.AA",
// 													"FAMILY": "99005530",
// 													"ITEM_NUM": "0000000001",
// 													"ITEM_NOTES": [],
// 													"FAMILY_DESCR": "",
// 													"DELIV_DATE": "2019-08-05",
// 													"GROUPING_LEVEL": "",
// 													"FAMILY_CLASSIF": "99005530"
// 											}
// 									],
// 									"AUC_START_TIME": "00:00:00",
// 									"STATUS_DESC": "Publicado",
// 									"PQ_VENDOR_LIST_DATE": "0000-00-00",
// 									"STATUS": "I1011",
// 									"POSTING_DATE": "2019-07-31",
// 									"ANEXOS": [
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 10",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297C8867E6E6A71",
// 													"FILE_NAME": "Anexo IX - Pacote 10.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 09",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297C4B715A96A6E",
// 													"FILE_NAME": "Anexo IX - Pacote 09.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 08",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297C2836B522A6E",
// 													"FILE_NAME": "Anexo IX - Pacote 08.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 07",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297BFDBB0D2AA69",
// 													"FILE_NAME": "Anexo IX - Pacote 07.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 06",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297BD32CD25AA69",
// 													"FILE_NAME": "Anexo IX - Pacote 06.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 05",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297BA3B1EC86A68",
// 													"FILE_NAME": "Anexo IX - Pacote 05.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 04",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297B7344B696A67",
// 													"FILE_NAME": "Anexo IX - Pacote 04.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 03",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297B308E367EA1B",
// 													"FILE_NAME": "Anexo IX - Pacote 03.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 02",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297AFEE0549EA19",
// 													"FILE_NAME": "Anexo IX - Pacote 02.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 01",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297AD74182FCA15",
// 													"FILE_NAME": "Anexo IX - Pacote 01.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 20",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297FFF181DF2BB6",
// 													"FILE_NAME": "Anexo IX - Pacote 20.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 19",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297FDE9CF68EBB1",
// 													"FILE_NAME": "Anexo IX - Pacote 19.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 18",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297F920D2712BAB",
// 													"FILE_NAME": "Anexo IX - Pacote 18.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 17",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297F6737255ABA7",
// 													"FILE_NAME": "Anexo IX - Pacote 17.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 16",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297F4908993EB5C",
// 													"FILE_NAME": "Anexo IX - Pacote 16.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 15",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297F1867536AB59",
// 													"FILE_NAME": "Anexo IX - Pacote 15.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 14A",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297EE39E0FE2B4C",
// 													"FILE_NAME": "Anexo IX - Pacote 14A.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 14",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297EC0D637CEB48",
// 													"FILE_NAME": "Anexo IX - Pacote 14.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 13",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297E552DD342B30",
// 													"FILE_NAME": "Anexo IX - Pacote 13.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 12",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297DEDF9A71EADD",
// 													"FILE_NAME": "Anexo IX - Pacote 12.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 11",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297D7B15D34EAD2",
// 													"FILE_NAME": "Anexo IX - Pacote 11.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo K - DFP",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2985B05FB606D5E",
// 													"FILE_NAME": "AdendoK_DFP_ INDUSTRIAL_portugu_s_Ver.2 Rev.7.xlsm"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo L - Requisitos para Habilitacao",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2985FE1B4536D61",
// 													"FILE_NAME": "AdendoL_Requisitos_para_Habilitacao.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo M - INSTRUCOES MEMORIA DE CALCULO",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2986448AD54AD66",
// 													"FILE_NAME": "AdendoM - INSTRUCOES_PARA_MEMORIA_DE_CALCULO.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo N - Declaração Dispensa de Visita Tecnica",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29869661DD0ADBB",
// 													"FILE_NAME": "AdendoN_Declaracao Dispensa de Visita Tecnica.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo J - Planilha de preços - C - SobrComiss",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2985840BC162D5B",
// 													"FILE_NAME": "AdendoJ - Planilha de precos - C - SobrComiss revD.xlsx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo J - Planilha preços -B- Planilha Preços - Prest Serviços",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29855965FC2AD54",
// 													"FILE_NAME": "AdendoJ - Planilha de precos - B - Planilha Precos - Prestacao de Servicos RevB.xls"
// 											},
// 											{
// 													"DESCRIPTION": "Edital",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29826EBB1CCAC77",
// 													"FILE_NAME": "Edital Licitacao.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo B - Atestado de Visita Técnica",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2982A602C6BAC7C",
// 													"FILE_NAME": "AdendoB_Atestado de Visita Tecnica.doc"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo C - AtendimentoaoCE_GC_PRS",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2982D41EEE16C84",
// 													"FILE_NAME": "AdendoC_AtendimentoaoCE_GC_PRS.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo D - Elaboracao Independente de Proposta",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29830B045542C87",
// 													"FILE_NAME": "AdendoD_ElaboracaoIndependentedeProposta.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo E - Previa de Conformidade",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29833682F502C8A",
// 													"FILE_NAME": "AdendoE_PreviadeConformidade.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo F - Relacao Familiar Impedimento Servicos",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29836989D02EC8C",
// 													"FILE_NAME": "AdendoF_RelacaoFamiliar_Impedimento_Servicos.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo G - Declaracao de Atendimento aos Requisitos do Edital",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2983A70EE02ECE0",
// 													"FILE_NAME": "AdendoG_DeclaracaodeAtendimentoaosRequisitosdoEdita.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo H - Impedimentos Art38",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2983D76AA9CECE5",
// 													"FILE_NAME": "AdendoH_Impedimentos_Art38.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo I -  Impedimentos Art44",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29840CC5EACACE6",
// 													"FILE_NAME": "AdendoI_Impedimentos_Art44.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo J - Planilha de preços - A - Resumo Geral",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2985007396EAD45",
// 													"FILE_NAME": "AdendoJ - Planilha de precos - A - Resumo Geral_Rev C.xls"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo 3 B - Adendo L - TEC-SMS",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B298A2CE7CA3EE95",
// 													"FILE_NAME": "Anexo 3 B - Adendo L - CEP TEC-SMS.DOCX"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo 3 A - Adendo L - CRITÉRIO TÉCNICO",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2989CBFC2A9EE91",
// 													"FILE_NAME": "Anexo 3 A -Adendo L - 99005530_CRITERIO TECNICO_Tecnico.DOCX"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo 2 - Adendo L - CRITÉRIO ECONÔMICO",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29899FCD362AE8A",
// 													"FILE_NAME": "Anexo 2 - Adendo L - CEP - CRITERIO ECONOMICO_V3_Economico.DOCX"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo 1 - Adendo L - CRITÉRIO LEGAL",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2989585D267EE87",
// 													"FILE_NAME": "Anexo 1 - Adendo L -CEP - CRITERIO LEGAL_V2_Legal.DOCX"
// 											}
// 									],
// 									"DOU_PUBL_DATE": "2019-08-28",
// 									"END_HOUR": "12:00:00",
// 									"SUB_STATUS": "",
// 									"REGIONS": [
// 											{
// 													"COUNTRY": "BR",
// 													"REGION_DESCRIPTION": "São Paulo",
// 													"REGION": "SP"
// 											}
// 									],
// 									"DISPUTE_MODE": "02",
// 									"IS_EQUALIZED": "",
// 									"START_HOUR": "12:00:00",
// 									"COMPANY_DESC": "Petróleo Brasileiro S. A.",
// 									"LIMIT_IN_DAYS": 90,
// 									"OPPORT_TYPE": "LIDT",
// 									"DESC_DETAIL": "",
// 									"START_DATE": "2019-10-25",
// 									"COMPANY": "1000",
// 									"HAS_PREQUALIFIED": "",
// 									"AUC_START_DATE": "0000-00-00",
// 									"NAT_COVERAGE": "N",
// 									"OPPORT_NUM": "7002675575",
// 									"OPEN_HOUR": "12:00:00",
// 									"OPEN_DATE": "2019-10-30"
// 							}
// 					}            
// 					{
// 							"_index": "pne-licitacoes",
// 							"_type": "licitacao",
// 							"_id": "7002675575",
// 							"_score": 4.658954,
// 							"_source": {
// 									"DOU_NUM": "",
// 									"PQ_VENDOR_LIST_HOUR": "00:00:00",
// 									"OPPORT_DESCR": "COMPLEMENTO ESCOPO CARTEIRA DIESEL RPBC",
// 									"IS_PREQUALI": "",
// 									"END_DATE": "2019-10-30",
// 									"ITEMS": [
// 											{
// 													"ITEM_PROCESS_TYP": "OUTL",
// 													"UNIT": "UA",
// 													"QUANTITY": 1.0,
// 													"NUM_MATERIAL": "",
// 													"ITEM_DESC": "CONSTRUÇÃO CIVIL E MONT.INDUSTRIAL-C/MAT",
// 													"EXLIN": "8001",
// 													"FAMILY": "99005530",
// 													"ITEM_NUM": "0000009001",
// 													"ITEM_NOTES": [],
// 													"FAMILY_DESCR": "",
// 													"DELIV_DATE": "2019-08-05",
// 													"GROUPING_LEVEL": "L",
// 													"FAMILY_CLASSIF": "99005530"
// 											},
// 											{
// 													"ITEM_PROCESS_TYP": "SERVICE",
// 													"UNIT": "UN",
// 													"QUANTITY": 1.0,
// 													"NUM_MATERIAL": "70000058",
// 													"ITEM_DESC": "EPC COMPLEM ESCOPO DIESEL RPBC",
// 													"EXLIN": "8001.AA",
// 													"FAMILY": "99005530",
// 													"ITEM_NUM": "0000000001",
// 													"ITEM_NOTES": [],
// 													"FAMILY_DESCR": "",
// 													"DELIV_DATE": "2019-08-05",
// 													"GROUPING_LEVEL": "",
// 													"FAMILY_CLASSIF": "99005530"
// 											}
// 									],
// 									"AUC_START_TIME": "00:00:00",
// 									"STATUS_DESC": "Publicado",
// 									"PQ_VENDOR_LIST_DATE": "0000-00-00",
// 									"STATUS": "I1011",
// 									"POSTING_DATE": "2019-07-31",
// 									"ANEXOS": [
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 10",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297C8867E6E6A71",
// 													"FILE_NAME": "Anexo IX - Pacote 10.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 09",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297C4B715A96A6E",
// 													"FILE_NAME": "Anexo IX - Pacote 09.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 08",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297C2836B522A6E",
// 													"FILE_NAME": "Anexo IX - Pacote 08.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 07",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297BFDBB0D2AA69",
// 													"FILE_NAME": "Anexo IX - Pacote 07.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 06",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297BD32CD25AA69",
// 													"FILE_NAME": "Anexo IX - Pacote 06.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 05",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297BA3B1EC86A68",
// 													"FILE_NAME": "Anexo IX - Pacote 05.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 04",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297B7344B696A67",
// 													"FILE_NAME": "Anexo IX - Pacote 04.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 03",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297B308E367EA1B",
// 													"FILE_NAME": "Anexo IX - Pacote 03.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 02",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297AFEE0549EA19",
// 													"FILE_NAME": "Anexo IX - Pacote 02.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 01",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297AD74182FCA15",
// 													"FILE_NAME": "Anexo IX - Pacote 01.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 20",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297FFF181DF2BB6",
// 													"FILE_NAME": "Anexo IX - Pacote 20.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 19",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297FDE9CF68EBB1",
// 													"FILE_NAME": "Anexo IX - Pacote 19.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 18",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297F920D2712BAB",
// 													"FILE_NAME": "Anexo IX - Pacote 18.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 17",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297F6737255ABA7",
// 													"FILE_NAME": "Anexo IX - Pacote 17.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 16",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297F4908993EB5C",
// 													"FILE_NAME": "Anexo IX - Pacote 16.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 15",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297F1867536AB59",
// 													"FILE_NAME": "Anexo IX - Pacote 15.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 14A",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297EE39E0FE2B4C",
// 													"FILE_NAME": "Anexo IX - Pacote 14A.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 14",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297EC0D637CEB48",
// 													"FILE_NAME": "Anexo IX - Pacote 14.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 13",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297E552DD342B30",
// 													"FILE_NAME": "Anexo IX - Pacote 13.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 12",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297DEDF9A71EADD",
// 													"FILE_NAME": "Anexo IX - Pacote 12.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 11",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297D7B15D34EAD2",
// 													"FILE_NAME": "Anexo IX - Pacote 11.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo K - DFP",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2985B05FB606D5E",
// 													"FILE_NAME": "AdendoK_DFP_ INDUSTRIAL_portugu_s_Ver.2 Rev.7.xlsm"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo L - Requisitos para Habilitacao",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2985FE1B4536D61",
// 													"FILE_NAME": "AdendoL_Requisitos_para_Habilitacao.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo M - INSTRUCOES MEMORIA DE CALCULO",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2986448AD54AD66",
// 													"FILE_NAME": "AdendoM - INSTRUCOES_PARA_MEMORIA_DE_CALCULO.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo N - Declaração Dispensa de Visita Tecnica",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29869661DD0ADBB",
// 													"FILE_NAME": "AdendoN_Declaracao Dispensa de Visita Tecnica.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo J - Planilha de preços - C - SobrComiss",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2985840BC162D5B",
// 													"FILE_NAME": "AdendoJ - Planilha de precos - C - SobrComiss revD.xlsx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo J - Planilha preços -B- Planilha Preços - Prest Serviços",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29855965FC2AD54",
// 													"FILE_NAME": "AdendoJ - Planilha de precos - B - Planilha Precos - Prestacao de Servicos RevB.xls"
// 											},
// 											{
// 													"DESCRIPTION": "Edital",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29826EBB1CCAC77",
// 													"FILE_NAME": "Edital Licitacao.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo B - Atestado de Visita Técnica",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2982A602C6BAC7C",
// 													"FILE_NAME": "AdendoB_Atestado de Visita Tecnica.doc"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo C - AtendimentoaoCE_GC_PRS",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2982D41EEE16C84",
// 													"FILE_NAME": "AdendoC_AtendimentoaoCE_GC_PRS.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo D - Elaboracao Independente de Proposta",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29830B045542C87",
// 													"FILE_NAME": "AdendoD_ElaboracaoIndependentedeProposta.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo E - Previa de Conformidade",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29833682F502C8A",
// 													"FILE_NAME": "AdendoE_PreviadeConformidade.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo F - Relacao Familiar Impedimento Servicos",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29836989D02EC8C",
// 													"FILE_NAME": "AdendoF_RelacaoFamiliar_Impedimento_Servicos.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo G - Declaracao de Atendimento aos Requisitos do Edital",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2983A70EE02ECE0",
// 													"FILE_NAME": "AdendoG_DeclaracaodeAtendimentoaosRequisitosdoEdita.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo H - Impedimentos Art38",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2983D76AA9CECE5",
// 													"FILE_NAME": "AdendoH_Impedimentos_Art38.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo I -  Impedimentos Art44",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29840CC5EACACE6",
// 													"FILE_NAME": "AdendoI_Impedimentos_Art44.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo J - Planilha de preços - A - Resumo Geral",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2985007396EAD45",
// 													"FILE_NAME": "AdendoJ - Planilha de precos - A - Resumo Geral_Rev C.xls"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo 3 B - Adendo L - TEC-SMS",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B298A2CE7CA3EE95",
// 													"FILE_NAME": "Anexo 3 B - Adendo L - CEP TEC-SMS.DOCX"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo 3 A - Adendo L - CRITÉRIO TÉCNICO",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2989CBFC2A9EE91",
// 													"FILE_NAME": "Anexo 3 A -Adendo L - 99005530_CRITERIO TECNICO_Tecnico.DOCX"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo 2 - Adendo L - CRITÉRIO ECONÔMICO",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29899FCD362AE8A",
// 													"FILE_NAME": "Anexo 2 - Adendo L - CEP - CRITERIO ECONOMICO_V3_Economico.DOCX"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo 1 - Adendo L - CRITÉRIO LEGAL",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2989585D267EE87",
// 													"FILE_NAME": "Anexo 1 - Adendo L -CEP - CRITERIO LEGAL_V2_Legal.DOCX"
// 											}
// 									],
// 									"DOU_PUBL_DATE": "2019-08-28",
// 									"END_HOUR": "12:00:00",
// 									"SUB_STATUS": "",
// 									"REGIONS": [
// 											{
// 													"COUNTRY": "BR",
// 													"REGION_DESCRIPTION": "São Paulo",
// 													"REGION": "SP"
// 											}
// 									],
// 									"DISPUTE_MODE": "02",
// 									"IS_EQUALIZED": "",
// 									"START_HOUR": "12:00:00",
// 									"COMPANY_DESC": "Petróleo Brasileiro S. A.",
// 									"LIMIT_IN_DAYS": 90,
// 									"OPPORT_TYPE": "LIDT",
// 									"DESC_DETAIL": "",
// 									"START_DATE": "2019-10-25",
// 									"COMPANY": "1000",
// 									"HAS_PREQUALIFIED": "",
// 									"AUC_START_DATE": "0000-00-00",
// 									"NAT_COVERAGE": "N",
// 									"OPPORT_NUM": "7002675575",
// 									"OPEN_HOUR": "12:00:00",
// 									"OPEN_DATE": "2019-10-30"
// 							}
// 					}            
// 					{
// 							"_index": "pne-licitacoes",
// 							"_type": "licitacao",
// 							"_id": "7002675575",
// 							"_score": 4.658954,
// 							"_source": {
// 									"DOU_NUM": "",
// 									"PQ_VENDOR_LIST_HOUR": "00:00:00",
// 									"OPPORT_DESCR": "COMPLEMENTO ESCOPO CARTEIRA DIESEL RPBC",
// 									"IS_PREQUALI": "",
// 									"END_DATE": "2019-10-30",
// 									"ITEMS": [
// 											{
// 													"ITEM_PROCESS_TYP": "OUTL",
// 													"UNIT": "UA",
// 													"QUANTITY": 1.0,
// 													"NUM_MATERIAL": "",
// 													"ITEM_DESC": "CONSTRUÇÃO CIVIL E MONT.INDUSTRIAL-C/MAT",
// 													"EXLIN": "8001",
// 													"FAMILY": "99005530",
// 													"ITEM_NUM": "0000009001",
// 													"ITEM_NOTES": [],
// 													"FAMILY_DESCR": "",
// 													"DELIV_DATE": "2019-08-05",
// 													"GROUPING_LEVEL": "L",
// 													"FAMILY_CLASSIF": "99005530"
// 											},
// 											{
// 													"ITEM_PROCESS_TYP": "SERVICE",
// 													"UNIT": "UN",
// 													"QUANTITY": 1.0,
// 													"NUM_MATERIAL": "70000058",
// 													"ITEM_DESC": "EPC COMPLEM ESCOPO DIESEL RPBC",
// 													"EXLIN": "8001.AA",
// 													"FAMILY": "99005530",
// 													"ITEM_NUM": "0000000001",
// 													"ITEM_NOTES": [],
// 													"FAMILY_DESCR": "",
// 													"DELIV_DATE": "2019-08-05",
// 													"GROUPING_LEVEL": "",
// 													"FAMILY_CLASSIF": "99005530"
// 											}
// 									],
// 									"AUC_START_TIME": "00:00:00",
// 									"STATUS_DESC": "Publicado",
// 									"PQ_VENDOR_LIST_DATE": "0000-00-00",
// 									"STATUS": "I1011",
// 									"POSTING_DATE": "2019-07-31",
// 									"ANEXOS": [
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 10",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297C8867E6E6A71",
// 													"FILE_NAME": "Anexo IX - Pacote 10.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 09",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297C4B715A96A6E",
// 													"FILE_NAME": "Anexo IX - Pacote 09.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 08",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297C2836B522A6E",
// 													"FILE_NAME": "Anexo IX - Pacote 08.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 07",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297BFDBB0D2AA69",
// 													"FILE_NAME": "Anexo IX - Pacote 07.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 06",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297BD32CD25AA69",
// 													"FILE_NAME": "Anexo IX - Pacote 06.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 05",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297BA3B1EC86A68",
// 													"FILE_NAME": "Anexo IX - Pacote 05.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 04",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297B7344B696A67",
// 													"FILE_NAME": "Anexo IX - Pacote 04.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 03",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297B308E367EA1B",
// 													"FILE_NAME": "Anexo IX - Pacote 03.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 02",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297AFEE0549EA19",
// 													"FILE_NAME": "Anexo IX - Pacote 02.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 01",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297AD74182FCA15",
// 													"FILE_NAME": "Anexo IX - Pacote 01.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 20",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297FFF181DF2BB6",
// 													"FILE_NAME": "Anexo IX - Pacote 20.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 19",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297FDE9CF68EBB1",
// 													"FILE_NAME": "Anexo IX - Pacote 19.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 18",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297F920D2712BAB",
// 													"FILE_NAME": "Anexo IX - Pacote 18.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 17",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297F6737255ABA7",
// 													"FILE_NAME": "Anexo IX - Pacote 17.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 16",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297F4908993EB5C",
// 													"FILE_NAME": "Anexo IX - Pacote 16.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 15",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297F1867536AB59",
// 													"FILE_NAME": "Anexo IX - Pacote 15.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 14A",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297EE39E0FE2B4C",
// 													"FILE_NAME": "Anexo IX - Pacote 14A.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 14",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297EC0D637CEB48",
// 													"FILE_NAME": "Anexo IX - Pacote 14.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 13",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297E552DD342B30",
// 													"FILE_NAME": "Anexo IX - Pacote 13.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 12",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297DEDF9A71EADD",
// 													"FILE_NAME": "Anexo IX - Pacote 12.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 11",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297D7B15D34EAD2",
// 													"FILE_NAME": "Anexo IX - Pacote 11.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo K - DFP",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2985B05FB606D5E",
// 													"FILE_NAME": "AdendoK_DFP_ INDUSTRIAL_portugu_s_Ver.2 Rev.7.xlsm"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo L - Requisitos para Habilitacao",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2985FE1B4536D61",
// 													"FILE_NAME": "AdendoL_Requisitos_para_Habilitacao.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo M - INSTRUCOES MEMORIA DE CALCULO",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2986448AD54AD66",
// 													"FILE_NAME": "AdendoM - INSTRUCOES_PARA_MEMORIA_DE_CALCULO.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo N - Declaração Dispensa de Visita Tecnica",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29869661DD0ADBB",
// 													"FILE_NAME": "AdendoN_Declaracao Dispensa de Visita Tecnica.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo J - Planilha de preços - C - SobrComiss",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2985840BC162D5B",
// 													"FILE_NAME": "AdendoJ - Planilha de precos - C - SobrComiss revD.xlsx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo J - Planilha preços -B- Planilha Preços - Prest Serviços",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29855965FC2AD54",
// 													"FILE_NAME": "AdendoJ - Planilha de precos - B - Planilha Precos - Prestacao de Servicos RevB.xls"
// 											},
// 											{
// 													"DESCRIPTION": "Edital",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29826EBB1CCAC77",
// 													"FILE_NAME": "Edital Licitacao.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo B - Atestado de Visita Técnica",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2982A602C6BAC7C",
// 													"FILE_NAME": "AdendoB_Atestado de Visita Tecnica.doc"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo C - AtendimentoaoCE_GC_PRS",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2982D41EEE16C84",
// 													"FILE_NAME": "AdendoC_AtendimentoaoCE_GC_PRS.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo D - Elaboracao Independente de Proposta",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29830B045542C87",
// 													"FILE_NAME": "AdendoD_ElaboracaoIndependentedeProposta.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo E - Previa de Conformidade",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29833682F502C8A",
// 													"FILE_NAME": "AdendoE_PreviadeConformidade.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo F - Relacao Familiar Impedimento Servicos",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29836989D02EC8C",
// 													"FILE_NAME": "AdendoF_RelacaoFamiliar_Impedimento_Servicos.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo G - Declaracao de Atendimento aos Requisitos do Edital",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2983A70EE02ECE0",
// 													"FILE_NAME": "AdendoG_DeclaracaodeAtendimentoaosRequisitosdoEdita.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo H - Impedimentos Art38",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2983D76AA9CECE5",
// 													"FILE_NAME": "AdendoH_Impedimentos_Art38.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo I -  Impedimentos Art44",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29840CC5EACACE6",
// 													"FILE_NAME": "AdendoI_Impedimentos_Art44.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo J - Planilha de preços - A - Resumo Geral",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2985007396EAD45",
// 													"FILE_NAME": "AdendoJ - Planilha de precos - A - Resumo Geral_Rev C.xls"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo 3 B - Adendo L - TEC-SMS",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B298A2CE7CA3EE95",
// 													"FILE_NAME": "Anexo 3 B - Adendo L - CEP TEC-SMS.DOCX"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo 3 A - Adendo L - CRITÉRIO TÉCNICO",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2989CBFC2A9EE91",
// 													"FILE_NAME": "Anexo 3 A -Adendo L - 99005530_CRITERIO TECNICO_Tecnico.DOCX"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo 2 - Adendo L - CRITÉRIO ECONÔMICO",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29899FCD362AE8A",
// 													"FILE_NAME": "Anexo 2 - Adendo L - CEP - CRITERIO ECONOMICO_V3_Economico.DOCX"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo 1 - Adendo L - CRITÉRIO LEGAL",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2989585D267EE87",
// 													"FILE_NAME": "Anexo 1 - Adendo L -CEP - CRITERIO LEGAL_V2_Legal.DOCX"
// 											}
// 									],
// 									"DOU_PUBL_DATE": "2019-08-28",
// 									"END_HOUR": "12:00:00",
// 									"SUB_STATUS": "",
// 									"REGIONS": [
// 											{
// 													"COUNTRY": "BR",
// 													"REGION_DESCRIPTION": "São Paulo",
// 													"REGION": "SP"
// 											}
// 									],
// 									"DISPUTE_MODE": "02",
// 									"IS_EQUALIZED": "",
// 									"START_HOUR": "12:00:00",
// 									"COMPANY_DESC": "Petróleo Brasileiro S. A.",
// 									"LIMIT_IN_DAYS": 90,
// 									"OPPORT_TYPE": "LIDT",
// 									"DESC_DETAIL": "",
// 									"START_DATE": "2019-10-25",
// 									"COMPANY": "1000",
// 									"HAS_PREQUALIFIED": "",
// 									"AUC_START_DATE": "0000-00-00",
// 									"NAT_COVERAGE": "N",
// 									"OPPORT_NUM": "7002675575",
// 									"OPEN_HOUR": "12:00:00",
// 									"OPEN_DATE": "2019-10-30"
// 							}
// 					}            
// 					{
// 							"_index": "pne-licitacoes",
// 							"_type": "licitacao",
// 							"_id": "7002675575",
// 							"_score": 4.658954,
// 							"_source": {
// 									"DOU_NUM": "",
// 									"PQ_VENDOR_LIST_HOUR": "00:00:00",
// 									"OPPORT_DESCR": "COMPLEMENTO ESCOPO CARTEIRA DIESEL RPBC",
// 									"IS_PREQUALI": "",
// 									"END_DATE": "2019-10-30",
// 									"ITEMS": [
// 											{
// 													"ITEM_PROCESS_TYP": "OUTL",
// 													"UNIT": "UA",
// 													"QUANTITY": 1.0,
// 													"NUM_MATERIAL": "",
// 													"ITEM_DESC": "CONSTRUÇÃO CIVIL E MONT.INDUSTRIAL-C/MAT",
// 													"EXLIN": "8001",
// 													"FAMILY": "99005530",
// 													"ITEM_NUM": "0000009001",
// 													"ITEM_NOTES": [],
// 													"FAMILY_DESCR": "",
// 													"DELIV_DATE": "2019-08-05",
// 													"GROUPING_LEVEL": "L",
// 													"FAMILY_CLASSIF": "99005530"
// 											},
// 											{
// 													"ITEM_PROCESS_TYP": "SERVICE",
// 													"UNIT": "UN",
// 													"QUANTITY": 1.0,
// 													"NUM_MATERIAL": "70000058",
// 													"ITEM_DESC": "EPC COMPLEM ESCOPO DIESEL RPBC",
// 													"EXLIN": "8001.AA",
// 													"FAMILY": "99005530",
// 													"ITEM_NUM": "0000000001",
// 													"ITEM_NOTES": [],
// 													"FAMILY_DESCR": "",
// 													"DELIV_DATE": "2019-08-05",
// 													"GROUPING_LEVEL": "",
// 													"FAMILY_CLASSIF": "99005530"
// 											}
// 									],
// 									"AUC_START_TIME": "00:00:00",
// 									"STATUS_DESC": "Publicado",
// 									"PQ_VENDOR_LIST_DATE": "0000-00-00",
// 									"STATUS": "I1011",
// 									"POSTING_DATE": "2019-07-31",
// 									"ANEXOS": [
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 10",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297C8867E6E6A71",
// 													"FILE_NAME": "Anexo IX - Pacote 10.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 09",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297C4B715A96A6E",
// 													"FILE_NAME": "Anexo IX - Pacote 09.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 08",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297C2836B522A6E",
// 													"FILE_NAME": "Anexo IX - Pacote 08.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 07",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297BFDBB0D2AA69",
// 													"FILE_NAME": "Anexo IX - Pacote 07.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 06",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297BD32CD25AA69",
// 													"FILE_NAME": "Anexo IX - Pacote 06.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 05",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297BA3B1EC86A68",
// 													"FILE_NAME": "Anexo IX - Pacote 05.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 04",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297B7344B696A67",
// 													"FILE_NAME": "Anexo IX - Pacote 04.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 03",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297B308E367EA1B",
// 													"FILE_NAME": "Anexo IX - Pacote 03.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 02",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297AFEE0549EA19",
// 													"FILE_NAME": "Anexo IX - Pacote 02.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 01",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297AD74182FCA15",
// 													"FILE_NAME": "Anexo IX - Pacote 01.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 20",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297FFF181DF2BB6",
// 													"FILE_NAME": "Anexo IX - Pacote 20.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 19",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297FDE9CF68EBB1",
// 													"FILE_NAME": "Anexo IX - Pacote 19.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 18",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297F920D2712BAB",
// 													"FILE_NAME": "Anexo IX - Pacote 18.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 17",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297F6737255ABA7",
// 													"FILE_NAME": "Anexo IX - Pacote 17.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 16",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297F4908993EB5C",
// 													"FILE_NAME": "Anexo IX - Pacote 16.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 15",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297F1867536AB59",
// 													"FILE_NAME": "Anexo IX - Pacote 15.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 14A",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297EE39E0FE2B4C",
// 													"FILE_NAME": "Anexo IX - Pacote 14A.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 14",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297EC0D637CEB48",
// 													"FILE_NAME": "Anexo IX - Pacote 14.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 13",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297E552DD342B30",
// 													"FILE_NAME": "Anexo IX - Pacote 13.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 12",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297DEDF9A71EADD",
// 													"FILE_NAME": "Anexo IX - Pacote 12.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 11",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297D7B15D34EAD2",
// 													"FILE_NAME": "Anexo IX - Pacote 11.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo K - DFP",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2985B05FB606D5E",
// 													"FILE_NAME": "AdendoK_DFP_ INDUSTRIAL_portugu_s_Ver.2 Rev.7.xlsm"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo L - Requisitos para Habilitacao",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2985FE1B4536D61",
// 													"FILE_NAME": "AdendoL_Requisitos_para_Habilitacao.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo M - INSTRUCOES MEMORIA DE CALCULO",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2986448AD54AD66",
// 													"FILE_NAME": "AdendoM - INSTRUCOES_PARA_MEMORIA_DE_CALCULO.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo N - Declaração Dispensa de Visita Tecnica",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29869661DD0ADBB",
// 													"FILE_NAME": "AdendoN_Declaracao Dispensa de Visita Tecnica.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo J - Planilha de preços - C - SobrComiss",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2985840BC162D5B",
// 													"FILE_NAME": "AdendoJ - Planilha de precos - C - SobrComiss revD.xlsx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo J - Planilha preços -B- Planilha Preços - Prest Serviços",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29855965FC2AD54",
// 													"FILE_NAME": "AdendoJ - Planilha de precos - B - Planilha Precos - Prestacao de Servicos RevB.xls"
// 											},
// 											{
// 													"DESCRIPTION": "Edital",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29826EBB1CCAC77",
// 													"FILE_NAME": "Edital Licitacao.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo B - Atestado de Visita Técnica",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2982A602C6BAC7C",
// 													"FILE_NAME": "AdendoB_Atestado de Visita Tecnica.doc"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo C - AtendimentoaoCE_GC_PRS",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2982D41EEE16C84",
// 													"FILE_NAME": "AdendoC_AtendimentoaoCE_GC_PRS.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo D - Elaboracao Independente de Proposta",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29830B045542C87",
// 													"FILE_NAME": "AdendoD_ElaboracaoIndependentedeProposta.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo E - Previa de Conformidade",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29833682F502C8A",
// 													"FILE_NAME": "AdendoE_PreviadeConformidade.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo F - Relacao Familiar Impedimento Servicos",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29836989D02EC8C",
// 													"FILE_NAME": "AdendoF_RelacaoFamiliar_Impedimento_Servicos.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo G - Declaracao de Atendimento aos Requisitos do Edital",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2983A70EE02ECE0",
// 													"FILE_NAME": "AdendoG_DeclaracaodeAtendimentoaosRequisitosdoEdita.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo H - Impedimentos Art38",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2983D76AA9CECE5",
// 													"FILE_NAME": "AdendoH_Impedimentos_Art38.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo I -  Impedimentos Art44",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29840CC5EACACE6",
// 													"FILE_NAME": "AdendoI_Impedimentos_Art44.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo J - Planilha de preços - A - Resumo Geral",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2985007396EAD45",
// 													"FILE_NAME": "AdendoJ - Planilha de precos - A - Resumo Geral_Rev C.xls"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo 3 B - Adendo L - TEC-SMS",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B298A2CE7CA3EE95",
// 													"FILE_NAME": "Anexo 3 B - Adendo L - CEP TEC-SMS.DOCX"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo 3 A - Adendo L - CRITÉRIO TÉCNICO",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2989CBFC2A9EE91",
// 													"FILE_NAME": "Anexo 3 A -Adendo L - 99005530_CRITERIO TECNICO_Tecnico.DOCX"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo 2 - Adendo L - CRITÉRIO ECONÔMICO",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29899FCD362AE8A",
// 													"FILE_NAME": "Anexo 2 - Adendo L - CEP - CRITERIO ECONOMICO_V3_Economico.DOCX"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo 1 - Adendo L - CRITÉRIO LEGAL",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2989585D267EE87",
// 													"FILE_NAME": "Anexo 1 - Adendo L -CEP - CRITERIO LEGAL_V2_Legal.DOCX"
// 											}
// 									],
// 									"DOU_PUBL_DATE": "2019-08-28",
// 									"END_HOUR": "12:00:00",
// 									"SUB_STATUS": "",
// 									"REGIONS": [
// 											{
// 													"COUNTRY": "BR",
// 													"REGION_DESCRIPTION": "São Paulo",
// 													"REGION": "SP"
// 											}
// 									],
// 									"DISPUTE_MODE": "02",
// 									"IS_EQUALIZED": "",
// 									"START_HOUR": "12:00:00",
// 									"COMPANY_DESC": "Petróleo Brasileiro S. A.",
// 									"LIMIT_IN_DAYS": 90,
// 									"OPPORT_TYPE": "LIDT",
// 									"DESC_DETAIL": "",
// 									"START_DATE": "2019-10-25",
// 									"COMPANY": "1000",
// 									"HAS_PREQUALIFIED": "",
// 									"AUC_START_DATE": "0000-00-00",
// 									"NAT_COVERAGE": "N",
// 									"OPPORT_NUM": "7002675575",
// 									"OPEN_HOUR": "12:00:00",
// 									"OPEN_DATE": "2019-10-30"
// 							}
// 					}            
// 					{
// 							"_index": "pne-licitacoes",
// 							"_type": "licitacao",
// 							"_id": "7002675575",
// 							"_score": 4.658954,
// 							"_source": {
// 									"DOU_NUM": "",
// 									"PQ_VENDOR_LIST_HOUR": "00:00:00",
// 									"OPPORT_DESCR": "COMPLEMENTO ESCOPO CARTEIRA DIESEL RPBC",
// 									"IS_PREQUALI": "",
// 									"END_DATE": "2019-10-30",
// 									"ITEMS": [
// 											{
// 													"ITEM_PROCESS_TYP": "OUTL",
// 													"UNIT": "UA",
// 													"QUANTITY": 1.0,
// 													"NUM_MATERIAL": "",
// 													"ITEM_DESC": "CONSTRUÇÃO CIVIL E MONT.INDUSTRIAL-C/MAT",
// 													"EXLIN": "8001",
// 													"FAMILY": "99005530",
// 													"ITEM_NUM": "0000009001",
// 													"ITEM_NOTES": [],
// 													"FAMILY_DESCR": "",
// 													"DELIV_DATE": "2019-08-05",
// 													"GROUPING_LEVEL": "L",
// 													"FAMILY_CLASSIF": "99005530"
// 											},
// 											{
// 													"ITEM_PROCESS_TYP": "SERVICE",
// 													"UNIT": "UN",
// 													"QUANTITY": 1.0,
// 													"NUM_MATERIAL": "70000058",
// 													"ITEM_DESC": "EPC COMPLEM ESCOPO DIESEL RPBC",
// 													"EXLIN": "8001.AA",
// 													"FAMILY": "99005530",
// 													"ITEM_NUM": "0000000001",
// 													"ITEM_NOTES": [],
// 													"FAMILY_DESCR": "",
// 													"DELIV_DATE": "2019-08-05",
// 													"GROUPING_LEVEL": "",
// 													"FAMILY_CLASSIF": "99005530"
// 											}
// 									],
// 									"AUC_START_TIME": "00:00:00",
// 									"STATUS_DESC": "Publicado",
// 									"PQ_VENDOR_LIST_DATE": "0000-00-00",
// 									"STATUS": "I1011",
// 									"POSTING_DATE": "2019-07-31",
// 									"ANEXOS": [
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 10",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297C8867E6E6A71",
// 													"FILE_NAME": "Anexo IX - Pacote 10.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 09",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297C4B715A96A6E",
// 													"FILE_NAME": "Anexo IX - Pacote 09.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 08",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297C2836B522A6E",
// 													"FILE_NAME": "Anexo IX - Pacote 08.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 07",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297BFDBB0D2AA69",
// 													"FILE_NAME": "Anexo IX - Pacote 07.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 06",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297BD32CD25AA69",
// 													"FILE_NAME": "Anexo IX - Pacote 06.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 05",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297BA3B1EC86A68",
// 													"FILE_NAME": "Anexo IX - Pacote 05.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 04",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297B7344B696A67",
// 													"FILE_NAME": "Anexo IX - Pacote 04.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 03",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297B308E367EA1B",
// 													"FILE_NAME": "Anexo IX - Pacote 03.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 02",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297AFEE0549EA19",
// 													"FILE_NAME": "Anexo IX - Pacote 02.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 01",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297AD74182FCA15",
// 													"FILE_NAME": "Anexo IX - Pacote 01.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 20",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297FFF181DF2BB6",
// 													"FILE_NAME": "Anexo IX - Pacote 20.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 19",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297FDE9CF68EBB1",
// 													"FILE_NAME": "Anexo IX - Pacote 19.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 18",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297F920D2712BAB",
// 													"FILE_NAME": "Anexo IX - Pacote 18.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 17",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297F6737255ABA7",
// 													"FILE_NAME": "Anexo IX - Pacote 17.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 16",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297F4908993EB5C",
// 													"FILE_NAME": "Anexo IX - Pacote 16.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 15",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297F1867536AB59",
// 													"FILE_NAME": "Anexo IX - Pacote 15.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 14A",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297EE39E0FE2B4C",
// 													"FILE_NAME": "Anexo IX - Pacote 14A.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 14",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297EC0D637CEB48",
// 													"FILE_NAME": "Anexo IX - Pacote 14.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 13",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297E552DD342B30",
// 													"FILE_NAME": "Anexo IX - Pacote 13.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 12",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297DEDF9A71EADD",
// 													"FILE_NAME": "Anexo IX - Pacote 12.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 11",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297D7B15D34EAD2",
// 													"FILE_NAME": "Anexo IX - Pacote 11.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo K - DFP",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2985B05FB606D5E",
// 													"FILE_NAME": "AdendoK_DFP_ INDUSTRIAL_portugu_s_Ver.2 Rev.7.xlsm"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo L - Requisitos para Habilitacao",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2985FE1B4536D61",
// 													"FILE_NAME": "AdendoL_Requisitos_para_Habilitacao.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo M - INSTRUCOES MEMORIA DE CALCULO",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2986448AD54AD66",
// 													"FILE_NAME": "AdendoM - INSTRUCOES_PARA_MEMORIA_DE_CALCULO.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo N - Declaração Dispensa de Visita Tecnica",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29869661DD0ADBB",
// 													"FILE_NAME": "AdendoN_Declaracao Dispensa de Visita Tecnica.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo J - Planilha de preços - C - SobrComiss",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2985840BC162D5B",
// 													"FILE_NAME": "AdendoJ - Planilha de precos - C - SobrComiss revD.xlsx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo J - Planilha preços -B- Planilha Preços - Prest Serviços",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29855965FC2AD54",
// 													"FILE_NAME": "AdendoJ - Planilha de precos - B - Planilha Precos - Prestacao de Servicos RevB.xls"
// 											},
// 											{
// 													"DESCRIPTION": "Edital",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29826EBB1CCAC77",
// 													"FILE_NAME": "Edital Licitacao.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo B - Atestado de Visita Técnica",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2982A602C6BAC7C",
// 													"FILE_NAME": "AdendoB_Atestado de Visita Tecnica.doc"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo C - AtendimentoaoCE_GC_PRS",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2982D41EEE16C84",
// 													"FILE_NAME": "AdendoC_AtendimentoaoCE_GC_PRS.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo D - Elaboracao Independente de Proposta",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29830B045542C87",
// 													"FILE_NAME": "AdendoD_ElaboracaoIndependentedeProposta.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo E - Previa de Conformidade",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29833682F502C8A",
// 													"FILE_NAME": "AdendoE_PreviadeConformidade.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo F - Relacao Familiar Impedimento Servicos",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29836989D02EC8C",
// 													"FILE_NAME": "AdendoF_RelacaoFamiliar_Impedimento_Servicos.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo G - Declaracao de Atendimento aos Requisitos do Edital",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2983A70EE02ECE0",
// 													"FILE_NAME": "AdendoG_DeclaracaodeAtendimentoaosRequisitosdoEdita.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo H - Impedimentos Art38",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2983D76AA9CECE5",
// 													"FILE_NAME": "AdendoH_Impedimentos_Art38.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo I -  Impedimentos Art44",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29840CC5EACACE6",
// 													"FILE_NAME": "AdendoI_Impedimentos_Art44.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo J - Planilha de preços - A - Resumo Geral",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2985007396EAD45",
// 													"FILE_NAME": "AdendoJ - Planilha de precos - A - Resumo Geral_Rev C.xls"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo 3 B - Adendo L - TEC-SMS",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B298A2CE7CA3EE95",
// 													"FILE_NAME": "Anexo 3 B - Adendo L - CEP TEC-SMS.DOCX"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo 3 A - Adendo L - CRITÉRIO TÉCNICO",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2989CBFC2A9EE91",
// 													"FILE_NAME": "Anexo 3 A -Adendo L - 99005530_CRITERIO TECNICO_Tecnico.DOCX"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo 2 - Adendo L - CRITÉRIO ECONÔMICO",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29899FCD362AE8A",
// 													"FILE_NAME": "Anexo 2 - Adendo L - CEP - CRITERIO ECONOMICO_V3_Economico.DOCX"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo 1 - Adendo L - CRITÉRIO LEGAL",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2989585D267EE87",
// 													"FILE_NAME": "Anexo 1 - Adendo L -CEP - CRITERIO LEGAL_V2_Legal.DOCX"
// 											}
// 									],
// 									"DOU_PUBL_DATE": "2019-08-28",
// 									"END_HOUR": "12:00:00",
// 									"SUB_STATUS": "",
// 									"REGIONS": [
// 											{
// 													"COUNTRY": "BR",
// 													"REGION_DESCRIPTION": "São Paulo",
// 													"REGION": "SP"
// 											}
// 									],
// 									"DISPUTE_MODE": "02",
// 									"IS_EQUALIZED": "",
// 									"START_HOUR": "12:00:00",
// 									"COMPANY_DESC": "Petróleo Brasileiro S. A.",
// 									"LIMIT_IN_DAYS": 90,
// 									"OPPORT_TYPE": "LIDT",
// 									"DESC_DETAIL": "",
// 									"START_DATE": "2019-10-25",
// 									"COMPANY": "1000",
// 									"HAS_PREQUALIFIED": "",
// 									"AUC_START_DATE": "0000-00-00",
// 									"NAT_COVERAGE": "N",
// 									"OPPORT_NUM": "7002675575",
// 									"OPEN_HOUR": "12:00:00",
// 									"OPEN_DATE": "2019-10-30"
// 							}
// 					}            
// 					{
// 							"_index": "pne-licitacoes",
// 							"_type": "licitacao",
// 							"_id": "7002675575",
// 							"_score": 4.658954,
// 							"_source": {
// 									"DOU_NUM": "",
// 									"PQ_VENDOR_LIST_HOUR": "00:00:00",
// 									"OPPORT_DESCR": "COMPLEMENTO ESCOPO CARTEIRA DIESEL RPBC",
// 									"IS_PREQUALI": "",
// 									"END_DATE": "2019-10-30",
// 									"ITEMS": [
// 											{
// 													"ITEM_PROCESS_TYP": "OUTL",
// 													"UNIT": "UA",
// 													"QUANTITY": 1.0,
// 													"NUM_MATERIAL": "",
// 													"ITEM_DESC": "CONSTRUÇÃO CIVIL E MONT.INDUSTRIAL-C/MAT",
// 													"EXLIN": "8001",
// 													"FAMILY": "99005530",
// 													"ITEM_NUM": "0000009001",
// 													"ITEM_NOTES": [],
// 													"FAMILY_DESCR": "",
// 													"DELIV_DATE": "2019-08-05",
// 													"GROUPING_LEVEL": "L",
// 													"FAMILY_CLASSIF": "99005530"
// 											},
// 											{
// 													"ITEM_PROCESS_TYP": "SERVICE",
// 													"UNIT": "UN",
// 													"QUANTITY": 1.0,
// 													"NUM_MATERIAL": "70000058",
// 													"ITEM_DESC": "EPC COMPLEM ESCOPO DIESEL RPBC",
// 													"EXLIN": "8001.AA",
// 													"FAMILY": "99005530",
// 													"ITEM_NUM": "0000000001",
// 													"ITEM_NOTES": [],
// 													"FAMILY_DESCR": "",
// 													"DELIV_DATE": "2019-08-05",
// 													"GROUPING_LEVEL": "",
// 													"FAMILY_CLASSIF": "99005530"
// 											}
// 									],
// 									"AUC_START_TIME": "00:00:00",
// 									"STATUS_DESC": "Publicado",
// 									"PQ_VENDOR_LIST_DATE": "0000-00-00",
// 									"STATUS": "I1011",
// 									"POSTING_DATE": "2019-07-31",
// 									"ANEXOS": [
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 10",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297C8867E6E6A71",
// 													"FILE_NAME": "Anexo IX - Pacote 10.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 09",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297C4B715A96A6E",
// 													"FILE_NAME": "Anexo IX - Pacote 09.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 08",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297C2836B522A6E",
// 													"FILE_NAME": "Anexo IX - Pacote 08.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 07",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297BFDBB0D2AA69",
// 													"FILE_NAME": "Anexo IX - Pacote 07.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 06",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297BD32CD25AA69",
// 													"FILE_NAME": "Anexo IX - Pacote 06.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 05",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297BA3B1EC86A68",
// 													"FILE_NAME": "Anexo IX - Pacote 05.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 04",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297B7344B696A67",
// 													"FILE_NAME": "Anexo IX - Pacote 04.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 03",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297B308E367EA1B",
// 													"FILE_NAME": "Anexo IX - Pacote 03.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 02",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297AFEE0549EA19",
// 													"FILE_NAME": "Anexo IX - Pacote 02.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 01",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297AD74182FCA15",
// 													"FILE_NAME": "Anexo IX - Pacote 01.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 20",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297FFF181DF2BB6",
// 													"FILE_NAME": "Anexo IX - Pacote 20.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 19",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297FDE9CF68EBB1",
// 													"FILE_NAME": "Anexo IX - Pacote 19.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 18",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297F920D2712BAB",
// 													"FILE_NAME": "Anexo IX - Pacote 18.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 17",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297F6737255ABA7",
// 													"FILE_NAME": "Anexo IX - Pacote 17.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 16",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297F4908993EB5C",
// 													"FILE_NAME": "Anexo IX - Pacote 16.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 15",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297F1867536AB59",
// 													"FILE_NAME": "Anexo IX - Pacote 15.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 14A",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297EE39E0FE2B4C",
// 													"FILE_NAME": "Anexo IX - Pacote 14A.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 14",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297EC0D637CEB48",
// 													"FILE_NAME": "Anexo IX - Pacote 14.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 13",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297E552DD342B30",
// 													"FILE_NAME": "Anexo IX - Pacote 13.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 12",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297DEDF9A71EADD",
// 													"FILE_NAME": "Anexo IX - Pacote 12.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 11",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297D7B15D34EAD2",
// 													"FILE_NAME": "Anexo IX - Pacote 11.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo K - DFP",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2985B05FB606D5E",
// 													"FILE_NAME": "AdendoK_DFP_ INDUSTRIAL_portugu_s_Ver.2 Rev.7.xlsm"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo L - Requisitos para Habilitacao",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2985FE1B4536D61",
// 													"FILE_NAME": "AdendoL_Requisitos_para_Habilitacao.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo M - INSTRUCOES MEMORIA DE CALCULO",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2986448AD54AD66",
// 													"FILE_NAME": "AdendoM - INSTRUCOES_PARA_MEMORIA_DE_CALCULO.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo N - Declaração Dispensa de Visita Tecnica",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29869661DD0ADBB",
// 													"FILE_NAME": "AdendoN_Declaracao Dispensa de Visita Tecnica.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo J - Planilha de preços - C - SobrComiss",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2985840BC162D5B",
// 													"FILE_NAME": "AdendoJ - Planilha de precos - C - SobrComiss revD.xlsx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo J - Planilha preços -B- Planilha Preços - Prest Serviços",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29855965FC2AD54",
// 													"FILE_NAME": "AdendoJ - Planilha de precos - B - Planilha Precos - Prestacao de Servicos RevB.xls"
// 											},
// 											{
// 													"DESCRIPTION": "Edital",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29826EBB1CCAC77",
// 													"FILE_NAME": "Edital Licitacao.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo B - Atestado de Visita Técnica",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2982A602C6BAC7C",
// 													"FILE_NAME": "AdendoB_Atestado de Visita Tecnica.doc"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo C - AtendimentoaoCE_GC_PRS",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2982D41EEE16C84",
// 													"FILE_NAME": "AdendoC_AtendimentoaoCE_GC_PRS.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo D - Elaboracao Independente de Proposta",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29830B045542C87",
// 													"FILE_NAME": "AdendoD_ElaboracaoIndependentedeProposta.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo E - Previa de Conformidade",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29833682F502C8A",
// 													"FILE_NAME": "AdendoE_PreviadeConformidade.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo F - Relacao Familiar Impedimento Servicos",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29836989D02EC8C",
// 													"FILE_NAME": "AdendoF_RelacaoFamiliar_Impedimento_Servicos.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo G - Declaracao de Atendimento aos Requisitos do Edital",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2983A70EE02ECE0",
// 													"FILE_NAME": "AdendoG_DeclaracaodeAtendimentoaosRequisitosdoEdita.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo H - Impedimentos Art38",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2983D76AA9CECE5",
// 													"FILE_NAME": "AdendoH_Impedimentos_Art38.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo I -  Impedimentos Art44",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29840CC5EACACE6",
// 													"FILE_NAME": "AdendoI_Impedimentos_Art44.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo J - Planilha de preços - A - Resumo Geral",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2985007396EAD45",
// 													"FILE_NAME": "AdendoJ - Planilha de precos - A - Resumo Geral_Rev C.xls"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo 3 B - Adendo L - TEC-SMS",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B298A2CE7CA3EE95",
// 													"FILE_NAME": "Anexo 3 B - Adendo L - CEP TEC-SMS.DOCX"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo 3 A - Adendo L - CRITÉRIO TÉCNICO",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2989CBFC2A9EE91",
// 													"FILE_NAME": "Anexo 3 A -Adendo L - 99005530_CRITERIO TECNICO_Tecnico.DOCX"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo 2 - Adendo L - CRITÉRIO ECONÔMICO",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29899FCD362AE8A",
// 													"FILE_NAME": "Anexo 2 - Adendo L - CEP - CRITERIO ECONOMICO_V3_Economico.DOCX"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo 1 - Adendo L - CRITÉRIO LEGAL",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2989585D267EE87",
// 													"FILE_NAME": "Anexo 1 - Adendo L -CEP - CRITERIO LEGAL_V2_Legal.DOCX"
// 											}
// 									],
// 									"DOU_PUBL_DATE": "2019-08-28",
// 									"END_HOUR": "12:00:00",
// 									"SUB_STATUS": "",
// 									"REGIONS": [
// 											{
// 													"COUNTRY": "BR",
// 													"REGION_DESCRIPTION": "São Paulo",
// 													"REGION": "SP"
// 											}
// 									],
// 									"DISPUTE_MODE": "02",
// 									"IS_EQUALIZED": "",
// 									"START_HOUR": "12:00:00",
// 									"COMPANY_DESC": "Petróleo Brasileiro S. A.",
// 									"LIMIT_IN_DAYS": 90,
// 									"OPPORT_TYPE": "LIDT",
// 									"DESC_DETAIL": "",
// 									"START_DATE": "2019-10-25",
// 									"COMPANY": "1000",
// 									"HAS_PREQUALIFIED": "",
// 									"AUC_START_DATE": "0000-00-00",
// 									"NAT_COVERAGE": "N",
// 									"OPPORT_NUM": "7002675575",
// 									"OPEN_HOUR": "12:00:00",
// 									"OPEN_DATE": "2019-10-30"
// 							}
// 					}            
// 					{
// 							"_index": "pne-licitacoes",
// 							"_type": "licitacao",
// 							"_id": "7002675575",
// 							"_score": 4.658954,
// 							"_source": {
// 									"DOU_NUM": "",
// 									"PQ_VENDOR_LIST_HOUR": "00:00:00",
// 									"OPPORT_DESCR": "COMPLEMENTO ESCOPO CARTEIRA DIESEL RPBC",
// 									"IS_PREQUALI": "",
// 									"END_DATE": "2019-10-30",
// 									"ITEMS": [
// 											{
// 													"ITEM_PROCESS_TYP": "OUTL",
// 													"UNIT": "UA",
// 													"QUANTITY": 1.0,
// 													"NUM_MATERIAL": "",
// 													"ITEM_DESC": "CONSTRUÇÃO CIVIL E MONT.INDUSTRIAL-C/MAT",
// 													"EXLIN": "8001",
// 													"FAMILY": "99005530",
// 													"ITEM_NUM": "0000009001",
// 													"ITEM_NOTES": [],
// 													"FAMILY_DESCR": "",
// 													"DELIV_DATE": "2019-08-05",
// 													"GROUPING_LEVEL": "L",
// 													"FAMILY_CLASSIF": "99005530"
// 											},
// 											{
// 													"ITEM_PROCESS_TYP": "SERVICE",
// 													"UNIT": "UN",
// 													"QUANTITY": 1.0,
// 													"NUM_MATERIAL": "70000058",
// 													"ITEM_DESC": "EPC COMPLEM ESCOPO DIESEL RPBC",
// 													"EXLIN": "8001.AA",
// 													"FAMILY": "99005530",
// 													"ITEM_NUM": "0000000001",
// 													"ITEM_NOTES": [],
// 													"FAMILY_DESCR": "",
// 													"DELIV_DATE": "2019-08-05",
// 													"GROUPING_LEVEL": "",
// 													"FAMILY_CLASSIF": "99005530"
// 											}
// 									],
// 									"AUC_START_TIME": "00:00:00",
// 									"STATUS_DESC": "Publicado",
// 									"PQ_VENDOR_LIST_DATE": "0000-00-00",
// 									"STATUS": "I1011",
// 									"POSTING_DATE": "2019-07-31",
// 									"ANEXOS": [
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 10",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297C8867E6E6A71",
// 													"FILE_NAME": "Anexo IX - Pacote 10.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 09",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297C4B715A96A6E",
// 													"FILE_NAME": "Anexo IX - Pacote 09.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 08",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297C2836B522A6E",
// 													"FILE_NAME": "Anexo IX - Pacote 08.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 07",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297BFDBB0D2AA69",
// 													"FILE_NAME": "Anexo IX - Pacote 07.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 06",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297BD32CD25AA69",
// 													"FILE_NAME": "Anexo IX - Pacote 06.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 05",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297BA3B1EC86A68",
// 													"FILE_NAME": "Anexo IX - Pacote 05.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 04",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297B7344B696A67",
// 													"FILE_NAME": "Anexo IX - Pacote 04.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 03",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297B308E367EA1B",
// 													"FILE_NAME": "Anexo IX - Pacote 03.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 02",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297AFEE0549EA19",
// 													"FILE_NAME": "Anexo IX - Pacote 02.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 01",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297AD74182FCA15",
// 													"FILE_NAME": "Anexo IX - Pacote 01.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 20",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297FFF181DF2BB6",
// 													"FILE_NAME": "Anexo IX - Pacote 20.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 19",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297FDE9CF68EBB1",
// 													"FILE_NAME": "Anexo IX - Pacote 19.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 18",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297F920D2712BAB",
// 													"FILE_NAME": "Anexo IX - Pacote 18.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 17",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297F6737255ABA7",
// 													"FILE_NAME": "Anexo IX - Pacote 17.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 16",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297F4908993EB5C",
// 													"FILE_NAME": "Anexo IX - Pacote 16.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 15",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297F1867536AB59",
// 													"FILE_NAME": "Anexo IX - Pacote 15.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 14A",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297EE39E0FE2B4C",
// 													"FILE_NAME": "Anexo IX - Pacote 14A.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 14",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297EC0D637CEB48",
// 													"FILE_NAME": "Anexo IX - Pacote 14.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 13",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297E552DD342B30",
// 													"FILE_NAME": "Anexo IX - Pacote 13.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 12",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297DEDF9A71EADD",
// 													"FILE_NAME": "Anexo IX - Pacote 12.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 11",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297D7B15D34EAD2",
// 													"FILE_NAME": "Anexo IX - Pacote 11.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo K - DFP",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2985B05FB606D5E",
// 													"FILE_NAME": "AdendoK_DFP_ INDUSTRIAL_portugu_s_Ver.2 Rev.7.xlsm"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo L - Requisitos para Habilitacao",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2985FE1B4536D61",
// 													"FILE_NAME": "AdendoL_Requisitos_para_Habilitacao.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo M - INSTRUCOES MEMORIA DE CALCULO",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2986448AD54AD66",
// 													"FILE_NAME": "AdendoM - INSTRUCOES_PARA_MEMORIA_DE_CALCULO.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo N - Declaração Dispensa de Visita Tecnica",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29869661DD0ADBB",
// 													"FILE_NAME": "AdendoN_Declaracao Dispensa de Visita Tecnica.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo J - Planilha de preços - C - SobrComiss",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2985840BC162D5B",
// 													"FILE_NAME": "AdendoJ - Planilha de precos - C - SobrComiss revD.xlsx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo J - Planilha preços -B- Planilha Preços - Prest Serviços",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29855965FC2AD54",
// 													"FILE_NAME": "AdendoJ - Planilha de precos - B - Planilha Precos - Prestacao de Servicos RevB.xls"
// 											},
// 											{
// 													"DESCRIPTION": "Edital",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29826EBB1CCAC77",
// 													"FILE_NAME": "Edital Licitacao.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo B - Atestado de Visita Técnica",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2982A602C6BAC7C",
// 													"FILE_NAME": "AdendoB_Atestado de Visita Tecnica.doc"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo C - AtendimentoaoCE_GC_PRS",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2982D41EEE16C84",
// 													"FILE_NAME": "AdendoC_AtendimentoaoCE_GC_PRS.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo D - Elaboracao Independente de Proposta",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29830B045542C87",
// 													"FILE_NAME": "AdendoD_ElaboracaoIndependentedeProposta.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo E - Previa de Conformidade",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29833682F502C8A",
// 													"FILE_NAME": "AdendoE_PreviadeConformidade.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo F - Relacao Familiar Impedimento Servicos",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29836989D02EC8C",
// 													"FILE_NAME": "AdendoF_RelacaoFamiliar_Impedimento_Servicos.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo G - Declaracao de Atendimento aos Requisitos do Edital",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2983A70EE02ECE0",
// 													"FILE_NAME": "AdendoG_DeclaracaodeAtendimentoaosRequisitosdoEdita.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo H - Impedimentos Art38",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2983D76AA9CECE5",
// 													"FILE_NAME": "AdendoH_Impedimentos_Art38.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo I -  Impedimentos Art44",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29840CC5EACACE6",
// 													"FILE_NAME": "AdendoI_Impedimentos_Art44.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo J - Planilha de preços - A - Resumo Geral",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2985007396EAD45",
// 													"FILE_NAME": "AdendoJ - Planilha de precos - A - Resumo Geral_Rev C.xls"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo 3 B - Adendo L - TEC-SMS",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B298A2CE7CA3EE95",
// 													"FILE_NAME": "Anexo 3 B - Adendo L - CEP TEC-SMS.DOCX"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo 3 A - Adendo L - CRITÉRIO TÉCNICO",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2989CBFC2A9EE91",
// 													"FILE_NAME": "Anexo 3 A -Adendo L - 99005530_CRITERIO TECNICO_Tecnico.DOCX"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo 2 - Adendo L - CRITÉRIO ECONÔMICO",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29899FCD362AE8A",
// 													"FILE_NAME": "Anexo 2 - Adendo L - CEP - CRITERIO ECONOMICO_V3_Economico.DOCX"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo 1 - Adendo L - CRITÉRIO LEGAL",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2989585D267EE87",
// 													"FILE_NAME": "Anexo 1 - Adendo L -CEP - CRITERIO LEGAL_V2_Legal.DOCX"
// 											}
// 									],
// 									"DOU_PUBL_DATE": "2019-08-28",
// 									"END_HOUR": "12:00:00",
// 									"SUB_STATUS": "",
// 									"REGIONS": [
// 											{
// 													"COUNTRY": "BR",
// 													"REGION_DESCRIPTION": "São Paulo",
// 													"REGION": "SP"
// 											}
// 									],
// 									"DISPUTE_MODE": "02",
// 									"IS_EQUALIZED": "",
// 									"START_HOUR": "12:00:00",
// 									"COMPANY_DESC": "Petróleo Brasileiro S. A.",
// 									"LIMIT_IN_DAYS": 90,
// 									"OPPORT_TYPE": "LIDT",
// 									"DESC_DETAIL": "",
// 									"START_DATE": "2019-10-25",
// 									"COMPANY": "1000",
// 									"HAS_PREQUALIFIED": "",
// 									"AUC_START_DATE": "0000-00-00",
// 									"NAT_COVERAGE": "N",
// 									"OPPORT_NUM": "7002675575",
// 									"OPEN_HOUR": "12:00:00",
// 									"OPEN_DATE": "2019-10-30"
// 							}
// 					}            
// 					{
// 							"_index": "pne-licitacoes",
// 							"_type": "licitacao",
// 							"_id": "7002675575",
// 							"_score": 4.658954,
// 							"_source": {
// 									"DOU_NUM": "",
// 									"PQ_VENDOR_LIST_HOUR": "00:00:00",
// 									"OPPORT_DESCR": "COMPLEMENTO ESCOPO CARTEIRA DIESEL RPBC",
// 									"IS_PREQUALI": "",
// 									"END_DATE": "2019-10-30",
// 									"ITEMS": [
// 											{
// 													"ITEM_PROCESS_TYP": "OUTL",
// 													"UNIT": "UA",
// 													"QUANTITY": 1.0,
// 													"NUM_MATERIAL": "",
// 													"ITEM_DESC": "CONSTRUÇÃO CIVIL E MONT.INDUSTRIAL-C/MAT",
// 													"EXLIN": "8001",
// 													"FAMILY": "99005530",
// 													"ITEM_NUM": "0000009001",
// 													"ITEM_NOTES": [],
// 													"FAMILY_DESCR": "",
// 													"DELIV_DATE": "2019-08-05",
// 													"GROUPING_LEVEL": "L",
// 													"FAMILY_CLASSIF": "99005530"
// 											},
// 											{
// 													"ITEM_PROCESS_TYP": "SERVICE",
// 													"UNIT": "UN",
// 													"QUANTITY": 1.0,
// 													"NUM_MATERIAL": "70000058",
// 													"ITEM_DESC": "EPC COMPLEM ESCOPO DIESEL RPBC",
// 													"EXLIN": "8001.AA",
// 													"FAMILY": "99005530",
// 													"ITEM_NUM": "0000000001",
// 													"ITEM_NOTES": [],
// 													"FAMILY_DESCR": "",
// 													"DELIV_DATE": "2019-08-05",
// 													"GROUPING_LEVEL": "",
// 													"FAMILY_CLASSIF": "99005530"
// 											}
// 									],
// 									"AUC_START_TIME": "00:00:00",
// 									"STATUS_DESC": "Publicado",
// 									"PQ_VENDOR_LIST_DATE": "0000-00-00",
// 									"STATUS": "I1011",
// 									"POSTING_DATE": "2019-07-31",
// 									"ANEXOS": [
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 10",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297C8867E6E6A71",
// 													"FILE_NAME": "Anexo IX - Pacote 10.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 09",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297C4B715A96A6E",
// 													"FILE_NAME": "Anexo IX - Pacote 09.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 08",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297C2836B522A6E",
// 													"FILE_NAME": "Anexo IX - Pacote 08.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 07",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297BFDBB0D2AA69",
// 													"FILE_NAME": "Anexo IX - Pacote 07.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 06",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297BD32CD25AA69",
// 													"FILE_NAME": "Anexo IX - Pacote 06.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 05",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297BA3B1EC86A68",
// 													"FILE_NAME": "Anexo IX - Pacote 05.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 04",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297B7344B696A67",
// 													"FILE_NAME": "Anexo IX - Pacote 04.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 03",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297B308E367EA1B",
// 													"FILE_NAME": "Anexo IX - Pacote 03.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 02",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297AFEE0549EA19",
// 													"FILE_NAME": "Anexo IX - Pacote 02.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 01",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297AD74182FCA15",
// 													"FILE_NAME": "Anexo IX - Pacote 01.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 20",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297FFF181DF2BB6",
// 													"FILE_NAME": "Anexo IX - Pacote 20.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 19",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297FDE9CF68EBB1",
// 													"FILE_NAME": "Anexo IX - Pacote 19.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 18",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297F920D2712BAB",
// 													"FILE_NAME": "Anexo IX - Pacote 18.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 17",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297F6737255ABA7",
// 													"FILE_NAME": "Anexo IX - Pacote 17.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 16",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297F4908993EB5C",
// 													"FILE_NAME": "Anexo IX - Pacote 16.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 15",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297F1867536AB59",
// 													"FILE_NAME": "Anexo IX - Pacote 15.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 14A",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297EE39E0FE2B4C",
// 													"FILE_NAME": "Anexo IX - Pacote 14A.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 14",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297EC0D637CEB48",
// 													"FILE_NAME": "Anexo IX - Pacote 14.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 13",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297E552DD342B30",
// 													"FILE_NAME": "Anexo IX - Pacote 13.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 12",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297DEDF9A71EADD",
// 													"FILE_NAME": "Anexo IX - Pacote 12.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo IX - Pacote 11",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B297D7B15D34EAD2",
// 													"FILE_NAME": "Anexo IX - Pacote 11.zip"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo K - DFP",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2985B05FB606D5E",
// 													"FILE_NAME": "AdendoK_DFP_ INDUSTRIAL_portugu_s_Ver.2 Rev.7.xlsm"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo L - Requisitos para Habilitacao",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2985FE1B4536D61",
// 													"FILE_NAME": "AdendoL_Requisitos_para_Habilitacao.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo M - INSTRUCOES MEMORIA DE CALCULO",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2986448AD54AD66",
// 													"FILE_NAME": "AdendoM - INSTRUCOES_PARA_MEMORIA_DE_CALCULO.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo N - Declaração Dispensa de Visita Tecnica",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29869661DD0ADBB",
// 													"FILE_NAME": "AdendoN_Declaracao Dispensa de Visita Tecnica.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo J - Planilha de preços - C - SobrComiss",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2985840BC162D5B",
// 													"FILE_NAME": "AdendoJ - Planilha de precos - C - SobrComiss revD.xlsx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo J - Planilha preços -B- Planilha Preços - Prest Serviços",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29855965FC2AD54",
// 													"FILE_NAME": "AdendoJ - Planilha de precos - B - Planilha Precos - Prestacao de Servicos RevB.xls"
// 											},
// 											{
// 													"DESCRIPTION": "Edital",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29826EBB1CCAC77",
// 													"FILE_NAME": "Edital Licitacao.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo B - Atestado de Visita Técnica",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2982A602C6BAC7C",
// 													"FILE_NAME": "AdendoB_Atestado de Visita Tecnica.doc"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo C - AtendimentoaoCE_GC_PRS",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2982D41EEE16C84",
// 													"FILE_NAME": "AdendoC_AtendimentoaoCE_GC_PRS.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo D - Elaboracao Independente de Proposta",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29830B045542C87",
// 													"FILE_NAME": "AdendoD_ElaboracaoIndependentedeProposta.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo E - Previa de Conformidade",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29833682F502C8A",
// 													"FILE_NAME": "AdendoE_PreviadeConformidade.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo F - Relacao Familiar Impedimento Servicos",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29836989D02EC8C",
// 													"FILE_NAME": "AdendoF_RelacaoFamiliar_Impedimento_Servicos.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo G - Declaracao de Atendimento aos Requisitos do Edital",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2983A70EE02ECE0",
// 													"FILE_NAME": "AdendoG_DeclaracaodeAtendimentoaosRequisitosdoEdita.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo H - Impedimentos Art38",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2983D76AA9CECE5",
// 													"FILE_NAME": "AdendoH_Impedimentos_Art38.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo I -  Impedimentos Art44",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29840CC5EACACE6",
// 													"FILE_NAME": "AdendoI_Impedimentos_Art44.docx"
// 											},
// 											{
// 													"DESCRIPTION": "Adendo J - Planilha de preços - A - Resumo Geral",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2985007396EAD45",
// 													"FILE_NAME": "AdendoJ - Planilha de precos - A - Resumo Geral_Rev C.xls"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo 3 B - Adendo L - TEC-SMS",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B298A2CE7CA3EE95",
// 													"FILE_NAME": "Anexo 3 B - Adendo L - CEP TEC-SMS.DOCX"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo 3 A - Adendo L - CRITÉRIO TÉCNICO",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2989CBFC2A9EE91",
// 													"FILE_NAME": "Anexo 3 A -Adendo L - 99005530_CRITERIO TECNICO_Tecnico.DOCX"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo 2 - Adendo L - CRITÉRIO ECONÔMICO",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B29899FCD362AE8A",
// 													"FILE_NAME": "Anexo 2 - Adendo L - CEP - CRITERIO ECONOMICO_V3_Economico.DOCX"
// 											},
// 											{
// 													"DESCRIPTION": "Anexo 1 - Adendo L - CRITÉRIO LEGAL",
// 													"PHIO_OBJID": "0025B507B3CF1EE9B2989585D267EE87",
// 													"FILE_NAME": "Anexo 1 - Adendo L -CEP - CRITERIO LEGAL_V2_Legal.DOCX"
// 											}
// 									],
// 									"DOU_PUBL_DATE": "2019-08-28",
// 									"END_HOUR": "12:00:00",
// 									"SUB_STATUS": "",
// 									"REGIONS": [
// 											{
// 													"COUNTRY": "BR",
// 													"REGION_DESCRIPTION": "São Paulo",
// 													"REGION": "SP"
// 											}
// 									],
// 									"DISPUTE_MODE": "02",
// 									"IS_EQUALIZED": "",
// 									"START_HOUR": "12:00:00",
// 									"COMPANY_DESC": "Petróleo Brasileiro S. A.",
// 									"LIMIT_IN_DAYS": 90,
// 									"OPPORT_TYPE": "LIDT",
// 									"DESC_DETAIL": "",
// 									"START_DATE": "2019-10-25",
// 									"COMPANY": "1000",
// 									"HAS_PREQUALIFIED": "",
// 									"AUC_START_DATE": "0000-00-00",
// 									"NAT_COVERAGE": "N",
// 									"OPPORT_NUM": "7002675575",
// 									"OPEN_HOUR": "12:00:00",
// 									"OPEN_DATE": "2019-10-30"
// 							}
// 					}        ]
// 	}
// }