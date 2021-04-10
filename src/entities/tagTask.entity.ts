import { type } from 'os'
import { enumState } from 'src/Utils/enums';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Timestamp } from 'typeorm'
import { Tag } from './tag.entity';
import { Task } from './task.entity';

@Entity('tagTask')
export class TagTask {

  @PrimaryGeneratedColumn('increment')
  id_tagTask: Number;

  @Column({
      type: 'enum', 
      enum: enumState, 
      name: 'state',
      nullable: false
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

  //Relacion con tabla 'tag'
  @ManyToOne(type=> Tag, tag => tag.tagTask)//Hace la relacion
  @JoinColumn({name:'fk_tag'})//Crea la columna
  tag: Tag;

  //Relacion con tabla 'task'
  @ManyToOne(type=> Task, task => task.tagTask)//Hace la relacion
  @JoinColumn({name:'fk_task'})//Crea la columna
  task: Task;
}