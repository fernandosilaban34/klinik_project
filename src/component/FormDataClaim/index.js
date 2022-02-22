import React, { useEffect, useState } from 'react'
import { Row, Col, Form, InputGroup, FormControl } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import FieldForm from '../FieldForm'
import FieldRp from '../FieldRp';
import FormInputClaim from '../FormInputClaim'
import { useMediaQuery } from 'react-responsive'

function FormDataClaim() {
    const [dataClaim, setdataClaim] = useState()
    const dataReduxClaim = useSelector((state) => state.dataClaim)


    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
    })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    useEffect(() => {
        setdataClaim(dataReduxClaim.results.ResponseData.polis[0])
    }, [])

    return (
        <div>
            {isDesktopOrLaptop && <Row style={{ paddingRight: 20, paddingLeft: 20, paddingTop: 20 }}>
                <Form.Text className="text-muted mb-4 text-center">
                    Pengajuan Ke : {dataClaim == null ? null : dataClaim.pengajuan_ke}
                </Form.Text>
                <Row className='mb-4'>
                    <Col>
                        <FormInputClaim title='FID Program' value={dataClaim == null ? null : dataClaim.fid_program} />
                    </Col>
                    <Col>
                        <FormInputClaim title='Covering Source' value={dataClaim == null ? null : dataClaim.covering_source} />
                    </Col>
                    <Col>
                        <FormInputClaim title='Jenis Claim' value={dataClaim == null ? null : dataClaim.jenis_klaim} />
                    </Col>
                </Row>
                <Col>
                    <FieldForm title='Nomor Pengajuan Klaim' type='text' name='' value={dataClaim == null ? null : dataClaim.no_pengajuan_klaim} />
                    <FieldForm title='Tanggal Kejadian' type='text' name='' value={dataClaim == null ? null : dataClaim.tanggal_kejadian} />
                    <FieldForm title='Tanggal Kolektabilitas' type='text' name='' value={dataClaim == null ? null : dataClaim.tgl_kolektabilitas} />
                    <FieldForm title='Tanggal Payoff' type='text' name='' value={dataClaim == null ? null : dataClaim.tanggal_payoff} />
                </Col>
                <Col>
                    <FieldForm title='Tanggal Pengajuan' type='text' name='' value={dataClaim == null ? null : dataClaim.tgl_pengajuan} />
                    <FieldForm title='Tanggal Wafat' type='text' name='' value={dataClaim == null ? null : dataClaim.tanggal_wafat} />
                    <FieldForm title='Kolektabilitas' type='text' name='' value={dataClaim == null ? null : dataClaim.kolektabilitas} />
                    <FieldRp judul='Payoff Total' title='Rp' value={dataClaim == null ? null : dataClaim.nominal_payoff_total} />

                </Col>
                <Col>
                    <FieldForm title='Tanggal Rekam' type='text' name='' value={dataClaim == null ? null : dataClaim.tanggal_rekam} />
                    <FieldForm title='Status Rekening Pinjaman' type='text' name='' value={dataClaim == null ? null : dataClaim.sts_rek_pinjaman} />
                    <FieldForm title='Remark Claim' type='text' name='' value={dataClaim == null ? null : dataClaim.remark_claim} />
                </Col>
                <Col>
                    <FieldForm title='No Telp/HP Pengajuan Claim' type='text' name='' value={dataClaim == null ? null : dataClaim.no_hp_pengaju_klaim} />
                    <FieldForm title='Maturity Date Claim' type='text' name='' value={dataClaim == null ? null : dataClaim.approval_maturity_dateclaim} />
                </Col>
                <Row>
                    <Col>
                        <FieldRp judul='Payoff Sisa Pokok' title='Rp' value={dataClaim == null ? null : dataClaim.nominal_payoff_sisa_pokok} />
                        <FieldRp judul='Payoff Sisa Denda' title='Rp' value={dataClaim == null ? null : dataClaim.nominal_payoff_denda} />
                    </Col>
                    <Col className='ml-2'>
                        <FieldRp judul='Payoff Bunga Berjalan' title='Rp' value={dataClaim == null ? null : dataClaim.nominal_payoff_bunga_berjalan} />
                        <FieldRp judul='Payoff Sisa Rupa-rupa' title='Rp' value={dataClaim == null ? null : dataClaim.nominal_payoff_biaya_rupa} />
                    </Col>
                    <Col>
                        <FieldRp judul='Payoff Lain-lain' title='Rp' value={dataClaim == null ? null : dataClaim.nominal_payoff_lainnya} />
                        <FieldRp judul='Payoff Biaya Lainya' title='Rp' value={dataClaim == null ? null : dataClaim.nominal_payoff_biaya_lain} />
                    </Col>
                    <Col>
                    </Col>
                </Row>
            </Row>}
            {isTabletOrMobile && <Row style={{ paddingRight: 20, paddingLeft: 20, paddingTop: 20 }}>
                <Form.Text className="text-muted mb-4 text-center">
                    Pengajuan Ke : {dataClaim == null ? null : dataClaim.pengajuan_ke}
                </Form.Text>
                <Row className='mb-4'>
                    <FormInputClaim title='FID Program' value={dataClaim == null ? null : dataClaim.fid_program} />
                    <FormInputClaim title='Covering Source' value={dataClaim == null ? null : dataClaim.covering_source} />
                    <FormInputClaim title='Jenis Claim' value={dataClaim == null ? null : dataClaim.jenis_klaim} />
                </Row>

                <FieldForm title='Nomor Pengajuan Klaim' type='text' name='' value={dataClaim == null ? null : dataClaim.no_pengajuan_klaim} />
                <Row>
                    <Col>
                        <FieldForm title='Tanggal Kejadian' type='text' name='' value={dataClaim == null ? null : dataClaim.tanggal_kejadian} />
                    </Col>
                    <Col>
                        <FieldForm title='Tgl Kolektabilitas' type='text' name='' value={dataClaim == null ? null : dataClaim.tgl_kolektabilitas} />
                    </Col>
                </Row>

                <FieldForm title='Tanggal Payoff' type='text' name='' value={dataClaim == null ? null : dataClaim.tanggal_payoff} />
                <FieldForm title='Tanggal Pengajuan' type='text' name='' value={dataClaim == null ? null : dataClaim.tgl_pengajuan} />
                <FieldForm title='Tanggal Wafat' type='text' name='' value={dataClaim == null ? null : dataClaim.tanggal_wafat} />
                <FieldForm title='Kolektabilitas' type='text' name='' value={dataClaim == null ? null : dataClaim.kolektabilitas} />
                <FieldRp judul='Payoff Total' title='Rp' value={dataClaim == null ? null : dataClaim.nominal_payoff_total} />

                <FieldForm title='Tanggal Rekam' type='text' name='' value={dataClaim == null ? null : dataClaim.tanggal_rekam} />
                <FieldForm title='Status Rekening Pinjaman' type='text' name='' value={dataClaim == null ? null : dataClaim.sts_rek_pinjaman} />
                <FieldForm title='Remark Claim' type='text' name='' value={dataClaim == null ? null : dataClaim.remark_claim} />
                <FieldForm title='No Telp/HP Pengajuan Claim' type='text' name='' value={dataClaim == null ? null : dataClaim.no_hp_pengaju_klaim} />
                <FieldForm title='Maturity Date Claim' type='text' name='' value={dataClaim == null ? null : dataClaim.approval_maturity_dateclaim} />
                <Row>

                    <FieldRp judul='Payoff Sisa Pokok' title='Rp' value={dataClaim == null ? null : dataClaim.nominal_payoff_sisa_pokok} />
                    <FieldRp judul='Payoff Sisa Denda' title='Rp' value={dataClaim == null ? null : dataClaim.nominal_payoff_denda} />

                    <FieldRp judul='Payoff Bunga Berjalan' title='Rp' value={dataClaim == null ? null : dataClaim.nominal_payoff_bunga_berjalan} />
                    <FieldRp judul='Payoff Sisa Rupa-rupa' title='Rp' value={dataClaim == null ? null : dataClaim.nominal_payoff_biaya_rupa} />


                    <FieldRp judul='Payoff Lain-lain' title='Rp' value={dataClaim == null ? null : dataClaim.nominal_payoff_lainnya} />
                    <FieldRp judul='Payoff Biaya Lainya' title='Rp' value={dataClaim == null ? null : dataClaim.nominal_payoff_biaya_lain} />

                </Row>
            </Row>}
        </div>
    )
}

export default FormDataClaim