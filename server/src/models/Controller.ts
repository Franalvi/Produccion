import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";

@Entity()
export class Controller extends BaseEntity{
    
    @PrimaryGeneratedColumn()
    CTRL_ID?:number;

    @Column()
    CTRL_Name?:string;

    @Column()
    CTRL_IPAddress?:string;

    @Column()
    CTRL_Type?:number;

    @Column()
    CTRL_WorkingAreaId?:number;

    @Column()
    CTRL_Version?:number;

    /* @Column()
    CTRL_REMOVE_DATE?:Date; */
}