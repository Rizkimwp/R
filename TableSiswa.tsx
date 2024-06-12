import { Paper, TableRow, TableCell, Button, Grid, FormControl, MenuItem, Pagination, Select, Typography } from '@mui/material'
import React, { FC, useContext, useEffect, useState } from 'react'
import { LoadingContext } from 'src/contexts/LoadingContext'
import { useApi } from 'src/utils/ApiHook'
import { BerkasDto } from 'src/utils/GeneratedApi'
import GlobalTable, { Column } from 'src/components/Table/TableGlobal'
import DialogSiswa from './ValidasiButton'

const TableSiswa: FC<{ idGelombang: string | undefined; debounce: string | undefined; flag: string; jurusan: string | undefined }> = ({
  idGelombang,
  debounce,
  flag,
  jurusan,
}) => {
  const api = useApi()
  const Loading = useContext(LoadingContext)
  const [open, setOpen] = useState<boolean>(false)
  const [id, setId] = useState<string>('false')
  const [pageNumber, setPageNumber] = useState<number>(1)
  const [takeLimit, setTakeLimit] = useState<number>(5)
  const [userData, setUserData] = useState<BerkasDto[] | null>(null)
  const [totalPage, setTotalPages] = useState<number>(0)

  useEffect(() => {
    fetchData()
  }, [takeLimit, idGelombang, flag, jurusan, debounce, pageNumber, takeLimit])

  const fetchData = async () => {
    try {
      Loading.setLoading?.(true)
      const res = await api.calonSiswa.getBerkasSiswa({
        id_gelombang_tahun_ajaran: idGelombang as string,
        id_jurusan: jurusan,
        query: debounce,
        flag,
        page: pageNumber,
        take: takeLimit,
      })
      setUserData(res.data.data)
      const totalItems = res.data.itemCount || 0
      const totalPages = Math.ceil(totalItems / takeLimit) || 1
      setTotalPages(totalPages)
    } catch (error) {
      console.error(error)
    } finally {
      Loading.setLoading?.(false)
    }
  }

  const handleTakeChange = (newTake: number) => {
    setTakeLimit(newTake)
  }
  const handlePageChange = (newPage: number) => {
    setPageNumber(newPage)
  }

  const columns: Column[] = [
    { label: 'Nama', align: 'center' },
    { label: 'Jurusan', align: 'center' },
    { label: 'Status', align: 'center' },
    { label: 'Aksi', align: 'center' },
  ]
  const renderRow = (item: BerkasDto, index) => (
    <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
      <TableCell align="center" component="th" scope="row">
        {item.nama}
      </TableCell>
      <TableCell align="center">{item.id_jurusan}</TableCell>
      <TableCell align="center">{item.flag}</TableCell>
      <TableCell sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          variant="contained"
          color="warning"
          onClick={() => {
            setOpen(true)
            setId(item.id_user)
          }}
        >
          Periksa Berkas
        </Button>
      </TableCell>
    </TableRow>
  )
  return (
    <>
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <GlobalTable data={userData} renderRow={renderRow} columns={columns} />
        <Grid display={'flex'} pt={2} alignItems={'center'} justifyContent={'end'}>
          <Typography variant="body2">
            Showing {(pageNumber - 1) * takeLimit + 1} - {Math.min(pageNumber * takeLimit)}
          </Typography>
          <FormControl sx={{ m: 1 }}>
            <Select onChange={(e) => handleTakeChange(Number(e.target.value))} value={takeLimit}>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={15}>15</MenuItem>
              {/* Tambahkan opsi lain sesuai kebutuhan */}
            </Select>
          </FormControl>
          <Pagination variant="outlined" count={totalPage} page={pageNumber} onChange={(event, value) => handlePageChange(value)} />
        </Grid>
      </Paper>
      <DialogSiswa callback={fetchData} id={id} open={open} setOpen={setOpen} />
    </>
  )
}

export default TableSiswa
