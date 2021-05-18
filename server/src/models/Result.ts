import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Controller } from "./Controller";
import { PSET } from "./Pset";


@Entity()
export class Result extends BaseEntity{

    @PrimaryGeneratedColumn()
    RES_ID?:number;
    @Column()
    RES_TuId?:number;
    @Column()
    RES_StepId?:number;
    @Column()
    RES_ToolId?:number;
    @Column()
    RES_ResultNumber?:number;
    @Column()
    RES_SpindleGroupID?:number;
    @Column()
    RES_SubSpindleGroupID?:number;
    @Column()
    RES_SpindleNumber?:number;
    @Column()
    RES_StepNumber?:number;
    @Column()
    RES_RecordType?:number;
    @Column()
    RES_IsHeader?:number;
    @Column()
    RES_IsCurve?:number;
    @Column()
    RES_SpindleCount?:number;
    @Column()
    RES_ControllerSerialNumber?:string;
    @Column()
    RES_CableSerialNumber?:string;
    @Column()
    RES_Report?:string;
    @Column()
    RES_VIN?:string;
    @Column()
    RES_APGUID?:string;
    @Column()
    RES_APNumber?:number;
    @Column()
    RES_CycleOKProgrammed?:number;
    @Column()
    RES_CycleOKCount?:number;
    @Column()
    RES_DateTime?:number;
    @Column()
    RES_Time?:number;
    @Column()
    RES_DayOfWeek?:number;
    @Column()
    RES_FloatValueCoef?:number;
    @Column()
    RES_BoltNumber?:string;
    @Column()
    RES_CVILOGIX?:string;
    @Column()
    RES_ErrorCode?:number;
    @Column()
    RES_StopSource?:number;
    @Column()
    RES_ServoDriveError?:number;
    @Column()
    RES_TorqueAccuracy?:number;
    @Column()
    RES_FinalTorque?:number;
    @Column()
    RES_TorqueTrend?:number;
    @Column()
    RES_FinalAngle?:number;
    @Column()
    RES_AngleTrend?:number;
    @Column()
    RES_FinalTorqueRate?:number;
    @Column()
    RES_TorqueRateTrend?:number;
    @Column()
    RES_MinCurrent?:number;
    @Column()
    RES_MaxCurrent?:number;
    @Column()
    RES_FinalCurrent?:number;
    @Column()
    RES_CurrentTrend?:number;
    @Column()
    RES_MonitoringType?:number;
    @Column()
    RES_Monitoring1Trend?:number;
    @Column()
    RES_Monitoring2Trend?:number;
    @Column()
    RES_SecondTorqueTrend?:number;
    @Column()
    RES_SecondAngleTrend?:number;
    @Column()
    RES_UserComment?:string;
    @Column()
    RES_InfTorque?:number;
    @Column()
    RES_SupTorque?:number;
    @Column()
    RES_ToolSpeed?:number;
    @Column()
    RES_TorqueOffset?:number;
    @Column()
    RES_LabelIdentifier1?:string;
    @Column()
    RES_ValueIdentifier1?:string;
    @Column()
    RES_LabelIdentifier2?:string;
    @Column()
    RES_ValueIdentifier2?:string;
    @Column()
    RES_LabelIdentifier3?:string;
    @Column()
    RES_ValueIdentifier3?:string;
    @Column()
    RES_LabelIdentifier4?:string;
    @Column()
    RES_ValueIdentifier4?:string;
    @Column()
    RES_LabelIdentifier5?:string;
    @Column()
    RES_ValueIdentifier5?:string;
    @Column()
    RES_LabelIdentifier6?:string;
    @Column()
    RES_ValueIdentifier6?:string;
    @Column()
    RES_LabelIdentifier7?:string;
    @Column()
    RES_ValueIdentifier7?:string;
    @Column()
    RES_LabelIdentifier8?:string;
    @Column()
    RES_ValueIdentifier8?:string;
    @Column()
    RES_LabelIdentifier9?:string;
    @Column()
    RES_ValueIdentifier9?:string;
    @Column()
    RES_LabelIdentifier10?:string;
    @Column()
    RES_ValueIdentifier10?:string;
    @Column()
    RES_BACKUP?:number;
    // @Column()
    // RES_ResultTypeId?:number;
    // @Column()
    // RES_FinalCurrent_Percent?:number;
    // @Column()
    // RES_MinCurrent_Percent?:number;
    // @Column()
    // RES_MaxCurrent_Percent?:number;
    // @Column()
    // RES_SecondFinalAngle?:number;
    // @Column()
    // RES_SecondFinalTorque?:number;
    // @Column()
    // RES_IsAggregation?:number;
    // @Column()
    // RES_IsAggregationTool?:number;
    // @Column()
    // RES_SecondTransducerMode?:number;
    // @Column()
    // RES_SecondTransducer_TorqueDev?:number;
    // @Column()
    // RES_SecondTransducer_AngleDev?:number;
    // @Column()
    // RES_StepNumberDiscriminant?:number;
    // @Column()
    // RES_TuType?:number;
    // @Column()
    // RES_Gyro_Compensation_Angle?:number;
/*     @Column()
    RES_ControllerId?: number; //El error viene de aquí. Concretamente del RES_ControllerId.

    @Column()
    RES_PsetId?: number; */


    @ManyToOne(Type => Controller, Controller => Controller.CTRL_ID)
    RES_ControllerId?: number; //El error viene de aquí. Concretamente del RES_ControllerId.

    @ManyToOne(Type => PSET, Pset => Pset.PS_ID)
    RES_PsetId?: number;
    
} 

// 74
// 87
