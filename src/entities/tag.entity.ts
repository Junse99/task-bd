import { type } from 'os'
import { enumState } from 'src/Utils/enums';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, Timestamp } from 'typeorm'
import { TagTask } from './tagTask.entity';
import { User } from './user.entity';

@Entity('tag')
export class Tag {

  @PrimaryGeneratedColumn('increment')
  id_tag: Number;

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

  //Relacion con tabla 'user'
  @ManyToOne(type=> User, user => user.tag)//Hace la relacion
  @JoinColumn({name:'fk_user'})//Crea la columna
  user: User;

  //Relacion con tabla 'TagTask'
  @OneToMany(type => TagTask, tagTask => tagTask.tag)
  tagTask: TagTask[];
}