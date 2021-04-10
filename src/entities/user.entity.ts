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

  @Column({ 
    name: 'email',
    type: 'varchar',
    unique: true,
    nullable: false
  })

  @Column({
    name: 'keySecret',
    type: 'varchar',
    nullable: false
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

  //Relacion con tabla 'tag'
  @OneToMany(type => Tag, tag => tag.user)
  tag: Tag[];

}