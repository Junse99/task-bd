import { type } from 'os'
import { enumState, statusTask } from 'src/Utils/enums';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, Timestamp } from 'typeorm'
import { TagTask } from './tagTask.entity';

@Entity('task')
export class Task {

  @PrimaryGeneratedColumn('increment')
  id_task: Number;

  @Column({
    name: 'name',
    type: 'varchar',
    nullable: false
  })

  @Column({
    name: 'description',
    type: 'varchar',
    nullable: true
  })

  @Column({
    type: 'enum', 
    enum: statusTask, 
    name: 'status'
  })

  @Column({
    type: 'enum', 
    enum: enumState, 
    name: 'state'
  })

  @Column({
    name: 'created_at',
    type: 'timestamp',
    nullable: false
  })

  @Column({
    name: 'update_at',
    type: 'timestamp',
    nullable: true
  })

  //Relacion con tabla 'tagTask'
  @OneToMany(type => TagTask, tagTask => tagTask.task)
  tagTask: TagTask[];
}