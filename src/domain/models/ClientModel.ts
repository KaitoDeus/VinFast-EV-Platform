export interface ClientSpec {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  residenceCard: string;
  driverLicense: string;
  points: number;
  avatar?: string;
  selected?: boolean;
}

export class ClientModel implements ClientSpec {
  public readonly id: string;
  public readonly name: string;
  public readonly email: string;
  public readonly phone: string;
  public readonly address: string;
  public readonly residenceCard: string;
  public readonly driverLicense: string;
  public readonly points: number;
  public readonly avatar: string;
  public readonly selected: boolean;

  constructor(data: ClientSpec) {
    this.id = data.id;
    this.name = data.name;
    this.email = data.email;
    this.phone = data.phone;
    this.address = data.address;
    this.residenceCard = data.residenceCard || `${data.name.split(" ")[0]}'s Residence Card`;
    this.driverLicense = data.driverLicense || `${data.name.split(" ")[0]}'s License`;
    this.points = data.points;
    this.avatar = data.avatar || "/team/avatar-1.png";
    this.selected = data.selected || false;
  }

  public matchesQuery(query: string): boolean {
    if (!query) return true;
    const q = query.toLowerCase();
    return (
      this.id.toLowerCase().includes(q) ||
      this.name.toLowerCase().includes(q) ||
      this.email.toLowerCase().includes(q) ||
      this.phone.toLowerCase().includes(q) ||
      this.address.toLowerCase().includes(q)
    );
  }
}
