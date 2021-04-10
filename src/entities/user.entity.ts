import { type } from 'os'
import { enumState } from 'src/Utils/enums';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, Timestamp } from 'typeorm'
import { Tag } from './tag.entity';

@Entity('user')
export class User {

  @PrimaryGeneratedColumn('increment')
  id_user: Number;

  @Column({
    type: 'varchar', 
    name: 'name', 
    nullable: false
  })
  name:string

  @Column({ 
    name: 'email',
    type: 'varchar',
    unique: true,
    nullable: false
  })
  email:string

  @Column({
    name: 'keySecret',
    type: 'varchar',
    nullable: false
  })
  keySecret:string

  @Column({
    type: 'enum', 
    enum: enumState, 
    name: 'state',
    default: enumState.ENABLE
  })
  state:enumState

  @Column({
    name: 'created_at',
    type: 'timestamp',
    nullable: false
  })
  created_at: Date

  @Column({
    name: 'update_at',
    type: 'timestamp',
    nullable: true
  })
  update_at: Date

  //Relacion con tabla 'tag'
  @OneToMany(type => Tag, tag => tag.user)
  tag: Tag[];

}