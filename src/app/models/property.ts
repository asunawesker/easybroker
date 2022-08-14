export interface IProperty {
  public_id: string
  title: string
  description: string
  location: ILocation
  operations: IOperation[]
  property_images: IPropertyImages[]
}

export interface ILocation {
  name: string
}

export interface IOperation {
  type: string
}

export interface IPropertyImages {
  url: string
}
