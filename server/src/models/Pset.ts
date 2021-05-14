import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";


@Entity()
export class PSET extends BaseEntity{

    @PrimaryGeneratedColumn()
    PS_ID?:number;
    @Column()
    PS_Number?:number;
    @Column()
    PS_TorqueUnit?:number;
    @Column()
    PS_TighteningUnitId?:number;
    @Column()
    PS_Comment?:string;
    @Column()
    PS_Version?:number;

}