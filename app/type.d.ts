type Persona = {
    nombre: string
    apellido: string
    email: string
    cuit: string
}

type Usuario = {
    nombre: string
    apellido: string
    email: string
    cuit: string
    sub: string
    rol: string
}

type Apoderado= {
    nombre: string,
    apellido: string,
    email: string, 
    nroDocumento: string,
    tipoDocumento :string, 
    cuit: string 
    esAdministrador: Boolean
    imagenesDni: Array<Archivo>
}

type Archivo= {
    id: string
    uri?: string
    nombreArchivo: string
    fechaCreacion: number
}

type TramiteAlta = {
    id: string
    razonSocial: string
    personeria: string
    tipoEmpresa: string
    cuit: string
    nroLegajo: string
    tipoEmpresa: {
      label: string
      value: string
      option: string
    }
    apoderados: Array<Apoderado>
    statusObs?: Array<{
      attribute: string
      obs: string
    }>
    status: "BORRADOR"|"A VERIFICAR"|"VERIFICADO"
    propietario: Usuario
    certificadoFiscal: Archivo
    email: string
    ieric: string
    vtoIeric: string
}