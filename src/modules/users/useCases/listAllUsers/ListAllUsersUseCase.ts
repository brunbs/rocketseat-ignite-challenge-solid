import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id);
    if(!user) {
      throw new Error('User not found!');
    }
    if(user.admin === true) {
      return this.usersRepository.list();
    } else {
      throw new Error('This user is not allowed to get this list')
    }
  }
}

export { ListAllUsersUseCase };
